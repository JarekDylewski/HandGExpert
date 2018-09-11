$(document).ready(function () {
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
            "useWhileRunning": objectCopy.getUseWhileRunning()
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

        //localStorage.clear();
    });
});