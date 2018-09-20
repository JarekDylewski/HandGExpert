<?php

namespace App\WeaponStorage;


use App\Entity\User;
use App\Entity\WeaponCategory;
use App\Entity\WeaponStorage;
use App\Guns\FileAmmoRepository;
use App\Guns\FileGunRepository;
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

        $weaponStorage
            ->setWeaponCategory($category)
            ->setGunId($gunId)
            ->setAmmoId($ammoId)
            ->setCrosshairId($crosshairId)
            ->setTriggerId($triggerId)
            ->setSpringId($springId)
            ->setBarrelId($barrelId)
            ->setUser($user);

        $entityManager->persist($weaponStorage);
        $entityManager->flush();

        return ['message' => 'Success! Weapon added to storage.'];
    }

    public function removeWeaponFromStorage(int $weaponStorageId): array
    {
        $weaponToRemove = $this->doctrineManager->getRepository(WeaponStorage::class)->find($weaponStorageId);
        $entityManager = $this->doctrineManager->getManager();
        $entityManager->remove($weaponToRemove);
        $entityManager->flush();

        return ['message' => 'Success! Weapon removed from storage.'];
    }

    public function getAllWeaponFromStorage(User $user)
    {
        $weapons = $this->doctrineManager->getRepository(WeaponStorage::class)->findBy(['user' => $user]);
        if (isset($weapons)) {
            $weaponRepo = new FileGunRepository('../src/Data/gunsData.ser');
            $ammoRepo = new FileAmmoRepository('../src/Data/ammoData.ser');
        }

        $dataToShow = [];
        foreach ($weapons as $key => $value) {
            $gunId = $value->getGunId();
            $ammoId = $value->getAmmoId();
            $crosshairId = $value->getCrosshairId();
            $triggerId = $value->getTriggerId();
            $springId = $value->getSpringId();
            $barrelId = $value->getBarrelId();
            $dataToShow[] = [
                'gunName' => $weaponRepo->findById($gunId)['name'],
                'ammoName' => $ammoRepo->findById($ammoId)['name'],
                'crosshairName' => '',//TODO uzupełnić kiedy dotrze reszta danych
                'triggerName' => '',
                'springName' => '',
                'barrelName' => '',
                'weaponCategory' => $value->getWeaponCategory()->getName(),
                'gunId' => $gunId,
                'ammoId' => $ammoId,
                'crosshairId' => $crosshairId,
                'triggerId' => $triggerId,
                'springId' => $springId,
                'barrelId' => $barrelId
            ];
        }

        return $dataToShow;
    }
}