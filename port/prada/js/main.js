$(function(){

    var swiper01 = new Swiper(".mySwiper01", {
        slidesPerView: 1.1,
        loop: true,
        allowTouchMove : false,
        speed : 500,
        // autoplay:{
        //     delay: 3000,
        //     },
        autoplay:false,

        // 좌우 화살표 지정
        // navigation: {
        //     nextEl: ".mySwiper01 .swiper-button-next",
        //     prevEl: ".mySwiper01 .swiper-button-prev"
        // },

        
        // index 지정
        on: {
            slideChangeTransitionStart: function() {
                $('.mySwiper01 .custom-fraction .current').text('0' + (this.realIndex + 1));
            },
            
            transitionStart : gauge(),
            // slideChange : gauge(),
        },

        breakpoints: {
        
            320: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 1,
            },
            1440: {
                slidesPerView: 1.1,
              },
          },


    });


    function gauge(){
        $('.bar').css({width : 0}).stop().animate({width : 100 + '%'},3000, function(){
            $('.sc_visual .mySwiper01').addClass('on');
            setTimeout(function(){
                swiper01.slideNext();
            },500);
        });
    };


    swiper01.on('slideChangeTransitionEnd', function () {
        $('.sc_visual .mySwiper01').removeClass('on');
    })
    

    // 슬라이드 바뀔 때 게이지 restart
    swiper01.on('slideChangeTransitionStart', function () {
        $('.sc_visual .mySwiper01').addClass('on');
        gauge();
    })

    
    // next 버튼
    $('.sc_visual .swiper-button-next').click(function(e){
        e.preventDefault();

        $('.sc_visual .mySwiper01').addClass('on');

        setTimeout(function(){
            swiper01.slideNext();
        },300);
    })


        // prev 버튼
        $('.sc_visual .swiper-button-prev').click(function(e){
            e.preventDefault();
    
            $('.sc_visual .mySwiper01').addClass('on');
    
            setTimeout(function(){
                swiper01.slidePrev();
            },300);
        })


        // 랜덤 img

        function imgBox() {
            
            let randomNumber = 1;
            
            setInterval(function(){
                $('.random').find('img').attr('src', 'img/random_img0' + randomNumber + '.jpg');
                if( randomNumber < 4 ){
                    randomNumber++
                } else {
                    randomNumber = 1;
                }
            },1000);

        }

        imgBox();


        // header

        $(window).scroll(function(){
            if($(window).scrollTop() > 50){
                $('header').addClass('on');
            } else{
                $('header').removeClass('on');
            }
        })


        $('header .m_btn').click(function(e){
            e.preventDefault();

            $(this).parents('.logo_area').find('.m_gnb_wrap').addClass('on');
        })

        $('header .m_gnb_wrap .close').click(function(e){
            e.preventDefault();

            $(this).parents('.logo_area').find('.m_gnb_wrap').removeClass('on');
        })


        // 마우스 커서

        $('body').mousemove(function(e){
      
            gsap.to('#cursor', {
                left: e.pageX -100, 
                top: e.pageY -100,
            })
        })
      
    
});