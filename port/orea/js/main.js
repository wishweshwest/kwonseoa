$(function(){
    var swiper01 = new Swiper(".mySwiper01", {
        spaceBetween: 30,
        loop: false,
        slidesPerView: 3,

        // 좌우 화살표 지정
        navigation: {
            nextEl: ".mySwiper01 .swiper-button-next",
            prevEl: ".mySwiper01 .swiper-button-prev"
        },

        // 프로그래스바 지정
        pagination: {
            el: ".mySwiper01 .swiper-pagination", 
            clickable : true,
            type: "progressbar",
        }, 

        
    });

    var swiper02 = new Swiper(".mySwiper02", {
        spaceBetween: 30,
        loop: false,
        slidesPerView: 3,

        // 좌우 화살표 지정
        navigation: {
            nextEl: ".mySwiper02 .swiper-button-next",
            prevEl: ".mySwiper02 .swiper-button-prev"
        },

        // 프로그래스바 지정
        pagination: {
            el: ".mySwiper02 .swiper-pagination", 
            clickable : true,
            type: "progressbar",
        }, 

        
    });

    
    $(window).scroll(function(){
        if($(window).scrollTop() > 50){
            $('header').addClass('on');
        } else{
            $('header').removeClass('on');
        }
    })


    $('.header_inner .left_wrap .btn').click(function(e){
        e.preventDefault();
        $('.gnb_area').addClass('on');
    });

    $('.gnb_wrap button, .gnb_area .shadow').click(function(e){
        e.preventDefault();
        $('.gnb_area').removeClass('on');
    });



    $('.gnb_area .gnb_wrap nav > ul > li').mouseover(function(){
        $(this).addClass('on').siblings('li').removeClass('on');
    });

    $('.gnb_area .gnb_wrap nav > ul > li').mouseout(function(){
        $(this).removeClass('on');
    });

    $('.lang').mouseover(function(){
        $(this).addClass('on');
    });

    $('.lang').mouseout(function(){
        $(this).removeClass('on');
    });


    /* scroll event */

    $('.scroll_motion_y').each(function(index,item){

        let target = $(this).find('.desc');

        gsap.to(target,{
            scrollTrigger: {
                trigger: item,
                start: 'top 100%',
                end: '70% top',
                scrub: 1,
                // markers: true,
            },
            y: -100,
        });


        let target02 = $(this).find('.obj');

        gsap.to(target02,{
            scrollTrigger: {
                trigger: item,
                start:"top 100%",
                end:"bottom top",
                scrub:1,
            },
            yPercent:5,
        });

    });


    // $('.scroll_motion_bg').each(function(index,item){

    //     let target03 = $(this).parents('.container');

    //     gsap.to(target03,{
    //         scrollTrigger:{
    //             trigger:item,
    //             start:"top 50%",
    //             end:"100% top",
    //             scrub:0.5,
    //             markers: true,
    //         },
    //         'background':'#EFEFF1',
    //     });


    //     let target04 = $(this).parents('.container');

    //     gsap.to(target04,{
    //         scrollTrigger:{
    //             trigger:item,
    //             start:"top 50%",
    //             end:"100% top",
    //             scrub:0.5,
    //             markers: true,
    //         },
    //         'background':'#F2EEE5',
    //     });

    // });
    

    // gsap.to('.container',{
    //     scrollTrigger:{
    //         trigger:'.scroll_motion_bg_gra',
    //         start:"top 50%",
    //         end:"bottom 80%",
    //         scrub:0.5,
    //     },
    //     'background':'rgba(0, 50, 82, 0.11))',
    // });

    gsap.to('.container',{
        scrollTrigger:{
            trigger:'.scroll_motion_bg_yel',
            start:"top bottom",
            end:"bottom bottom",
            scrub:0.5,
            markers: true,
        },
        'background':'rgba(227, 219, 201, 0.59)',
    });


    gsap.from('.visual_desc', 1.8 ,{
        x:200,
        ease: "power4.out",
        delay: 0.5,
        opacity: 0,
        // stagger: {
        //     amount: 0.4
        // }
    })


});