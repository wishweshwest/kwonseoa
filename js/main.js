$(function(){

    // 창 크기 바뀔 때 마다 새로고침

    jQuery(function($) {

        window.onresize = function(){
          document.location.reload();
        };
    
    });


    gsap.to('.sc_home .title.txt02',{
        scrollTrigger:{
            trigger:'.sc_home',
            start:"0 0",
            end:"+=2000",
            scrub: 1,
            pin: true,
        },
        height: '100%',
    })



    $('.port_area').each(function(index,item){

        let target = $(this).find('h2.title');

        gsap.to(target,{
            scrollTrigger:{
                trigger:item,
                start: "0 top",
                end: "bottom bottom",
                // scrub: 1,
                // markers: true, 
            },
            'bottom' : '15%',
            'opacity' : '1',
        })

    });



    gsap.to('main .wrap_container',{
        scrollTrigger:{
            trigger:'.sc_port01',
            start:"-20% 20%",
            end:"50% 80%",
            scrub:1,
        },
        'background': '#63b45b',
    })

    gsap.to('main .wrap_container',{
        scrollTrigger:{
            trigger:'.sc_port02',
            start:"-15% 20%",
            end:"50% 80%",
            scrub:1,
        },
        'background':'#0158a8',
    })

    gsap.to('main .wrap_container',{
        scrollTrigger:{
            trigger:'.sc_port03',
            start:"-15% 20%",
            end:"50% 80%",
            scrub:1,
        },
        'background':'#335c64',
    })


    gsap.to('main .wrap_container',{
        scrollTrigger:{
            trigger:'.sc_port04',
            start:"-15% 20%",
            end:"50% 80%",
            scrub:1,
        },
        'background':'#111',
    })

    gsap.to('main .wrap_container',{
        scrollTrigger:{
            trigger:'.sc_port05',
            start:"-15% 20%",
            end:"50% 80%",
            scrub:1,
        },
        'background':'#450003',
    })

    gsap.to('main .wrap_container',{
        scrollTrigger:{
            trigger:'.sc_port06',
            start:"-15% 20%",
            end:"50% 80%",
            scrub:1,
        },
        'background':'#CDD5E0',
    })



    //mouse cursor
    
    $('body').mousemove(function(e){
        gsap.to('.cursor',{
            left: e.clientX - 25,
            top: e.clientY - 25,
        })
    })


    $('.sc_port01 .img_wrap').mouseover(function(){
        gsap.to('.cursor',{
            scale:1.3,
            backgroundColor:'rgb(21 121 40)',
            duration:0.2,
        })
    })

    $('.sc_port02 .img_wrap').mouseover(function(){
        gsap.to('.cursor',{
            scale:1.3,
            backgroundColor:'#1c7193',
            duration:0.2,
        })
    })

    $('.sc_port03 .img_wrap').mouseover(function(){
        gsap.to('.cursor',{
            scale:1.3,
            backgroundColor:'#F0F8FF',
            duration:0.2,
        })
    })

    $('.sc_port04 .img_wrap').mouseover(function(){
        gsap.to('.cursor',{
            scale:1.3,
            backgroundColor:'rgb(0 0 0.8)',
            duration:0.2,
        })
    })

    $('.sc_port05 .img_wrap').mouseover(function(){
        gsap.to('.cursor',{
            scale:1.3,
            backgroundColor:'#40181c',
            duration:0.2,
        })
    })

    $('.port_area .img_wrap').mouseleave(function(){
        gsap.to('.cursor',{
            scale:1,
            backgroundColor:'transparent',
            duration:0.2,
        })
    })




    // 반응형

    $(window).resize(function(){ 
        if (window.innerWidth > 768) {  // 다바이스 크기가 768이상일때 
        
            // gnb_menu
            $('header .gnb_area > nav > ul > li').mouseover(function(){
                $(this).addClass('on');
            });
            $('header .gnb_area > nav > ul > li').mouseleave(function(){
                $(this).removeClass('on');
            });





        
        } else if (window.innerWidth <= 768) {
            
            $('header .gnb_area > nav > ul > li').off('mouseover');
    

     // m_gnb
            $('header .gnb_area .close').click(function(e){
                e.preventDefault();

                if($(this).hasClass('on')){
                    $(this).removeClass('on');
                } else{
                    $(this).addClass('on');
                }
            });


            // m_gnb_menu
            $('header .gnb_area > nav > ul > li').click(function(){
                

                let h = $(this).find('.sub').outerHeight();
                
                if($(this).hasClass('on')){
                    $(this).removeClass('on');
                    $(this).find('.wrap').css({'height' : '0'});
                }else{
                    $(this).addClass('on');
                    $(this).find('.wrap').css({'height' : h});
                }
                
            });


            $('header .gnb_area > nav > ul > li.home, header .gnb_area > nav > ul > li.cont, header .gnb_area > nav > ul > li.port .sub li').click(function(){
                $(this).parents('nav').siblings('.close').removeClass('on');
            });


            // m_gnb li.port
            // $('header .gnb_area nav > ul > li').click(function(e){
            //     e.preventDefault();
        
            //     let h = $(this).find('.sub').innerHeight();
        
            //     $(this).find('.wrap').css({'height' : h});
        
            // });



        
        }
        






        }).resize();



    // gsap 반응형

    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.saveStyles(".mobile, .desktop");

    ScrollTrigger.matchMedia({


        "(max-width: 768px)": function() {
        
            gsap.to('main .wrap_container',{
                scrollTrigger:{
                    trigger:'.sc_port02',
                    start:"top 20%",
                    end: "20% 30%",
                    scrub:1,
                },
                'background':'#0158a8',
            })
        
            gsap.to('main .wrap_container',{
                scrollTrigger:{
                    trigger:'.sc_port03',
                    start:"top 20%",
                    end: "20% 30%",
                    scrub:1,
                },
                'background':'#335c64',
            })
        
        
            gsap.to('main .wrap_container',{
                scrollTrigger:{
                    trigger:'.sc_port04',
                    start:"top 20%",
                    end: "20% 30%",
                    scrub:1,
                },
                'background':'#111',
            })
        
            gsap.to('main .wrap_container',{
                scrollTrigger:{
                    trigger:'.sc_port05',
                    start:"top 20%",
                    end: "20% 30%",
                    scrub:1,
                },
                'background':'#450003',
            })


            $('.port_area').each(function(index,item){

                let target = $(this).find('h2.title');
        
                gsap.to(target,{
                    scrollTrigger:{
                        trigger:item,
                        start: "-15% top",
                        end: "10% 20%",
                        // markers: true, 
                    },
                    'bottom' : '15%',
                    'opacity' : '1',
                })
        
            });


      },
    
        "(max-width: 320px)": function() {
      },
    
        "all": function() {
      }
    
    });


});