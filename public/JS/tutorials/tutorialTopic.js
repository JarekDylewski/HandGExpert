$(document).ready(function() {
    let similarTopicAreaBefore = $('#similar_topic_area').height();
    $('#more_dropdown_button').on('click',function(){
        let similarTopicArea = $('#similar_topic_area');
        let dropdownMenuHeight = $('#more_dropdown').height();
        let similarTopicAreaAfterClick = similarTopicArea.height() + dropdownMenuHeight;
        if(similarTopicArea.height() <= similarTopicAreaBefore){
            similarTopicArea.height(similarTopicAreaAfterClick);
        }else{
            similarTopicArea.height(similarTopicAreaBefore);
        }
        $(this).on('focusout',function () {
            setTimeout(function () {
                similarTopicArea.height(similarTopicAreaBefore);
            },70);

        });
    });
});