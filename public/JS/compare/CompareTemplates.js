function CompareTemplates() {
    this.getCompare1 = function (classOrID, weaponId = 1) {
        $(classOrID).append(`<div class="col-6 p-0 m-0">
        <div id="compareWeaponName${weaponId}" class="row w-100 m-0 border-bottom">
            ?
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

    this.getCompare2 = function (classOrID, weaponIndexInStorage = 1, boodstrapColSize = 2) {
        $(classOrID).append(`<div class="col-${boodstrapColSize} p-0 m-0 compareWeaponDescriptionContainer${weaponIndexInStorage} rounded">
        <div class="row w-100 m-0 border-bottom text-right">
            <div class="col-2 ml-auto mr-3 mt-3" style="z-index: 2;">
                <button id="compareDeleteItem${weaponIndexInStorage}" class="btn-sm btn-outline-danger rounded-circle text-center compareDeleteItem">x</button>
            </div>
            
                <img id="compareWeaponImg${weaponIndexInStorage}" style="opacity: 0.6;" class="position-absolute mb-3 mt-5 mw-100 mh-100" width="150" height="80"
                     src='/img/gunRibbonsByID/0.png'>
                <span id="compareWeaponName${weaponIndexInStorage}" style="z-index: 2;" class="w-100 text-right font-size-14 mt-4 pt-4"> ? </span>
            
        </div>
        <div class="row w-100 m-0 border-bottom border-right">
            <div class="col-2 ml-0 mr-auto p-0 border-right border-left d-flex justify-content-center"><img class="mw-100 mh-100" width="30px" height="30px"
                                                                  src='/img/mody/ammo.png'
                                                                  alt="ammo"
                                                                  data-placement="top"
                ></div>
            <div id="compareAmmoMod${weaponIndexInStorage}" class="col-10 text-left pl-1"> - </div>
        </div>
        <div class="row w-100 m-0 border-bottom border-right">
            <div class="col-2 ml-0 mr-auto p-0 border-right border-left d-flex justify-content-center"><img class="mw-100 mh-100" width="30px" height="30px"
                                                                  src='/img/mody/crosshair.png'
                                                                  alt="crosshair"
                                                                  data-placement="top"
                ></div>
            <div id="compareCrosshairMod${weaponIndexInStorage}" class="col-10 text-left pl-1"> - </div>
        </div>
        <div class="row w-100 m-0 border-bottom border-right">
            <div class="col-2 ml-0 mr-auto p-0 border-right border-left d-flex justify-content-center"><img class="mw-100 mh-100" width="30px" height="30px"
                                                                  src='/img/mody/trigger.png'
                                                                  alt="trigger"></div>
            <div id="compareTriggerMod${weaponIndexInStorage}" class="col-10 text-left pl-1"> - </div>
        </div>
        <div class="row w-100 m-0 border-bottom border-right">
            <div class="col-2 ml-0 mr-auto p-0 border-right border-left d-flex justify-content-center"><img class="mw-100 mh-100" width="30px" height="30px"
                                                                  src='/img/mody/spring.png'
                                                                  alt="spring"
                ></div>
            <div id="compareSpringMod${weaponIndexInStorage}" class="col-10 text-left pl-1"> - </div>
        </div>
        <div class="row w-100 m-0 border-bottom border-right">
            <div class="col-2 ml-0 mr-auto p-0 border-right border-left d-flex justify-content-center"><img class="mw-100 mh-100" width="30px" height="30px"
                                                                  src='/img/mody/barrel.png'
                                                                  alt="barrel"
                ></div>
            <div id="compareBarrelMod${weaponIndexInStorage}" class="col-10 text-left pl-1"> - </div>
        </div>
    </div>`)
    };
    this.getCompareStatistics = function (classOrID, weaponIndexInStorage, boodstrapColSize = 2) {
        $(classOrID).append(`
            <div class="col-${boodstrapColSize} border-right border-left statisticsFor${weaponIndexInStorage}">
                <div class="row">
                    <div id="damage${weaponIndexInStorage}" class="col-12 border-bottom p-0 text-left"> - </div>
           
                    <div id="muzzleVelocity${weaponIndexInStorage}" class="col-12 border-bottom  p-0 text-left"> - </div>
               
                    <div id="rateOfFire${weaponIndexInStorage}" class="col-12 border-bottom  p-0 text-left"> - </div>
               
                    <div id="range${weaponIndexInStorage}" class="col-12 border-bottom  p-0 text-left"> - </div>
               
                    <div id="recoil${weaponIndexInStorage}" class="col-12 border-bottom  p-0 text-left"> - </div>
               
                    <div id="timeToKill${weaponIndexInStorage}" class="col-12 border-bottom  p-0 text-left"> - </div>
    
                    <div id="costs${weaponIndexInStorage}" class="col-12 border-bottom  p-0 text-left"> - </div>
               
                    <div id="spawnDelay${weaponIndexInStorage}" class="col-12 border-bottom  p-0 text-left"> - </div>
               
                    <div id="reloadTime${weaponIndexInStorage}" class="col-12 border-bottom  p-0 text-left"> - </div>
               
                    <div id="equipmentPoint${weaponIndexInStorage}" class="col-12 border-bottom  p-0 text-left"> - </div>
               
                    <div id="ammoCapacity${weaponIndexInStorage}" class="col-12 border-bottom  p-0 text-left"> - </div>
               
                    <div id="magazines${weaponIndexInStorage}" class="col-12 border-bottom  p-0 text-left"> - </div>
               
                    <div id="equipTime${weaponIndexInStorage}" class="col-12 border-bottom  p-0 text-left"> - </div>
               
                    <div id="additionalFatigue${weaponIndexInStorage}" class="col-12 border-bottom  p-0 text-left"> - </div>
               
                    <div id="aimingTime${weaponIndexInStorage}" class="col-12 border-bottom  p-0 text-left"> - </div>
               
                    <div id="useWhileRunning${weaponIndexInStorage}" class="col-12  p-0 text-left ml-1"> - </div>
                </div>
            </div>
        `);
    };

    this.getStatisticsCompareLegend = function (classOrID, boodstrapColSize = 4) {
        $(classOrID).append(`
            <div class="col-${boodstrapColSize} statisticsLegend">
                <div class="row">
                    <div class="col-12 p-0 border-bottom">Damage:</div>
                    <div class="col-12 p-0 border-bottom">Muzzle velocity:</div>
                    <div class="col-12 p-0 border-bottom">Rate of fire:</div>
                    <div class="col-12 p-0 border-bottom">Range:</div>
                    <div class="col-12 p-0 border-bottom">Recoil:</div>
                    <div class="col-12 p-0 border-bottom">Time to kill:</div>
                    <div class="col-12 p-0 border-bottom">Costs:</div>
                    <div class="col-12 p-0 border-bottom">Spawn delay:</div>
                    <div class="col-12 p-0 border-bottom">Reload time:</div>
                    <div class="col-12 p-0 border-bottom">Equipment points:</div>
                    <div class="col-12 p-0 border-bottom">Ammo capacity:</div>
                    <div class="col-12 p-0 border-bottom">Magazines:</div>
                    <div class="col-12 p-0 border-bottom">Equip time:</div>
                    <div class="col-12 p-0 border-bottom">Additional fatigue:</div>
                    <div class="col-12 p-0 border-bottom">Aiming time:</div>
                    <div class="col-12 p-0">Use while running:</div>
                </div>
            </div>
        `);
    };

}
