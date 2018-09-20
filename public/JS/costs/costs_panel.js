$(document).ready(function () {
    $('.costs_panel').on('click', function (e) {
        let currentTarget = $(e.currentTarget);
        if (currentTarget.hasClass('btn-statistics-panel')) {
            //do nothing
        } else {
            $('div ul li[class*="list-item-statistics"]').removeClass('btn-statistics-panel');
            $(currentTarget).toggleClass('btn-statistics-panel');
        }
        //dodanie etykiet podpowiedzi
        $(function () {
            $('[data-toggle="tooltip"]').tooltip()
        });
        //template load
        let Templates = new StatisticsPanelTemplates();
        Templates.getCostsPanel('.statistics-panel');

        let weaponPricePerShot = statistics.getWeaponPricePerShot();
        let ammoPricePerShot = statistics.getAmmoPricePerShot();
        let crosshairPricePerShot = statistics.getCrosshairPricePerShot();
        let triggerPricePerShot = statistics.getTriggerPricePerShot();
        let springPricePerShot = statistics.getSpringPricePerShot();
        let barrelPricePerShot = statistics.getBarrelPricePerShot();

        let ammo = $('.js-mod-name-list-ammo').html();
        let crosshair = $('.js-mod-name-list-crosshair').html();
        let trigger = $('.js-mod-name-list-trigger').html();
        let spring = $('.js-mod-name-list-spring').html();
        let barrel = $('.js-mod-name-list-barrel').html();

        $('#mod_name_ammo').html(ammo);
        $('#mod_name_crosshair').html(crosshair);
        $('#mod_name_trigger').html(trigger);
        $('#mod_name_spring').html(spring);
        $('#mod_name_barrel').html(barrel);

        $('#weapon_costs').html(weaponPricePerShot);
        $('#ammo_costs').html(ammoPricePerShot);
        $('#crosshair_costs').html(crosshairPricePerShot);
        $('#trigger_costs').html(triggerPricePerShot);
        $('#spring_costs').html(springPricePerShot);
        $('#barrel_costs').html(barrelPricePerShot);

        let summary = parseFloat(weaponPricePerShot) + parseFloat(ammoPricePerShot) +
            parseFloat(crosshairPricePerShot) + parseFloat(triggerPricePerShot) + parseFloat(springPricePerShot);
        $('#summary_costs').html(Math.round(summary * 1000) / 1000);
    });
});