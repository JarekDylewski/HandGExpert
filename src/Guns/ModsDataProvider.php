<?php

namespace App\Guns;

use App\Data\PrepareData;

class ModsDataProvider
{
    private $PrepareData;

    public function __construct(PrepareData $PrepareData)
    {
        $this->PrepareData = $PrepareData;
    }

    public function prepareModID(string $modificationType): array
    {
        $gunData = $this->PrepareData->getGunsData();
        if (!isset($gunData[$modificationType . 'ID'])) {
            throw new \Exception('array does not have ' . $modificationType . 'ID key');
        }
        $modsID = explode(".", $gunData[$modificationType . 'ID']);
        return $modsID;
    }

    public function prepareModData(array $modsID, string $getMethodFromPrepareDataObject): array
    {
        $modsCount = count($modsID);

        $modsArray = $this->PrepareData->$getMethodFromPrepareDataObject();
        for ($i = 0; $i < $modsCount; $i++) {
            $listOfMods[$i] = $modsArray[$modsID[$i]];
        }
        return $listOfMods;
    }
}