<?php

namespace App\Guns;


class FileAmmoRepository extends AbstractModsRepository
{

    public function findAll(): array
    {
        return $this->modifications;
    }

    public function findById(Int $id): array
    {
        return $this->modifications[$id];
    }

    public function save(array $data, int $gunId = null)
    {
        $this->modifications[$gunId] = $data;
    }

    public function delete(Int $id)
    {
        unset($this->modifications[$id]);
    }
}