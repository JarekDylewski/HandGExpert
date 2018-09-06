<?php

namespace App\Tests\Guns;

use App\Guns\FileGunRepository;
use App\Guns\ModsDataProvider;
use PHPUnit\Framework\TestCase;

class ModsDataPrepareTest extends TestCase
{
    private $PrepareData;

    protected function setUp()
    {
        $this->PrepareData = new FileGunRepository('src/Data/gunsData.ser');
    }

    public function testWhatReturnPrepareModID()
    {

        $modsDataPrepare = new ModsDataProvider($this->PrepareData->findById(6));
        $modsIDArray = $modsDataPrepare->prepareModID('ammo');
        //testing whether the array contains 45 value
        $this->assertContains(45, $modsIDArray);

    }

    public function testWrongModificationTypeException()
    {
        $modsDataPrepare = new ModsDataProvider($this->PrepareData->findById(6));
        $this->expectException('\\Exception');
        $modsDataPrepare->prepareModID('screw');
        $this->fail('array does not have screwID key');
    }

    public function testWhatReturnPrepareModData()
    {
        $modsDataPrepare = new ModsDataProvider($this->PrepareData->findById(6));
        $modsID = $modsDataPrepare->prepareModID('ammo');
        $modsData = $modsDataPrepare->prepareModData($modsID, 'src/Data/ammoData.ser');
        $modName = $modsData[0];
        // Testing does the array contain 'name' key
        $this->assertArrayHasKey('name', $modName);

    }

    protected function tearDown()
    {
        unset($this->PrepareData);
    }
}