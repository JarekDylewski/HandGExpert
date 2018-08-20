$(document).ready(function(){
    //dodanie etykiet (podpowiedzi) wysuwających się po najechaniu
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    });
    //sprawdzanie co daje jakie profity (dodaje/usuwa czerwone/zielone bordery
    $('.ammo-nav').on('click','img',function(update){
        //velocity muzzle velocity
        for (var i = 0; i<5; i++){
            if( $('#ammo-velocity-'+i).html() > $('#ammo-velocity-0').html() ){
                $('.ammo-velocity-'+i).addClass('border-green');
            }else if($('#ammo-velocity-'+i).html() == $('#ammo-velocity-0').html()){

            }else{
                $('.ammo-velocity-'+i).addClass('border-red');
            }
        }
        //damage dmg
        for (var i = 0; i<5; i++){
            if( $('#ammo-dmg-'+i).html() > $('#ammo-dmg-0').html() ){
                $('.ammo-dmg-'+i).addClass('border-green');
            }else if($('#ammo-dmg-'+i).html() == $('#ammo-dmg-0').html()){

            }else{
                $('.ammo-dmg-'+i).addClass('border-red');
            }
        }
        //range
        for (var i = 0; i<5; i++){
            if( $('#ammo-range-'+i).html() > $('#ammo-range-0').html() ){
                $('.ammo-range-'+i).addClass('border-green');
            }else if($('#ammo-range-'+i).html() == $('#ammo-range-0').html()){

            }else{
                $('.ammo-range-'+i).addClass('border-red');
            }
        }
        for (var i = 0; i<5; i++){
            if( $('#ammo-recoil-'+i).html() < $('#ammo-recoil-0').html() ){
                $('.ammo-recoil-'+i).addClass('border-green');
            }else if($('#ammo-recoil-'+i).html() == $('#ammo-recoil-0').html()){

            }else{
                $('.ammo-recoil-'+i).addClass('border-red');
            }
        }
    });
});
