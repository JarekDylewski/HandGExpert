<?php

namespace App\Tests\Guns;


use App\Guns\FileAmmoRepository;
use PHPUnit\Framework\TestCase;

class FileAmmoRepositoryTest extends TestCase
{
    private $ammoRepository;

    public function setUp()
    {
        $this->ammoRepository = new FileAmmoRepository('../Data/ammoData.ser');
    }

    public function findAllIsArrayTest()
    {
        $array = $this->ammoRepository->findAll();

        $this->assertInternalType('array', $array);
    }

    public function findAllReturnsExpectedArrayKeys()
    {
        $array = $this->ammoRepository->findAll();

        $this->assertArrayHasKey('speed', $array, 'ammo data must contain speed key');
    }

    public function findByIdReturnsExpectedValueTest()
    {
        $array = $this->ammoRepository->findById(14);

        $this->assertEquals('[.30-06 Springfield] M2 .30-06 Ball', $array['name'],
            'findById(14) must return "[.30-06 Springfield] M2 .30-06 Ball" string');
    }

    public function saveTest()
    {
        $data = ["id" => 999, "type" => 35, "name" => "test123", "speed" => 852.0];

        $this->ammoRepository->save($data, 999);
        $this->assertEquals('test123', $this->ammoRepository->findById(999)['name']);
    }

    public function deleteTest()
    {
        $data = ["id" => 999, "type" => 35, "name" => "test123", "speed" => 852.0];
        $this->ammoRepository->save($data, 999);

        $this->ammoRepository->delete(999);

        $this->assertNull($this->ammoRepository->findById(999));
    }


}