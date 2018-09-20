$(document).ready(function () {
    $('.DMG_panel').on('click', function (e) {

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
        let StatisticsDMGPanel = new StatisticsPanelTemplates();
        StatisticsDMGPanel.getDMGPanel('.statistics-panel');
    });
});
