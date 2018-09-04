$(document).ready(function () {
    //TODO dodać pobieranie uzytkownika i e-maila tak zeby uzytkownik w czasie rzeczywistym
    //TODO miał potwierdzenie czy nick albo e-mail jest zajęty
    let validation = new ValidationHints();
    let username = $('#userName');
    let usernameHints = $('#username_validation_hints');

    $(username).focusin(function () {
        validation.clearHint(usernameHints)
    });

    $(username).on('keypress', function () {
        validation.charsLeft(this, '#username_validation_hints', 20);
    });

    $(username).focusout(function () {
        validation.minimumCharacterAlert(username, usernameHints, 3);
        if (username.val().length < 3) {
            $(usernameHints).addClass('text-danger');
        } else {
            validation.everythingOkHint(usernameHints)
        }

        $.ajax({
            url: 'register/whetherUserExists',
            method: 'post',
            dataType: 'json',
            data: {
                "username": username.val(),
                "email": ""
            }
        }).done(function (data) {
            if (data.username === true) {
                validation.somethingIsWrongHint(usernameHints, 'Username already exists!')
            }
        });
    });

    let email = $('#email');
    let emailHints = $('#email_validation_hints');
    $(email).focusin(function () {
        validation.clearHint(emailHints)
    });

    $(email).on('keypress', function () {
        validation.charsLeft(email, emailHints, 40);
    });

    $(email).focusout(function () {
        validation.minimumCharacterAlert(email, emailHints, 5);
        if (email.val().length < 5) {
            $(emailHints).addClass('text-danger');
        } else if (validation.validateEmailHint(email.val()) === false) {
            validation.somethingIsWrongHint(emailHints, 'Invalid e-mail!')
        } else {
            validation.everythingOkHint(emailHints);
        }
        $.ajax({
            url: 'register/whetherUserExists',
            method: 'post',
            dataType: 'json',
            data: {
                "username": "",
                "email": email.val()
            }
        }).done(function (data) {
            if (data.email === true) {
                validation.somethingIsWrongHint(emailHints, 'E-mail already exists!');
            }
        });
    });

    let passwordFirst = $('#passwordFirst');
    let passwordFirstHints = $('#password_first_validation_hints');

    $(passwordFirst).focusin(function () {
        validation.clearHint(passwordFirst)
    });

    $(passwordFirst).on('keypress', function () {
        validation.charsLeft(passwordFirst, passwordFirstHints, 40);
    });

    $(passwordFirst).focusout(function () {
        validation.minimumCharacterAlert(passwordFirst, passwordFirstHints, 5);
        if (passwordFirst.val().length < 5) {
            $(passwordFirstHints).addClass('text-danger');
        } else {
            validation.everythingOkHint(passwordFirstHints);
        }
    });

    let passwordSecond = $('#passwordSecond');
    let passwordSecondHints = $('#password_second_validation_hints');

    $(passwordSecond).focusin(function () {
        validation.clearHint(passwordSecondHints)
    });

    $(passwordSecond).on('keypress', function () {
        validation.charsLeft(this, '#password_second_validation_hints', 40);
    });

    $(passwordSecond).focusout(function () {
        validation.minimumCharacterAlert(passwordSecond, passwordSecondHints, 5);
        if (passwordSecond.val().length < 5) {
            $(passwordSecondHints).addClass('text-danger');
        } else if (passwordFirst.val() !== passwordSecond.val()) {
            validation.somethingIsWrongHint(passwordSecondHints, 'passwords not identical!')
        } else {
            validation.everythingOkHint(passwordSecondHints)
        }
    });
});