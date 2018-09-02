<?php

namespace App\User;


use App\Entity\User;
use App\Events\UserRegisteredEvent;
use App\Repository\UserRepository;
use Doctrine\Common\Persistence\ManagerRegistry;
use Symfony\Component\EventDispatcher\EventDispatcher;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use Symfony\Component\Validator\Validator\ValidatorInterface;

class UserManager
{

    private $userRepository;
    private $doctrineManager;
    private $passwordEncoder;
    private $validator;

    public function __construct(
        UserRepository $userRepository,
        UserPasswordEncoderInterface $passwordEncoder,
        ManagerRegistry $managerRegistry,
        ValidatorInterface $validator
    ) {
        $this->doctrineManager = $managerRegistry;
        $this->userRepository = $userRepository;
        $this->passwordEncoder = $passwordEncoder;
        $this->validator = $validator;
    }

    public function registerUser($password, $repeatPassword, $userName, $email)
    {
        $user = new User();

        $user->setUsername($userName);
        $user->setEmail($email);
        $user->setPlainPassword($password);

        $validationErrors = $this->validator->validate($user);
        $passwordError = '';
        if ($password !== $repeatPassword) {
            $passwordError = 'passwords not identical';
        }
        if (count($validationErrors) > 0 || strlen($passwordError) > 0) {

            return [
                'errors' => $validationErrors,
                'templateName' => 'registration/register.html.twig',
                'pathToRouteWhereFormSend' => 'user_registration',
                'message' => 'Whoops! Something is wrong!',
                'passwordError' => $passwordError,
                'user' => [
                    'givenUsername' => $userName,
                    'givenEmail' => $email
                ]
            ];
        }

        $password = $this->passwordEncoder->encodePassword($user, $user->getPlainPassword());
        $user->setPassword($password);

        $entityManager = $this->doctrineManager->getManager();
        $entityManager->persist($user);
        $entityManager->flush();

        $dispatcher = new EventDispatcher();
        $event = new UserRegisteredEvent($user);
        $dispatcher->dispatch(UserRegisteredEvent::NAME, $event);

        return [
            'message' => 'Registration success!, check your email to activate confirmation link!',
            'templateName' => 'home.html.twig'
        ];


    }
}