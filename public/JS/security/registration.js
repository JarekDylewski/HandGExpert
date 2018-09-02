$(document).ready(function () {
    //TODO dodać pobieranie uzytkownika i e-maila tak zeby uzytkownik w czasie rzeczywistym
    //TODO miał potwierdzenie czy nick albo e-mail jest zajęty
    let validation = new ValidationHints();
    let username = $('#userName');
    let usernameHints = $('#username_validation_hints');

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
        } else {
            $(emailHints).removeClass('text-danger');
            $(emailHints).addClass('text-success');
            $(emailHints).html('OK!')
        }
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