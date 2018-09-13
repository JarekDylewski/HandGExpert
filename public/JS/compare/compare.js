$(document).ready(function () {

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
    if (localStorage.getItem('weapons')) {
        let weapons = JSON.parse(localStorage.getItem('weapons'));
        let storageLengthVar = weapons.length;
        if (storageLengthVar <= 3) {
            compareTemplates.getCompare2('.compareSpace', 1, 6);
            compareTemplates.getCompare2('.compareSpace', 2, 6);
            compareTemplates.getStatisticsCompareLegend('.statisticsForTwoWeapons', 4);
            compareTemplates.getCompareStatistics('.statisticsForTwoWeapons', 1, 2);


            //$('.compareWeaponDescriptionContainer2').addClass('pl-1');
            insertData(1, weapons);
            if (storageLengthVar > 2) {

                compareTemplates.getCompareStatistics('.statisticsForTwoWeapons', 2, 2);
                insertData(2, weapons);
            }
        } else {
            let i = 1;
            while (i < storageLengthVar) {
                compareTemplates.getCompare2('.compareSpace', i, 6);
                insertData(i, weapons);
                i++;
            }
            if ($('.compareWeaponDescriptionContainer11')) {
                $('.compareWeaponDescriptionContainer11').empty()
            }
        }
        let compareStatistics = new CompareStatistics();
        compareStatistics.compareTwoStatistics($('#damage1'), $('#damage2'), 'more');
        compareStatistics.compareTwoStatistics($('#muzzleVelocity1'), $('#muzzleVelocity2'), 'more');
        compareStatistics.compareTwoStatistics($('#rateOfFire1'), $('#rateOfFire2'), 'more');
        compareStatistics.compareTwoStatistics($('#range1'), $('#range2'), 'more');
        compareStatistics.compareTwoStatistics($('#recoil1'), $('#recoil2'), 'less');
        compareStatistics.compareTwoStatistics($('#timeToKill1'), $('#timeToKill2'), 'less');
        compareStatistics.compareTwoStatistics($('#costs1'), $('#costs2'), 'less');
        compareStatistics.compareTwoStatistics($('#spawnDelay1'), $('#spawnDelay2'), 'less');
        compareStatistics.compareTwoStatistics($('#reloadTime1'), $('#reloadTime2'), 'less');
        compareStatistics.compareTwoStatistics($('#equipmentPoint1'), $('#equipmentPoint2'), 'less');
        compareStatistics.compareTwoStatistics($('#ammoCapacity1'), $('#ammoCapacity2'));
        compareStatistics.compareTwoStatistics($('#equipTime1'), $('#equipTime2'), 'less');
        compareStatistics.compareTwoStatistics($('#magazines1'), $('#magazines2'));
        compareStatistics.compareTwoStatistics($('#additionalFatigue1'), $('#additionalFatigue2'), 'less');
        compareStatistics.compareTwoStatistics($('#aimingTime1'), $('#aimingTime2'), 'less');
        compareStatistics.compareTwoStatistics($('#useWhileRunning1'), $('#useWhileRunning2'), 'more');
    }

    $('#clear_compare').on('click', function () {
        localStorage.clear();
        $('.compareSpace').empty();
        $('.statisticsForTwoWeapons').empty();
    });

    let iter = 0;
    let weapons = [];
    $('#compare_weapon').on('click', function () {
        let weaponStatisticsCopy = Object.assign({}, statistics);
        let modsAndGunIdCopy = Object.assign({}, modsAndGunSelectedByUser);
        let weaponData = {
            "gunId": modsAndGunIdCopy.getGunId(),
            "dmg": weaponStatisticsCopy.getDamage().toFixed(3),
            "dmgFar": weaponStatisticsCopy.getDamageFar().toFixed(3),
            "muzzleVelocit": Math.round(weaponStatisticsCopy.getMuzzleVelocity()),
            "rateOfFire": weaponStatisticsCopy.getRateOfFire().toFixed(1),
            "rangeNear": weaponStatisticsCopy.getRangeNear().toFixed(1),
            "recoil": weaponStatisticsCopy.getRecoilModifier().toFixed(2),
            "timeToKill": weaponStatisticsCopy.getTimeToKill().toFixed(1),
            "costs": weaponStatisticsCopy.getPricePerShot().toFixed(2),
            "spawnDelay": weaponStatisticsCopy.getSpawnDelay().toFixed(1),
            "reloadTime": weaponStatisticsCopy.getReloadTime().toFixed(1),
            "equipmentPoint": weaponStatisticsCopy.getEquipmentPoints(),
            "ammoCapacity": weaponStatisticsCopy.getAmmoCapacity(),
            "magazines": weaponStatisticsCopy.getMagazines(),
            "equipTime": weaponStatisticsCopy.getEquipTime(),
            "additionalFatigue": weaponStatisticsCopy.getAdditionalFatuque(),
            "aimingTime": Math.round(weaponStatisticsCopy.getAimingTime()),
            "useWhileRunning": weaponStatisticsCopy.getUseWhileRunning(),
            "name": $('#weaponName').html(),
            "ammo": $('.js-mod-name-list-ammo').html(),
            "crosshair": $('.js-mod-name-list-crosshair').html(),
            "trigger": $('.js-mod-name-list-trigger').html(),
            "spring": $('.js-mod-name-list-spring').html(),
            "barrel": $('.js-mod-name-list-barrel').html(),
        };

        if (localStorage.getItem('weapons')) {
            var length = JSON.parse(localStorage.getItem('weapons')).length;
            var weaponsInStorage = localStorage.getItem('weapons');
            var parseData = JSON.parse(weaponsInStorage);
        }
        if (localStorage.getItem('weapons') && length < 11) {
            weapons = parseData;
            iter = length++;
        } else if (length >= 11) {
            console.log('max weapon to compare is: 10');
            weapons = parseData;
            iter = 11;
        } else {
            iter = 1;
            weapons = [];
        }
        console.log(length);
        weapons[iter] = weaponData;
        localStorage.setItem('weapons', JSON.stringify(weapons));
        if (weapons && localStorage.getItem('weapons')) {

            let compareName = $('#compareWeaponName1');
            if (compareName.length < 1) {
                compareTemplates.getStatisticsCompareLegend('.statisticsForTwoWeapons', 4);
                compareTemplates.getCompareStatistics('.statisticsForTwoWeapons', 1, 2);
                compareTemplates.getCompare2('.compareSpace', 1, 6);
                compareTemplates.getCompare2('.compareSpace', 2, 6);
                $('.compareWeaponDescriptionContainer2').addClass('pl-1');
            }
            insertData(1, weapons);
            if (length === 3) {
                compareTemplates.getCompareStatistics('.statisticsForTwoWeapons', 2, 2);
                insertData(2, weapons);

            } else if (length > 3 && iter <= 10) {
                console.log(length);
                $('.statisticsForTwoWeapons').empty();
                compareTemplates.getCompare2('.compareSpace', iter, 6);
                insertData(iter, weapons);
            }
        }
    });
});