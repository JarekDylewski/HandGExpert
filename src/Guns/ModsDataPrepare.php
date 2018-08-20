<?php
/**
 * Created by PhpStorm.
 * User: DzaroD
 * Date: 2018-06-07
 * Time: 12:58
 */

namespace App\Guns;


use App\Data\PrepareData;

class ModsDataPrepare
{
    private $PrepareData;

    public function __construct(PrepareData $PrepareData)
    {
        $this->PrepareData = $PrepareData;
    }

    //pass only the type name, no ID at the end. Example: ammo or barrel or crosshair
    public function prepareModID(string $modificationType):array
    {
        $gunData = $this->PrepareData->getGunsData();//Pobiera tablice z informacjami broni
        if(!isset($gunData[$modificationType . 'ID'])){
            throw new \Exception('array does not have '.$modificationType . 'ID key');
        }
        $modsID = explode(".", $gunData[$modificationType . 'ID']);//tworzy tablice ze stringa, z kilkoma ID modów ( tyle ile jest w polu nazwaModaID
        return $modsID;
    }

    //take modsID array from prepareModID method
    // and enter Method name from PrepareData class example: getAmmoData
    public function prepareModData(array $modsID, string $getMethodFromPrepareDataObject):array
    {
        $modsCount = count($modsID);

        $modsArray = $this->PrepareData->$getMethodFromPrepareDataObject();//pobiera tablice z podanym typem moda którego nazwe podajesz w argumencie
        for ($i = 0; $i < $modsCount;$i++) {
            $listOfMods[$i] = $modsArray[$modsID[$i]];
        }
//        dump($listOfMods);
//        dump($modsArray);
        return $listOfMods;
    }
}