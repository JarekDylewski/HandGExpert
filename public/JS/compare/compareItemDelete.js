$(document).ready(function () {

    let fathersDeleteButtons = $('.compareWeaponDesc1, .compareWeaponDesc2');
    fathersDeleteButtons.on('mouseover', 'button[id *= "compareDeleteItem"]', function () {
        let itemId = $(this).attr('id').substr(17, 2);
        $('.compareWeaponDescriptionContainer' + itemId + ',.statisticsFor' + itemId).children().css('background-color', 'rgba(255,103,93,0.05)');
    });

    fathersDeleteButtons.on('mouseout', 'button[id *= "compareDeleteItem"]', function () {
        let itemId = $(this).attr('id').substr(17, 2);
        $('.compareWeaponDescriptionContainer' + itemId + ',.statisticsFor' + itemId).children().css('background-color', '');
    });

    fathersDeleteButtons.on('click', 'button[id *= "compareDeleteItem"]', function (e) {

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
                    let descToCut = $('.compareWeaponDesc2 div[class *= "compareWeaponDescriptionContainer"]:first-child');
                    let statisticsElemToCut = $('.compareStatistics2 div[class *= "statisticsFor"]:first-child');

                    descToCut.remove();
                    statisticsElemToCut.remove();
                    $('.compareWeaponDesc1').append(descToCut);
                    $('.compareStatistics1').append(statisticsElemToCut);

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
                    $('.compareLegend1').empty();
                    $('.statisticsForTwoWeapons').empty();
                }
            }
        }
    });
});