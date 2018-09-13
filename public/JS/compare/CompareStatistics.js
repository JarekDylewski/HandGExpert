function CompareStatistics() {
    this.compareTwoStatistics = function (HTMLstat1, HTMLstat2, moreOrLess = 'more') {
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