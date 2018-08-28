<?php

namespace App\Guns;

use App\Data\PrepareData;

class ModsDataProvider
{
    private $gunsData;

    public function __construct(array $gunsData)
    {
        $this->gunsData = $gunsData;
    }

    public function prepareModID(string $modificationType): array
    {
        $gunData = $this->gunsData;
        if (!isset($gunData[$modificationType . 'ID'])) {
            throw new \Exception('array does not have ' . $modificationType . 'ID key');
        }
        $modsID = explode(".", $gunData[$modificationType . 'ID']);
        return $modsID;
    }

    public function prepareModData(array $modsID, string $getMethodFromPrepareDataObject): array
    {
        $prepareData = new PrepareData();
        $modsCount = count($modsID);

        $modsArray = $prepareData->$getMethodFromPrepareDataObject();
        for ($i = 0; $i < $modsCount; $i++) {
            $listOfMods[$i] = $modsArray[$modsID[$i]];
        }
        return $listOfMods;
    }
}