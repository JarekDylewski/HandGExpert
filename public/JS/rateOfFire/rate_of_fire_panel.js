//TODO uwzględnić czas przeładowania rygla
$(document).ready(function () {
    $('.rate_of_fire_panel').on('click', function (e) {
        //button cleaning
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
        let Templates = new StatisticsPanelTemplates();
        Templates.getRateOfFirePanel('.statistics-panel');
    });
});