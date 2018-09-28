$(document).ready(function () {
    var dataForTemplates = new DataProviderForCompareTemplate();
    let compareStatistics = new CompareStatistics();

    function compareTwo() {
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

    let compareTemplates = new CompareTemplates();
    let buttons = `<button id="clear_compare" class="btn btn-outline-danger">clear</button>
                    <a class="btn btn-outline-info ml-2" href="/CompareWeapons">Compare All</a>`;

    let panelRefresh = function () {
        let weapons = JSON.parse(localStorage.getItem('weapons'));
        let storageLengthVar = weapons.length;
        if (storageLengthVar <= 3) {

            compareTemplates.getCompare2('.compareSpace', 1, 6);
            compareTemplates.getStatisticsCompareLegend('.statisticsForTwoWeapons', 4);
            compareTemplates.getCompareStatistics('.statisticsForTwoWeapons', 1, 2);
            dataForTemplates.insertData(1, weapons);

            if (storageLengthVar > 2) {
                compareTemplates.getCompare2('.compareSpace', 2, 6);
                compareTemplates.getCompareStatistics('.statisticsForTwoWeapons', 2, 2);
                dataForTemplates.insertData(2, weapons);
                compareTwo();
            }
        } else {
            let i = 1;
            while (i < storageLengthVar) {
                compareTemplates.getCompare2('.compareSpace', i, 6);
                dataForTemplates.insertData(i, weapons);
                i++;
            }
        }
    };

    if (localStorage.getItem('weapons')) {
        panelRefresh();
        $('.compare-nav').append(buttons);
    }

    let iter = 0;
    var length = 0;
    let weapons = [];
    $('#compare_weapon').on('click', function () {
        let weaponStatisticsCopy = Object.assign({}, statistics);
        let modsAndGunIdCopy = Object.assign({}, modsAndGunSelectedByUser);
        let weaponData = {
            "gunId": modsAndGunIdCopy.getGunId(),
            "ammoId": modsAndGunIdCopy.getAmmoId(),
            "dmg": weaponStatisticsCopy.getDamage().toFixed(3),
            "dmgFar": weaponStatisticsCopy.getDamageFar().toFixed(3),
            "muzzleVelocity": Math.round(weaponStatisticsCopy.getMuzzleVelocity()),
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
            length = JSON.parse(localStorage.getItem('weapons')).length;
            var weaponsInStorage = localStorage.getItem('weapons');
            var parseData = JSON.parse(weaponsInStorage);
        }
        if (localStorage.getItem('weapons') && length <= 11) {
            weapons = parseData;
            iter = length++;

        } else if (length >= 11) {
            iter = 11;
            if (!localStorage.getItem('weapons')) {
                iter = 1;
                weapons = [];
            }
        } else {
            iter = 1;
            weapons = [];
        }
        if (iter < 11) {
            weapons[iter] = weaponData;
        }

        localStorage.setItem('weapons', JSON.stringify(weapons));
        if (weapons && localStorage.getItem('weapons')) {
            let compareName = $('#compareWeaponName1');
            if (compareName.length < 1) {

                if (!$('#clear_compare').length > 0) {
                    $('.compare-nav').append(buttons);
                }

                if ($('.statisticsLegend').length === 0) {
                    compareTemplates.getStatisticsCompareLegend('.statisticsForTwoWeapons', 4);
                }
                compareTemplates.getCompareStatistics('.statisticsForTwoWeapons', 1, 2);
                compareTemplates.getCompare2('.compareSpace', 1, 6);
                //compareTemplates.getCompare2('.compareSpace', 2, 6);
            }
            dataForTemplates.insertData(1, weapons);
            if (iter === 2) {
                if (!$('.compareWeaponDescriptionContainer2').length > 0) {
                    compareTemplates.getCompare2('.compareSpace', 2, 6);
                    compareTemplates.getCompareStatistics('.statisticsForTwoWeapons', 2, 2);
                    dataForTemplates.insertData(2, weapons);
                }
                compareTwo();


            } else if (length > 3 && iter <= 10) {
                console.log(length);
                $('.statisticsForTwoWeapons').empty();
                compareTemplates.getCompare2('.compareSpace', iter, 6);
                dataForTemplates.insertData(iter, weapons);
                $('.compareSpace').empty();
                $('.comparePanelForTwoWeapons').empty();
                panelRefresh();
            }


        }
    });

    $('.compare-nav').on('click', '#clear_compare', function () {
        localStorage.removeItem('weapons');
        $('.compareSpace').empty();
        $('.statisticsForTwoWeapons').empty();
        length = 0;
    });
});