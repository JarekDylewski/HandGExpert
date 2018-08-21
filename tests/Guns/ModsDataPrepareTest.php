<?php

namespace App\Tests\Guns;


use App\Data\PrepareData;
use App\Guns\ModsDataPrepare;
use PHPUnit\Framework\TestCase;

class ModsDataPrepareTest extends TestCase
{
    private $PrepareData;
    protected function setUp()
    {
        $this->PrepareData = new PrepareData(6);
    }
    public function testWhatReturnPrepareModID()
    {
        $ModsDataPrepare = new ModsDataPrepare($this->PrepareData);
        $modsIDArray = $ModsDataPrepare->prepareModID('ammo');
        //testing whether the array contains 45 value
        $this->assertContains(45,$modsIDArray);

    }
    public function testWrongModificationTypeException()
    {
        $ModsDataPrepare = new ModsDataPrepare($this->PrepareData);
        $this->expectException('\\Exception');
        $ModsDataPrepare->prepareModID('screw');
        $this->fail('array does not have screwID key');
    }
    public function testWhatReturnPrepareModData()
    {
        $ModsDataPrepare = new ModsDataPrepare($this->PrepareData);
        $modsID = $ModsDataPrepare->prepareModID('ammo');
        $modsData = $ModsDataPrepare->prepareModData($modsID,'getAmmoData');
        $modName = $modsData[0];
        // Testing does the array contain 'name' key
        $this->assertArrayHasKey('name',$modName);

    }
    protected function tearDown()
    {
        unset($this->PrepareData);
    }
}