function CompareTemplates() {
    this.getCompare1 = function (classOrID, weaponId = 1) {
        let padding = 'pl-0';
        if (weaponId % 2 === 0) {
            padding = 'pl-1';
        }
        $(classOrID).append(`<div class="col-6 p-0 m-0 ${padding}">
        <div id="compareWeaponName${weaponId}" class="row w-100 m-0 border-bottom">
            Miejsce na nazwe broni
        </div>
        <div class="row w-100 m-0">
            <div id="compareAmmoMod${weaponId}" class="col-2"><img width="30px" height="30px" src="/img/mody/ammo.png" alt="ammunation"
                                    data-toggle="tooltip" data-placement="top" title="miejsce na zmienna z nazwa moda">
            </div>
            <div id="compareCrosshairMod${weaponId}" class="col-2"><img width="30px" height="30px" src="/img/mody/crosshair.png"
                                    alt="crosshair" data-toggle="tooltip" data-placement="top"
                                    title="miejsce na zmienna z nazwa moda"></div>
            <div id="compareTriggerMod${weaponId}" class="col-2"><img width="30px" height="30px" src="/img/mody/trigger.png" alt="trigger"
                                    data-toggle="tooltip" data-placement="top" title="miejsce na zmienna z nazwa moda">
            </div>
            <div id="compareSpringMod${weaponId}" class="col-2"><img width="30px" height="30px" src="/img/mody/spring.png" alt="spring"
                                    data-toggle="tooltip" data-placement="top" title="miejsce na zmienna z nazwa moda">
            </div>
            <div id="compareBarrelMod${weaponId}" class="col-2"><img width="30px" height="30px" src="/img/mody/barrel.png" alt="barrel"
                                    data-toggle="tooltip" data-placement="top" title="miejsce na zmienna z nazwa moda">
            </div>
        </div>
    </div>`);
    };

    this.getCompare2 = function (classOrID, weaponId = 1) {
        let padding = 'pl-0';
        if (weaponId % 2 === 0) {
            padding = 'pl-1';
        }
        $(classOrID).append(`<div class="col-6 p-0 m-0 compareWeaponDescriptionContainer${weaponId} ${padding}">
        <div class="row w-100 m-0 border-bottom text-right">
            <img style="opacity: 0.6;" class="position-absolute mb-3" width="150" height="80"
                 src='/img/gun_ribbons/pps-43.png'>
            <span id="compareWeaponName${weaponId}" style="z-index: 2;" class="w-100 text-right font-size-14 mt-4 pt-4">miejsce na nazwe broni</span>
        </div>
        <div class="row w-100 m-0 border-bottom">
            <div class="col-2 ml-0 mr-auto p-0 border-right"><img width="30px" height="30px"
                                                                  src='/img/mody/ammo.png'
                                                                  alt="ammo"
                                                                  data-placement="top"
                ></div>
            <div id="compareAmmoMod${weaponId}" class="col-10 text-left pl-1">Nazwa moda</div>
        </div>
        <div class="row w-100 m-0 border-bottom">
            <div class="col-2 ml-0 mr-auto p-0 border-right"><img width="30px" height="30px"
                                                                  src='/img/mody/crosshair.png'
                                                                  alt="crosshair"
                                                                  data-placement="top"
                ></div>
            <div id="compareCrosshairMod${weaponId}" class="col-10 text-left pl-1">Nazwa moda</div>
        </div>
        <div class="row w-100 m-0 border-bottom">
            <div class="col-2 ml-0 mr-auto p-0 border-right"><img width="30px" height="30px"
                                                                  src='/img/mody/trigger.png'
                                                                  alt="trigger"></div>
            <div id="compareTriggerMod${weaponId}" class="col-10 text-left pl-1">Nazwa moda</div>
        </div>
        <div class="row w-100 m-0 border-bottom">
            <div class="col-2 ml-0 mr-auto p-0 border-right"><img width="30px" height="30px"
                                                                  src='/img/mody/spring.png'
                                                                  alt="spring"
                ></div>
            <div id="compareSpringMod${weaponId}" class="col-10 text-left pl-1">Nazwa moda</div>
        </div>
        <div class="row w-100 m-0 border-bottom">
            <div class="col-2 ml-0 mr-auto p-0 border-right"><img width="30px" height="30px"
                                                                  src='/img/mody/barrel.png'
                                                                  alt="barrel"
                ></div>
            <div id="compareBarrelMod${weaponId}" class="col-10 text-left pl-1">Nazwa moda</div>
        </div>
    </div>`)
    };

    this.getCompareStatisticsForTwoWeapons = function (classOrID) {

        $(classOrID).append(`
                <div class="row w-100 pt-3">
                    <div class="col-4 p-0 border-bottom">Damage:</div><div id="damage1" class="col-2 border-right border-bottom p-0 text-center">test</div><div id="damage2" class="col-2 border-left border-bottom  p-0 text-center">test</div>
                </div>
                <div class="row w-100">
                    <div class="col-4 p-0">Muzzle velocity:</div><div id="muzzleVelocity1" class="col-2 border-right border-bottom  p-0 text-center">test</div><div id="muzzleVelocity2" class="col-2 border-left border-bottom  p-0 text-center">test</div>
                </div>
                <div class="row w-100">
                    <div class="col-4 p-0 border-bottom">Rate of fire:</div><div id="rateOfFire1" class="col-2 border-right border-bottom  p-0 text-center">test</div><div id="rateOfFire2" class="col-2 border-left border-bottom  p-0 text-center">test</div>
                </div>
                <div class="row w-100">
                    <div class="col-4 p-0">Range:</div><div id="range1" class="col-2 border-right border-bottom  p-0 text-center">test</div><div id="range2" class="col-2 border-left border-bottom  p-0 text-center">test</div>
                </div>
                <div class="row w-100">
                    <div class="col-4 p-0 border-bottom">Recoil:</div><div id="recoil1" class="col-2 border-right border-bottom  p-0 text-center">test</div><div id="recoil2" class="col-2 border-left border-bottom  p-0 text-center">test</div>
                </div>
                <div class="row w-100">
                    <div class="col-4 p-0">Time to kill:</div><div id="timeToKill1" class="col-2 border-right border-bottom  p-0 text-center">test</div><div id="timeToKill2" class="col-2 border-left border-bottom  p-0 text-center">test</div>
                </div>
                <div class="row w-100">
                    <div class="col-4 p-0 border-bottom">Costs:</div><div id="costs1" class="col-2 border-right border-bottom  p-0 text-center">test</div><div id="costs2" class="col-2 border-left border-bottom  p-0 text-center">test</div>
                </div>
                <div class="row w-100">
                    <div class="col-4 p-0">Spawn delay:</div><div id="spawnDelay1" class="col-2 border-right border-bottom  p-0 text-center">test</div><div id="spawnDelay2" class="col-2 border-left border-bottom  p-0 text-center">test</div>
                </div>
                <div class="row w-100">
                    <div class="col-4 p-0 border-bottom">Reload time:</div><div id="reloadTime1" class="col-2 border-right border-bottom  p-0 text-center">test</div><div id="reloadTime2" class="col-2 border-left border-bottom  p-0 text-center">test</div>
                </div>
                <div class="row w-100">
                    <div class="col-4 p-0">Equipment points:</div><div id="equipmentPoint1" class="col-2 border-right border-bottom  p-0 text-center">test</div><div id="equipmentPoint2" class="col-2 border-left border-bottom  p-0 text-center">test</div>
                </div>
                <div class="row w-100">
                    <div class="col-4 p-0 border-bottom">Ammo capacity:</div><div id="ammoCapacity1" class="col-2 border-right border-bottom  p-0 text-center">test</div><div id="ammoCapacity2" class="col-2 border-left border-bottom  p-0 text-center">test</div>
                </div>
                <div class="row w-100">
                    <div class="col-4 p-0">Magazines:</div><div id="magazines1" class="col-2 border-right border-bottom  p-0 text-center">test</div><div id="magazines2" class="col-2 border-left border-bottom  p-0 text-center">test</div>
                </div>
                <div class="row w-100">
                    <div class="col-4 p-0 border-bottom">Equip time:</div><div id="equipTime1" class="col-2 border-right border-bottom  p-0 text-center">test</div><div id="equipTime2" class="col-2 border-left border-bottom  p-0 text-center">test</div>
                </div>
                <div class="row w-100">
                    <div class="col-4 p-0">Additional fatigue:</div><div id="additionalFatigue1" class="col-2 border-right border-bottom  p-0 text-center">test</div><div id="additionalFatigue2" class="col-2 border-left border-bottom  p-0 text-center">test</div>
                </div>
                <div class="row w-100">
                    <div class="col-4 p-0 border-bottom">Aiming time:</div><div id="aimingTime1" class="col-2 border-right border-bottom  p-0 text-center">test</div><div id="aimingTime2" class="col-2 border-left border-bottom  p-0 text-center">test</div>
                </div>
                <div class="row w-100">
                    <div class="col-4 p-0">Use while running:</div><div id="useWhileRunning1" class="col-2 border-right  p-0 text-center">test</div><div id="useWhileRunning2" class="col-2 border-left  p-0 text-center">test</div>
                </div>`);
    }
}
