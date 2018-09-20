$(document).ready(function () {
    $('#addWeaponToStorage').on('click', function (e) {
        e.preventDefault();

        $.ajax({
            url: $(e.currentTarget).attr('href'),
            method: "get",
            dataType: 'json',
            data: {
                weaponCategory: modsAndGunSelectedByUser.getWeaponCategory(),
                gunId: modsAndGunSelectedByUser.getGunId(),
                ammoId: modsAndGunSelectedByUser.getAmmoId(),
                crosshairId: modsAndGunSelectedByUser.getCrosshairId(),
                triggerId: modsAndGunSelectedByUser.getTriggerId(),
                springId: modsAndGunSelectedByUser.getSpringId(),
                barrelId: modsAndGunSelectedByUser.getBarrelId()
            }
        }).done(function ($data) {

            $('.gun-bar').before(`
                  <div class="row w-100 position-absolute weaponStorageAlert">
                        <div style="z-index: 10;" id="weaponStorageMessages" class="col-7 offset-5 alert alert-info border border-info">
                             
                        </div>
                   </div>
            `);

            let weaponStorage = $data.weaponStorage;
            $('#weaponStorageMessages').append(weaponStorage.message);

            setTimeout(function () {
                $('#weaponStorageMessages').animate({
                    opacity: 0.1
                }, 600, function () {
                    $('.weaponStorageAlert').remove();
                })
            }, 5000)
        })
    });
});