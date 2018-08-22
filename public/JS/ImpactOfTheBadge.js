function ImpactOfTheBadge() {
    // badgeLevel:
    // 0 - none
    // 1 - bronze
    // 2 - silver
    // 3 - gold
    this.getFastReloadImpact = function (reloadTime, badgeLevel) {
        let RT = reloadTime;
        let BL = badgeLevel;
        let finalReloadTime = RT * (1 - (BL * 0.05));
        // console.log(finalReloadTime);
        return finalReloadTime;
    }
}