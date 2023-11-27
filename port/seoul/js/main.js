$(function(){

    /* 슬라이드01 */
    var swiper01 = new Swiper(".mySwiper01", {
        slidesPerView: 1,
        loop: true,


        autoplay: {
            delay: 2300,
            disableOnInteraction: false,
        },

        // 좌우 화살표 navigation element 지정
        navigation: {
            nextEl: ".mySwiper01 .swiper_button_next",
            prevEl: ".mySwiper01 .swiper_button_prev"
        },

        on: {
            slideChangeTransitionStart: function() {
                $('.mySwiper01 .fraction .current').text(this.realIndex + 1);
            },
        },
    });


    /* 슬라이드01 일시정지 버튼의 이미지변경 */
    $('.mySwiper01 .pause_wrap button').click(function(e){
        e.preventDefault();
        if($(this).hasClass('on')){
            $(this).removeClass('on');
            $(this).siblings().addClass('on');
        }
    });


    /* 슬라이드01 일시정지 버튼 기능 구현 */
    $('.mySwiper01 .pause_wrap .auto_start').click(function(e){
        e.preventDefault();
        swiper01.autoplay.stop();
    });

    $('.mySwiper01 .pause_wrap .auto_stop').click(function(e){
        e.preventDefault();
        swiper01.autoplay.start();
    });


    /* 슬라이드02 */
    var swiper02 = new Swiper(".mySwiper02", {
        slidesPerView: 1,
        loop: true,


        autoplay: {
            delay: 2300,
            disableOnInteraction: false,
        },

        // 좌우 화살표 navigation element 지정
        navigation: {
            nextEl: ".mySwiper02 .swiper_button_next",
            prevEl: ".mySwiper02 .swiper_button_prev"
        },

        on: {
            slideChangeTransitionStart: function() {
                $('.mySwiper02 .fraction .current').text(this.realIndex + 1);
            },
        },
    });
    swiper02.autoplay.stop(); /* 슬라이드02는 사용자가 클릭하기전엔 멈춰놓기 */


    /* 슬라이드 주요뉴스 및 시민참여 탭메뉴 버튼 */
    $('.sc_visual .slide_area .tab').click(function(e){
        e.preventDefault();
        $(this).addClass('on').parent().siblings().find('.tab').removeClass('on');
        $(this).parent('.slide_area').addClass('active').siblings().removeClass('active');
    });


    /* 다른 slide 눌렀을 시 작동 안되게 */
    $('.sc_visual .slide_area .tab').click(function(e){
        e.preventDefault();
       
        if($(this).parent().hasClass('main_slide')){
            swiper02.autoplay.stop();
            if($(this).parent().find('.custom_btn_wrap .auto_start').hasClass('on')){
                swiper01.autoplay.start();
            }else{
                swiper01.autoplay.stop();
            }
        }else{
            swiper01.autoplay.stop();
            if($(this).parent().find('.custom_btn_wrap .auto_start').hasClass('on')){
                swiper02.autoplay.start();
            }else{
                swiper02.autoplay.stop();
            }
        }
    });



    /* 슬라이드03 */
    var swiper03 = new Swiper(".mySwiper03", {
        slidesPerView: 3,
        loop: true,
        slidesPerGroup: 1,
        spaceBetween: 43,


        autoplay: {
            delay: 2300,
            disableOnInteraction: false,
        },

        // 좌우 화살표 navigation element 지정
        navigation: {
            nextEl: ".mySwiper03 .swiper_button_next",
            prevEl: ".mySwiper03 .swiper_button_prev"
        },

        on: {
            slideChangeTransitionStart: function() {
                $('.mySwiper03 .fraction .current').text(this.realIndex + 1);
            },
        },
    });


    $('.sc_slide .btn_wrap .pause_wrap button').click(function(e){
        e.preventDefault();

        if($(this).hasClass('on')){
            $(this).removeClass('on').siblings().addClass('on');
        }else{
            $(this).addClass('on').siblings().addClass('on');
        }
    });


    /* 슬라이드03 일시정지 버튼 기능 구현 */
    $('.mySwiper03 .pause_wrap .auto_start').click(function(e){
        e.preventDefault();
        swiper03.autoplay.stop();
    });

    $('.mySwiper03 .pause_wrap .auto_stop').click(function(e){
        e.preventDefault();
        swiper03.autoplay.start();
    });


     /* 하단 슬라이드 메뉴 구현 */
    $('.sc_site .list_wrap > ul > li > button').click(function(e){
        e.preventDefault();

        if($(this).hasClass('on')){
            $(this).removeClass('on').siblings('.sub').stop().slideUp();
        }else{
            $(this).parent().siblings().find('button').removeClass('on');
            $(this).addClass('on').siblings('.sub').stop().slideDown();
            $(this).parent().siblings().find('.sub').stop().slideUp();
        }
    });


    // select 옵션 사이트 이동
    $('.go_btn').click(function () {
        let go = $('select option:selected').val();

        if (go != '') {
            window.open('about:blank').location.href = go;
        }
    })


    // top 버튼
    $(window).scroll(function(){
        if($(this).scrollTop() > 50){
            $('#topBtn').addClass('on');
        }else{
            $('#topBtn').removeClass('on');
        }
    })

    $('#topBtn').click(function(e){
        e.preventDefault();
        $('html, body').animate({scrollTop : 0}, 300);
    });

});