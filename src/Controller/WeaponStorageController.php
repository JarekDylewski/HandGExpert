<?php

namespace App\Controller;


use App\WeaponStorage\WeaponStorageManager;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

class WeaponStorageController extends Controller
{
    private $weaponStorageManager;

    public function __construct(WeaponStorageManager $weaponStorageManager)
    {
        $this->weaponStorageManager = $weaponStorageManager;
    }

    /**
     * @Route("/AddWeaponToStorage", name="addWeaponToStorage")
     * @IsGranted("IS_AUTHENTICATED_FULLY")
     */
    public function addWeaponToStorage(Request $request)
    {

        $this->weaponStorageManager->addWeaponToStorage(
            $request->get('weaponCategory'),
            $request->get('gunId'),
            $request->get('ammoId'),
            $request->get('crosshairId'),
            $request->get('triggerId'),
            $request->get('springId'),
            $request->get('barrelId'),
            $this->getUser()
//            'semi-auto riffle',
//            40,
//            14,
//            null,
//            null,
//            null,
//            null,
//            $this->getUser()
        );

        $this->addFlash('weaponStorage', 'Weapon added to storage!');
    }

    /**
     * @Route("/WeaponStorage", name="weaponStorage")
     * @IsGranted("IS_AUTHENTICATED_FULLY")
     */
    public function weaponStorage()
    {
        return $this->render('weaponStorage/weaponStorage.html.twig');
    }
}