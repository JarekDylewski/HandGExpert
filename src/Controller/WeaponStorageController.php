<?php

namespace App\Controller;


use App\WeaponStorage\WeaponStorageManager;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Cache;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;

class WeaponStorageController extends Controller
{
    private $weaponStorageManager;

    public function __construct(WeaponStorageManager $weaponStorageManager)
    {
        $this->weaponStorageManager = $weaponStorageManager;
    }

    /**
     * @Route("/AddWeaponToStorage", name = "addWeaponToStorage")
     * @IsGranted("IS_AUTHENTICATED_FULLY")
     */
    public function addWeaponToStorage(Request $request)
    {

        $addWeapon = $this->weaponStorageManager->addWeaponToStorage(

            $request->query->get('weaponCategory'),
            $request->query->get('gunId'),
            $request->query->get('ammoId'),
            $request->query->get('crosshairId'),
            $request->query->get('triggerId'),
            $request->query->get('springId'),
            $request->query->get('barrelId'),
            $this->getUser()
        );

        $this->addFlash('weaponStorage', 'Weapon added to storage!');
        return new JsonResponse([
            'weaponStorage' => $addWeapon
        ]);
    }

    /**
     * @Route("/WeaponStorage", name = "weaponStorage", methods={"GET"})
     * @IsGranted("IS_AUTHENTICATED_FULLY")
     * @Cache(expires="tomorrow", public="true")
     */
    public function weaponStorage(Request $request)
    {
        $storage = $this->weaponStorageManager->getAllWeaponFromStorage($this->getUser());

        if ($request->isXmlHttpRequest()) {
            return new JsonResponse(['storage' => $storage]);
        }

        return $this->render('weaponStorage/weaponStorage.html.twig', ['storage' => $storage]);
    }

    /**
     * @Route("/WeaponStorage/{shareLink}/delete", name = "removeWeaponFromStorage")
     * @IsGranted("IS_AUTHENTICATED_FULLY")
     */
    public function removeWeaponFromStorage(Request $request, string $shareLink)
    {
        $removeWeapon = $this->weaponStorageManager->removeWeaponFromStorage($shareLink, $this->getUser());

        if ($request->isXmlHttpRequest()) {
            $removeWeapon = $this->weaponStorageManager->removeWeaponFromStorage($request->get('shareLink'),
                $this->getUser());
            return new JsonResponse(['weaponStorage' => $removeWeapon]);
        }

        return $this->render('weaponStorage/weaponStorage.html.twig', $removeWeapon);
    }

    /**
     * @Route("/WeaponStorage/{shareLink}", name = "weaponStorageShareLink")
     * @IsGranted("IS_AUTHENTICATED_FULLY")
     * @Cache(expires="tomorrow", public="true")
     */
    public function weaponFromShareLink($shareLink)
    {
        return new JsonResponse($this->weaponStorageManager->showWeaponFromShareLink($shareLink));
    }
}