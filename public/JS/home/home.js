$(document).ready(function () {
    let weapon = JSON.parse(localStorage.getItem('lastSelectedWeapon'));
    if (localStorage.getItem('lastSelectedWeapon') && location.href === location.origin + "/") {
        location.replace(location.origin + "/GunList/" + weapon.gunId);
    }
});