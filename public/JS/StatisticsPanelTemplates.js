function StatisticsPanelTemplates()
{
    //enter class or id in which the template is to be inserted
    this.getDMGPanel = function(classOrID) {
        let damage = statistics.getDamage();
        let DamageCalculations = new DamageCalculation(damage);
        $(classOrID).empty();
        $(classOrID).append(
            "<div class=\"row border-bottom pb-1 ml-0 w-100\">\n" +
            "        <div class=\"col-4 pl-1 pr-1\">\n" +
            "            <button class=\"btn btn-block p-0 box-shadow-orange box-shadow-orange-active\" type=\"button\" id='DMG_panel_button'>Damage</button>\n" +
            "        </div>\n" +
            "        <div class=\"col-4 pl-1 pr-1\">\n" +
            "            <button class=\"btn btn-block p-0 box-shadow-orange\" type=\"button\" id='bullets_to_kill_button'>Bullets to kill</button>\n" +
            "        </div>\n" +
            "        <div class=\"col-4 pl-1 pr-1\">\n" +
            "            <button class=\"btn btn-block p-0 box-shadow-orange\" type=\"button\" id='chart_button'>Chart</button>\n" +
            "        </div>\n" +
            "</div>" +
            "<div class=\"row w-100\">\n" +
            "    <div class=\"col-12 pt-2 pl-0 w-100 p-0 align-self-center\">\n" +
            "        <table>\n" +
            "            <tr>\n" +
            "                <td class=\"border-0 img-hitValue\"></td>\n" +
            "                <td class=\"border-0\"><img width=\"50\" height=\"50\" src=\"../../img/combatBadges/noHeavySet.png\"></td>\n" +
            "                <td class=\"border-0\"><img width=\"50\" height=\"50\" src=\"../../img/combatBadges/bronzeHeavySet.png\"></td>\n" +
            "                <td class=\"border-0\"><img width=\"50\" height=\"50\" src=\"../../img/combatBadges/silverHeavySet.png\"></td>\n" +
            "                <td class=\"border-0\"><img width=\"50\" height=\"50\" src=\"../../img/combatBadges/goldHeavySet.png\"></td>\n" +
            "            </tr>\n" +
            "            <tr>\n" +
            "                <td class=\"border-0 w-25 h-50\"><img width=\"25\" height=\"50\" src=\"../../img/hitValue/headHit.png\"></td>\n" +
            "                <td class=\"border-top-0 border-left-0\">"+DamageCalculations.getDamageHHeavySet(0,4)+"</td>\n" +
            "                <td class=\"border-top-0\">"+DamageCalculations.getDamageHHeavySet(1,4)+"</td>\n" +
            "                <td class=\"border-top-0\">"+DamageCalculations.getDamageHHeavySet(2,4)+"</td>\n" +
            "                <td class=\"border-top-0 border-right-0\">"+DamageCalculations.getDamageHHeavySet(3,4)+"</td>\n" +
            "            </tr>\n" +
            "            <tr>\n" +
            "                <td class=\"border-0 w-25 h-50\"><img width=\"25\" height=\"50\" src=\"../../img/hitValue/bodyHit.png\"></td>\n" +
            "                <td class=\"border-left-0\">"+DamageCalculations.getDamageHHeavySet(0,1)+"</td>\n" +
            "                <td>"+DamageCalculations.getDamageHHeavySet(1,1)+"</td>\n" +
            "                <td>"+DamageCalculations.getDamageHHeavySet(2,1)+"</td>\n" +
            "                <td class=\"border-right-0\">"+DamageCalculations.getDamageHHeavySet(3,1)+"</td>\n" +
            "            </tr>\n" +
            "            <tr>\n" +
            "                <td class=\"border-0 w-25 h-50\"><img width=\"25\" height=\"50\" src=\"../../img/hitValue/armsHit.png\"></td>\n" +
            "                <td class=\"border-left-0\">"+DamageCalculations.getDamageHHeavySet(0,0.5)+"</td>\n" +
            "                <td>"+DamageCalculations.getDamageHHeavySet(1,0.5)+"</td>\n" +
            "                <td>"+DamageCalculations.getDamageHHeavySet(2,0.5)+"</td>\n" +
            "                <td class=\"border-right-0\">"+DamageCalculations.getDamageHHeavySet(3,0.5)+"</td>\n" +
            "            </tr>\n" +
            "            <tr>\n" +
            "                <td class=\"border-0 w-25 h-50\"><img width=\"25\" height=\"50\" src=\"../../img/hitValue/legsHit.png\"></td>\n" +
            "                <td class=\"border-left-0 border-bottom-0\">"+DamageCalculations.getDamageHHeavySet(0,0.8)+"</td>\n" +
            "                <td class=\"border-bottom-0\">"+DamageCalculations.getDamageHHeavySet(1,0.8)+"</td>\n" +
            "                <td class=\"border-bottom-0\">"+DamageCalculations.getDamageHHeavySet(2,0.8)+"</td>\n" +
            "                <td class=\"border-bottom-0 border-right-0\">"+DamageCalculations.getDamageHHeavySet(3,0.8)+"</td>\n" +
            "            </tr>\n" +
            "        </table>\n" +
            "    </div>\n" +
            "</div>"
        );
    };
    this.getStatisticsPanel = function(classOrID) {
        let RCalculations = new RecoilCalculations();
        let swayPrecisionModifier = statistics.getSwayPrecisionModifierWeapon();
        let swayStandMode = statistics.getSwayStandModeWeapon();
        let coneModifier = statistics.getConeModifier();
        let recoil= RCalculations.precisionCalculations(statistics,swayStandMode,swayPrecisionModifier,coneModifier);
        let damage = Math.round(statistics.getDamage()*1000)/1000;
        let velocity = Math.round(statistics.getMuzzleVelocity()*1000)/1000;
        let rangeNear = Math.round(statistics.getRangeNear()*1000)/1000;
        let timeToKill = Math.round(statistics.getTimeToKill()*1000)/1000;
        let pricePerShot = statistics.getPricePerShot();
        let rateOfFire = Math.round(statistics.getRateOfFire()*1000)/1000;
        let spawnDelay = statistics.getSpawnDelay();
        let reloadTime = statistics.getReloadTime();
        let equipmentPoints = statistics.getEquipmentPoints();
        let ammoCapacity = statistics.getAmmoCapacity();
        let magazines = statistics.getMagazines();
        let equipTime = statistics.getEquipTime();
        let additionalFatique = statistics.getAdditionalFatuque();
        let aimingTime = statistics.getAimingTime();
        let useWhileRunning = statistics.getUseWhileRunning();
        $(classOrID).empty();
        $(classOrID).append(
            "    <div class=\"col-7 pr-0\">\n" +
            "    <div class=\"row\">\n" +
            "    <div class=\"col-10 w-100 h-100 pr-0\" data-toggle=\"tooltip\" data-placement=\"left\" title=\"Damage: more = better\">DMG: <span class=\"text-orange DMG\">"+ damage +"</span></div>\n" +
            "<div class=\"col-10 w-100 h-100 pr-0\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Muzzle velocity: more = better\">Muzzle velocity: <span class=\"text-orange velocity\"> "+ velocity +" </span> m/s</div>\n" +
            "    <div class=\"col-10 w-100 h-100 pr-0\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Rate of fire: more = better\">Rate of fire: <span class=\"text-orange rateOfFire\"> "+ rateOfFire +" </span> rpm </div>\n" +
            "<div class=\"col-10 w-100 h-100 pr-0\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Range: more = better\">Range: <span class=\"text-orange range\"> "+ rangeNear +" </span></div>\n" +
            "<div class=\"col-10 w-100 h-100 pr-0\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Recoil: less = better\">Recoil:\n" +
            "    <span class=\"text-orange coneModifier\"> "+ Math.round( recoil*1000)/1000 +" </span>\n" +
            "    </div>\n" +
            "    <div class=\"col-10 w-100 h-100 pr-0\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Time to kill: less = better\">Time to kill: <span class=\"text-orange timeToKill\"> "+ timeToKill +" </span> ms</div>\n" +
            "<div class=\"col-10 w-100 h-100 pr-0\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Costs: less = better\">Costs: <span class=\"text-orange pricePerShot\"> "+ pricePerShot +" </span> per shot </div>\n" +
            "<div class=\"col-10 w-100 h-100 pr-0\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Spawn delay: less = better\">Spawn delay: <span class=\"text-orange\"> "+ spawnDelay +" </span> s </div>\n" +
            "<hr>\n" +
            "</div>\n" +
            "</div>\n" +
            "<div class=\"col-5 pr-0 pl-0\">\n" +
            "    <div class=\"row\">\n" +
            "    <div class=\"col-10 w-100 h-100 pr-0\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Reload time: less = better\">Reload time: <span class=\"text-orange reloadTime\">"+ reloadTime +"</span> s</div>\n" +
            "<div class=\"col-10 w-100 h-100 pr-0\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Equipment point: less = better\">Equipment points: <span class=\"text-orange\">"+ equipmentPoints +"</span> </div>\n" +
            "<div class=\"col-10 w-100 h-100 pr-0\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Ammo capacity: more = better\">Ammo capacity: <span class=\"text-orange\">"+ ammoCapacity +"</span></div>\n" +
            "<div class=\"col-10 w-100 h-100 pr-0\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Magazines: more = better. (Standard) - is the standard amount of magazines\">Magazines: <span class=\"text-orange reloadTime\">"+ magazines +"</span> (standard)</div>\n" +
            "<div class=\"col-10 w-100 h-100 pr-0\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Equip time: less = better\">Equip time: <span class=\"text-orange reloadTime\">"+ equipTime +"</span> s</div>\n" +
            "<div class=\"col-10 w-100 h-100 pr-0\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Additional fatique: less = better\">Additional fatique <span class=\"text-orange reloadTime fatigue\">"+ additionalFatique +"</span> %</div>\n" +
            "<div class=\"col-10 w-100 h-100 pr-0\">Aiming time: <span class=\"text-orange\">"+ aimingTime +"</span> ms</div>\n" +
            "<div class=\"col-10 w-100 h-100 pr-0\">Use while running:\n" +
            "<span class=\"text-orange reloadTime\">\n" + useWhileRunning + "</span>\n" +
            "</div>\n" +
            "</div>\n" +
            "</div>\n");
        // $('.velocity').html(Math.round((velocity)*100)/100);
        // $('.rateOfFire').html( Math.round(rateOfFire*100)/100);
        // $('.range').html( Math.round(rangeNear*100)/100 );
        // $('.coneModifier').html( Math.round( coneWidth*1000)/1000 );
        // $('.recoilModifier').html(Math.round(recoil*1000)/1000);
        // $('.timeToKill').html( Math.round(timeToKill) );
        // $('.pricePerShot').html(pricePerShot);
    };
    this.getBulletsToKillPanel = function(classOrID) {
        let damage = statistics.getDamage();
        let BulletsToKill = new BulletsToKillCalculation(damage);
        $(classOrID).empty();
        $(classOrID).append(
            "<div class=\"row border-bottom pb-1 ml-0 w-100\">\n" +
            "        <div class=\"col-4 pl-1 pr-1\">\n" +
            "            <button class=\"btn btn-block p-0\" type=\"button\" id='DMG_panel_button'>Damage</button>\n" +
            "        </div>\n" +
            "        <div class=\"col-4 pl-1 pr-1\">\n" +
            "            <button class=\"btn btn-block p-0 box-shadow-orange-active\" type=\"button\" id='bullets_to_kill_button'>Bullets to kill</button>\n" +
            "        </div>\n" +
            "        <div class=\"col-4 pl-1 pr-1\">\n" +
            "            <button class=\"btn btn-block p-0\" type=\"button\" id='chart_button'>Chart</button>\n" +
            "        </div>\n" +
            "</div>" +
            "<div class=\"row\">\n" +
            "    <div class=\"col-12 pt-2 pl-0\">\n" +
            "        <table>\n" +
            "            <tr>\n" +
            "                <td class=\"border-0 img-hitValue\"></td>\n" +
            "                <td class=\"border-0\"><img width=\"50\" height=\"50\" src=\"../../img/combatBadges/noHeavySet.png\"></td>\n" +
            "                <td class=\"border-0\"><img width=\"50\" height=\"50\" src=\"../../img/combatBadges/bronzeHeavySet.png\"></td>\n" +
            "                <td class=\"border-0\"><img width=\"50\" height=\"50\" src=\"../../img/combatBadges/silverHeavySet.png\"></td>\n" +
            "                <td class=\"border-0\"><img width=\"50\" height=\"50\" src=\"../../img/combatBadges/goldHeavySet.png\"></td>\n" +
            "            </tr>\n" +
            "            <tr>\n" +
            "                <td class=\"border-0 w-25 h-50\"><img width=\"25\" height=\"50\" src=\"../../img/hitValue/headHit.png\"></td>\n" +
            "                <td class=\"border-top-0 border-left-0\">"+BulletsToKill.getBulletsToKillHHeavySet(0,4)+"</td>\n" +
            "                <td class=\"border-top-0\">"+BulletsToKill.getBulletsToKillHHeavySet(1,4)+"</td>\n" +
            "                <td class=\"border-top-0\">"+BulletsToKill.getBulletsToKillHHeavySet(2,4)+"</td>\n" +
            "                <td class=\"border-top-0 border-right-0\">"+BulletsToKill.getBulletsToKillHHeavySet(3,4)+"</td>\n" +
            "            </tr>\n" +
            "            <tr>\n" +
            "                <td class=\"border-0 w-25 h-50\"><img width=\"25\" height=\"50\" src=\"../../img/hitValue/bodyHit.png\"></td>\n" +
            "                <td class=\"border-left-0\">"+BulletsToKill.getBulletsToKillHHeavySet(0,1)+"</td>\n" +
            "                <td>"+BulletsToKill.getBulletsToKillHHeavySet(1,1)+"</td>\n" +
            "                <td>"+BulletsToKill.getBulletsToKillHHeavySet(2,1)+"</td>\n" +
            "                <td class=\"border-right-0\">"+BulletsToKill.getBulletsToKillHHeavySet(3,1)+"</td>\n" +
            "            </tr>\n" +
            "            <tr>\n" +
            "                <td class=\"border-0 w-25 h-50\"><img width=\"25\" height=\"50\" src=\"../../img/hitValue/armsHit.png\"></td>\n" +
            "                <td class=\"border-left-0\">"+BulletsToKill.getBulletsToKillHHeavySet(0,0.5)+"</td>\n" +
            "                <td>"+BulletsToKill.getBulletsToKillHHeavySet(1,0.5)+"</td>\n" +
            "                <td>"+BulletsToKill.getBulletsToKillHHeavySet(2,0.5)+"</td>\n" +
            "                <td class=\"border-right-0\">"+BulletsToKill.getBulletsToKillHHeavySet(3,0.5)+"</td>\n" +
            "            </tr>\n" +
            "            <tr>\n" +
            "                <td class=\"border-0 w-25 h-50\"><img width=\"25\" height=\"50\" src=\"../../img/hitValue/legsHit.png\"></td>\n" +
            "                <td class=\"border-left-0 border-bottom-0\">"+BulletsToKill.getBulletsToKillHHeavySet(0,0.8)+"</td>\n" +
            "                <td class=\"border-bottom-0\">"+BulletsToKill.getBulletsToKillHHeavySet(1,0.8)+"</td>\n" +
            "                <td class=\"border-bottom-0\">"+BulletsToKill.getBulletsToKillHHeavySet(2,0.8)+"</td>\n" +
            "                <td class=\"border-bottom-0 border-right-0\">"+BulletsToKill.getBulletsToKillHHeavySet(3,0.8)+"</td>\n" +
            "            </tr>\n" +
            "        </table>\n" +
            "    </div>\n" +
            "</div>"
        );

    };
    this.getChartPanel = function (classOrID){
        $(classOrID).empty();
        $(classOrID).append( "" +
            "<div class=\"row border-bottom pb-1 ml-0 w-100\">\n" +
            "        <div class=\"col-4 pl-1 pr-1\">\n" +
            "            <button class=\"btn btn-block p-0\" type=\"button\" id='DMG_panel_button'>Damage</button>\n" +
            "        </div>\n" +
            "        <div class=\"col-4 pl-1 pr-1\">\n" +
            "            <button class=\"btn btn-block p-0\" type=\"button\" id='bullets_to_kill_button'>Bullets to kill</button>\n" +
            "        </div>\n" +
            "        <div class=\"col-4 pl-1 pr-1\">\n" +
            "            <button class=\"btn btn-block p-0 box-shadow-orange-active\" type=\"button\" id='chart_button'>Chart</button>\n" +
            "        </div>\n" +
            "</div>" +
            "<canvas class='pl-3' id=\"myChart\" width=\"480px\" height=\"290px\"></canvas>"+

            "<div class=\"row w-100 ml-0\">" +
            //heavy set icons
                "<div class='col-5 m-0 p-0 pl-3'>" +
                    "<label>" +
                        "<img class='border border-rounded-to-right-top mt-4' width=\"30\" height=\"30\" src=\"../../img/combatBadges/noHeavySet.png\">" +
                        "<input id='no_heavy_set_dmg_chart' type='radio' name='heavySet'>" +
                    "</label>\n" +
                    "<label>" +
                        "<img class='border border-rounded-to-right-top mt-4' width=\"30\" height=\"30\" src=\"../../img/combatBadges/bronzeHeavySet.png\">" +
                        "<input id='bronze_heavy_set_dmg_chart' type='radio' name='heavySet'>" +
                    "</label>\n" +
                    "<label>" +
                        "<img class='border border-rounded-to-right-top mt-4' width=\"30\" height=\"30\" src=\"../../img/combatBadges/silverHeavySet.png\">" +
                        "<input id='silver_heavy_set_dmg_chart' type='radio' name='heavySet'>" +
                    "</label>\n" +
                    "<label>" +
                        "<img class='border border-rounded-to-right-top mt-4' width=\"30\" height=\"30\" src=\"../../img/combatBadges/goldHeavySet.png\">" +
                        "<input id='gold_heavy_set_dmg_chart' type='radio' name='heavySet'>" +
                    "</label>\n" +
                "</div>"+
            //body parts icons
                "<div class='col-5 m-0 p-0 ml-auto pl-5'>" +
                    "<label>" +
                         "<input id='head_hit_dmg_chart' type='radio' name='bodyParts'>" +
                        "<img class='border border-rounded-to-left-top mt-4' width=\"18\" height=\"35\" src=\"../../img/hitValue/headHit.png\">\n" +
                    "</label>\n" +
                    "<label>" +
                        "<input id='body_hit_dmg_chart' type='radio' name='bodyParts' checked>" +
                        "<img class='border border-rounded-to-left-top mt-4' width=\"18\" height=\"35\" src=\"../../img/hitValue/bodyHit.png\">\n" +
                    "</label>\n" +
                    "<label>" +
                        "<input id='arms_hit_dmg_chart' type='radio' name='bodyParts'>" +
                        "<img class='border border-rounded-to-left-top mt-4' width=\"18\" height=\"35\" src=\"../../img/hitValue/armsHit.png\">\n" +
                    "</label>\n" +
                    "<label>" +
                        "<input id='legs_hit_dmg_chart' type='radio' name='bodyParts'>" +
                        "<img class='border border-rounded-to-left-top mt-4' width=\"18\" height=\"35\" src=\"../../img/hitValue/legsHit.png\">\n" +
                    "</label>\n" +
                "</div>"+
            "</div>"+
            "<div class='row w-100'>" +
            "<div class='col-12 pr-0 d-flex justify-content-between'>" +
            "<span>"+
                "<input id='max_range_chart' class='w-75' type='number'>" +
                "<input id='max_range_chart_set' type='button' value='set'>" +
            "</span>"+
                "<input id='set_and_update_chart' class='ml-3' type='button' value='Set and update'>"+
            "</div> " +
            "</div> "
            );
    };
    this.getVelocityPanel = function (classOrID) {
        $(classOrID).empty();
        $(classOrID).append(
            '<div class="row">\n' +
            '    <div class="col-12 pt-2 pl-4">\n' +
            '        <table>\n' +
            '            <tr>\n' +
            '                <td class="border-left-0 border-top-0 p-1">\n' +
            '                    Distance\n' +
            '                </td>\n' +
            '                <td class="border-top-0 p-1">\n' +
            '                    100m\n' +
            '                </td>\n' +
            '                <td class="border-top-0 p-1">\n' +
            '                    200m\n' +
            '                </td>\n' +
            '                <td class="border-top-0 border-right-0 p-1">\n' +
            '                    500m\n' +
            '                </td>\n' +
            '            </tr>\n' +
            '            <tr>\n' +
            '                <td class="border-left-0 border-bottom-0 p-1">Flight time</td>\n' +
            '                <td class="border-bottom-0 p-1"><span class="text-orange velocity_fTime_0">x.xx </span></td>\n' +
            '                <td class="border-bottom-0 p-1"><span class="text-orange velocity_fTime_1">x.xx </span></td>\n' +
            '                <td class="border-bottom-0 p-1 border-right-0"><span class="text-orange velocity_fTime_2">x.xx </span></td>\n' +
            '            </tr>\n' +
            '        </table>\n' +
            '    </div>\n' +
            '</div>\n' +
            '<div class="row pt-4 w-100">\n' +
            '    <div class="col-4 ml-5 mr-auto">\n' +
            '        <b>Try yourself</b>\n' +
            '    </div>\n' +
            '</div>\n' +
            '<div class="row pt-2">\n' +
            '    <div class="col-12 pl-4">\n' +
            '        <table>\n' +
            '            <tr>\n' +
            '                <td class="p-1 border-left-0 border-top-0">\n' +
            '                    Distance\n' +
            '                </td>\n' +
            '                <td class="p-1 border-top-0 border-right-0">\n' +
            '                    <input id="velocity_distance" type="number" placeholder="Distance (m)">\n' +
            '                </td>\n' +
            '            </tr>\n' +
            '            <tr>\n' +
            '                <td class="p-1 border-left-0 border-bottom-0">\n' +
            '                    Flight time\n' +
            '                </td>\n' +
            '                <td class="p-1 border-bottom-0 border-right-0 velocity_flight_time">\n' +
            '                    0.00 s\n' +
            '                </td>\n' +
            '            </tr>\n' +
            '        </table>\n' +
            '    </div>\n' +
            '</div>' +
            '<div class="row w-75">' +
            '</div>'
        );
    };
    this.getRateOfFirePanel = function (classOrID) {
        let rateOfFire = Math.round( (statistics.getRateOfFire()/100)*100 );
        let magazineSize = statistics.getAmmoCapacity();
        let reloadTime = statistics.getReloadTime();
        $(classOrID).empty();
        $(classOrID).append(
            '<div class="row border-bottom pb-1 ml-auto mr-auto w-100">\n' +
            '    <div class="col-4 p-0">\n' +
            '        <button id="rate_of_fire_button" class="btn btn-block p-0 ml-1 box-shadow-orange-active" type="button">Rate of fire</button>\n' +
            '    </div>\n' +
            '    <div class="col-4 p-0">\n' +
            '        <button id="rate_of_fire_try_yourself_button" class="btn btn-block p-0 ml-4" type="button">Try yourself</button>\n' +
            '    </div>\n' +
            '</div>\n' +
            '<div class="row w-100">' +
                '<div class="col-6 pt-1">' +
                    '<div class="row ml-auto mr-auto w-100">\n' +
                    '    <div class="col-12 pl-4">\n' +
                    'Rate of fire: '+ rateOfFire + '\n' +
                    '    </div>\n' +
                    '</div>\n' +
                    '<div class="row ml-auto mr-auto w-100 pl-2">\n' +
                    '    <div class="col-12 text-secondary">\n' +
                    'Magazine size: ' + magazineSize + '\n' +
                    '    </div>\n' +
                    '</div>\n' +
                    '<div class="row ml-auto mr-auto w-100">\n' +
                    '    <div class="col-12 text-secondary ml-2">\n' +
                    'Reload time: <span id="reloadTime">' + reloadTime +'</span>  s\n' +
                    '    </div>\n' +
                    '</div>\n' +
                '</div>' +
                '<div class="col-6 m-0 p-0 pt-1">' +
                    '<div class="row w-100">' +
                        '<div class="col-12 m-0 p-0">' +
                            '<label>' +
                                '<img class="border border-rounded-to-right" width="40px" height="40px" src="../../img/combatBadges/noFastReload.png">' +
                                '<input id="noFastReloadRadio" type="radio" name="fastReload" >' +
                            '</label>' +
                            '<label>' +
                                '<img class="border border-rounded-to-right" width="40px" height="40px" src="../../img/combatBadges/bronzeFastReload.png">' +
                                '<input id="bronzeFastReloadRadio" type="radio" name="fastReload">' +
                            '</label>' +
                            '<label>' +
                                '<img class="border border-rounded-to-right" width="40px" height="40px" src="../../img/combatBadges/silverFastReload.png">' +
                                '<input id="silverFastReloadRadio" type="radio" name="fastReload">' +
                            '</label>' +
                            '<label>' +
                                '<img class="border border-rounded-to-right" width="40px" height="40px" src="../../img/combatBadges/goldFastReload.png">' +
                                '<input id="goldFastReloadRadio" type="radio" name="fastReload" checked>' +
                            '</label>' +
                        '</div> ' +
                    '</div> ' +
                '</div> ' +
            '</div>' +
            '<div class="row pt-4 justify-content-center w-100 ml-auto mr-auto">\n' +
            '    <Div class="col-8 border border-top-0 text-center">\n' +
            'Empties clip\n' +
            '    </Div>\n' +
            '</div>\n' +
            '<div class="row pt-2 justify-content-center w-100 ml-auto mr-auto">\n' +
            '    <div class="col-8 ml-auto mr-auto">\n' +
            '        <table >\n' +
            '            <tr>\n' +
            '                <td class="p-1 border-left-0 border-top-0">Magazine nr</td>\n' +
            '                <td class="p-1 border-top-0">1</td>\n' +
            '                <td class="p-1 border-top-0">2</td>\n' +
            '                <td class="p-1 border-top-0 border-right-0">3</td>\n' +
            '            </tr>\n' +
            '            <tr class="">\n' +
            '                <td class="p-1 border-bottom-0 border-left-0">Time (s)</td>\n' +
            '                <td class="p-1 border-bottom-0"><span id="timeNoFR1" class="text-orange">0</span></td>\n' +
            '                <td class="p-1 border-bottom-0"><span id="timeNoFR2" class="text-orange">0</span></td>\n' +
            '                <td class="p-1 border-bottom-0 border-right-0"><span id="timeNoFR3" class="text-orange">0</span></td>\n' +
            '            </tr>\n' +
            '        </table>\n' +
            '    </div>\n' +
            '</div>\n' +
            '<div class="row pt-4 justify-content-center w-100 ml-auto mr-auto">\n' +
            '    <Div class="col-8 border border-top-0 text-center">\n' +
            'Empties clip + reload time\n' +
            '    </Div>\n' +
            '</div>\n' +
            '<div class="row pt-2 justify-content-center w-100 ml-auto mr-auto">\n' +
            '    <div class="col-8 ml-auto mr-auto">\n' +
            '        <table>\n' +
            '            <tr>\n' +
            '                <td class="p-1 border-left-0 border-top-0">Magazine nr</td>\n' +
            '                <td class="p-1 border-top-0">1</td>\n' +
            '                <td class="p-1 border-top-0">2</td>\n' +
            '                <td class="p-1 border-top-0 border-right-0">3</td>\n' +
            '            </tr>\n' +
            '            <tr>\n' +
            '                <td class="p-1 border-bottom-0 border-left-0">Time (s)</td>\n' +
            '                <td class="p-1 border-bottom-0"> <span id="timeWFR1" class="text-orange">0</span> </td>\n' +
            '                <td class="p-1 border-bottom-0"> <span id="timeWFR2" class="text-orange">0</span> </td>\n' +
            '                <td class="p-1 border-bottom-0 border-right-0"> <span id="timeWFR3" class="text-orange">0</span> </td>\n' +
            '            </tr>\n' +
            '        </table>\n' +
            '    </div>\n' +
            '</div>');
            $(document).ready(function () {
                let Impact = new ImpactOfTheBadge();
                let rateOfFire = Math.round( (statistics.getRateOfFire()/100)*100 );
                let magazineSize = statistics.getAmmoCapacity();
                let reloadTime = Math.round( (statistics.getReloadTime()/100)*100 );

                //Funkcja robiąca potrzebne obliczenia i podmieniajaca wartosci w html (mocno powiązana z tym przypadkiem wiec nie bedzie jako osobna metoda klasy czy klasa)
                function rateOfFireCalculations(fastReloadBadgeLvl) {
                    let reloadTimeHFastReload = Impact.getFastReloadImpact(reloadTime, fastReloadBadgeLvl);
                    reloadTimeHFastReload = Math.round((reloadTimeHFastReload) * 100) / 100;
                    $('#reloadTime').html(reloadTimeHFastReload);

                    let endOfAmmunation = Math.round(((( (magazineSize - 1) / rateOfFire) * 60) * 100)) / 100;
                    for (let i = 1; i <= 3; i++) {
                        let arg1 = Math.round((endOfAmmunation * i) * 100) / 100;
                        let arg2 = (Math.round(((reloadTimeHFastReload) * i) * 100) / 100);
                        $('#timeWFR' + i).html(Math.round((arg1 + arg2) * 100) / 100);
                    }
                }
                //no fast reload icon
                $('#noFastReloadRadio').on('click',function() {
                    rateOfFireCalculations(0)
                });
                //bronze fast reload icon
                $('#bronzeFastReloadRadio').on('click',function() {
                    rateOfFireCalculations(1)
                });
                //silver fast reload icon
                $('#silverFastReloadRadio').on('click',function() {
                    rateOfFireCalculations(2)
                });
                //gold fast reload icon
                $('#goldFastReloadRadio').on('click',function() {
                    rateOfFireCalculations(3)
                });
                //Default values
                let reloadTimeHFastReload = Impact.getFastReloadImpact(reloadTime,3);
                let endOfAmmunation = ((magazineSize-1) / rateOfFire)*60;
                endOfAmmunation = Math.round(endOfAmmunation*100)/100;

                for(let i=1;i<=3;i++){
                    $('#timeNoFR'+i).html( Math.round((endOfAmmunation * i *100))/100 );
                }
                rateOfFireCalculations(3)
            });
    };
    this.getRateOfFireTryYourselfPanel = function (classOrId) {
        let rateOfFire = Math.round( (statistics.getRateOfFire()/100)*100 );
        let magazineSize = statistics.getAmmoCapacity();
        let reloadTime = statistics.getReloadTime();
        $(classOrId).empty();
        $(classOrId).append(
            '<div class="row border-bottom pb-1 ml-auto mr-auto w-100">\n' +
            '    <div class="col-4 p-0">\n' +
            '        <button id="rate_of_fire_button" class="btn btn-block p-0 ml-1" type="button">Rate of fire</button>\n' +
            '    </div>\n' +
            '    <div class="col-4 p-0">\n' +
            '        <button id="rate_of_fire_try_yourself_button" class="btn btn-block p-0 ml-4 box-shadow-orange-active" type="button">Try yourself</button>\n' +
            '    </div>\n' +
            '</div>\n' +
            '<div class="row w-100">' +
                '<div class="col-6 pt-1">' +
                    '<div class="row ml-auto mr-auto w-100">\n' +
                    '    <div class="col-12 pl-4">\n' +
                            'Rate of fire: '+ rateOfFire + '\n' +
                    '    </div>\n' +
                    '</div>\n' +
                    '<div class="row ml-auto mr-auto w-100 pl-2">\n' +
                    '    <div class="col-12 text-secondary">\n' +
                             'Magazine size: ' + magazineSize + '\n' +
                    '    </div>\n' +
                    '</div>\n' +
                    '<div class="row ml-auto mr-auto w-100">\n' +
                    '    <div class="col-12 text-secondary ml-2">\n' +
                             'Reload time: <span id="reloadTime">' + reloadTime +'</span>  s\n' +
                    '    </div>\n' +
                    '</div>\n' +
                '</div>' +
                '<div class="col-6 m-0 p-0 pt-1">' +
                    '<div class="row w-100">' +
                        '<div class="col-12 m-0 p-0">' +
                            '<label>' +
                                '<img class="border border-rounded-to-right" width="40px" height="40px" src="../../img/combatBadges/noFastReload.png">' +
                                '<input id="noFastReloadRadio" type="radio" name="fastReload" >' +
                            '</label>' +
                            '<label>' +
                                '<img class="border border-rounded-to-right" width="40px" height="40px" src="../../img/combatBadges/bronzeFastReload.png">' +
                                '<input id="bronzeFastReloadRadio" type="radio" name="fastReload">' +
                            '</label>' +
                            '<label>' +
                                '<img class="border border-rounded-to-right" width="40px" height="40px" src="../../img/combatBadges/silverFastReload.png">' +
                                '<input id="silverFastReloadRadio" type="radio" name="fastReload">' +
                            '</label>' +
                            '<label>' +
                                '<img class="border border-rounded-to-right" width="40px" height="40px" src="../../img/combatBadges/goldFastReload.png">' +
                                '<input id="goldFastReloadRadio" type="radio" name="fastReload" checked>' +
                            '</label>' +
                        '</div> ' +
                    '</div> ' +
                    '<div class="row w-100">' +
                        '<div class="col-12">' +
                            'With reload time? <input id="reloadTimeYesOrNo" type="checkbox">' +
                        '</div>'+
                    '</div> ' +
                '</div> ' +
            '</div>' +
            '<div class="row pt-4 justify-content-center w-100 p-0 m-0">\n' +
            '    <div class="col-10">\n' +
            '        <table width="400">\n' +
            '            <tr>\n' +
            '                <td class="p-1 border-left-0 border-top-0">Number of magazines</td>\n' +
            '                <td class="p-1 border-top-0 border-right-0">\n' +
            '                    <input id="magazines_number_input" class="form-control" type="number" aria-label="Small">\n' +
            '                </td>\n' +
            '            </tr>\n' +
            '            <tr>\n' +
            '                <td class="p-1 border-bottom-0 border-left-0">Time (s)</td>\n' +
            '                <td class="p-1 border-bottom-0 border-right-0"><span id="magazine_number_RPM_cout"  class="text-orange">0</span>  </td>\n' +
            '            </tr>\n' +
            '        </table>\n' +
            '    </div>\n' +
            '</div>\n' +
            '<div class="row pt-4 justify-content-center w-100 p-0 m-0">\n' +
            '    <div class="col-10">\n' +
            '        <table width="400">\n' +
            '            <tr>\n' +
            '                <td class="p-1 border-left-0 border-top-0">Bullets</td>\n' +
            '                <td class="p-1 border-top-0 border-right-0">\n' +
            '                    <input id="bullets_number_input" class="form-control" type="number" aria-label="Small">\n' +
            '                </td>\n' +
            '            </tr>\n' +
            '            <tr>\n' +
            '                <td class="p-1 border-bottom-0 border-left-0">Time (s)</td>\n' +
            '                <td class="p-1 border-bottom-0 border-right-0"> <span id="bullets_number_RPM_cout" class="text-orange">0</span> </td>\n' +
            '            </tr>\n' +
            '        </table>\n' +
            '    </div>\n' +
            '</div>'
        );
    };
    this.getRangePanel = function (classOrID) {
        $(classOrID).empty();
        $(classOrID).append('<div class="row pt-2 pl-2 mt-2 border-bottom pb-1">\n' +
            '</div>\n' +
            '<div class="row pt-2 pl-2 justify-content-center">\n' +
            '    <div class="col-10">\n' +
            '        <table class="w-100 h-100">\n' +
            '            <tr>\n' +
            '                <td class="border-left-0 border-top-0">\n' +
            '                    Range\n' +
            '                </td>\n' +
            '                <td class="border-top-0 border-right-0">\n' +
            '                    Shots to kill\n' +
            '                </td>\n' +
            '            </tr>\n' +
            '            <tr>\n' +
            '                <td class="border-left-0">\n' +
            '                    100m\n' +
            '                </td>\n' +
            '                <td class="border-right-0">\n' +
            '                    2\n' +
            '                </td>\n' +
            '            </tr>\n' +
            '        </table>\n' +
            '    </div>\n' +
            '</div>');
    };
    this.getTimeToKillPanel = function (classOrID) {
        $(classOrID).empty();
        $(classOrID).append(
            '<div class="row w-100">\n' +
            '    <div class="col-6 pr-0 ml-2">\n' +
            '        Time to kill: <span id="time_to_kill"></span> s <br> <span class="text-secondary">(without heavy set)</span>\n' +
            '    </div>\n' +
            '    <div class="col-6 pl-0 pr-0">\n' +
            //miejsce na ikonki które wyswietlaja ikonki modyfikacji ktore wpływaja na tę statystyke,
            // jesli pozytywnie - zielone, jezli negatywnie - czerwona
            '    </div>\n' +
            '</div>\n' +
            '<div class="row pt-2 w-100">\n' +
            '    <div class="col-6 pr-0 pt-1 ml-2">\n' +
            '        Velocity: <span id="velocity"></span> ms\n' +
            '    </div>\n' +
            '    <div class="col-6 pl-0 pr-0">\n' +
            //miejsce na ikonki które wyswietlaja ikonki modyfikacji ktore wpływaja na tę statystyke,
            // jesli pozytywnie - zielone, jezli negatywnie - czerwona
            '</div>\n' +
            '<div class=" row w-100 pt-1">' +
            '   <div class="col-6 ml-4 pr-0">' +
            '         Rate of fire: <span id="rateOfFire"></span>' +
            '   </div> ' +
            '</div> ' +
            '</div>\n' +
            '<div class="row pt-4 pl-2">\n' +
            '    <div class="col-10">\n' +
            '        <table class="w-100 h-100">\n' +
            '            <tr>\n' +
            '                <td class="border-left-0 border-top-0">\n' +
            '                    Bullets to kill <span class="btn btn-outline-info p-0 mb-2 border-0" data-toggle="tooltip" data-placement="left" data-html="true" title="you can check how much you need bullets to kill someone with the given heavy set, in the DMG panel">[ i ]</span>\n' +
            '                </td>\n' +
            '                <td class="border-top-0 border-right-0">\n' +
            '                    <input id="user_bullets_to_kill" class="d-block w-100" type="text" placeholder="Bullets to kill">\n' +
            '                </td>\n' +
            '            </tr>\n' +
            '            <tr>\n' +
            '                <td class="border-left-0">Distance</td>\n' +
            '                <td class="border-right-0">\n' +
            '                    <input id="user_distance" class="d-block w-100" type="text" placeholder="Distance">\n' +
            '                </td>\n' +
            '            </tr>\n' +
            '            <tr>\n' +
            '                <td class="border-left-0 border-right-0">Time to kill: </td>\n' +
            '                <td class="text-left border-left-0 border-right-0">' +
            '                       <span id="time_to_kill_try_yourself" class="text-orange">000</span> s' +
            '                </td>\n' +
            '            </tr>\n' +
            '        </table>\n' +
            '    </div>\n' +
            '</div>'
        );
    };
    this.getCostsPanel = function (classOrID) {
        $(classOrID).empty();
        $(classOrID).append(
            '<div class="row w-100 ml-auto mr-auto">' +
            '   <div class="col-6 ml-auto mr-auto text-secondary justify-content-center mb-2">' +
                'Weapon cost: <span id="weapon_costs"></span> per shot' +
            '   </div>' +
            '</div>' +
            '<div class="row ml-auto mr-auto w-100">\n' +
            '    <div class="col-12 w-100">\n' +
            '        <table class="w-100 h-100">\n' +
            '            <tr>\n' +
            '                <th class="border-left text-center p-1 w-50">\n' +
            '                    Mod name\n' +
            '                </th>\n' +
            '                <th class="border-left text-center p-1">\n' +
            '                    Type\n' +
            '                </th>\n' +
            '                <th class="border-left border-right text-center p-1">\n' +
            '                    Costs per shot\n' +
            '                </th>\n' +
            '            </tr>\n' +
            '            <tr>\n' +
            '                <td class="p-1" id="mod_name_ammo">\n' +
            '                    mod name ammo\n' +
            '                </td>\n' +
            '                <td>\n' +
            '                    <img width="40" height="40" src="../../img/mody/ammo.png" alt="ammo mod">\n' +
            '                </td>\n' +
            '                <td class="text-orange" id="ammo_costs">\n' +
            '                    2.2\n' +
            '                </td>\n' +
            '            </tr>\n' +
            '            <tr>\n' +
            '                <td class="p-1" id="mod_name_crosshair">\n' +
            '                    mod name crosshair\n' +
            '                </td>\n' +
            '                <td>\n' +
            '                    <img width="40" height="40" src="../../img/mody/crosshair.png" alt="crosshair mod">\n' +
            '                </td>\n' +
            '                <td class="text-orange" id="crosshair_costs">\n' +
            '                    2.2\n' +
            '                </td>\n' +
            '            </tr>\n' +
            '            <tr>\n' +
            '                <td class="p-1" id="mod_name_trigger">\n' +
            '                    mod name trigger\n' +
            '                </td>\n' +
            '                <td>\n' +
            '                    <img width="40" height="40" src="../../img/mody/trigger.png" alt="trigger mod">\n' +
            '                </td>\n' +
            '                <td class="text-orange" id="trigger_costs">\n' +
            '                    2.2\n' +
            '                </td>\n' +
            '            </tr>\n' +
            '            <tr>\n' +
            '                <td class="p-1" id="mod_name_spring">\n' +
            '                    mod name spring\n' +
            '                </td>\n' +
            '                <td>\n' +
            '                    <img width="40" height="40" src="../../img/mody/spring.png" alt="spring mod">\n' +
            '                </td>\n' +
            '                <td class="text-orange" id="spring_costs">\n' +
            '                    2.2\n' +
            '                </td>\n' +
            '            </tr>\n' +
            '            <tr>\n' +
            '                <td class="p-1" id="mod_name_barrel">\n' +
            '                    mod name barrel\n' +
            '                </td>\n' +
            '                <td>\n' +
            '                    <img width="40" height="40" src="../../img/mody/barrel.png" alt="ammo mod">\n' +
            '                </td>\n' +
            '                <td class="text-orange" id="barrel_costs">\n' +
            '                    2.2\n' +
            '                </td>\n' +
            '            </tr>\n' +
            '            <tr>\n' +
            '                <td colspan="3">\n' +
            '                    <b>Summary: </b><span class="text-orange" id="summary_costs"></span>\n' +
            '                    <img class="mb-1" width="30" height="30" src="../../img/credit.png" alt="credit">\n' +
            '                    per shot\n' +
            '                </td>\n' +
            '            </tr>\n' +
            '        </table>\n' +
            '    </div>\n' +
            '</div>'
        );
    };
    this.getRecoilPanel = function (classOrID) {
        $(classOrID).empty();
        $(classOrID).append(
            '<div class="row w-100 ml-4">\n' +
                '<div class="col-6 p-0 w-100">' +
            '   <img class="w-100" width="250" height="250" src="../../img/gunStatistics/recoil/precisionCircle.png" alt="precision circle">' +
            '   <span class="font-size-14" style="color:#81b3d2ff">Base cone: </span><span class="font-size-14" id="base_cone_precision"></span> <br>       ' +
            '   <span class="font-size-14" style="color:#dda137ff">Final cone: </span><span class="font-size-14" id="final_cone_precision"></span> <br>     ' +
            '   <span class="font-size-14" style="color:#00ff00ff">Cone size mod: </span><span class="font-size-14" id="precision_down"></span> <br>     ' +
                '</div>' +
                '<div class="col-6 p-0 w-100">' +
            '       <img class="w-100" width="250" height="250" src="../../img/gunStatistics/recoil/stabilityCircle.png" alt="precision circle">' +
            '   <span class="font-size-14" style="color:#ec67ebff">Camera recoil UP(Y): </span><span class="font-size-14" id="camera_recoil_up"></span><br>' +
            '   <span class="font-size-14" style="color:#0000ebff">Camera recoil right(X): </span><span class="font-size-14" id="camera_recoil_right"></span><br>' +
            '   <span class="font-size-14" style="color:#d14833ff">Camera recoil variance(RNG): </span><span class="font-size-14" id="camera_recoil_variance"></span><br>' +
                '</div> ' +
            '</div>' +
            '<div class="row w-100 d-flex">' +
                '<div class="col-6 pr-0">' +
                '   <img id="sway_stand_mode" class="cursor-pointer" width="67" height="70" src="../../img/position/standMode.png" alt="stand mode">' +
                '   <img id="sway_crouch_mode" class="cursor-pointer" width="67" height="70" src="../../img/position/crouchMode.png" alt="crouch mode">' +
                '   <img id="sway_prone_mode" class="cursor-pointer" width="67" height="70" src="../../img/position/proneMode.png" alt="prone mode">' +
                '</div>' +
                '<div class="col-6 pl-0 align-self-center">' +
                '   <label id="with_aiming_label" class="cursor-pointer pl-4 pt-4">' +
                        'With aiming <input  id="with_aiming" type="checkbox" checked>' +
                '       <img src="../../img/mouse/mouseRightClick.png" width="40" height="40">' +
                '   </label> <br>' +
                '</div>' +
            '</div>' +
            '<div class="row w-100">' +
            '   <div class="col-12">' +
            '      <input class="w-50" id="update" type="button" value="update">' +
            '</div> ' +
            '</div> '
        );
    }
}