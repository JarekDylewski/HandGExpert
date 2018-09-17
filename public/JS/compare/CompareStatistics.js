class CompareStatistics {

    /**
     * @param {array} weapons[] - array with weapon objects
     * @param {string} key - key in weapon object example: {"key1":50, "key2":40, "foo":10,"bar":20}
     * @param {string} changePlaceColor - class or Id where the color will be changed
     * @param {array} colors[] - array with colors
     * @param {string} moreOrLess - determines, "more" - is better or "less" - is better
     * @param {boolean} numbering - numbering the order best - worst
     */
    compareAllStatistics(weapons, key, changePlaceColor, colors, moreOrLess = 'more', numbering = false) {

        let length = weapons.length;
        let weaponValues = [];
        for (let i = 1; i < length; i++) {
            weaponValues[i] = parseFloat(weapons[i][key])
        }

        //If the user sets too few colors, the colors will be randomly set
        let colorsLength = colors.length;
        if (colorsLength < length) {
            let random = new Random();
            for (let i = colorsLength; i < length; i++) {
                colors[i] = random.getRandomColor();
            }
        }


        let valueOrderDesc = weaponValues.sort(function (a, b) {
            return b - a
        });

        function uniqueArray(value, index, self) {
            return self.indexOf(value) === index;
        }

        valueOrderDesc = valueOrderDesc.filter(uniqueArray);
        if (moreOrLess == 'less') {
            valueOrderDesc.reverse();
        }

        weapons.forEach(function (value, index) {
            if (index > 0) {
                valueOrderDesc.forEach(function (ordValue, ordIndex) {
                    if (parseFloat(value[key]) === parseFloat(ordValue)) {
                        $(changePlaceColor + index).css('color', colors[ordIndex]);
                        if (numbering === true) {
                            $(changePlaceColor + index).prepend('<span class="text-secondary mr-2 ml-1">#' + parseFloat(ordIndex + 1) + ' </span>')
                        }
                    }
                })

            }
        });
    }

    compareTwoStatistics(HTMLstat1, HTMLstat2, moreOrLess = 'more') {
        let HTMLstat1ValParsed = parseFloat(HTMLstat1.html());
        let HTMLstat2ValParsed = parseFloat(HTMLstat2.html());
        if (moreOrLess == 'more') {
            if (HTMLstat1ValParsed > HTMLstat2ValParsed) {
                HTMLstat1.addClass('text-success');
                HTMLstat2.addClass('text-danger');
            } else if (HTMLstat1ValParsed < HTMLstat2ValParsed) {
                HTMLstat1.addClass('text-danger');
                HTMLstat2.addClass('text-success');
            } else {
                HTMLstat2.addClass('text-success');
                HTMLstat1.addClass('text-success');
            }
        } else if (moreOrLess == 'less') {
            if (HTMLstat1ValParsed > HTMLstat2ValParsed) {
                HTMLstat1.addClass('text-danger');
                HTMLstat2.addClass('text-success');
            } else if (HTMLstat1ValParsed < HTMLstat2ValParsed) {
                HTMLstat1.addClass('text-success');
                HTMLstat2.addClass('text-danger');
            } else {
                HTMLstat2.addClass('text-success');
                HTMLstat1.addClass('text-success');
            }
        } else if (moreOrLess != 'more' && moreOrLess != 'less') {
            console.log('wrong value for moreOrLess attribute, set "more" or "less"')
        }

    }
}