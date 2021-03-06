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
        if ($id < 0) {
            throw new \ArithmeticError("Can't set ID lower than 0");
        }

        return $this->modifications[$id];
    }

    public function save(array $data, int $gunId = null)
    {
        if ($gunId < 0) {
            throw new \ArithmeticError("Can't set ID lower than 0");
        }

        $this->modifications[$gunId] = $data;
    }

    public function delete(Int $id)
    {
        unset($this->modifications[$id]);
    }
}