//TODO zastosowac wzorzec singleton
function CollectingStatistics()
{
    let DMG = 0;
    let DMGFar = 0;
    let MuzzleVelocity = 0;
    let rateOfFire = 0;
    let rangeNear = 0;
    let rangeFar = 0;
    let rangeMax = 0;
    let timeToKill = 0;
    //precision
    let coneModifier = 0;
    let swayStandModeWeapon = 0;
    let swayCrouchModeWeapon = 0;
    let swayProneModeWeapon = 0;
    let swayPrecisionModifierWeapon = 0;
    let baseConefireWeapon = 0;
    //stability
    let recoilModifier = 0;
    let cameraRecoilRightWeapon = 0;
    let cameraRecoilUpWeapon = 0;
    let cameraRecoilVarianceWeapon = 0;
    //for recoil panel
    let positionMode = 0;
    let whenAiming = 1;



    //price
    let pricePerShot = 0;
    let weaponPricePerShot = 0;
    let ammoPricePerShot = 0;
    let crosshairPricePerShot = 0;
    let triggerPricePerShot = 0;
    let springPricePerShot = 0;
    let barrelPricePerShot = 0;

    let reloadTime = 0;
    let spawnDelay = 0;
    let equipmentPoints = 0;
    let ammoCapacity = 0;
    let magazines = 0;
    let equipTime = 0;
    let additionalFatique = 0;
    let aimingTime = 0;
    let useWhileRunning = 0;
    let damageFarForDMGChart = 0;
    let damageNearForDMGChart = 0;
    //chart data
    let rangeForDMGChart = 0;

    this.setDamage = function (damage) {
        DMG = damage;
        return DMG;
    };
    this.getDamage = function () {
        return DMG;
    };
    this.setDamageFar = function (damage) {
        DMGFar = damage;
        return DMGFar;
    };
    this.getDamageFar = function () {
        return DMGFar;
    };
    this.setMuzzleVelocity = function (velocity) {
        MuzzleVelocity = velocity;
        return MuzzleVelocity;
    };
    this.getMuzzleVelocity = function () {
        return MuzzleVelocity;
    };
    this.setRateOfFire = function (rpm) {
        rateOfFire = rpm;
        return rateOfFire;
    };
    this.getRateOfFire = function () {
        return rateOfFire;
    };
    this.setRangeNear = function (range) {
        rangeNear = range;
        return rangeNear;
    };
    this.getRangeNear = function () {
        return rangeNear;
    };
    this.setRangeFar = function (range) {
        rangeFar = range;
        return rangeFar;
    };
    this.getRangeFar = function () {
        return rangeFar;
    };
    this.setRangeMax = function (range) {
        rangeMax = range;
        return rangeMax;
    };
    this.getRangeMax = function () {
        return rangeMax;
    };
    //Precision-----------------------------------------------------------------------------
    this.setConeModifier = function (modifier) {
        coneModifier = modifier;
        return coneModifier;
    };
    this.getConeModifier = function () {
        return coneModifier;
    };
    this.setRecoilModifier = function (modifier) {
        recoilModifier = modifier;
        return recoilModifier;
    };
    this.getRecoilModifier = function () {
        return recoilModifier;
    };
    this.setSwayStandModeWeapon = function (sway) {
        if(sway){ swayStandModeWeapon = sway
        }else{swayStandModeWeapon = 0;
            console.log('nie ustawiono swayStandModeWeapon')
        }
    };
    this.getSwayStandModeWeapon = function () {
        return swayStandModeWeapon;
    };
    this.setSwayCrouchModeWeapon = function (sway) {
        if(sway){ swayCrouchModeWeapon = sway
        }else{swayCrouchModeWeapon = 0;
            console.log('nie ustawiono swayCrouchModeWeapon')
        }
    };
    this.getSwayChrouchModeWeapon = function () {
        return swayCrouchModeWeapon;
    };
    this.setSwayProneModeWeapon = function (sway) {
        if(sway){ swayProneModeWeapon = sway
        }else{swayProneModeWeapon = 0;
            console.log('nie ustawiono swayProneModeWeapon')
        }
    };
    this.getSwayProneModeWeapon = function () {
        return swayProneModeWeapon;
    };
    this.setSwayPrecisionModifierWeapon = function (swayMod) {
        if(swayMod){ swayPrecisionModifierWeapon = swayMod
        }else{swayPrecisionModifierWeapon = 0;
            console.log('nie ustawiono swayPrecisionModifierWeapon')
        }
    };
    this.getSwayPrecisionModifierWeapon = function () {
        return swayPrecisionModifierWeapon;
    };
    this.setBaseConefireWeapon = function (baseConefire) {
        if(baseConefire){ baseConefireWeapon = baseConefire
        }else{baseConefireWeapon = 0;
            console.log('nie ustawiono baseConefireWeapon')
        }
    };
    this.getBaseConefireWeapon = function () {
        return baseConefireWeapon;
    };
    //recoil position/aiming
    this.setPositionMode = function (mode) {
        positionMode = mode;
    };
    this.getPositionMode = function () {
        return positionMode;
    };
    this.setWhenAiming = function (withOrWithoutAim) {
        whenAiming = withOrWithoutAim;
    };
    this.getWhenAiming = function () {
        return whenAiming;
    };
    //Stability----------------------------------------------------------------------
    this.setCameraRecoilRightWeapon = function (recoil) {
        if(recoil){ cameraRecoilRightWeapon = recoil
        }else{cameraRecoilRightWeapon = 0;
            console.log('nie ustawiono cameraRecoilRightWeapon')
        }
    };
    this.getCameraRecoilRightWeapon = function () {
        return cameraRecoilRightWeapon;
    };
    this.setCameraRecoilUpWeapon= function (recoil) {
        if(recoil){ cameraRecoilUpWeapon = recoil
        }else{cameraRecoilUpWeapon = 0;
            console.log('nie ustawiono cameraRecoilUpWeapon')
        }
    };
    this.getCameraRecoilUpWeapon = function () {
        return cameraRecoilUpWeapon;
    };
    this.setCameraRecoilVarianceWeapon = function (recoil) {
        if(recoil){ cameraRecoilVarianceWeapon = recoil
        }else{cameraRecoilVarianceWeapon = 0;
            console.log('nie ustawiono cameraRecoilVarianceWeapon')
        }
    };
    this.getCameraRecoilVarianceWeapon = function () {
        return cameraRecoilVarianceWeapon;
    };

    //-------------------------------------------------------------------------------
    this.setTimeToKill = function (ttk) {
        timeToKill = ttk;
        return timeToKill;
    };
    this.getTimeToKill = function () {
        return timeToKill;
    };
    // this.setPricePerShot = function (price) {
    //     pricePerShot = parseFloat(price);
    //     return pricePerShot;
    // };
    //Price Per shot mods
    this.setWeaponPricePerShot = function (price) {
        if(price){return weaponPricePerShot = price
        }else{return weaponPricePerShot = 0}
    };
    this.getWeaponPricePerShot = function () {
        return weaponPricePerShot;
    };
    this.setAmmoPricePerShot = function (price) {
        if(price){ ammoPricePerShot = price
        }else{ ammoPricePerShot = 0}
    };
    this.getAmmoPricePerShot = function () {
        return ammoPricePerShot;
    };
    this.setCrosshairPricePerShot = function (price) {
        if(price){ crosshairPricePerShot = price
        }else{ crosshairPricePerShot = 0}
    };
    this.getCrosshairPricePerShot = function () {
        return crosshairPricePerShot;
    };
    this.setTriggerPricePerShot = function () {
        if(price){ triggerPricePerShot = price
        }else{ triggerPricePerShot = 0}
    };
    this.getTriggerPricePerShot = function () {
        return triggerPricePerShot;
    };
    this.setSpringPricePerShot = function (price) {
        if(price){ springPricePerShot = price
        }else{ springPricePerShot = 0}
    };
    this.getSpringPricePerShot = function () {
        return springPricePerShot;
    };
    this.setBarrelPricePerShot = function (price) {
        if(price){ barrelPricePerShot = price
        }else{ barrelPricePerShot = 0}
    };
    this.getBarrelPricePerShot = function () {
        return barrelPricePerShot;
    };
    //  Przyklad sumowania modyfikacji i amunicji
    this.getPricePerShot = function () {
        let pricePerShotFinal = parseFloat(ammoPricePerShot) + parseFloat(weaponPricePerShot) + parseFloat(crosshairPricePerShot) + parseFloat(triggerPricePerShot) + parseFloat(springPricePerShot) + parseFloat(barrelPricePerShot);
        return Math.round(pricePerShotFinal*1000)/1000;
    };
    this.setReloadTime = function (rt) {
        reloadTime=rt;
        return reloadTime;
    };
    this.getReloadTime = function () {
        return reloadTime;
    };
    this.setSpawnDelay = function (delay) {
        spawnDelay=delay;
        return spawnDelay;
    };
    this.getSpawnDelay = function () {
        return spawnDelay;
    }
    this.setEquipmentPointsCost = function (eqp) {
        equipmentPoints = eqp;
        return equipmentPoints;
    };
    this.getEquipmentPoints = function () {
        return equipmentPoints;
    };
    this.setAmmoCapacity = function (aCapacity) {
        ammoCapacity = aCapacity;
        return ammoCapacity;
    };
    this.getAmmoCapacity = function () {
        return ammoCapacity;
    };
    this.setMagazines = function (clipsize) {
        magazines = clipsize;
        return magazines;
    };
    this.getMagazines = function () {
        return magazines;
    };
    this.setEquipTime = function (eqTime) {
        equipTime = eqTime;
        return equipTime;
    };
    this.getEquipTime = function () {
        return equipTime;
    };
    this.setAdditionalFatique = function (afatique) {
        additionalFatique = afatique;
        return additionalFatique;
    };
    this.getAdditionalFatuque = function () {
        return additionalFatique;
    };
    this.setAimingTime = function (time) {
        aimingTime = time;
        return aimingTime;
    };
    this.getAimingTime = function () {
        return aimingTime;
    };
    this.setUseWhileRunning = function (useWR) {
        useWhileRunning = useWR;
        return useWhileRunning;
    };
    this.getUseWhileRunning = function () {
        return useWhileRunning;
    };
//------------------ Chart data
    this.setRangeForDMGChart = function (range) {
        rangeForDMGChart = range;
        return rangeForDMGChart;
    };
    this.getRangeForDMGChart = function () {
        return rangeForDMGChart;
    };
    this.setDamageFarForDMGChart = function (damage) {
        damageFarForDMGChart = damage;
        return damageFarForDMGChart;
    };
    this.getDamageFarForDMGChart = function () {
        return damageFarForDMGChart;
    };
    this.setDamageNearForDMGChart = function (damage) {
        damageNearForDMGChart = damage;
        return damageNearForDMGChart;
    };
    this.getDamageNearForDMGChart = function () {
        return damageNearForDMGChart;
    };
//---------------- Rate of fire button Data
//     this.setRateOfFireForRPMButton(rpm){
//         rateOfFireForRPMButton = rpm;
//     }
}

// var CollectingStatistics = (function () {
//     var instance = undefined;
//     function innerInit() {
//         let DMG = 0;
//         let DMGFar = 0;
//         let MuzzleVelocity = 0;
//         let rateOfFire = 0;
//         let rangeNear = 0;
//         let rangeFar = 0;
//         let rangeMax = 0;
//         let timeToKill = 0;
//         //precision
//         let coneModifier = 0;
//         let swayStandModeWeapon = 0;
//         let swayCrouchModeWeapon = 0;
//         let swayProneModeWeapon = 0;
//         let swayPrecisionModifierWeapon = 0;
//         let baseConefireWeapon = 0;
//         //stability
//         let recoilModifier = 0;
//         let cameraRecoilRightWeapon = 0;
//         let cameraRecoilUpWeapon = 0;
//         let cameraRecoilVarianceWeapon = 0;
//         //for recoil panel
//         let positionMode = 0;
//         let whenAiming = 1;
//
//
//
//         //price
//         let pricePerShot = 0;
//         let weaponPricePerShot = 0;
//         let ammoPricePerShot = 0;
//         let crosshairPricePerShot = 0;
//         let triggerPricePerShot = 0;
//         let springPricePerShot = 0;
//         let barrelPricePerShot = 0;
//
//         let reloadTime = 0;
//         let spawnDelay = 0;
//         let equipmentPoints = 0;
//         let ammoCapacity = 0;
//         let magazines = 0;
//         let equipTime = 0;
//         let additionalFatique = 0;
//         let aimingTime = 0;
//         let useWhileRunning = 0;
//         let damageFarForDMGChart = 0;
//         let damageNearForDMGChart = 0;
//         //chart data
//         let rangeForDMGChart = 0;
//
//         this.setDamage = function (damage) {
//             DMG = damage;
//             return DMG;
//         };
//         this.getDamage = function () {
//             return DMG;
//         };
//         this.setDamageFar = function (damage) {
//             DMGFar = damage;
//             return DMGFar;
//         };
//         this.getDamageFar = function () {
//             return DMGFar;
//         };
//         this.setMuzzleVelocity = function (velocity) {
//             MuzzleVelocity = velocity;
//             return MuzzleVelocity;
//         };
//         this.getMuzzleVelocity = function () {
//             return MuzzleVelocity;
//         };
//         this.setRateOfFire = function (rpm) {
//             rateOfFire = rpm;
//             return rateOfFire;
//         };
//         this.getRateOfFire = function () {
//             return rateOfFire;
//         };
//         this.setRangeNear = function (range) {
//             rangeNear = range;
//             return rangeNear;
//         };
//         this.getRangeNear = function () {
//             return rangeNear;
//         };
//         this.setRangeFar = function (range) {
//             rangeFar = range;
//             return rangeFar;
//         };
//         this.getRangeFar = function () {
//             return rangeFar;
//         };
//         this.setRangeMax = function (range) {
//             rangeMax = range;
//             return rangeMax;
//         };
//         this.getRangeMax = function () {
//             return rangeMax;
//         };
//         //Precision-----------------------------------------------------------------------------
//         this.setConeModifier = function (modifier) {
//             coneModifier = modifier;
//             return coneModifier;
//         };
//         this.getConeModifier = function () {
//             return coneModifier;
//         };
//         this.setRecoilModifier = function (modifier) {
//             recoilModifier = modifier;
//             return recoilModifier;
//         };
//         this.getRecoilModifier = function () {
//             return recoilModifier;
//         };
//         this.setSwayStandModeWeapon = function (sway) {
//             if(sway){ swayStandModeWeapon = sway
//             }else{swayStandModeWeapon = 0;
//                 console.log('nie ustawiono swayStandModeWeapon')
//             }
//         };
//         this.getSwayStandModeWeapon = function () {
//             return swayStandModeWeapon;
//         };
//         this.setSwayCrouchModeWeapon = function (sway) {
//             if(sway){ swayCrouchModeWeapon = sway
//             }else{swayCrouchModeWeapon = 0;
//                 console.log('nie ustawiono swayCrouchModeWeapon')
//             }
//         };
//         this.getSwayChrouchModeWeapon = function () {
//             return swayCrouchModeWeapon;
//         };
//         this.setSwayProneModeWeapon = function (sway) {
//             if(sway){ swayProneModeWeapon = sway
//             }else{swayProneModeWeapon = 0;
//                 console.log('nie ustawiono swayProneModeWeapon')
//             }
//         };
//         this.getSwayProneModeWeapon = function () {
//             return swayProneModeWeapon;
//         };
//         this.setSwayPrecisionModifierWeapon = function (swayMod) {
//             if(swayMod){ swayPrecisionModifierWeapon = swayMod
//             }else{swayPrecisionModifierWeapon = 0;
//                 console.log('nie ustawiono swayPrecisionModifierWeapon')
//             }
//         };
//         this.getSwayPrecisionModifierWeapon = function () {
//             return swayPrecisionModifierWeapon;
//         };
//         this.setBaseConefireWeapon = function (baseConefire) {
//             if(baseConefire){ baseConefireWeapon = baseConefire
//             }else{baseConefireWeapon = 0;
//                 console.log('nie ustawiono baseConefireWeapon')
//             }
//         };
//         this.getBaseConefireWeapon = function () {
//             return baseConefireWeapon;
//         };
//         //recoil position/aiming
//         this.setPositionMode = function (mode) {
//             positionMode = mode;
//         };
//         this.getPositionMode = function () {
//             return positionMode;
//         };
//         this.setWhenAiming = function (withOrWithoutAim) {
//             whenAiming = withOrWithoutAim;
//         };
//         this.getWhenAiming = function () {
//             return whenAiming;
//         };
//         //Stability----------------------------------------------------------------------
//         this.setCameraRecoilRightWeapon = function (recoil) {
//             if(recoil){ cameraRecoilRightWeapon = recoil
//             }else{cameraRecoilRightWeapon = 0;
//                 console.log('nie ustawiono cameraRecoilRightWeapon')
//             }
//         };
//         this.getCameraRecoilRightWeapon = function () {
//             return cameraRecoilRightWeapon;
//         };
//         this.setCameraRecoilUpWeapon= function (recoil) {
//             if(recoil){ cameraRecoilUpWeapon = recoil
//             }else{cameraRecoilUpWeapon = 0;
//                 console.log('nie ustawiono cameraRecoilUpWeapon')
//             }
//         };
//         this.getCameraRecoilUpWeapon = function () {
//             return cameraRecoilUpWeapon;
//         };
//         this.setCameraRecoilVarianceWeapon = function (recoil) {
//             if(recoil){ cameraRecoilVarianceWeapon = recoil
//             }else{cameraRecoilVarianceWeapon = 0;
//                 console.log('nie ustawiono cameraRecoilVarianceWeapon')
//             }
//         };
//         this.getCameraRecoilVarianceWeapon = function () {
//             return cameraRecoilVarianceWeapon;
//         };
//
//         //-------------------------------------------------------------------------------
//         this.setTimeToKill = function (ttk) {
//             timeToKill = ttk;
//             return timeToKill;
//         };
//         this.getTimeToKill = function () {
//             return timeToKill;
//         };
//         // this.setPricePerShot = function (price) {
//         //     pricePerShot = parseFloat(price);
//         //     return pricePerShot;
//         // };
//         //Price Per shot mods
//         this.setWeaponPricePerShot = function (price) {
//             if(price){return weaponPricePerShot = price
//             }else{return weaponPricePerShot = 0}
//         };
//         this.getWeaponPricePerShot = function () {
//             return weaponPricePerShot;
//         };
//         this.setAmmoPricePerShot = function (price) {
//             if(price){ ammoPricePerShot = price
//             }else{ ammoPricePerShot = 0}
//         };
//         this.getAmmoPricePerShot = function () {
//             return ammoPricePerShot;
//         };
//         this.setCrosshairPricePerShot = function (price) {
//             if(price){ crosshairPricePerShot = price
//             }else{ crosshairPricePerShot = 0}
//         };
//         this.getCrosshairPricePerShot = function () {
//             return crosshairPricePerShot;
//         };
//         this.setTriggerPricePerShot = function () {
//             if(price){ triggerPricePerShot = price
//             }else{ triggerPricePerShot = 0}
//         };
//         this.getTriggerPricePerShot = function () {
//             return triggerPricePerShot;
//         };
//         this.setSpringPricePerShot = function (price) {
//             if(price){ springPricePerShot = price
//             }else{ springPricePerShot = 0}
//         };
//         this.getSpringPricePerShot = function () {
//             return springPricePerShot;
//         };
//         this.setBarrelPricePerShot = function (price) {
//             if(price){ barrelPricePerShot = price
//             }else{ barrelPricePerShot = 0}
//         };
//         this.getBarrelPricePerShot = function () {
//             return barrelPricePerShot;
//         };
//         //  Przyklad sumowania modyfikacji i amunicji
//         this.getPricePerShot = function () {
//             let pricePerShotFinal = parseFloat(ammoPricePerShot) + parseFloat(weaponPricePerShot) + parseFloat(crosshairPricePerShot) + parseFloat(triggerPricePerShot) + parseFloat(springPricePerShot) + parseFloat(barrelPricePerShot);
//             return Math.round(pricePerShotFinal*1000)/1000;
//         };
//         this.setReloadTime = function (rt) {
//             reloadTime=rt;
//             return reloadTime;
//         };
//         this.getReloadTime = function () {
//             return reloadTime;
//         };
//         this.setSpawnDelay = function (delay) {
//             spawnDelay=delay;
//             return spawnDelay;
//         };
//         this.getSpawnDelay = function () {
//             return spawnDelay;
//         }
//         this.setEquipmentPointsCost = function (eqp) {
//             equipmentPoints = eqp;
//             return equipmentPoints;
//         };
//         this.getEquipmentPoints = function () {
//             return equipmentPoints;
//         };
//         this.setAmmoCapacity = function (aCapacity) {
//             ammoCapacity = aCapacity;
//             return ammoCapacity;
//         };
//         this.getAmmoCapacity = function () {
//             return ammoCapacity;
//         };
//         this.setMagazines = function (clipsize) {
//             magazines = clipsize;
//             return magazines;
//         };
//         this.getMagazines = function () {
//             return magazines;
//         };
//         this.setEquipTime = function (eqTime) {
//             equipTime = eqTime;
//             return equipTime;
//         };
//         this.getEquipTime = function () {
//             return equipTime;
//         };
//         this.setAdditionalFatique = function (afatique) {
//             additionalFatique = afatique;
//             return additionalFatique;
//         };
//         this.getAdditionalFatuque = function () {
//             return additionalFatique;
//         };
//         this.setAimingTime = function (time) {
//             aimingTime = time;
//             return aimingTime;
//         };
//         this.getAimingTime = function () {
//             return aimingTime;
//         };
//         this.setUseWhileRunning = function (useWR) {
//             useWhileRunning = useWR;
//             return useWhileRunning;
//         };
//         this.getUseWhileRunning = function () {
//             return useWhileRunning;
//         };
// //------------------ Chart data
//         this.setRangeForDMGChart = function (range) {
//             rangeForDMGChart = range;
//             return rangeForDMGChart;
//         };
//         this.getRangeForDMGChart = function () {
//             return rangeForDMGChart;
//         };
//         this.setDamageFarForDMGChart = function (damage) {
//             damageFarForDMGChart = damage;
//             return damageFarForDMGChart;
//         };
//         this.getDamageFarForDMGChart = function () {
//             return damageFarForDMGChart;
//         };
//         this.setDamageNearForDMGChart = function (damage) {
//             damageNearForDMGChart = damage;
//             return damageNearForDMGChart;
//         };
//         this.getDamageNearForDMGChart = function () {
//             return damageNearForDMGChart;
//         };
//     }
//     return {
//         initialize: function () {
//             if (!instance) {
//                 instance = innerInit();
//             }
//             return instance;
//         }
//     };
// })();
