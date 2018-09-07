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

    /**
     * @param Int $gunID
     * @return array
     * @throws GunsNotFoundException
     * @throws \Exception
     */
    public function getAllDataForView(Int $gunID): array
    {
        try {
            $weapon = $this->gunRepository->findById($gunID);
        } catch (GunsNotFoundException $e) {
            file_put_contents('../var/log/exceptions.log',
                '[' . date('Y-m-d H:i:s') . '] ' . sprintf('| %s | line: %s | file: %s | code: %s', $e->getMessage(),
                    $e->getLine(), $e->getFile(), $e->getCode()) . "\n", FILE_APPEND);
            throw $e;
        }

        $modsDataPrepare = new ModsDataProvider($weapon);
        try {
            $ammoModsArray = $modsDataPrepare->prepareModID('ammo');
        } catch (\Exception $e) {
            file_put_contents('../var/log/exceptions.log',
                '[' . date('Y-m-d H:i:s') . '] ' . sprintf('| %s | line: %s | file: %s | code: %s', $e->getMessage(),
                    $e->getLine(), $e->getFile(), $e->getCode()) . "\n", FILE_APPEND);
            throw $e;
        }

        $ammoData = $modsDataPrepare->prepareModData($ammoModsArray, '../src/Data/ammoData.ser');

        return [
            'gunData' => $weapon,
            'gunId' => $gunID,
            'ammoData' => $ammoData,
            'ammoID' => $ammoModsArray,
        ];
    }
}