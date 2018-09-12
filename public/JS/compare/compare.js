$(document).ready(function () {
    function insertData(Id, weapons) {
        $('#damage' + Id).html(weapons[Id].dmg);
        $('#muzzleVelocity' + Id).html(weapons[Id].muzzleVelocit);
        $('#rateOfFire' + Id).html(weapons[Id].rateOfFire);
        $('#range' + Id).html(weapons[Id].rangeNear);
        $('#recoil1').html(weapons[Id].recoil);
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
    }

    let compareTemplates = new CompareTemplates();
    if (localStorage.getItem('weapons')) {
        let weapons = JSON.parse(localStorage.getItem('weapons'));
        let storageLengthVar = weapons.length;
        if (storageLengthVar <= 3) {
            compareTemplates.getCompareStatisticsForTwoWeapons('.statisticsForTwoWeapons');
            compareTemplates.getCompare2('.compareSpace', 1);
            compareTemplates.getCompare2('.compareSpace', 2);
            $('.compareWeaponDescriptionContainer2').addClass('pl-1');
            insertData(1, weapons);
            if (storageLengthVar > 2) {
                insertData(2, weapons);
            }
        } else {
            let i = 1;
            while (i <= storageLengthVar - 1) {
                compareTemplates.getCompare2('.compareSpace', i);
                i++;
            }
        }
    }

    $('#clear_compare').on('click', function () {
        localStorage.clear();
        $('.compareSpace').empty();
    });

    let iter = 0;
    let weapons = [];
    $('#compare_weapon').on('click', function () {
        let objectCopy = Object.assign({}, statistics);
        let weaponData = {
            "dmg": objectCopy.getDamage().toFixed(3),
            "dmgFar": objectCopy.getDamageFar().toFixed(3),
            "muzzleVelocit": Math.round(objectCopy.getMuzzleVelocity()),
            "rateOfFire": objectCopy.getRateOfFire().toFixed(1),
            "rangeNear": objectCopy.getRangeNear().toFixed(1),
            "recoil": objectCopy.getRecoilModifier().toFixed(2),
            "timeToKill": objectCopy.getTimeToKill().toFixed(1),
            "costs": objectCopy.getPricePerShot().toFixed(2),
            "spawnDelay": objectCopy.getSpawnDelay().toFixed(1),
            "reloadTime": objectCopy.getReloadTime().toFixed(1),
            "equipmentPoint": objectCopy.getEquipmentPoints(),
            "ammoCapacity": objectCopy.getAmmoCapacity(),
            "magazines": objectCopy.getMagazines(),
            "equipTime": objectCopy.getEquipTime(),
            "additionalFatigue": objectCopy.getAdditionalFatuque(),
            "aimingTime": Math.round(objectCopy.getAimingTime()),
            "useWhileRunning": objectCopy.getUseWhileRunning(),
            "name": $('#weaponName').html()
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
                compareTemplates.getCompareStatisticsForTwoWeapons('.statisticsForTwoWeapons');
                compareTemplates.getCompare2('.compareSpace', 1);
                compareTemplates.getCompare2('.compareSpace', 2);
                $('.compareWeaponDescriptionContainer2').addClass('pl-1');
            }
            insertData(1, weapons);
            if (length === 3) {
                insertData(2, weapons);

            } else if (length > 3 && iter <= 10) {
                console.log(length);
                $('.statisticsForTwoWeapons').empty();
                compareTemplates.getCompare2('.compareSpace', iter);
            }
        }
    });
});