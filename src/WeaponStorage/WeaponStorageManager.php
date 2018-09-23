<?php

namespace App\WeaponStorage;


use App\Entity\User;
use App\Entity\WeaponCategory;
use App\Entity\WeaponStorage;
use Doctrine\Common\Persistence\ManagerRegistry;

class WeaponStorageManager implements WeaponStorageInterface
{
    //TODO dodać jakąś blokadę jeśli użytkownik spamuje dodawaniem i usuwaniem, dodać uprawnienia do dodawania i usuwania w schowku
    private $doctrineManager;

    public function __construct(ManagerRegistry $doctrineManager)
    {
        $this->doctrineManager = $doctrineManager;
    }

    public function addWeaponToStorage(
        string $weaponCategory,
        int $gunId,
        int $ammoId,
        ?int $crosshairId,
        ?int $triggerId,
        ?int $springId,
        ?int $barrelId,
        ?User $user
    ): array {

        $itemsInUserStorage = $user->getWeaponStorages()->getKeys();
        if (!is_null($itemsInUserStorage)) {
            $itemsInUserStorage = count($itemsInUserStorage);
        }

        if ($itemsInUserStorage >= 20) {

            return ['message' => 'Lack of space. Please free some space and try again (max 20 weapons in storage)'];
        }

        $weaponStorage = new WeaponStorage();
        $categoryInDB = $this->doctrineManager->getRepository(WeaponCategory::class)->findOneBy(['name' => $weaponCategory]);
        $entityManager = $this->doctrineManager->getManager();


        if ($categoryInDB) {
            $category = $categoryInDB;
        } else {
            $category = new WeaponCategory();
            $category->setName($weaponCategory);
            $entityManager->persist($category);
        }
        //TODO wprowadzić możliwość nadania nazwy przez użytkownika

        function link()
        {
            $textToRandom = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
            $shareLink = [];
            for ($i = 0; $i <= 9; $i++) {
                $shareLink[] = $textToRandom[random_int(0, 15)];
            }
            $shareLink = implode('', $shareLink);
            return $shareLink;
        }

        $i = 1;
        while ($i < 2) {
            $shareLink = link();
            if (empty($this->doctrineManager->getRepository(WeaponStorage::class)->findBy(['shareLink' => $shareLink]))) {
                $i = 2;
            }

        };

        $weaponStorage
            ->setWeaponCategory($category)
            ->setGunId($gunId)
            ->setAmmoId($ammoId)
            ->setCrosshairId($crosshairId)
            ->setTriggerId($triggerId)
            ->setSpringId($springId)
            ->setBarrelId($barrelId)
            ->setShareLink('113')
            ->setUser($user);

        $entityManager->persist($weaponStorage);
        $entityManager->flush();

        return ['message' => 'Success! Weapon added to storage.'];
    }

    public function removeWeaponFromStorage(string $shareLink, User $user): array
    {

        $weaponToRemove = $this->doctrineManager->getRepository(WeaponStorage::class)->findBy(['shareLink' => $shareLink]);
        if (!$user === $weaponToRemove[0]->getUser()) {
            return ['message' => 'You can\'t remove someone\'s set, he would be sad :('];
        }

        $entityManager = $this->doctrineManager->getManager();
        $entityManager->remove($weaponToRemove);
        $entityManager->flush();

        return ['message' => 'Success! Weapon removed from storage.'];
    }

    public function getAllWeaponFromStorage(User $user): array
    {
        $weapons = $this->doctrineManager->getRepository(WeaponStorage::class)->findBy(['user' => $user]);

        $dataToShow = [];
        foreach ($weapons as $key => $value) {
            $weaponToUpdateView = new WeaponViewUpdateDataProvider(
                $value->getWeaponCategory()->getName(),
                $value->getGunId(),
                $value->getAmmoId(),
                $value->getCrosshairId(),
                $value->getTriggerId(),
                $value->getSpringId(),
                $value->getBarrelId(),
                $value->getShareLink(),
                $this->doctrineManager
            );

            $dataToShow[] = $weaponToUpdateView->getDataForViewUpdate();
        }

        return $dataToShow;
    }

    public function showWeaponFromShareLink(string $shareLink): array
    {
        $weapon = $this->doctrineManager->getRepository(WeaponStorage::class)->findBy(['shareLink' => $shareLink])[0];

        $dataToUpdate = new WeaponViewUpdateDataProvider(
            $weapon->getWeaponCategory()->getName(),
            $weapon->getGunId(),
            $weapon->getAmmoId(),
            $weapon->getCrosshairId(),
            $weapon->getTriggerId(),
            $weapon->getSpringId(),
            $weapon->getBarrelId(),
            $weapon->getShareLink(),
            $this->doctrineManager
        );

        return $dataToUpdate->getDataForViewUpdate();
    }
}