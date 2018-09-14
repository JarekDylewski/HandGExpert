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
        if (i > 5) {
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
        let itemId = $(this).attr('id').substr(17, 1);
        $('.compareWeaponDescriptionContainer' + itemId + ',.statisticsFor' + itemId).css('background-color', 'rgba(255,103,93,0.05)');
    });
    compareDeleteItem.on('mouseout', function () {
        let itemId = $(this).attr('id').substr(17, 1);
        $('.compareWeaponDescriptionContainer' + itemId + ',.statisticsFor' + itemId).css('background-color', '');
    })
});