<?php

namespace App\Controller;


use App\User\UserManager;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;

class RegistrationController extends AbstractController
{
    private $userManager;

    public function __construct(UserManager $userManager)
    {
        $this->userManager = $userManager;
    }

    /**
     * @Route("/register", name="user_registration")
     */
    public function register(Request $request)
    {
        //TODO przerobić system rejestrowania - łącznie z widokiem
        $form = $this->userManager->registerUser(
            $request->get('user')['plainPassword']['first'],
            $request->get('user')['userName'],
            $request->get('user')['email']
        );


        return $this->render(
            'registration/register.html.twig',
            array('form' => $form['form']->createView(),
                'errors' => $form['errors']
            )
        );
    }
}