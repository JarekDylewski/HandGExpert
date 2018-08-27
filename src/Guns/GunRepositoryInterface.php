<?php


namespace App\Guns;


interface GunRepositoryInterface
{
    public function findAll(): array;

    public function save();

    public function delete();
}