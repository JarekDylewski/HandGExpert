<?php

namespace App\Tests\WeaponStorage;


use App\Entity\User;
use App\WeaponStorage\WeaponStorageManager;
use Doctrine\Common\Persistence\ManagerRegistry;
use PHPUnit\Framework\TestCase;

class WeaponStorageManagerTest extends TestCase
{

    private $em;
    private $weaponStorageManager;
    public $user;
    private $weaponData;

    public function setUp()
    {
        $this->weaponStorageManager = new WeaponStorageManager($this->em);
        $this->user = $this->getMockBuilder(User::class)->getMock();
        $this->weaponData = [
            'semi-auto riffle', //category
            999, //gunId
            999, //ammoId
            null, //crosshairId
            null, //triggerId
            null, //springId
            null, //barrelId
            $this->user //user class
        ];
    }

    public function testAddWeaponToStorage()
    {
        $data = $this->weaponData;
        $addUser = $this->weaponStorageManager->addWeaponToStorage(
            $data[0],
            $data[1],
            $data[2],
            $data[3],
            $data[4],
            $data[5],
            $data[6],
            $data[7]
        );

        $this->user->expects($this->once())
            ->method('getWeaponStorages')
            ->willReturn([0]);

        $this->assertEquals(is_array([]), is_array($addUser), "array expect");
        $this->assertArrayHasKey('message', $addUser, 'expect "message" key');
        $this->assertEquals($addUser['message'], "Success! Weapon added to storage.");
    }

    public function tearDown()
    {

    }
}