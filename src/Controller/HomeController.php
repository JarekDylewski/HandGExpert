<?php
/**
 * Created by PhpStorm.
 * User: DzaroD
 * Date: 2018-05-27
 * Time: 12:26
 */

namespace App\Controller;


use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class HomeController extends Controller
{
    /**
     * @Route("/", name="home")
     */
    public function showHome()
    {
        return $this->render('home.html.twig',[
            'title'=>'H&GExpert',
        ]);
    }
}