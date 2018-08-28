<?php

namespace App\Guns;


class ModsDataProvider
{
    private $gunsData;

    public function __construct(array $gunsData)
    {
        $this->gunsData = $gunsData;
    }

    /**
     * @param string $modificationType
     * @return array $modsIdList[]
     * @throws \Exception
     */
    public function prepareModID(string $modificationType): array
    {
        $gunData = $this->gunsData;
        if (!isset($gunData[$modificationType . 'ID'])) {
            throw new \Exception('array does not have ' . $modificationType . 'ID key');
        }
        $modsID = explode(".", $gunData[$modificationType . 'ID']);
        return $modsID;
    }

    public function prepareModData(array $modsIdList, string $pathToModsFile): array
    {
        $ammoRepository = new FileAmmoRepository($pathToModsFile);
        $modsCount = count($modsIdList);

        $modsArray = $ammoRepository->findAll();
        for ($i = 0; $i < $modsCount; $i++) {
            $modsList[$i] = $modsArray[$modsIdList[$i]];
        }
        return $modsList;
    }
}