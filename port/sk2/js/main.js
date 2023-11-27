$(function(){

    let bullet = ['1', '2', '3'];

    var swiper01 = new Swiper(".mySwiper", {
       speed: 1000,
        slidesPerView: 1,
        loop: true,
        allowTouchMove : true,
        effect : 'fade',
        autoplay : { 
            delay : 3000,  
            disableOnInteraction : false,
        },

        //pagination 지정
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            renderBullet: function (index, className) {
              return '<div class="' + className + '"><span>' + (bullet[index]) + '</span></div>';
            }
        },

        breakpoints: {
        
            320: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 1,
            },
            1440: {
                slidesPerView: 1,
              },
          },

          
        });



        

          


    
    // function text01() {
        
    //     const tl = gsap.timeline();

    //     tl.staggerFrom('.swiper-slide-active .title_wrap p span', 0.3, {
    //       ease: Power4.easeOut,
    //       y:120,
    //     }, 0.05)
    //       .staggerFrom('.swiper-slide-active .title_wrap .pc', 0.3, {
    //       ease: Power4.easeOut,
    //       opacity: 0,
    //     }, 0)

    //     tl.restart();

    // }

    // text01();

    function text01(){

      const tl = new TimelineMax({
        delay: 0.3,
      });

      tl.staggerFromTo(
        '.swiper-slide-active .title_wrap p span',
        0.6, 
        {
          y: 120,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          ease: 'Circ.easeOut'
        },
        0.2,
        // 'enter'
      ).staggerFromTo('.swiper-slide-active .title_wrap > p',0.6,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        ease: 'Circ.easeOut'
      })

    };
    
    text01();

    
    swiper01.on('slideChangeTransitionStart', function () {
      text01();
      }) // 슬라이드 시작됐을 때 
        




    // 이미지 스크롤러

      $('.sc_new .item_wrap').each(function(index, item){

        let target = $(this).find('.img_wrap .obj img');

        gsap.to(target,{
            scrollTrigger:{
              trigger: item,
                start:"-30% 30%",
                end:"80% 70%",
                scrub: 1,
                // markers: true,
              },
              y: -150,
          duration: 0.5,
        })

      });



    // 글자 올라오기

    const text = gsap.timeline({
      scrollTrigger:{
        trigger:'.sc_banner',
          start:"60% 50%",
          end:"100% 80%",
          // markers: true,
        },
    });

    text.to('.sc_banner .img_wrap .obj.img01',{
      y: 100,
    }
    ,0.2)
    .to('.sc_banner .img_wrap .obj.img02',{
      y: 100,
    }
    ,0.5)
    .to('.sc_banner .img_wrap .obj.img03',{
      y: 100,
    }
    ,0.1)
    .to('.sc_banner .img_wrap .obj.img04',{
      y: 100,
    }
    ,0.2)
    .to('.sc_banner .img_wrap .obj.img05',{
      y: 100,
    }
    ,0.3)
    .to('.sc_banner .img_wrap .obj.img06',{
      y: 100,
    }
    ,0.1)
    .to('.sc_banner .img_wrap .obj.img07',{
      y: 100,
    }
    ,0.3)
    .to('.sc_banner .img_wrap .obj.img08',{
      y: 100,
    }
    ,0.4)


    //history

    $('.sc_history .half_wrap').each(function(index, item){

      let target = $(this).find('.obj img');
      let target2 = $(this).find('.desc_wrap .wrap');

      gsap.to(target,{
          scrollTrigger:{
            trigger: item,
              start:"top 45%",
              end:"50% 70%",
            },
            'width' : '100%',
            duration: 0.5,
      })

      gsap.to(target2,{
        scrollTrigger:{
          trigger: item,
            start:"top 45%",
            end:"50% 70%",
          },
          y : 0,
          opacity: 1,
          duration: 0.5,
    })

    });
    



    //footer
    gsap.to('footer .footer_inner .wrap i',{
          scrollTrigger:{
            trigger:'footer .footer_inner',
            start: 'top, 50%',
            end: '100%, 100%',
          },
          'width' : '100%',
          duration: 1,
    })



    // header_gnb

    $(window).scroll(function(){

      if($(window).scrollTop() > 50){
        $('header').addClass('on');
      }else{
        $('header').removeClass('on');
      }

    });


    // m_gnb

    $('header .m_btn').click(function(e){
      e.preventDefault();

      if($(this).hasClass('on')){
        $(this).removeClass('on');
      }else{
        $(this).addClass('on');
      }
    });





    // gsap 반응형

    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.saveStyles(".mobile, .desktop");

    ScrollTrigger.matchMedia({
      
      "(min-width: 768px)": function() {


            // 글자 올라오기

            const text = gsap.timeline({
              scrollTrigger:{
                trigger:'.sc_banner',
                  start:"60% 50%",
                  end:"100% 80%",
                  // markers: true,
                },
            });

            text.to('.sc_banner .img_wrap .obj.img01',{
              y: 50,
            }
            ,0.2)
            .to('.sc_banner .img_wrap .obj.img02',{
              y: 50,
            }
            ,0.5)
            .to('.sc_banner .img_wrap .obj.img03',{
              y: 50,
            }
            ,0.1)
            .to('.sc_banner .img_wrap .obj.img04',{
              y: 50,
            }
            ,0.2)
            .to('.sc_banner .img_wrap .obj.img05',{
              y: 50,
            }
            ,0.3)
            .to('.sc_banner .img_wrap .obj.img06',{
              y: 50,
            }
            ,0.1)
            .to('.sc_banner .img_wrap .obj.img07',{
              y: 50,
            }
            ,0.3)
            .to('.sc_banner .img_wrap .obj.img08',{
              y: 50,
            }
            ,0.4)



            //footer
            gsap.to('footer .footer_inner .wrap i',{
                  scrollTrigger:{
                    trigger:'footer .footer_inner',
                    start: 'top, 65%',
                    end: '100%, 100%',
                    // markers: true,
                  },
                  'width' : '100%',
                  duration: 1,
            })


      }, 
      
      "(max-width: 320px)": function() {

      }, 
      
      "all": function() {

      }
      
    });
    
      
    
});