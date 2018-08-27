<?php

namespace App\Controller;

use App\Data\PrepareData;
use App\Guns\FileGunRepository;
use App\Guns\ModsDataProvider;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Cache;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\JsonResponse;

class HomeController extends Controller
{
    /**
     * @Route("/", name="home")
     */
    public function showHome()
    {
        return $this->render('home.html.twig', [
            'title' => 'H&GExpert',
        ]);
    }

    /**
     * @Route("/GunList/{gunID}", name="GunList", requirements={"gunID"="\d+"})
     * @Cache(expires="tomorrow", public=true)
     */
    public function dataPreparation($gunID)
    {
        $gunRepo = new FileGunRepository('../src/Data/gunsData.ser');
        $weapon = $gunRepo->findById($gunID);
        $modsDataPrepare = new ModsDataProvider($weapon);
        $gunData = $gunRepo->findAll();//Tablica z danymi broni
        $ammoModsArray = $modsDataPrepare->prepareModID('ammo'); //Tablica z ID amunicji
        $ammoData = $modsDataPrepare->prepareModData($ammoModsArray, 'getAmmoData');

        return $this->render('gunBar/gunBar.html.twig', [
            'gunData' => $gunData,
            'ammoData' => $ammoData,
            'img' => $gunID,
            'ammoID' => $ammoModsArray,
            'slug' => $gunID,
        ]);
    }

    /**
     * @Route("GunList/{gunID}/Customizing", name="GunListCustomizing", requirements={"gunID"="\d+"}))
     * @Cache(expires="tomorrow", public=true)
     */
    public function jsonData($gunID)
    {
        $Weapon = new PrepareData($gunID);//1 [id]
        $modsDataPrepare = new ModsDataProvider($Weapon);
        $gunData = $Weapon->getGunsData();//Tablica z danymi broni
        $ammoModsArray = $modsDataPrepare->prepareModID('ammo'); //Tablica z ID amunicji
        $ammoData = $modsDataPrepare->prepareModData($ammoModsArray, 'getAmmoData');

        return new JsonResponse([
            'gunData' => $gunData,
            'ammoData' => $ammoData,
            'img' => $gunID
        ]);
    }

    /**
     * @Route("/GunList/search", name="GunListSearch")
     */
    public function gunListSearch()
    {
        $gunData = new PrepareData();
        $datas = $gunData->getGunsData('all');
        $name = [];
        foreach ($datas as $data => $value) {
            $name[$data] = $datas[$data]['name'];
        }
        return new JsonResponse([
            'name' => $name
        ]);
    }
}