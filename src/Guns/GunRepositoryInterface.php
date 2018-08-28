<?php


namespace App\Guns;


interface GunRepositoryInterface
{
    public function findAll(): array;

    public function save(array $data);

    public function delete(int $id);
}