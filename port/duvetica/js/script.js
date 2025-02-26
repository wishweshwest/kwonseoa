$(function(e) {
    // AOS.init({once: true,});

    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray('.tran').forEach((element, i) => {
        gsap.to(element, {
            opacity: 1,
            y: 0, // 위에서 아래로 내려오는 애니메이션
            duration: 1.2,
            ease: 'power3.out',
            // stagger: 0.5,
            delay: i * 0.3, // 각 요소마다 0.3초씩 딜레이 증가
            scrollTrigger: {
                // markers:1,
                trigger: element,
                start: 'top 50%',
                end: 'center 60%',
                // toggleActions: 'play none none none',
            }
        });
    });



    gsap.utils.toArray('.inner_sp').forEach((section) => {
        const elements = section.querySelectorAll('.tran2'); //  해당 section 내부의 tran2 요소만 선택
    
        if (elements.length > 0) {
            gsap.to(elements, {
                opacity: 1,
                ease: 'power3.out',
                duration: 1.5,
                stagger: 0.3, //  같은 section 내부 요소끼리만 stagger 적용
                scrollTrigger: {
                    // markers: true, //  마커 표시 (디버깅용, 완료 후 제거 가능)
                    trigger: section, //  section이 화면에 들어오면 실행
                    start: 'top 60%',  //  기존보다 늦게 실행되도록 조정
                    end: 'top 40%',
                    toggleActions: 'play none none none',
                    invalidateOnRefresh: true, //  스크롤 위치가 갱신될 때 재계산
                    refreshPriority: -1 //  pin이 먼저 적용된 후, `.tran2`의 위치를 다시 계산하도록 설정
                }
            });
        }
    });
    
    
    
    
    
    

    

    var firstSlideTriggered1 = false;
    var firstSlideTriggered2 = false;
    var firstSlideTriggered3 = false;

    var swiper1 = new Swiper(".pc .mySwiper1", {
    loop: true,
    autoplay: { 
        delay: 3000,  // 기본 딜레이 값
        disableOnInteraction: false, 
    },
    speed: 2000,
    allowTouchMove: false,
    on: {
        slideChangeTransitionStart: function() {
            // 첫 번째 슬라이드에서 딜레이 값을 설정
            if (swiper1.realIndex === 0 && !firstSlideTriggered1) {
                swiper1.params.autoplay.delay = 3000;  // 첫 번째 슬라이드에서 딜레이 0으로 설정
                // console.log(`First slide, delay 0: realIndex ${swiper1.realIndex}`);
            } else {
                swiper1.params.autoplay.delay = 3000;  // 다른 슬라이드에서는 기본 딜레이로 설정
                // console.log(`Other slide, delay 3000: realIndex ${swiper1.realIndex}`);
            }
            swiper1.autoplay.start();  // 새 딜레이로 재시작
        }
    }
    });

    var swiper2 = new Swiper(".pc .mySwiper2", {
    loop: true,
    autoplay: {  
        delay: 3000,  // 원래 딜레이 값
        disableOnInteraction: false,
    },
    speed: 2000,
    allowTouchMove: false,
    on: {
        slideChangeTransitionStart: function() {
            // 첫 번째 슬라이드에서 딜레이 값을 설정
            if (swiper2.realIndex === 0 && !firstSlideTriggered2) {
                swiper2.params.autoplay.delay = 3000;  // 첫 번째 슬라이드에서 딜레이 0으로 설정
                // console.log(`First slide, delay 0: realIndex ${swiper2.realIndex}`);
            } else {
                swiper2.params.autoplay.delay = 3000;  // 다른 슬라이드에서는 기본 딜레이로 설정
                // console.log(`Other slide, delay 3000: realIndex ${swiper2.realIndex}`);
            }
            swiper2.autoplay.start();  // 새 딜레이로 재시작
        }
    }
    });

    var swiper3 = new Swiper(".pc .mySwiper3", {
    loop: true,
    autoplay: {  
        delay: 3000,   // 원래 딜레이 값
        disableOnInteraction: false, 
    },
    speed: 2000,
    allowTouchMove: false,
    on: {
        slideChangeTransitionStart: function() {
            // 첫 번째 슬라이드에서 딜레이 값을 설정
            if (swiper3.realIndex === 0 && !firstSlideTriggered3) {
                swiper3.params.autoplay.delay = 3000;  // 첫 번째 슬라이드에서 딜레이 0으로 설정
                // console.log(`First slide, delay 0: realIndex ${swiper3.realIndex}`);
            } else {
                swiper3.params.autoplay.delay = 3000;  // 다른 슬라이드에서는 기본 딜레이로 설정
                // console.log(`Other slide, delay 3000: realIndex ${swiper3.realIndex}`);
            }
            swiper3.autoplay.start();  // 새 딜레이로 재시작
        }
    }
    });





// 패널들이 가로로 스크롤되는 애니메이션
let sections = document.querySelectorAll(".panel"); // NodeList 그대로 사용

let scrollDistance = (sections[0].offsetWidth) * 3; // 스크롤 길이 설정

// console.log(scrollDistance);

gsap.to(sections, {
  xPercent: -100 * (sections.length - 1), // 패널들을 왼쪽으로 이동
  ease: "none", // 애니메이션 없이 즉각적으로 이동
  scrollTrigger: {
    trigger: "#hor", // 가로로 스크롤되기 시작하는 섹션
    pin: true, // 섹션을 화면에 고정
    pinSpacing: true,
    scrub: 0.1, // 스크롤과 동기화하여 부드럽게 이동
    end: `+=${scrollDistance}` // 가로 스크롤되는 거리
  }
});





    swiper1.autoplay.stop();
    swiper2.autoplay.stop();
    swiper3.autoplay.stop();

    // Swiper 1 autoplay control - 첫 번째 슬라이드에서만 딜레이 0 적용
    ScrollTrigger.create({
    trigger: ".pc .inner_sp4",
    start: "top center",  // 스크롤이 화면에 들어왔을 때 트리거 시작
    end: "bottom center", 
    onEnter: (self) => {
        if (!firstSlideTriggered1) {  // 첫 번째 슬라이드에서 딜레이 0 설정
            if (swiper1.realIndex === 0) {
                swiper1.params.autoplay.delay = 0;
                swiper1.autoplay.start();  // autoplay 시작
                // console.log("ScrollTrigger - First slide, delay 0");
            }
            firstSlideTriggered1 = true;  // 이후 실행 방지
        }
    },
    // onLeave: () => swiper1.autoplay.stop(),
    // onEnterBack: () => swiper1.autoplay.start(),
    // onLeaveBack: () => swiper1.autoplay.stop(),
    });

    // Swiper 2 autoplay control
    ScrollTrigger.create({
    trigger: ".pc .inner_sp6",
    start: "top center", 
    end: "bottom center",
    onEnter: (self) => {
        if (!firstSlideTriggered2) {
            if (swiper2.realIndex === 0) {
                swiper2.params.autoplay.delay = 0;
                swiper2.autoplay.start();
                // console.log("ScrollTrigger - First slide, delay 0");
            }
            firstSlideTriggered2 = true;
        }
    },
    // onLeave: () => swiper2.autoplay.stop(),
    // onEnterBack: () => swiper2.autoplay.start(),
    // onLeaveBack: () => swiper2.autoplay.stop(),
    });

    // Swiper 3 autoplay control
    ScrollTrigger.create({
    trigger: ".pc .inner_sp8",
    start: "top center",
    end: "bottom center",
    onEnter: (self) => {
        if (!firstSlideTriggered3) {
            if (swiper3.realIndex === 0) {
                swiper3.params.autoplay.delay = 0;
                swiper3.autoplay.start();
                // console.log("ScrollTrigger - First slide, delay 0");
            }
            firstSlideTriggered3 = true;
        }
    },
    // onLeave: () => swiper3.autoplay.stop(),
    // onEnterBack: () => swiper3.autoplay.start(),
    // onLeaveBack: () => swiper3.autoplay.stop(),
    });

    // GSAP animation for .up_sp divs
    gsap.from('.up_sp div', {
    scrollTrigger: {
        trigger: '.inner_sp3',
        start: "top center",
        end: "80% 80%", 
        // scrub: 3,
    },
    y: 300,
    opacity: 0,
    duration: 1,
    delay: 0.5,
    stagger: 0.2,
    });
});