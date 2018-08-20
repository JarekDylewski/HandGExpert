$(document).ready(function() {
    $('#statisticsPanelArea').on('click','button[id="bullets_to_kill_button"]',function() {
        let StatisticsTemplates = new StatisticsPanelTemplates();
        StatisticsTemplates.getBulletsToKillPanel('.statistics-panel');

    });
});