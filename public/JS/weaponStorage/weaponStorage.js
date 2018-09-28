$(document).ready(function () {

    setTimeout(function () {
        $('#flashMessage').animate({
            opacity: 0.05
        }, 1000, function () {
            this.remove();
        })
    }, 6000);


    $('div [class *= getShareLink]').on('click', function (e) {
        let clickedArea = $(e.currentTarget);
        let shareLink = clickedArea.attr('data-shareLink');
        shareLink = location.host + "/WeaponStorage/" + shareLink;

        clickedArea.append(`<input type="text" class="copyPlaceholder position-fixed" value="${shareLink}">`);
        let el = document.getElementsByClassName('copyPlaceholder');

        el[0].select();
        document.execCommand('copy');
        el[0].parentNode.removeChild(el[0]);

        clickedArea.prepend(`<span class="alert alert-info border border-info copiedAlert position-absolute mt-2 ml-4 text-dark-orange text-truncate"><i class="icon-link"></i> Link copied!</span>`);

        setTimeout(function () {
            $('.copiedAlert').animate({
                opacity: 0.05
            }, 500, function () {
                $('.copiedAlert').remove()
            })
        }, 1000)

    });

});