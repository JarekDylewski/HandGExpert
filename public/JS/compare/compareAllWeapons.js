$(document).ready(function () {
    if (localStorage.getItem('weapons')) {
        function insertData(Id, weapons) {
            $('#damage' + Id).html(weapons[Id].dmg);
            $('#muzzleVelocity' + Id).html(weapons[Id].muzzleVelocit);
            $('#rateOfFire' + Id).html(weapons[Id].rateOfFire);
            $('#range' + Id).html(weapons[Id].rangeNear);
            $('#recoil' + Id).html(weapons[Id].recoil);
            $('#timeToKill' + Id).html(weapons[Id].timeToKill);
            $('#costs' + Id).html(weapons[Id].costs);
            $('#spawnDelay' + Id).html(weapons[Id].spawnDelay);
            $('#reloadTime' + Id).html(weapons[Id].reloadTime);
            $('#equipmentPoint' + Id).html(weapons[Id].equipmentPoint);
            $('#ammoCapacity' + Id).html(weapons[Id].ammoCapacity);
            $('#equipTime' + Id).html(weapons[Id].equipTime);
            $('#magazines' + Id).html(weapons[Id].magazines);
            $('#additionalFatigue' + Id).html(weapons[Id].additionalFatigue);
            $('#aimingTime' + Id).html(weapons[Id].aimingTime);
            $('#useWhileRunning' + Id).html(weapons[Id].useWhileRunning);
            $('#compareWeaponName' + Id).html(weapons[Id].name);
            $('#compareAmmoMod' + Id).html(weapons[Id].ammo);
            $('#compareCrosshairMod' + Id).html(weapons[Id].crosshair);
            $('#compareTriggerMod' + Id).html(weapons[Id].trigger);
            $('#compareSpringMod' + Id).html(weapons[Id].spring);
            $('#compareBarrelMod' + Id).html(weapons[Id].barrel);
            if ($('#compareWeaponImg' + Id)) {
                $('#compareWeaponImg' + Id).attr('src', '/img/gunRibbonsByID/' + weapons[Id].gunId + '.png')
            }
        }

        let compareTemplates = new CompareTemplates();
        let weapons = JSON.parse(localStorage.getItem('weapons'));
        let storageLengthVar = weapons.length;

        let i = 1;
        while (i < storageLengthVar) {
            if (i <= 5) {
                compareTemplates.getCompare2('.compareWeaponDesc1', i, 2);
                compareTemplates.getCompareStatistics('.compareStatistics1', i, 2)


            } else {
                compareTemplates.getCompare2('.compareWeaponDesc2', i, 2);
                compareTemplates.getCompareStatistics('.compareStatistics2', i, 2)
            }

            insertData(i, weapons);
            i++;
        }
        compareTemplates.getStatisticsCompareLegend('.compareLegend1', 12);
        compareTemplates.getStatisticsCompareLegend('.compareLegend2', 12);
        if ($('.compareWeaponDescriptionContainer11')) {
            $('.compareWeaponDescriptionContainer11').remove();
            $('.statisticsFor11').remove();
        }
    }
});