<?php

namespace App\Guns;


abstract class AbstractModsRepository
{
    protected $dbPath;
    protected $modifications;

    public function __construct(string $dbPath)
    {
        $this->dbPath = $dbPath;
        $this->modifications = unserialize(file_get_contents($dbPath));

        if (true === empty($this->modifications)) {
            $this->modifications = [];
        }
    }

    abstract public function findAll(): array;

    abstract public function findById(Int $id): array;

    abstract public function save(array $data, int $gunId = null);

    abstract public function delete(Int $id);

    public function __destruct()
    {
        file_put_contents($this->dbPath, serialize($this->modifications));
    }
}