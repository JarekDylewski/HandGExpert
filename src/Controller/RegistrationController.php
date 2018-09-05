<?php

namespace App\Controller;


use App\Entity\User;
use App\User\UserManager;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\HttpFoundation\Response;

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
        $registration = $this->userManager->registerUser(
            $request->get('plainPassword')['first'],
            $request->get('plainPassword')['second'],
            $request->get('userName'),
            $request->get('email')
        );

        return $this->render($registration['templateName'], $registration);
    }

    /**
     * @Route("/registrationForm", name="registration_form")
     */
    public function registrationFormulage()
    {
        return $this->render('registration/register.html.twig', ['pathToRouteWhereFormSend' => 'user_registration']);
    }

    /**
     * @Route("register/whetherUserExists", name="whether_user_exists", methods={"POST"})
     */
    public function whetherUserExists(Request $request)
    {
        $check = [];
        if ($request->isXmlHttpRequest()) {
            switch ($request->get('userParam')) {
                case 'username':
                    $check = $this->userManager->checkUsernameExists(User::class, $request->get('username'));
                    break;

                case 'email':
                    $check = $this->userManager->checkEmailExists(User::class, $request->get('email'));
                    break;
            }
            return new JsonResponse($check);
        }
        return new Response($check, 200);
    }
}