<?php

namespace App\Tests\Guns;


use App\Exceptions\src\Data\GunsNotFoundException;
use App\Guns\FileGunRepository;
use PHPUnit\Framework\TestCase;

class FileGunRepositoryTest extends TestCase
{
    private $PrepareData;

    protected function setUp()
    {
        $data = unserialize(file_get_contents('../../src/Data/gunsData.ser'));
        file_put_contents('gunsDataCopyForTest.ser', serialize($data));
        $this->PrepareData = new FileGunRepository('./gunsDataCopyForTest.ser');
    }

    public function testWhatArrayReturnsGetGunsData()
    {
        //Testing when set gun ID in method;
        $arrayWithIDInMethod = $this->PrepareData->findById(5);
        $this->assertInternalType('array', $arrayWithIDInMethod, 'there is no array');
        $this->assertArrayHasKey('name', $arrayWithIDInMethod, 'this array does not contain "name" key');

        //testing whether the array key contains the appropriate value
        $this->assertNotNull($arrayWithIDInMethod, 'null return, check if you have broken something in the class');
        $this->assertInternalType('array', $arrayWithIDInMethod, 'there is no array');
        $this->assertEquals('m3 grease gun', strtolower($arrayWithIDInMethod['name']), 'expect value is m3 grease gun');


        //Testing when we set 'all' to method
        $arrayWhenSetAllInMethod = $this->PrepareData->findAll();
        $this->assertNotNull($arrayWhenSetAllInMethod, 'null return, check if you have broken something in the class');
        $this->assertInternalType('array', $arrayWhenSetAllInMethod, 'there is no array');
        $this->assertArrayHasKey(5, $arrayWhenSetAllInMethod, 'this array must have numeric key');

    }

    public function testGetGunDataWithUndefinedID()
    {
        $this->expectException(GunsNotFoundException::class);
        $this->PrepareData->findById(1000);
        $this->fail('exception expected in "findById" method there is no array with ID');
    }

    protected function tearDown()
    {
        unlink('./gunsDataCopyForTest.ser');
        unset($this->PrepareData);
    }
}