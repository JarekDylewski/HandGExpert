$(document).ready(function(){
    $('.DMG_panel').on('click',function(e) {
        e.preventDefault();
        //button cleaning
        //cant use loop index in nth-child/eq filter
        if( $('div ul li[class*="list-item-statistics"]:eq(1)').hasClass('btn-statistics-panel')){
            $('div ul li[class*="list-item-statistics"]:gt(1)').removeClass('btn-statistics-panel');
            $('div ul li[class*="list-item-statistics"]:lt(1)').removeClass('btn-statistics-panel');
            //do nothing
        }else{
            $('div ul li[class*="list-item-statistics"]:eq(1)').toggleClass('btn-statistics-panel');
            $('div ul li[class*="list-item-statistics"]:gt(1)').removeClass('btn-statistics-panel');
            $('div ul li[class*="list-item-statistics"]:lt(1)').removeClass('btn-statistics-panel');
        }
        //dodanie etykiet podpowiedzi
        $(function () {
            $('[data-toggle="tooltip"]').tooltip()
        });
        let StatisticsDMGPanel = new StatisticsPanelTemplates();
        StatisticsDMGPanel.getDMGPanel('.statistics-panel');
    });
});
