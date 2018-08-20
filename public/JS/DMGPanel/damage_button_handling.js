$(document).ready(function() {
    $('#statisticsPanelArea').on('click','button[id="DMG_panel_button"]',function() {
        let StatisticsTemplates = new StatisticsPanelTemplates();
        StatisticsTemplates.getDMGPanel('.statistics-panel');
    });
});