"use strict";

$(function(){

    ///////////header///////////
    let tabs = $('.tab');
    $('.tab').on('click',function(){
        $('.active').removeClass('active');
        $(this).addClass('active');
        const index = tabs.index(this);

        $('.main').removeClass('show').eq(index).addClass('show');
    });

    //////////footer////////
    let footerTab = $('.footer-tab');
    $('.footer-tab').on('click', function(){
        $('.active').removeClass('active');
        $(this).addClass('active');
    });

    /////////////日付取得・・・未完成//////
    $('.view-month').text(function(){
        let now = new Date();
        let year = now.getFullYear();
        let month = now.getMonth();
        let yearMonth = [year + "年", month + "月"]
        $(this).text(yearMonth);
    });

    ////////////カレンダー表示/////////
    // $('#calendar').FullCalendar();

});

