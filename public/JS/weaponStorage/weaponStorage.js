$(document).ready(function () {
    let template = new CompareTemplates();


    $.ajax({
        url: "/WeaponStorage",
        method: "get"
    }).done(function ($data) {
        let len = $data.storage.length;
        for (let i = 0; i < len; i++) {
            let gunId = $data.storage[i].gunId;
            let gunName = $data.storage[i].gunName;
            let ammoName = $data.storage[i].ammoName;
            let crosshairName = $data.storage[i].crosshairName;
            let triggerName = $data.storage[i].triggerName;
            let springName = $data.storage[i].springName;
            let barrelName = $data.storage[i].barrelName;

            //TODO przygodowac nowy szablon w oparciu o ponizszy
            template.getCompare2('.weaponStorageSpace', gunId, 2);

            $('img[id *="compareWeaponImg"]:eq(' + i + ')').attr('src', '/img/gunRibbonsByID/' + gunId + '.png');
            $('span[id *="compareWeaponName"]:eq(' + i + ')').html(gunName);
            $('div[id *="compareAmmoMod"]:eq(' + i + ')').html(ammoName);
            $('div[id *="compareCrosshairMod"]:eq(' + i + ')').html(crosshairName);
            $('div[id *="compareTriggerMod"]:eq(' + i + ')').html(triggerName);
            $('div[id *="compareSpringMod"]:eq(' + i + ')').html(springName);
            $('div[id *="compareBarrelMod"]:eq(' + i + ')').html(barrelName);
            $('#compareAmmoMod' + gunId)
        }
        $('div[class *= "compareWeaponDescriptionContainer"]').addClass('mr-4 mb-4');
    })
});