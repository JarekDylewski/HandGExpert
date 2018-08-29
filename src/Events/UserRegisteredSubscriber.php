<?php

namespace App\Events;


use Symfony\Component\EventDispatcher\EventSubscriberInterface;

class UserRegisteredSubscriber implements EventSubscriberInterface
{
    public static function getSubscribedEvents()
    {
        return [UserRegisteredEvent::NAME => 'onUserRegistered'];
    }

    public function onUserRegistered(UserRegisteredEvent $event)
    {
        //TODO wysłać e-mail aktywacyjny
    }
}