$(document).ready(function () {
    let message = $('#tutorial_message').html();
    if (message.search(/Added/) > 0 || message.search(/Success/)) {
        $('#tutorial_message').addClass('alert-success h3');
    } else {
        $('#tutorial_message').addClass('alert-danger h6');
    }
});