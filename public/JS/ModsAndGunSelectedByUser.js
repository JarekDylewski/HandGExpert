function ModsAndGunSelectedByUser() {
    this.weaponCategory = null;
    this.gunId = 0;
    this.ammoId = 0;
    this.crosshairId = 0;
    this.triggerId = 0;
    this.springId = 0;
    this.barrelId = 0;

    this.setWeaponCategory = function (category) {
        this.weaponCategory = category;
    };

    this.getWeaponCategory = function () {
        return this.weaponCategory;
    };

    this.setGunId = function (Id) {
        this.gunId = Id;
    };

    this.getGunId = function () {
        return this.gunId;
    };

    this.setAmmoId = function (Id) {
        this.ammoId = Id;
    };

    this.getAmmoId = function () {
        return this.ammoId;
    };

    this.setCrosshairId = function (Id) {
        this.crosshairId = Id;
    };

    this.getCrosshairId = function () {
        return this.crosshairId;
    };

    this.setTriggerId = function (Id) {
        this.triggerId = Id;
    };

    this.getTriggerId = function () {
        return this.triggerId;
    };

    this.setSpringId = function (Id) {
        this.springId = Id;
    };

    this.getSpringId = function () {
        return this.springId;
    };

    this.setBarrelId = function (Id) {
        this.barrelId = Id;
    };

    this.getBarrelId = function () {
        return this.barrelId;
    };
}