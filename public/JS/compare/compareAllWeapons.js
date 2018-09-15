$(document).ready(function () {
    var dataForTemplates = new DataProviderForCompareTemplate();
    if (localStorage.getItem('weapons')) {

        var colors = [
            // '',
            '#cd4a22',
            '#db6831',
            '#e28743',
            '#dfb562',
            '#e0d681',
            '#feffd9',
            '#aac599',
            '#90bc85',
            '#73b43e',
            '#00873d'
        ];
        colors.reverse();

        let compareTemplates = new CompareTemplates();
        let weapons = JSON.parse(localStorage.getItem('weapons'));
        let storageLengthVar = weapons.length;

        let i = 1;
        while (i < storageLengthVar) {
            if (i <= 5) {
                compareTemplates.getCompare2('.compareWeaponDesc1', i, 2);
                compareTemplates.getCompareStatistics('.compareStatistics1', i, 2)


            } else {
                compareTemplates.getCompare2('.compareWeaponDesc2', i, 2);
                compareTemplates.getCompareStatistics('.compareStatistics2', i, 2)
            }

            dataForTemplates.insertData(i, weapons);
            i++;
        }
        if (i >= 5) {
            compareTemplates.getStatisticsCompareLegend('.compareLegend2', 12);
        }
        compareTemplates.getStatisticsCompareLegend('.compareLegend1', 12);
        if ($('.compareWeaponDescriptionContainer11')) {
            $('.compareWeaponDescriptionContainer11').remove();
            $('.statisticsFor11').remove();
        }
        let compareStatistics = new CompareStatistics();
        compareStatistics.compareAllStatistics(weapons, 'dmg', '#damage', colors);
        compareStatistics.compareAllStatistics(weapons, 'muzzleVelocity', '#muzzleVelocity', colors);
        compareStatistics.compareAllStatistics(weapons, 'rateOfFire', '#rateOfFire', colors);
        compareStatistics.compareAllStatistics(weapons, 'rangeNear', '#range', colors);
        compareStatistics.compareAllStatistics(weapons, 'recoil', '#recoil', colors, 'less');
        compareStatistics.compareAllStatistics(weapons, 'timeToKill', '#timeToKill', colors, 'less');
        compareStatistics.compareAllStatistics(weapons, 'costs', '#costs', colors, 'less');
        compareStatistics.compareAllStatistics(weapons, 'spawnDelay', '#spawnDelay', colors, 'less');
        compareStatistics.compareAllStatistics(weapons, 'reloadTime', '#reloadTime', colors, 'less');
        compareStatistics.compareAllStatistics(weapons, 'equipmentPoint', '#equipmentPoint', colors, 'less');
        compareStatistics.compareAllStatistics(weapons, 'ammoCapacity', '#ammoCapacity', colors);
        compareStatistics.compareAllStatistics(weapons, 'equipTime', '#equipTime', colors, 'less');
        compareStatistics.compareAllStatistics(weapons, 'magazines', '#magazines', colors);
        compareStatistics.compareAllStatistics(weapons, 'additionalFatigue', '#additionalFatigue', colors, 'less');
        compareStatistics.compareAllStatistics(weapons, 'aimingTime', '#aimingTime', colors, 'less');
        for (let i = 0; i < storageLengthVar; i++) {
            if ($('#useWhileRunning' + i).html() == "Yes") {
                $('#useWhileRunning' + i).addClass('text-success')
            } else {
                $('#useWhileRunning' + i).addClass('text-danger')
            }
        }
    }

    let compareDeleteItem = $('.compareDeleteItem');
    compareDeleteItem.on('mouseover', function () {
        let itemId = $(this).attr('id').substr(17, 2);
        $('.compareWeaponDescriptionContainer' + itemId + ',.statisticsFor' + itemId).css('background-color', 'rgba(255,103,93,0.05)');
    });

    compareDeleteItem.on('mouseout', function () {
        let itemId = $(this).attr('id').substr(17, 2);
        $('.compareWeaponDescriptionContainer' + itemId + ',.statisticsFor' + itemId).css('background-color', '');
    });

    compareDeleteItem.on('click', function (e) {
        let allContainers = $('div[class *= "compareWeaponDescriptionContainer"]');
        let targetContainer = e.target.parentElement.parentElement.parentElement;
        let itemId = $(this).attr('id').substr(17, 2);
        let i;
        for (i = 0; i < allContainers.length; i++) {
            if (targetContainer.getAttribute('class') === allContainers[i].getAttribute('class')) {
                $('.compareWeaponDescriptionContainer' + itemId + ',.statisticsFor' + itemId).animate({
                    opacity: 0.1,
                    bottom: "15rem",
                }, 300, function () {
                    this.remove()
                });

                if (i < 5) {
                    //TODO dokonczyc przenoszenie elementu
                    let elemToCut = $('.compareWeaponDesc2 div[class *= "compareWeaponDescriptionContainer"]:first-child');
                    console.log(elemId.getCla);
                    let statisticsElemToCut = $('.statisticsFor' + elemId);
                    elemToCut.remove();
                    statisticsElemToCut.remove();

                    console.log(' ten element trzeba przeniesc' + elemToCut)
                }


                let weaponsInStorage = localStorage.getItem('weapons');
                let weapons = JSON.parse(weaponsInStorage);
                weapons[i + 1] = undefined;

                let weaponsToSave = [];
                weaponsToSave[0] = undefined;
                for (let i = 1; i < weapons.length; i++) {
                    if (weapons[i] !== undefined) {
                        weaponsToSave.push(weapons[i])
                    }
                }

                localStorage.clear();
                localStorage.setItem('weapons', JSON.stringify(weaponsToSave));

                if (allContainers.length < 7) {
                    $('.compareLegend2').empty()
                }

                if (weaponsToSave.length <= 1) {
                    localStorage.clear();
                    $('.compareLegend1').empty()
                }
            }
        }

        // if(targetContainer.getAttribute('class') === $("div[class *= 'compareWeaponDescriptionContainer']:eq(0)").attr('class')){
        //     console.log('===')
        // }
        // if ($('.compareWeaponDescriptionContainer1').attr('id') == $('.compareWeaponDescriptionContainer1').attr('id')){
        //     console.log('test');
        // }
        //console.log($("div[class *= 'compareWeaponDescriptionContainer']:eq(0)"));

        // let itemId = $(this).attr('id').substr(17, 2);
        // $('.compareWeaponDescriptionContainer' + itemId + ',.statisticsFor' + itemId).animate({
        //     opacity: 0.1,
        //     bottom:"15rem",
        // },300, function () {
        //     this.remove()
        // });


        //location.reload();
    });
});