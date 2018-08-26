<?php


namespace App\Guns;


interface GunRepositoryInterface
{
    public function findAll(): array;

    public function save(Gun $gun);

    public function delete(string $name);
}