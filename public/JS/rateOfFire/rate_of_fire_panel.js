//TODO uwzględnić czas przeładowania rygla
$(document).ready(function () {
    $('.rate_of_fire_panel').on('click',function () {
        //button cleaning
        if( $('div ul li[class*="list-item-statistics"]:eq(3)').hasClass('btn-statistics-panel')){
            $('div ul li[class*="list-item-statistics"]:gt(3)').removeClass('btn-statistics-panel');
            $('div ul li[class*="list-item-statistics"]:lt(3)').removeClass('btn-statistics-panel');
            //do nothing
        }else{
            $('div ul li[class*="list-item-statistics"]:eq(3)').toggleClass('btn-statistics-panel');
            $('div ul li[class*="list-item-statistics"]:gt(3)').removeClass('btn-statistics-panel');
            $('div ul li[class*="list-item-statistics"]:lt(3)').removeClass('btn-statistics-panel');
        }
        //dodanie etykiet podpowiedzi
        $(function () {
            $('[data-toggle="tooltip"]').tooltip()
        });
        let Templates = new StatisticsPanelTemplates();
        Templates.getRateOfFirePanel('.statistics-panel');
    });
});