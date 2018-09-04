$(document).ready(function () {
    //TODO dodać pobieranie uzytkownika i e-maila tak zeby uzytkownik w czasie rzeczywistym
    //TODO miał potwierdzenie czy nick albo e-mail jest zajęty
    let validation = new ValidationHints();
    let username = $('#userName');
    let usernameHints = $('#username_validation_hints');
    let registrationButton = $('#register_button');

    const emailReg = /^[a-z\d]+[\w\d.-]*@(?:[a-z\d]+[a-z\d-]+\.){1,5}[a-z]{2,6}$/i;
    let emailRegExp = new RegExp(emailReg);

    $(username).focusin(function () {
        $(usernameHints).empty();
        $(usernameHints).removeClass('text-danger');
        $(usernameHints).removeClass('text-success');
        $(usernameHints).addClass('text-secondary');
    });

    $(username).on('keypress', function () {
        validation.charsLeft(this, '#username_validation_hints', 20);
    });

    $(username).focusout(function () {
        validation.minimumCharacterAlert(username, usernameHints, 3);
        if (username.val().length < 3) {
            $(usernameHints).addClass('text-danger');
        } else {
            $(usernameHints).removeClass('text-danger');
            $(usernameHints).addClass('text-success');
            $(usernameHints).html('OK!')
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
                $(usernameHints).html('Username already exists');
                $(usernameHints).addClass('text-danger');
            }
        });
    });

    let email = $('#email');
    let emailHints = $('#email_validation_hints');
    $(email).focusin(function () {
        $(emailHints).empty();
        $(emailHints).removeClass('text-danger');
        $(emailHints).removeClass('text-success');
        $(emailHints).addClass('text-secondary');
    });

    $(email).on('keypress', function () {
        validation.charsLeft(email, emailHints, 40);
    });

    $(email).focusout(function () {
        validation.minimumCharacterAlert(email, emailHints, 5);
        if (email.val().length < 5) {
            $(emailHints).addClass('text-danger');
        } else if (!emailRegExp.test(email.val())) {
            $(emailHints).html('Invalid e-mail!');
            $(emailHints).addClass('text-danger');
        } else {
            $(emailHints).removeClass('text-danger');
            $(emailHints).addClass('text-success');
            $(emailHints).html('OK!')
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
                $(emailHints).html('E-mail already exists');
                $(emailHints).addClass('text-danger');
            }
        });
    });

    let passwordFirst = $('#passwordFirst');
    let passwordFirstHints = $('#password_first_validation_hints');

    $(passwordFirst).focusin(function () {
        $(passwordFirstHints).empty();
        $(passwordFirstHints).removeClass('text-danger');
        $(passwordFirstHints).removeClass('text-success');
        $(passwordFirstHints).addClass('text-secondary');
    });

    $(passwordFirst).on('keypress', function () {
        validation.charsLeft(passwordFirst, passwordFirstHints, 40);
    });

    $(passwordFirst).focusout(function () {
        validation.minimumCharacterAlert(passwordFirst, passwordFirstHints, 5);
        if (passwordFirst.val().length < 5) {
            $(passwordFirstHints).addClass('text-danger');
        } else {
            $(passwordFirstHints).removeClass('text-danger');
            $(passwordFirstHints).addClass('text-success');
            $(passwordFirstHints).html('OK!')
        }
    });

    let passwordSecond = $('#passwordSecond');
    let passwordSecondHints = $('#password_second_validation_hints');

    $(passwordSecond).focusin(function () {
        $(passwordSecondHints).empty();
        $(passwordSecondHints).removeClass('text-danger');
        $(passwordSecondHints).removeClass('text-success');
        $(passwordSecondHints).addClass('text-secondary');
    });

    $(passwordSecond).on('keypress', function () {
        validation.charsLeft(this, '#password_second_validation_hints', 40);
    });

    $(passwordSecond).focusout(function () {
        validation.minimumCharacterAlert(passwordSecond, passwordSecondHints, 5);
        if (passwordSecond.val().length < 5) {
            $(passwordSecondHints).addClass('text-danger');
        } else if (passwordFirst.val() !== passwordSecond.val()) {
            $(passwordSecondHints).addClass('text-danger');
            $(passwordSecondHints).html('passwords not identical!')
        } else {
            $(passwordSecondHints).removeClass('text-danger');
            $(passwordSecondHints).addClass('text-success');
            $(passwordSecondHints).html('OK!')
        }
    });
});