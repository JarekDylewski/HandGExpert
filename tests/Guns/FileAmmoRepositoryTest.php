<?php

namespace App\Tests\Guns;


use App\Guns\FileAmmoRepository;
use PHPUnit\Framework\TestCase;

class FileAmmoRepositoryTest extends TestCase
{
    private $ammoRepository;

    public function setUp()
    {
        $data = unserialize(file_get_contents('../../src/Data/ammoData.ser'));
        file_put_contents('ammoDataCopyForTest.ser', serialize($data));
        $this->ammoRepository = new FileAmmoRepository('./ammoDataCopyForTest.ser');
    }

    public function testFindAllReturnArray()
    {
        $array = $this->ammoRepository->findAll();

        $this->assertInternalType('array', $array);
        $this->assertArrayHasKey('speed', $array[5], 'ammo data must contain speed key');
    }


    public function testFindByIdReturnsExpectedResult()
    {
        $array = $this->ammoRepository->findById(14);

        $this->assertEquals('M2 .30-06 Ball', $array['name'],
            'findById(14) must return "M2 .30-06 Ball" string "' . $array['name'] . '" returned');

    }

    public function testSave()
    {
        $data = ["id" => 999, "type" => 35, "name" => "test123", "speed" => 852.0];

        $this->ammoRepository->save($data, 999);
        $this->assertEquals('test123', $this->ammoRepository->findById(999)['name']);
    }

    public function testDelete()
    {
        $data = ["id" => 999, "type" => 35, "name" => "test123", "speed" => 852.0];
        $this->ammoRepository->save($data, 999);

        $this->ammoRepository->delete(999);

        $this->assertArrayNotHasKey(999, $this->ammoRepository->findAll());
    }

    public function testFindException()
    {
        $this->expectException("\\ArithmeticError");
        $this->ammoRepository->findById(-1);
        $this->fail('we dont have ammo with -1 ID');
    }

    public function testSaveException()
    {
        $this->expectException("\\ArithmeticError");
        $this->ammoRepository->save(['test'], -1);
        $this->fail('we cant save ammo with -1 ID');
    }

    protected function tearDown()
    {
        unlink('./ammoDataCopyForTest.ser');
        unset($this->ammoRepository);
    }
}