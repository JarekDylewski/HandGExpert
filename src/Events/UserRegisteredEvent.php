<?php

namespace App\Events;


use Symfony\Component\EventDispatcher\Event;

class UserRegisteredEvent extends Event
{
    const NAME = 'user.registered';
    private $form;

    public function __construct($form)
    {
        $this->form = $form;
    }

    public function getForm()
    {
        return $this->form;
    }

}