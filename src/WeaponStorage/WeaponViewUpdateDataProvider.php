<?php

namespace App\WeaponStorage;

use App\Guns\FileAmmoRepository;
use App\Guns\FileGunRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

class WeaponViewUpdateDataProvider
{
    private $doctrine;

    private $weaponRepo;
    private $ammoRepo;
    //cross
    //trigg
    //sprin
    //barre //TODO jak będzie reszta danych to dopisac ww

    private $weaponCategory;
    private $gunId;
    private $ammoId;
    private $crosshairId;
    private $triggerId;
    private $springId;
    private $barrelId;
    private $shareLink;

    public function __construct(
        ?string $weaponCategory,
        int $gunId,
        int $ammoId,
        ?int $crosshairId,
        ?int $triggerId,
        ?int $springId,
        ?int $barrelId,
        ?string $shareLink,
        ManagerRegistry $doctrine
    ) {
        $this->doctrine = $doctrine;
        $this->weaponRepo = new FileGunRepository('../src/Data/gunsData.ser');
        $this->ammoRepo = new FileAmmoRepository('../src/Data/ammoData.ser');
        $this->gunId = $gunId;
        $this->ammoId = $ammoId;
        $this->crosshairId = $crosshairId;
        $this->triggerId = $triggerId;
        $this->springId = $springId;
        $this->barrelId = $barrelId;
        $this->weaponCategory = $weaponCategory;
        $this->shareLink = $shareLink;
    }

    public function getDataForViewUpdate(): array
    {
        $dataToShow = [
            'gunName' => $this->weaponRepo->findById($this->gunId)['name'],
            'ammoName' => $this->ammoRepo->findById($this->ammoId)['name'],
            'crosshairName' => '',//TODO uzupełnić kiedy dotrze reszta danych
            'triggerName' => '',
            'springName' => '',
            'barrelName' => '',
            'weaponCategory' => $this->weaponCategory,
            'gunId' => $this->gunId,
            'ammoId' => $this->ammoId,
            'crosshairId' => $this->crosshairId,
            'triggerId' => $this->triggerId,
            'springId' => $this->springId,
            'barrelId' => $this->barrelId,
            'shareLink' => $this->shareLink
        ];

        return $dataToShow;
    }
}