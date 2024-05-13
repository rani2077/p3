
// 비주얼 영역 스와이퍼

var swiper = new Swiper(".visual-swiper", {
    loop:true,
    speed:0,
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },

  });
let imgBg = `<img src="./asset/images/mainvisual-img-02.jpg" alt="">`

visualBg = [
    `<video autoplay loop="true" muted>
        <source src="./asset/video/video-bg.mp4">
    </video>`,
    `<img src="./asset/images/mainvisual-img-02.jpg" alt="">`,
    `<img src="./asset/images/mainvisual-img-03.jpg" alt="">`,
    `<img src="./asset/images/mainvisual-img-04.jpg" alt="">`
]

swiper.on('transitionEnd', function() {
	let idx = Number(swiper.realIndex);
    // console.log(visualBg[idx]);

    $(".sc-visual .group-bg").html(visualBg[idx])
});

// 스크롤 다운 버튼
let sectionOffset = $("#section1").offset();

$(".btn-scroll").click(function(e){
    e.preventDefault();
    // console.log(sectionOffset.top)
    $("html, body").animate({scrollTop:sectionOffset.top},1300); // 선택한 위치로 이동. 두번째 인자는 0.4초를 의미한다.
})


// gsap 애니메이션

let yVal = 80


gsap.to("[data-fade1]",{
    opacity:0, y:yVal, duration:0,
    scrollTrigger:({
        trigger:".sc-section1",
        start:"top 50%",
        // markers:true,
        onEnter:function(){
            gsap.to("[data-fade1]",{opacity:1,y:0,stagger:0.3,})
        }
    })
})
ScrollTrigger.create({
    trigger:'.sc-section1',
    start:"top 50%",
    // markers:"true",
    onEnter:function(){
        setTimeout(function(){
            $('[data-square="1"]').addClass("right-bottom")
        },500)
    }
})


gsap.to('[data-fade2]',{
    opacity:0,y:yVal,duration:0,
    scrollTrigger:({
        trigger:".sc-section2",
        start:"top 80%",
        // markers:true,
        onEnter:function(){
            gsap.to("[data-fade2]",{opacity:1,y:0,stagger:0.3,})
        }
    })
})


gsap.to('[data-fade3]',{
    opacity:0,y:yVal,duration:0,
    scrollTrigger:({
        trigger:".group-box1",
        start:"top 70%",
        // markers:true,
        onEnter:function(){
            gsap.to("[data-fade3]",{opacity:1,y:0,stagger:0.3,})
        }
    })
})
ScrollTrigger.create({
    trigger:".group-box1",
    start:"top 70%",
    //markers:"true",
    onEnter:function(){
        setTimeout(function(){
            $('[data-square="2"]').addClass("right-top")

        },500)
    }
})
gsap.to('[data-fade4]',{
    opacity:0,y:yVal,duration:0,
    scrollTrigger:({
        trigger:".group-box2",
        start:"top 70%",
        // markers:true,
        onEnter:function(){
            gsap.to("[data-fade4]",{opacity:1,y:0,stagger:0.3,})
        }
    })
})
ScrollTrigger.create({
    trigger:".group-box2",
    start:"top 70%",
    //markers:"true",
    onEnter:function(){
        setTimeout(function(){
            $('[data-square="3"]').addClass("left-bottom")

        },500)

    }
})
gsap.to('[data-fade5]',{
    opacity:0,y:yVal,duration:0,
    scrollTrigger:({
        trigger:".group-box3",
        start:"top 70%",
        // markers:true,
        onEnter:function(){
            gsap.to("[data-fade5]",{opacity:1,y:0,stagger:0.3,})
        }
    })
})
ScrollTrigger.create({
    trigger:".group-box3",
    start:"top 70%",
    //markers:"true",
    onEnter:function(){
        setTimeout(function(){
            $('[data-square="4"]').addClass("right-bottom")

        },500)
    }
})



// section3 애니메이션
gsap.from('.sc-section3 .bg-box',{
    scrollTrigger:{
        trigger:".sc-section3",
        start:"0% 100%",
        end:"0% 0%",
        scrub:1,
        // markers:true,
    },
    scale:0.5,
})
ScrollTrigger.create({
    trigger: '.sc-section3',
    pin: ".sc-section3 .bg-box",
    start: '0% 0%',
    end: '100% 100%',
    // markers: true,
})


gsap.utils.toArray("[data-section3]").forEach(element => {
    // console.log(element);
    gsap.to(element,{y:100,opacity:0})
    ScrollTrigger.create({
        trigger:element,
        start:"top 80%",
        end:"bottom top",
        // markers:"true",
        onEnter:function(){
            gsap.to(element,{y:0,opacity:1,stagger:0.5})

        }
    })
})


// section4 애니메이션

gsap.to("[data-recruit]",{
    opacity:0,y:yVal,duration:0,
    scrollTrigger:({
        trigger:".sc-section4",
        start:"top 70%",
        // markers:true,
        onEnter:function(){
            gsap.to("[data-recruit]",{opacity:1,y:0,stagger:0.2})
        }
    })
})

gsap.to("[data-recruit2]",{
    opacity:0,y:yVal,duration:0,
    scrollTrigger:({
        trigger:".sc-section5",
        start:"top 70%",
        // markers:true,
        onEnter:function(){
            gsap.to("[data-recruit2]",{opacity:1,y:0,stagger:0.2})
        }
    })
})