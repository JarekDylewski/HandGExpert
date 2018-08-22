$(document).ready(function () {
    let validator = new TopicValidate();
    $('.post_title').on('keypress', function () {
        validator.charsLeft('.post_title', '#title_chars_left', 60);
    });
    $('.post_title').focusout(function () {
        let content = $('.post_title').val();
        if (content.length > 60) {
            if ($('.title_max_length_alert').val().length != 0) {
            } else {
                $('.title_max_length_alert').html('Max length for title is 60 characters');
                $('#tutorial_topic_send').attr('disabled', true);
            }
        } else if (content.length < 60) {
            $('#tutorial_topic_send').attr('disabled', false);
            $('.title_max_length_alert').empty();
        }
    });
});