function ValidationHints() {

    /**
     * @param {string} classOrIDTextElement - id or class name element in which the number of characters will be counted
     * @param {string} classOrIDContainerForNumber - place where the number will be inserted
     * @param {number} maxLength - maximum number of characters
     * @param message {string} - message near number
     * @param messageForOne - message near number for 1 or 0
     */
    this.charsLeft = function (classOrIDTextElement, classOrIDContainerForNumber, maxLength, message = ': letters left', messageForOne = ': letter left') {
        setTimeout(function () {
            let strLength = $(classOrIDTextElement).val().length;
            if (strLength <= (maxLength - 2)) {
                $(classOrIDContainerForNumber).html(maxLength - strLength + message);
            } else if (strLength === (maxLength - 1)) {
                $(classOrIDContainerForNumber).html(maxLength - strLength + messageForOne);
            } else {
                $(classOrIDContainerForNumber).html(strLength - strLength + messageForOne);
            }
        }, 100);

        $(classOrIDTextElement).on('keydown', function (e) {
            setTimeout(function () {
                let strLength = $(classOrIDTextElement).val().length;
                let charsLeft = maxLength - strLength;
                if (e.keyCode === 8) {
                    if (strLength === -1) {
                        //do nothing
                    } else {
                        if (strLength <= (maxLength - 2)) {
                            $(classOrIDContainerForNumber).html(charsLeft++ + message);
                        } else if (strLength === (maxLength - 1)) {
                            $(classOrIDContainerForNumber).html(charsLeft++ + messageForOne);
                        } else {
                            $(classOrIDContainerForNumber).html(charsLeft++ + messageForOne);
                        }
                    }
                }
            }, 100);

        });
    };

    this.validateEmailHint = function (email) {
        const emailReg = /^[a-z\d]+[\w\d.-]*@(?:[a-z\d]+[a-z\d-]+\.){1,5}[a-z]{2,6}$/i;
        let emailRegExp = new RegExp(emailReg);

        return emailRegExp.test(email);
    };

    this.minimumCharacterAlert = function (classOrIDTextElement, classOrIDContainerForNumber, minLength, message = 'Min. length is: ') {

        let strLength = $(classOrIDTextElement).val().length;
        if (strLength < minLength) {
            $(classOrIDContainerForNumber).html(message + minLength)
        }
    };

    this.clearHint = function (hintsSpace, somethingIsWrongClassRemove = 'text-danger', everythingIsOkClassRemove = 'text-success', standardTextClass = 'text-secondary') {
        $(hintsSpace).empty();
        $(hintsSpace).removeClass(somethingIsWrongClassRemove);
        $(hintsSpace).removeClass(everythingIsOkClassRemove);
        $(hintsSpace).addClass(standardTextClass);
    };

    this.everythingOkHint = function (hintSpace, message = 'OK!', everythingIsOkClass = 'text-success', somethingIsWrongClassRemove = 'text-danger') {
        $(hintSpace).removeClass(somethingIsWrongClassRemove);
        $(hintSpace).addClass(everythingIsOkClass);
        $(hintSpace).html(message)
    };

    this.somethingIsWrongHint = function (hintSpace, message = '', somethingIsWrongClass = 'text-danger') {
        $(hintSpace).html(message);
        $(hintSpace).addClass(somethingIsWrongClass);
    }
}