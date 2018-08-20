$(document).ready(function () {
    $('#search_gun').on('click',function (e) {
        $.ajax({
            method: 'get',
            url: '/GunList/search'
        }).done(function (data) {
            $('#search_gun').on('keypress',function () {
                $('#search-dropdown-parent:last-child').empty();
                let inscribedString = $('#search_gun').val();
                inscribedString = inscribedString.toLowerCase().trim().replace(/([])/,'');
                let regexp = new RegExp("\("+inscribedString+"\)");
                let names = data.name;
                let array = [];
                $.map(names, function(el,i) { array[i]=el.toLowerCase().trim() });
                //loop which add search item
                let height =2;
                array.forEach(function (value,index,array) {
                    if(value.search(regexp)>=0){
                        if(height>20){
                            //do nothing
                        }else{
                            height+=2.5;
                        }
                        $('#search-dropdown-parent:last-child').append(
                            '    <a class="dropdown-item hover-grey" href="/GunList/'+ index +'">\n' +
                            '        <div class="row w-100 mr-0">\n' +
                            '            <div class="col-4 pl-0 pr-0 align-self-center">\n' +
                            '                <img class="" width="75" height="37"\n' +
                            '                src="../img/gunsByID/'+ index +'.png" >\n' +
                            '            </div>\n' +
                            '            <div class="col-8 align-self-center pl-0 font-size-14 text-white">\n' +
                            '                <b class="">'+ names[index] +'\n' +
                            '            </div>\n' +
                            '        </div>\n' +
                            '    </a>\n'
                        );
                    }
                });
                console.log(height);
                $('#search-dropdown-parent').css("height",height+'rem');
                $('.search-dropdown').addClass('show');

            });
        });
    });
    $('div img[class*="loupe"]').on('click',function () {
        $("#search_gun").trigger('click');
    });
});
