$(document).ready(function () {
    $('.velocity_panel').on('click', function (e) {
        //button cleaning
        let currentTarget = $(e.currentTarget);
        if (currentTarget.hasClass('btn-statistics-panel')) {
            //do nothing
        } else {
            $('div ul li[class*="list-item-statistics"]').removeClass('btn-statistics-panel');
            $(currentTarget).toggleClass('btn-statistics-panel');
        }
        //dodanie etykiet podpowiedzi
        $(function () {
            $('[data-toggle="tooltip"]').tooltip()
        });
        let templates = new StatisticsPanelTemplates();
        templates.getVelocityPanel('.statistics-panel');
        let velocity = statistics.getMuzzleVelocity();
        $('.velocity_fTime_0').html(Math.round((100 / velocity) * 1000) / 1000 + ' s');
        $('.velocity_fTime_1').html(Math.round((200 / velocity) * 1000) / 1000 + ' s');
        $('.velocity_fTime_2').html(Math.round((500 / velocity) * 1000) / 1000 + ' s');

        $('#velocity_distance').on('keypress', function () {
            setTimeout(function () {
                let range = $("#velocity_distance").val();
                $('.velocity_flight_time').html(Math.round((range / velocity) * 1000) / 1000 + ' s')
            }, 300);

        });
    });
});