function DamageCalculation(damage) {
    this.damage = damage;
    let heavySet = 0;
    let multiplier = 1;
    // HeavySet argument:
    // 0 = no heavy set
    // 1 = bronze heavy set
    // 2 = silver heavy set
    // 3 = gold heavy set
    // Multiplier argument
    // head - 4
    // body - 1
    // arms - 0.5
    // legs - 0.8
    /**
     *
     * @param {number} heavySet  0 = no heavy set, 1 = bronze heavy set, 2 = silver heavy set, 3 = gold heavy set
     * @param {number} multiplier  head = 4, body = 1, arms = 0.5, legs = 0.8
     * @returns {number} damage
     */
    this.getDamageHHeavySet = function (heavySet, multiplier) {
        var damageAbsorb = 1;
        damageAbsorb = damageAbsorb - 0.05 * heavySet;
        var dmg = Math.round((damage * damageAbsorb) * multiplier * 100) / 100;
        return dmg;
    };
    this.setHeavySet = function (heavyS) {
        heavySet = heavyS;
    };
    this.getHeavySet = function () {
        return heavySet;
    };
    this.setBodyHit = function (multiplierBodyPart) {
        multiplier = multiplierBodyPart;
    };
    this.getBodyHit = function f() {
        return multiplier;
    };

}
