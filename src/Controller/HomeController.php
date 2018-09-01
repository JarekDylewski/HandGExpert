<?php

namespace App\Controller;

use App\Guns\FileGunRepository;
use App\Guns\GunManager;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Cache;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\JsonResponse;

class HomeController extends Controller
{
    private $gunRepository;
    private $gunManager;

    public function __construct(GunManager $gunManager)
    {
        $this->gunRepository = new FileGunRepository('../src/Data/gunsData.ser');
        $this->gunManager = $gunManager;
    }

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
        $data = $this->gunManager->getAllDataForView($gunID);

        return $this->render('gunBar/gunBar.html.twig', $data);
    }

    /**
     * @Route("GunList/{gunID}/Customizing", name="GunListCustomizing", requirements={"gunID"="\d+"}))
     * @Cache(expires="tomorrow", public=true)
     */
    public function jsonData($gunID)
    {
        $data = $this->gunManager->getAllDataForView($gunID);

        return new JsonResponse($data);
    }

    /**
     * @Route("/GunList/search", name="GunListSearch")
     */
    public function gunListSearch()
    {
        $value = $this->gunRepository->findColumn('name');

        return new JsonResponse([
            'name' => $value
        ]);
    }
}