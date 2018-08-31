<?php

namespace App\Guns;


class GunManager
{
    private $gunRepository;

    public function __construct()
    {
        $this->gunRepository = new FileGunRepository('../src/Data/gunsData.ser');
    }

    public function getAllDataForView(Int $gunID): array
    {
        $weapon = $this->gunRepository->findById($gunID);
        $modsDataPrepare = new ModsDataProvider($weapon);
        $ammoModsArray = $modsDataPrepare->prepareModID('ammo');
        $ammoData = $modsDataPrepare->prepareModData($ammoModsArray, '../src/Data/ammoData.ser');

        return [
            'gunData' => $weapon,
            'gunId' => $gunID,
            'ammoData' => $ammoData,
            'ammoID' => $ammoModsArray,
        ];
    }
}