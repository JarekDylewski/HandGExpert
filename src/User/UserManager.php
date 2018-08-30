<?php

namespace App\User;


use App\Entity\User;
use App\Events\UserRegisteredEvent;
use App\Form\UserType;
use App\Repository\UserRepository;
use Doctrine\Common\Persistence\ManagerRegistry;
use Symfony\Component\EventDispatcher\EventDispatcher;
use Symfony\Component\Form\Extension\HttpFoundation\HttpFoundationExtension;
use Symfony\Component\Form\Forms;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use Symfony\Component\Validator\Validator\ValidatorInterface;

class UserManager
{

    private $userRepository;
    private $managerRegistry;
    private $passwordEncoder;
    private $validator;

    public function __construct(UserRepository $userRepository, UserPasswordEncoderInterface $passwordEncoder, ManagerRegistry $managerRegistry, ValidatorInterface $validator)
    {
        $this->managerRegistry = $managerRegistry;
        $this->userRepository = $userRepository;
        $this->passwordEncoder = $passwordEncoder;
        $this->validator = $validator;
    }

    public function registerUser($password, $userName, $email)
    {

        $user = new User();
        $formFactory = Forms::createFormFactoryBuilder()
            ->addExtension(new HttpFoundationExtension())
            ->getFormFactory();

        $user->setUsername($userName);
        $user->setEmail($email);
        $user->setPlainPassword($password);
        $form = $formFactory->create(UserType::class, $user);

        $validationErrors = $this->validator->validate($user);

        if (isset($password) && isset($userName) && isset($email)) {
            $form->submit('user');
        }

        if ($form->isSubmitted() && count($validationErrors) === 0) {
            $password = $this->passwordEncoder->encodePassword($user, $user->getPlainPassword());
            $user->setPassword($password);

            $entityManager = $this->managerRegistry->getManager();
            $entityManager->persist($user);
            $entityManager->flush();

        };

        $dispatcher = new EventDispatcher();
        $event = new UserRegisteredEvent($form);
        $dispatcher->dispatch(UserRegisteredEvent::NAME, $event);

        return ['form' => $form, 'errors' => $validationErrors];
    }
}