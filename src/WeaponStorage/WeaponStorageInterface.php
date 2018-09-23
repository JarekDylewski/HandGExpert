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
    ): array;

    public function removeWeaponFromStorage(string $shareLink, User $user): array;

    public function getAllWeaponFromStorage(User $user): array;

    public function showWeaponFromShareLink(string $shareLink): array;


}