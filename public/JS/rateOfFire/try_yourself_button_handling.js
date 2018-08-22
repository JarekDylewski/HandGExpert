$(document).ready(function () {
    $('#statisticsPanelArea').on('click', 'button[id="rate_of_fire_try_yourself_button"]', function () {
        let statisticsTemplates = new StatisticsPanelTemplates();
        statisticsTemplates.getRateOfFireTryYourselfPanel('.statistics-panel');
        $(document).ready(function () {
            let Impact = new ImpactOfTheBadge();
            let rateOfFire = Math.round((statistics.getRateOfFire() / 100) * 100);
            let magazineSize = statistics.getAmmoCapacity();
            let reloadTime = Math.round((statistics.getReloadTime() / 100) * 100);

            function rateOfFireCalculations(fastReloadBadgeLvl) {
                let reloadTimeHFastReload = Impact.getFastReloadImpact(reloadTime, fastReloadBadgeLvl);
                reloadTimeHFastReload = Math.round((reloadTimeHFastReload) * 100) / 100;
                $('#reloadTime').html(reloadTimeHFastReload);

                let endOfAmmunation = Math.round((((magazineSize / rateOfFire) * 60) * 100)) / 100;
                for (let i = 1; i <= 3; i++) {
                    let arg1 = Math.round((endOfAmmunation * i) * 100) / 100;
                    let arg2 = (Math.round(((reloadTimeHFastReload) * i) * 100) / 100);
                    $('#timeWFR' + i).html(Math.round((arg1 + arg2) * 100) / 100);
                }
            }

            //Default values
            let fastReloadBadge = 3;
            $('#reloadTime').html(Math.round((Impact.getFastReloadImpact(reloadTime, fastReloadBadge) * 100)) / 100);
            // 0 - no fast reload | 1 - bronze fastReload | 2 - silver fast reload | 3 - gold fast reload

            //no fast reload
            $('#noFastReloadRadio').on('click', function () {
                fastReloadBadge = 0;
                $('#reloadTime').html(Math.round((Impact.getFastReloadImpact(reloadTime, fastReloadBadge) * 100)) / 100);
            });
            //bronze fast reload
            $('#bronzeFastReloadRadio').on('click', function () {
                fastReloadBadge = 1;
                $('#reloadTime').html(Math.round((Impact.getFastReloadImpact(reloadTime, fastReloadBadge) * 100)) / 100);
            });
            //silver fast reload
            $('#silverFastReloadRadio').on('click', function () {
                fastReloadBadge = 2;
                $('#reloadTime').html(Math.round((Impact.getFastReloadImpact(reloadTime, fastReloadBadge) * 100)) / 100);
            });
            //gold fast reload
            $('#goldFastReloadRadio').on('click', function () {
                fastReloadBadge = 3;
                $('#reloadTime').html(Math.round((Impact.getFastReloadImpact(reloadTime, fastReloadBadge) * 100)) / 100);
            });

            $('#magazines_number_input').on('keypress', function () {
                setTimeout(function () {
                    let magazines = $('#magazines_number_input').val();
                    let reloadTimeHFastReload = Impact.getFastReloadImpact(reloadTime, fastReloadBadge);
                    let endOfAmmunation = ((magazineSize - 1) / rateOfFire) * 60;
                    endOfAmmunation = Math.round(endOfAmmunation * 100) / 100;
                    if ($('#reloadTimeYesOrNo').prop('checked')) {
                        reloadTimeHFastReload = Impact.getFastReloadImpact(reloadTime, fastReloadBadge);
                    } else {
                        reloadTimeHFastReload = 0;
                    }
                    let arg1 = Math.round((endOfAmmunation * magazines * 100)) / 100;
                    let arg2 = (Math.round(((reloadTimeHFastReload) * magazines) * 100) / 100);
                    $('#magazine_number_RPM_cout').html(Math.round((arg1 + arg2) * 100) / 100);
                }, 300);

            });
            $('#bullets_number_input').on('keypress', function () {
                setTimeout(function () {
                    let bullets = $('#bullets_number_input').val() - 1;
                    let magazines = -1;
                    // obliczenia sprawdzające ile będzie przeładowań
                    for (let i = 0; i <= bullets; i++) {
                        if (i % magazineSize == 0) {
                            magazines++;
                            console.log(magazines);
                        }
                    }
                    let reloadTimeHFastReload = Impact.getFastReloadImpact(reloadTime, fastReloadBadge);
                    let endOfAmmunation = (bullets / rateOfFire) * 60;
                    endOfAmmunation = Math.round(endOfAmmunation * 100) / 100;
                    if ($('#reloadTimeYesOrNo').prop('checked')) {
                        reloadTimeHFastReload = Impact.getFastReloadImpact(reloadTime, fastReloadBadge);
                    } else {
                        reloadTimeHFastReload = 0;
                    }
                    let arg1 = Math.round((endOfAmmunation * 100)) / 100;
                    let arg2 = (Math.round(((reloadTimeHFastReload) * magazines) * 100) / 100);
                    $('#bullets_number_RPM_cout').html(Math.round((arg1 + arg2) * 100) / 100);
                }, 300);
            });
        })
    });
});