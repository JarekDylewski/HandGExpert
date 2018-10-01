<?php

namespace App\Security;


interface WarningPointsInterface
{
    public function setLastSensitiveActivity(\DateTime $date);

    public function getLastSensitiveActivity(): \DateTime;

    public function setWarningPoints(int $value);

    public function getWarningPoints(): int;
}