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

    public function save(Gun $gun)
    {
        $this->guns[] = $gun;
    }

    public function delete(string $name)
    {
        $this->guns = array_filter($this->guns, function (Gun $gun) use ($name) {
            return $gun->getName() !== $name;
        });
    }

    public function __destruct()
    {
        file_put_contents($this->dbPath, serialize($this->guns));
    }
}
