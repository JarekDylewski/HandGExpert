<?php

namespace App\Security;


class improperBehaviorDetector
{
    protected $user;
    protected $timeInterval;

    public function __construct(WarningPointsInterface $user, Int $timeInterval = 3)
    {
        $this->user = $user;
    }

    public function whetherUserDoWrongThings(): bool
    {
        if (!is_null($this->user->getLastSensitiveActivity())) {
            $userDate = $this->user->getLastSensitiveActivity();
            $now = new \DateTime('now');
            $diff = date_diff($userDate, $now);

            if ($diff->format('s') >= $this->timeInterval && $diff->format('m-d h:i') === 0) {
                $this->user->setWarningPoints($this->user->getWarningPoints() + 1);
                return true;
            }
        }

        $this->user->setLastSensitiveActivity(new \DateTime('now'));
        return false;
    }
}