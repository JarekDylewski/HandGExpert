$(document).ready(function () {
    $('.recoil_panel').on('click', function (e) {
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
      Templates.getRecoilPanel('.statistics-panel');

       let swayStandMode = statistics.getSwayStandModeWeapon(); // sway kiedy stoisz
       let sway = swayStandMode;
        if(statistics.getPositionMode()===0){
            //do nothing
        }else{
            sway = statistics.getPositionMode();
        }
       //standard setting
       let swayCrouchMode = statistics.getSwayChrouchModeWeapon() ;// sway kiedy kucasz
       let swayProneMode = statistics.getSwayProneModeWeapon(); // sway kiedy leżysz
       let aiming = statistics.getWhenAiming();
       let swayprecisionModifier = statistics.getSwayPrecisionModifierWeapon(); // sway kiedy celujesz ( klikasz ppm)
       let coneModifier = statistics.getConeModifier();
       let sw = 0;
       //TODO trzeba to i tak pozmieniac bo wyciagam tutaj tylko statystyki z broni a potrzeba z broni i z wszystkich modyfikacji
       //TODO czyli cos w rodzaju, cameraRecoilUPFinal, cameraRecoilRightFinal, cameraRecoilVarianceFinal
       let cameraRecoilUp = statistics.getCameraRecoilUpWeapon();
       let cameraRecoilRight = statistics.getCameraRecoilRightWeapon();
       let cameraRecoilVariance = statistics.getCameraRecoilVarianceWeapon();
       let recoilModifier = statistics.getRecoilModifier();
        //TODO pozbyć się jak najwiecej tych instrukcji warunkowych
       $('#sway_stand_mode').on('click',function () {
           sw = swayStandMode;
           if($(this).attr('src') === '../../img/position/standModeOrange.png'){
           }else{
               $(this).attr('src','../../img/position/standModeOrange.png');
               $('#sway_crouch_mode').attr('src','../../img/position/crouchMode.png');
               $('#sway_prone_mode').attr('src','../../img/position/proneMode.png');
           }
           statistics.setPositionMode(sw);
       });
       $('#sway_crouch_mode').on('click',function () {
           sw = swayCrouchMode;
           if($(this).attr('src') === '../../img/position/crouchModeOrange.png'){
               // $(this).addClass('position-active');
           }else{
               $(this).attr('src','../../img/position/crouchModeOrange.png');
               $('#sway_prone_mode').attr('src','../../img/position/proneMode.png');
               $('#sway_stand_mode').attr('src','../../img/position/standMode.png');
           }
           statistics.setPositionMode(sw);
       });
       $('#sway_prone_mode').on('click',function () {
           sw = swayProneMode;
           if($(this).attr('src') === '../../img/position/proneModeOrange.png'){
           }else{
               $(this).attr('src','../../img/position/proneModeOrange.png');
               $('#sway_stand_mode').attr('src','../../img/position/standMode.png');
               $('#sway_crouch_mode').attr('src','../../img/position/crouchMode.png');
           }
           statistics.setPositionMode(sw);
       });

       //standard settings

       $('#with_aiming_label').on('click','input[id="with_aiming"]',function () {
           //click = off
           if($('#with_aiming_label img').attr('src') === '../../img/mouse/mouseRightClick.png'){
               statistics.setWhenAiming(1);
               $('#with_aiming_label img').attr('src','../../img/mouse/mouse.png');
            //click = on
           }else if($('#with_aiming_label img').attr('src') === '../../img/mouse/mouse.png'){
               statistics.setWhenAiming(swayprecisionModifier);
               $('#with_aiming_label img').attr('src','../../img/mouse/mouseRightClick.png');
           }

       });
       //setting icons after reloading
       if(statistics.getPositionMode() === statistics.getSwayStandModeWeapon()){
           $('#sway_stand_mode').attr('src','../../img/position/standModeOrange.png');
       }else if(statistics.getPositionMode() === statistics.getSwayChrouchModeWeapon()){
           $('#sway_crouch_mode').attr('src','../../img/position/crouchModeOrange.png')
       }else if(statistics.getPositionMode() === statistics.getSwayProneModeWeapon()){
           $('#sway_prone_mode').attr('src','../../img/position/proneModeOrange.png')
       }else{
           $('#sway_stand_mode').attr('src','../../img/position/standModeOrange.png');
       }
       //setting checkbox 'with aiming' after reload
        if( aiming === swayprecisionModifier){
            $('#with_aiming_label img').attr('src','../../img/mouse/mouseRightClick.png');
            $('#with_aiming').attr('checked','checked')
        }else if(aiming === 1){
            $('#with_aiming_label img').attr('src','../../img/mouse/mouse.png')
            $('#with_aiming').attr('checked',false)
        }

       let RCalculations = new RecoilCalculations();
       let baseCone = RCalculations.precisionCalculations(statistics,swayStandMode,aiming,1);
       let finalCone = RCalculations.precisionCalculations(statistics,sway,aiming,coneModifier);
       $('#base_cone_precision').html(Math.round(baseCone*1000)/1000);
       $('#final_cone_precision').html(Math.round((finalCone)*1000)/1000);
       $('#precision_down').html(Math.round((finalCone - baseCone)*1000)/1000);

       $('#camera_recoil_up').html(Math.round(cameraRecoilUp * recoilModifier*1000)/1000);
       $('#camera_recoil_right').html(Math.round(cameraRecoilRight * recoilModifier*1000)/1000);
       $('#camera_recoil_variance').html(Math.round(cameraRecoilVariance * recoilModifier*1000)/1000);

       $('#update').on('click',function () {
           $('.recoil_panel').trigger('click');
       });
   });
});
