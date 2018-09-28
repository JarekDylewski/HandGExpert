$(document).ready(function () {

    function onLoadModSetter(modName, modNamesJSON) {
        let divClass = "mod-menu-" + modName + "-";
        let modsCollection = $("span[class *= " + divClass + "]");

        for (let i = 0; i < modsCollection.length; i++) {
            if (modNamesJSON.ammoName == $('.' + divClass + i).html()) {
                modsCollection.removeClass('mod-active');
                $('.' + divClass + i).trigger('click');
                $('.' + divClass + i).addClass('mod-active')
            }
            //TODO uzupelnic kiedy dotrze reszta danych.
        }
    }

    let path = location.href;
    $('.ammo-tab-list').trigger('click');

    let reg = /\?shareLink=/i;
    let regResult = reg.exec(path);

    if (regResult !== null) {
        var shareLink = path.substr(regResult.index + 11, 10);
        $.ajax({
            url: '/WeaponStorage/' + shareLink
        }).done(function (data) {

            onLoadModSetter('ammo', data)


        }).fail(function () {
            alert("Wrong link")
        })

    } else if (localStorage.getItem('lastSelectedWeapon') && JSON.parse(localStorage.getItem('lastSelectedWeapon')).gunName === $('#weaponName').html()) {
        let weapon = JSON.parse(localStorage.getItem('lastSelectedWeapon'));
        onLoadModSetter('ammo', weapon);

    } else {
        $('.mod-menu-ammo-0').trigger('click');
    }
});

$(window).on('unload', function () {
    let gunId = location.href.split('/')[4];
    let reg = /\D/;
    let match = gunId.match(reg);
    if (match) {
        gunId = gunId.substr(0, match.index);
    }
    let lastSelected = {
        "gunId": gunId,
        "gunName": $('#weaponName').html(),
        "ammoName": $('.js-mod-name-list-ammo').html(),
        "crosshairName": $('.js-mod-name-list-crosshair').html(),
        "triggerName": $('.js-mod-name-list-trigger').html(),
        "springName": $('.js-mod-name-list-spring').html(),
        "barrelName": $('.js-mod-name-list-barrel').html()
    };
    localStorage.setItem('lastSelectedWeapon', JSON.stringify(lastSelected));
});

$('#resetWeaponSettings').on('click', function () {
    $('.mod-menu-ammo-0').trigger('click');
    //TODO kiedy juz będzie reszta danych usunąć w tym przypadku klasę mod-active z reszty modyfikacji
    localStorage.removeItem('lastSelectedWeapon');
});