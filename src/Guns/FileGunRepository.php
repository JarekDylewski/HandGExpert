<?php

namespace App\Guns;


use App\Exceptions\src\Data\GunsNotFoundException;

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

    /**
     * @param int $id
     * @return array
     * @throws GunsNotFoundException
     */
    public function findById(int $id): array
    {
        if (!isset($this->guns[$id])) {
            throw new GunsNotFoundException('Gun with id: ' . $id . ' not found.', 404);
        }
        return $this->guns[$id];
    }

    public function findColumn(string $columnName): array
    {
        $datas = $this->findAll();

        $name = [];
        foreach ($datas as $data => $value) {
            $name[$data] = $datas[$data][$columnName];
        }
        return $name;
    }

    //TODO rozbudować obiekt Gun tak aby wystarczyło tutaj podac ten obiekt i nim manipulować
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
