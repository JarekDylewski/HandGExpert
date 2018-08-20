<?php
/**
 * Created by PhpStorm.
 * User: DzaroD
 * Date: 2018-06-04
 * Time: 15:47
 */

namespace App\Guns;


//TODO usunąć tą klase / delete this class

class DataFilter
{
    protected $gunId;
    protected $PrepareData;

    public function __construct(int $gunId, PrepareData $PrepareData)
    {
        $this->gunId = $gunId;
        $this->PrepareData = $PrepareData;
    }
//Sends gun name and Cartrige type id to PrepareData class
//on this basis, it builds the necessary information
    public function getData(PrepareData $PrepareData)
    {
//        dump($PrepareData->getAmmoData());
        //Pobiera tablice z danymi
        $dataArray = $PrepareData->getGunsData();
        //$nedeedArray = $gunsArray[0]; //zapisuje do zmiennej tablice z odpowiednim ID (index tablicy to ID)
        //$tablica = explode(",", $nedeedArray['ammoID']);//tworzy tablice ze stringa, z kilkoma ID modów
        //dump($tablica);//to delete
        //$modsCount = count($tablica);
        //print $modsCount;//to delete
//        $ammo=array($nedeedArray['ammoID']);
//        $a=count($ammo);
//        print $a;
        //dump($nedeedArray['ammoID']);
//        foreach ($gunsArray as $gunID => $gunStatistic) {
//            $statistics = $gunStatistic;
//        }
//        dump($statistics);
//        echo $statistics['id'];
        //dump($gunsArray[0]['id']);
        return $dataArray;
    }
}