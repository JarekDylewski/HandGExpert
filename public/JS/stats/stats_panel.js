$(document).ready(function () {
   $('.stats_panel').on('click',function () {
       //button cleaning
       if( $('div ul li[class*="list-item-statistics"]:eq(0)').hasClass('btn-statistics-panel')){
           $('div ul li[class*="list-item-statistics"]:gt(0)').removeClass('btn-statistics-panel');
           //do nothing
       }else{
           $('div ul li[class*="list-item-statistics"]:eq(0)').toggleClass('btn-statistics-panel');
           $('div ul li[class*="list-item-statistics"]:gt(0)').removeClass('btn-statistics-panel');
       }
       //dodanie etykiet podpowiedzi
       $(function () {
           $('[data-toggle="tooltip"]').tooltip()
       });
       //template load
      let Templates = new StatisticsPanelTemplates();
      Templates.getStatisticsPanel('.statistics-panel');

   });
});