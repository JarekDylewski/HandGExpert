function TopicValidate() {

    /**
     * @param {string} classOrIDTextElement - id or class name element in which the number of characters will be counted
     * @param {string} classOrIDContainerForNumber - place where the number will be inserted
     * @param {number} maxLength - maximum number of characters
     * @param message {string} - message near number
     * @param messageForOne - message near number for 1 or 0
     */
    this.charsLeft = function (classOrIDTextElement, classOrIDContainerForNumber, maxLength, message = ': characters left', messageForOne = ': character left') {

        let strLength = $(classOrIDTextElement).val().length + 1;
        if (strLength <= (maxLength - 2)) {
            $(classOrIDContainerForNumber).html(maxLength - strLength + message);
        } else if (strLength === (maxLength - 1)) {
            $(classOrIDContainerForNumber).html(maxLength - strLength + messageForOne);
        } else {
            $(classOrIDContainerForNumber).html(strLength - strLength + messageForOne);
        }
        $(classOrIDTextElement).on('keydown', function (e) {
            let strLength = $(classOrIDTextElement).val().length - 1;
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
        });
    }
}