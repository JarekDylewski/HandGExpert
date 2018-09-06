<?php

namespace App\Tests\Guns;


use App\Guns\FileGunRepository;
use PHPUnit\Framework\TestCase;

class PrepareDataTest extends TestCase
{
    private $PrepareData;

    protected function setUp()
    {
        $this->PrepareData = new FileGunRepository('src/Data/gunsData.ser');

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
        $this->expectException('\\Exception');
        $this->PrepareData->getGunsData(1000);
        $this->fail('exception expected in "getGunsData" method there is no array with ID');
    }

    public function testGetGunDataWithIDLessThen0()
    {
        $this->expectException('\\Exception');
        $this->PrepareData->getGunsData(-2);
        $this->fail('exception expected "ID must be >= 0"');
    }

    public function testGetGunDataWithPropertyDifferentThanAll()
    {
        $this->expectException('\\Exception');
        $this->PrepareData->getGunsData('wrongString');
        $this->fail('exception expected "you can set only string "all" (or "not defined" but then ID is set from the constructor)"');

    }

    protected function tearDown()
    {
        unset($this->PrepareData);
    }
}