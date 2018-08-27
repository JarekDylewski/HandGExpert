<?php

namespace App\Guns;


class FileGunRepository implements GunRepositoryInterface
{
    private $dbPath;
    private $guns;

    public function __construct($dbPath)
    {
        $this->dbPath = $dbPath;
        $this->guns = unserialize(file_get_contents($dbPath));

        if (true === empty($this->guns)) {
            $this->guns = [];
        }
    }

    /**
     * @return Gun[]
     */
    public function findAll(): array
    {
        return $this->guns;
    }

    public function findById(int $id): array
    {
        return $this->guns[$id];
    }

    //TODO rozbudować obiekt Gun tak aby wystarczyło tutaj podac obiekt gun i go zapisac
    public function save(array $data, int $gunId = null)
    {
        $this->guns[$gunId] = $data;
    }

    public function delete(int $id)
    {
        unset($this->guns[$id]);
    }

    public function __destruct()
    {
        file_put_contents($this->dbPath, serialize($this->guns));
    }
}
