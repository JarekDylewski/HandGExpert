var statistics = new CollectingStatistics();
var modsAndGunSelectedByUser = new ModsAndGunSelectedByUser();
var DMGCalculations = new DamageCalculation;
$(document).ready(function () {
    $('#modMenu').on('click', 'a', function (e) {
        e.preventDefault();
        var $link = $(e.currentTarget);
        var clickedID = e.target.id;


        $.ajax({
            method: 'get',
            url: $link.attr('href')
        }).done(function (data) {
            modsAndGunSelectedByUser.setGunId(data.gunId);
            modsAndGunSelectedByUser.setAmmoId(data.ammoID[clickedID]);
            let category = '';
            switch (data.gunData['weaponcategoryid']) {
                case 11:
                    category = 'Semi-auto riffle';
                    break;

                case 12:
                    category = 'Bolt action riffle';
                    break;

                case 13:
                    category = 'Assault riffle';
                    break;

                case 14:
                    category = 'Light machine gun';
                    break;

                case 16:
                    category = 'Submachine gun';
                    break;

                case 17:
                    category = 'Handgun';
                    break;
            }
            modsAndGunSelectedByUser.setWeaponCategory(category);

            let content = $('.js-mod-name-list-ammo').html();
            let clickedContent = data.ammoData[clickedID].name;
            let ammoDamageMod = data.gunData.ammoDamageMod;
            let ammoSpeedMod = data.gunData.ammoSpeedMod;
            let ammoRangeNearMod = data.gunData.ammoRangeNearMod;
            let recoilTime = parseFloat(data.gunData.recoiltime);
            let chamberTime = parseFloat(data.gunData.chambertime);
            let rateOfFire = 60 / (recoilTime + chamberTime);
            let reloadTime = data.gunData.reloadtime;
            statistics.setReloadTime(reloadTime);
            let spawnDelay = data.gunData.managabilitycost;
            statistics.setSpawnDelay(spawnDelay);
            let equipmentPointsCost = data.gunData.equipmentPointsCost;
            statistics.setEquipmentPointsCost(equipmentPointsCost);
            let ammoCapacity = data.gunData.clipsize;
            statistics.setAmmoCapacity(ammoCapacity);
            let magazines = data.gunData.clipCount;
            statistics.setMagazines(magazines);
            let equiptime = data.gunData.equiptime;
            statistics.setEquipTime(equiptime);
            let additionalFatique = data.gunData.fatiquePoints;
            statistics.setAdditionalFatique(additionalFatique * 6);
            let aimingTime = data.gunData.precisionModeAcceleration;
            statistics.setAimingTime(1000 - (aimingTime) * 0.6);
            let useWhileRunning = "no";
            if (data.gunData.usewhilerunning == 0) {
                useWhileRunning = 'No'
            } else if (data.gunData.usewhilerunning == 1) {
                useWhileRunning = 'Yes'
            }
            statistics.setUseWhileRunning(useWhileRunning);
            let rangeMax = data.ammoData[clickedID].rangemax * data.gunData.ammoRangeMaxMod;
            statistics.setRangeMax(rangeMax);
            //dodanie etykiet podpowiedzi
            $(function () {
                $('[data-toggle="tooltip"]').tooltip()
            });

            if (content == clickedContent) {
                if (content == data.ammoData[0].name) {
                } else {
                    $('#0').trigger('click')
                }
            } else {
                $('.js-mod-name-list-ammo').html(data.ammoData[clickedID].name);
                //zaokraglanie do 2 miejsc po przecinku
                $('.DMG').html(Math.round((data.ammoData[clickedID].damage * ammoDamageMod) * 100) / 100);
                var velocity = (data.ammoData[clickedID].speed * ammoSpeedMod);
                statistics.setMuzzleVelocity(velocity);
                $('.velocity').html(Math.round((velocity) * 100) / 100);
                $('.rateOfFire').html(Math.round(rateOfFire * 100) / 100);
                statistics.setRateOfFire(rateOfFire);
                var rangeNear = (data.ammoData[clickedID].rangenear * ammoRangeNearMod);
                statistics.setRangeNear(rangeNear);
                $('.range').html(Math.round(rangeNear * 100) / 100);
                var rangeFar = (data.ammoData[clickedID].rangefar * ammoRangeNearMod);
                statistics.setRangeFar(rangeFar);
                //obliczanie precyzji (odrzut osi x)
                var swaystandmode = data.gunData.swaystandmode;
                let swayCrouchMode = data.gunData.swaycrouchmode;
                let swayProneMode = data.gunData.swaypronemode;
                var swayprecisionmodifier = data.gunData.swayprecisionmodifier;
                var baseconefire = parseFloat(data.gunData.baseconefire);
                var precision = (swaystandmode * swayprecisionmodifier) + baseconefire;
                var coneModifier = data.ammoData[clickedID].coneModifier;
                var coneWidth = precision * coneModifier;
                statistics.setConeModifier(coneModifier);
                $('.coneModifier').html(Math.round(coneWidth * 1000) / 1000);
                statistics.setSwayStandModeWeapon(swaystandmode);
                statistics.setSwayCrouchModeWeapon(swayCrouchMode);
                statistics.setSwayProneModeWeapon(swayProneMode);
                statistics.setSwayPrecisionModifierWeapon(swayprecisionmodifier);
                statistics.setBaseConefireWeapon(baseconefire);


                var camerarecoilright = data.gunData.camerarecoilright;
                var camerarecoilup = data.gunData.camerarecoilup;
                var camerarecoilvariance = data.gunData.camerarecoilvariance;
                var recoilModifier = data.ammoData[clickedID].recoilModifier;
                var recoil = (camerarecoilup * recoilModifier);
                statistics.setRecoilModifier(recoilModifier);
                statistics.setCameraRecoilRightWeapon(camerarecoilright);
                statistics.setCameraRecoilUpWeapon(camerarecoilup);
                statistics.setCameraRecoilVarianceWeapon(camerarecoilvariance);
                var damageLoop = parseFloat(data.ammoData[clickedID].damage * ammoDamageMod);
                var damage = parseFloat(data.ammoData[clickedID].damage * ammoDamageMod);
                statistics.setDamage(damage);
                var damageFar = parseFloat(data.ammoData[clickedID].damagefar * ammoDamageMod);
                statistics.setDamageFar(damageFar);
                var bulletsToKill = 0;
                //petla sprawdzajaca ile trzeba pocisków do zabicia.
                for (var damageLoop = 0; damageLoop < 100; damageLoop += damage) {
                    bulletsToKill++
                }
                var timeToKill = Math.round((((bulletsToKill) - 1) * 60) * 1000) / rateOfFire;
                statistics.setTimeToKill(timeToKill);
                $('.timeToKill').html(Math.round(timeToKill));
                var ammoPricePerShot = data.ammoData[clickedID].pricePerShot;
                var weaponPricePerShot = data.gunData.pricePerShot;
                statistics.setAmmoPricePerShot(ammoPricePerShot);
                statistics.setWeaponPricePerShot(weaponPricePerShot);
                let finalPricePerShot = statistics.getPricePerShot();
                $('.pricePerShot').html(finalPricePerShot);

                //czyszczenie aktywnych, niepotrzebnych przyciskow
                var arrayLength = data.ammoData.length;
                for (i = 0; i <= arrayLength; i++) {
                    $('.mod-menu-ammo-' + i).toggleClass('mod-active', false);
                    $('.dropdown-not-active-' + i).toggleClass('dropdown-active', false);
                }
                $('.mod-menu-ammo-' + clickedID).toggleClass('mod-active');
                $('.dropdown-not-active-' + clickedID).toggleClass('dropdown-active');
            }
        });


    });
});