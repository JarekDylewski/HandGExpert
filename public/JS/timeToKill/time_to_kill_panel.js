$(document).ready(function () {
   $('.time_to_kill_panel').on('click',function() {
       //button cleaning
       if( $('div ul li[class*="list-item-statistics"]:eq(5)').hasClass('btn-statistics-panel')){
           $('div ul li[class*="list-item-statistics"]:gt(5)').removeClass('btn-statistics-panel');
           $('div ul li[class*="list-item-statistics"]:lt(5)').removeClass('btn-statistics-panel');
           //do nothing
       }else{
           $('div ul li[class*="list-item-statistics"]:eq(5)').toggleClass('btn-statistics-panel');
           $('div ul li[class*="list-item-statistics"]:gt(5)').removeClass('btn-statistics-panel');
           $('div ul li[class*="list-item-statistics"]:lt(5)').removeClass('btn-statistics-panel');
       }
       //dodanie etykiet podpowiedzi
       $(function () {
           $('[data-toggle="tooltip"]').tooltip()
       });
      let Templates = new StatisticsPanelTemplates();
      Templates.getTimeToKillPanel('.statistics-panel');
      let damage = statistics.getDamage();
      let BulletsToKillCalc = new BulletsToKillCalculation(damage);
      let BTK = BulletsToKillCalc.getBulletsToKillHHeavySet(0,1);
      let RPM = Math.round( statistics.getRateOfFire()*100 )/100;
      let velocity = Math.round( statistics.getMuzzleVelocity()*100 )/100 ;
      let timeToKill = ((BTK - 1)*60)/RPM;
      $('#time_to_kill').html( Math.round(timeToKill*1000)/1000 );
      $('#rateOfFire').html( RPM );
      $('#velocity').html( velocity );
      $(document).ready(function () {
          let userRange = 0;
          let userBulletsToKill = 0;
        $('#user_distance').on('keypress',function () {
            setTimeout(function () {
                let userRange = $('#user_distance').val();
                let userBulletsToKill = $('#user_bullets_to_kill').val();
                let flightTime = Math.round((userRange/velocity)*1000)/1000;
                let TTK = Math.round( (((userBulletsToKill-1)*60)/RPM)*1000 )/1000
                    ;
                $('#time_to_kill_try_yourself').html( Math.round(((flightTime*userBulletsToKill)+TTK)*1000)/1000);
            },300);

        });
        $('#user_bullets_to_kill').on('keypress',function () {
           setTimeout(function () {
               $('#user_distance').trigger('keypress');
           },300);
        });
      });
   });
});