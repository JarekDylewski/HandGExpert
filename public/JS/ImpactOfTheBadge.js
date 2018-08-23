function ImpactOfTheBadge() {
    // badgeLevel:
    // 0 - none
    // 1 - bronze
    // 2 - silver
    // 3 - gold
    this.getFastReloadImpact = function (reloadTime, badgeLevel) {
        return reloadTime * (1 - (badgeLevel * 0.05));
    }
}