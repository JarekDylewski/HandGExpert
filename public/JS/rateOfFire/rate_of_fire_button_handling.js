$(document).ready(function () {
    $('#statisticsPanelArea').on('click', 'button[id="rate_of_fire_button"]', function () {
        let StatisticsTemplates = new StatisticsPanelTemplates();
        StatisticsTemplates.getRateOfFirePanel('.statistics-panel');
    });
});