$(document).ready(function () {
    $('#clear_compare').on('click', function () {
        localStorage.clear();
    });
    let iter = 0;
    let weapons = [];
    $('#compare_weapon').on('click', function () {
        let objectCopy = Object.assign({}, statistics);
        let weaponData = {
            "dmg": objectCopy.getDamage(),
            "dmgFar": objectCopy.getDamageFar(),
            "muzzleVelocit": objectCopy.getMuzzleVelocity(),
            "rateOfFire": objectCopy.getRateOfFire(),
            "rangeNear": objectCopy.getRangeNear(),
            "recoil": objectCopy.getRecoilModifier(),
            "timeToKill": objectCopy.getTimeToKill(),
            "costs": objectCopy.getPricePerShot(),
            "spawnDelay": objectCopy.getSpawnDelay(),
            "reloadTime": objectCopy.getReloadTime(),
            "equipmentPoint": objectCopy.getEquipmentPoints(),
            "ammoCapacity": objectCopy.getAmmoCapacity(),
            "magazines": objectCopy.getMagazines(),
            "equipTime": objectCopy.getEquipTime(),
            "additionalFatigue": objectCopy.getAdditionalFatuque(),
            "aimingTime": objectCopy.getAimingTime(),
            "useWhileRunning": objectCopy.getUseWhileRunning(),
            "name": $('#weaponName').html()
        };

        if (localStorage.getItem('weapons')) {
            length = JSON.parse(localStorage.getItem('weapons')).length;
            var weaponsInStorage = localStorage.getItem('weapons');
            var parseData = JSON.parse(weaponsInStorage);
        }
        if (localStorage.getItem('weapons') && length < 11) {
            weapons = parseData;
            iter = length++;
            console.log('juz tu cos jest')
        } else if (length >= 11) {
            console.log('max weapon to compare is: 10');
            weapons = parseData;
            iter = 11;
        } else {
            iter = 1;
            console.log('nic tu nie ma')
        }
        weapons[iter] = weaponData;
        localStorage.setItem('weapons', JSON.stringify(weapons));
        console.log(weapons[1].name);
        if (weapons /*&& length<=3*/) {
            $('#damage1').html(weapons[1].dmg);
            $('#muzzleVelocity1').html(weapons[1].muzzleVelocit);
            $('#rateOfFire1').html(weapons[1].rateOfFire);
            $('#range1').html(weapons[1].rangeNear);
            $('#recoil1').html(weapons[1].recoil);
            $('#timeToKill1').html(weapons[1].timeToKill);
            $('#costs1').html(weapons[1].costs);
            $('#spawnDelay1').html(weapons[1].spawnDelay);
            $('#reloadTime1').html(weapons[1].reloadTime);
            $('#equipmentPoint1').html(weapons[1].equipmentPoint);
            $('#ammoCapacity1').html(weapons[1].ammoCapacity);
            $('#equipTime1').html(weapons[1].equipTime);
            $('#magazines1').html(weapons[1].magazines);
            $('#additionalFatigue1').html(weapons[1].additionalFatigue);
            $('#aimingTime1').html(weapons[1].aimingTime);
            $('#useWhileRunning1').html(weapons[1].useWhileRunning);
            $('#compareWeaponName').html(weapons[1].name);
        }
    });
});