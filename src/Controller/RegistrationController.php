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

        $registration = $this->userManager->registerUser(
            $request->get('userName'),
            $request->get('email'),
            $request->get('plainPassword')['first'],
            $request->get('plainPassword')['second']
        );
        dump($registration);
        return $this->render($registration['templateName'], $registration);
//        //TODO przerobić system rejestrowania - łącznie z widokiem
//        $form = $this->userManager->registerUser(
//            $request->get('user')['plainPassword']['first'],
//            $request->get('user')['userName'],
//            $request->get('user')['email']
//        );
        //$form['form']->handleRequest($request);

//        $user = new User();
//        $form = $this->createForm(UserType::class, $user);
//
//        $form->handleRequest($request);
//        if ($form->isSubmitted() && $form->isValid()) {
//            $password = $passwordEncoder->encodePassword($user, $user->getPlainPassword());
//            $user->setPassword($password);
//
//            $entityManager = $this->getDoctrine()->getManager();
//            $entityManager->persist($user);
//            $entityManager->flush();
//
//        };

//        return $this->render(
//            'registration/register.html.twig',
//            array('form' => $form['form']->createView(),
//                'errors' => $form['errors']
//            )
//        );
    }

    /**
     * @Route("/registrationForm", name="registration_form")
     */
    public function registrationFormulage()
    {
        return $this->render('registration/register.html.twig', ['pathToRouteWhereFormSend' => 'user_registration']);
    }
}