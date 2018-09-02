<?php

namespace App\Events;


use Symfony\Component\EventDispatcher\Event;

class UserRegisteredEvent extends Event
{
    const NAME = 'user.registered';
    private $user;

    public function __construct($user)
    {
        $this->form = $user;
    }

    public function getForm()
    {
        return $this->user;
    }

}