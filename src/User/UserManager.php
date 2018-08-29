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
use Symfony\Component\HttpFoundation\Request;
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

    public function registerUser(Request $request)
    {
        $user = new User();
        $formFactory = Forms::createFormFactoryBuilder()
            ->addExtension(new HttpFoundationExtension())
            ->getFormFactory();

        $form = $formFactory->create(UserType::class, $user);
        $form->handleRequest($request);
        $validationErrors = $this->validator->validate($user);
        //if ($this->managerRegistry->getRepository(User::class)->findBy($user->getEmail()))
        if ($form->isSubmitted() && $form->isValid()) {
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