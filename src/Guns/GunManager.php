<?php

namespace App\Guns;


use App\Exceptions\src\Data\GunsNotFoundException;

class GunManager
{
    private $gunRepository;

    public function __construct()
    {
        $this->gunRepository = new FileGunRepository('../src/Data/gunsData.ser');
    }

    public function getAllDataForView(Int $gunID): array
    {
        try {
            $weapon = $this->gunRepository->findById($gunID);
        } catch (GunsNotFoundException $e) {
            $test = 'test';
            dump($test);
        }

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