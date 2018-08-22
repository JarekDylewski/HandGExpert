function BulletsToKillCalculation(damage) {
    this.damage = damage;
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
    this.getBulletsToKillHHeavySet = function (heavySet, multiplier) {
        let damageAbsorb = 1;
        damageAbsorb = damageAbsorb - 0.05 * heavySet;
        let dmg = Math.round((damage * damageAbsorb) * multiplier * 100) / 100;
        //petla sprawdzajaca ile trzeba pocisków do zabicia.
        let bulletsToKill = 0;
        for (var damageLoop = 0; damageLoop < 100; damageLoop += dmg) {
            bulletsToKill++
        }
        return bulletsToKill;
    }
}



