<?php

namespace App\WeaponStorage;

use App\Entity\User;

interface WeaponStorageInterface
{
    public function addWeaponToStorage(
        string $weaponCategory,
        int $gunId,
        int $ammoId,
        ?int $crosshairId,
        ?int $triggerId,
        ?int $springId,
        ?int $barrelId,
        ?User $user
    ): void;

    public function removeWeaponFromStorage(int $weaponStorageId): void;

}