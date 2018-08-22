$(document).ready(function () {
    $('.range_panel').on('click', function () {

        let Templates = new StatisticsPanelTemplates();
        Templates.getRangePanel('.statistics-panel');
    })
});