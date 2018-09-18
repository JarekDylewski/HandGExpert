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
    ): void {
        $weaponStorage = new WeaponStorage();
        $category = new WeaponCategory();
        $category->setName($weaponCategory);

        $weaponStorage
            ->setWeaponCategory($category)
            ->setGunId($gunId)
            ->setAmmoId($ammoId)
            ->setCrosshairId($crosshairId)
            ->setTriggerId($triggerId)
            ->setSpringId($springId)
            ->setBarrelId($barrelId)
            ->setUser($user);

        $entityManager = $this->doctrineManager->getManager();
        $entityManager->persist($category);
        $entityManager->persist($weaponStorage);
        $entityManager->flush();
    }

    public function removeWeaponFromStorage(int $weaponStorageId): void
    {
        $weaponToRemove = $this->doctrineManager->getRepository(WeaponStorage::class)->find($weaponStorageId);
        $entityManager = $this->doctrineManager->getManager();
        $entityManager->remove($weaponToRemove);
        $entityManager->flush();
    }
}