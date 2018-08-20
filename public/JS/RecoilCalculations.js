function RecoilCalculations() {
    this.precisionCalculations = function(CollectingStatisticsObject,positionMode = 1,swayPrecisionModifier = 1,coneModifier = 1) {
        if(!typeof(CollectingStatisticsObject)==="object"){
            console.log('CollectingStatisticsObject, must be the CollectingStatistics object, pleas enter correct object')
        }
        if(positionMode === 0){
            positionMode = 1;
            console.log('positionMode property from RecoilCalculations cant be 0, changed to 1, ' +
                'change yourself if you do not want to see the message in console')
        }else if(!$.isNumeric(positionMode)){
            positionMode = 1;
            console.log('positionMode must be numeric, value changed to 1, ' +
                'change yourself if you do not want to see the message in console')
        }
        if(swayPrecisionModifier === 0){
            swayPrecisionModifier = 1;
            console.log('swayPrecisionModifier property from RecoilCalculations cant be 0, changed to 1, ' +
                'change yourself if you do not want to see the message in console')
        }else if(!$.isNumeric(swayPrecisionModifier)){
            swayPrecisionModifier = 1;
            console.log('swayPrecisionModifier must be numeric, value changed to 1, ' +
                'change yourself if you do not want to see the message in console')
        }

        let baseConeFire = CollectingStatisticsObject.getBaseConefireWeapon();
        let cone = (positionMode * swayPrecisionModifier)+baseConeFire;
        return Math.round((cone * coneModifier)*1000)/1000;
    };
}