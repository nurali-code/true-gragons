gsap.registerPlugin(ScrollTrigger);
gsap.timeline({
    scrollTrigger: {
        trigger: ".panic-img",
        start: "-0% 80%",
        end: "100% 10%",
        scrub: true,
        // markers: true,
    }
})
    .fromTo(".panic_img", { y: '100%', }, { y: '0%', duration: 1 })
    .to(".panic_img", { y: '0%', duration: 2 })
    .to(".panic_img", { y: '-50%', duration: 1 });

gsap.timeline({
    scrollTrigger: {
        trigger: ".pasp-img",
        start: "-20% 70%",
        end: "100% 20%",
        scrub: true,
        // markers: true,
    }
})
    .fromTo(".pasp_img", { y: '100%', rotation: -30 }, { y: '0%', rotation: 0, duration: 1 })
    .to(".pasp_img", { y: '0%', rotation: 0, duration: 2 })
    .to(".pasp_img", { y: '-50%', rotation: 10, duration: 1 });


gsap.timeline({
    scrollTrigger: {
        trigger: ".true__left",
        start: "-120% 50%",
        end: "300% 60%",
        scrub: true,
        // markers: true,
    }
})
    .fromTo("#i_left", { x: '0%', rotation: 0 }, { x: '170%', rotation: -30, duration: 1 })
    .to("#i_left", { x: '170%', rotation: -30, duration: 2 })
    .to("#i_left", { x: '0%', rotation: -50, duration: 1 });

gsap.timeline({
    scrollTrigger: {
        trigger: ".true__right",
        start: "-120% 50%",
        end: "300% 60%",
        scrub: true,
        // markers: true,
    }
})
    .fromTo("#i_right", { x: '0%', rotation: 0 }, { x: '-170%', rotation: 30, duration: 1 })
    .to("#i_right", { x: '-170%', rotation: 30, duration: 2 })
    .to("#i_right", { x: '0%', rotation: 50, duration: 1 });

$('.slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    centerMode: true,
    // autoplay: true,
    autoplaySpeed: 2500,
    speed: 400,
    touchThreshold: 10,
    variableWidth: true,
    infinite: true,
    focusOnSelect: true,
    touchMove: true,
    asNavFor: '.slider-nav',
    prevArrow: '<button class="slick-prev"></button>',
    nextArrow: '<button class="slick-next"></button>',
});

$('.slider-nav').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.slider',
    speed: 400,
    dots: false,
    centerPadding: 0,
    arrows: false,
    centerMode: true,
    focusOnSelect: true
})

const loop = document.querySelectorAll('.loop');
const options = { root: null, rootMargin: '0px', threshold: 0.1 };
const observer = new IntersectionObserver(handleIntersection, options);
loop.forEach(video => observer.observe(video));

function handleIntersection(entries) {
    entries.forEach(entry => {
        const myVideo = entry.target;

        if (entry.isIntersecting) {
            myVideo.play();

            // Отключаем меню по правой кнопке мыши
            myVideo.addEventListener("contextmenu", function (e) {
                e.preventDefault();
                e.stopPropagation();
            }, false);

            // Удаляем атрибут controls, если он присутствует
            if (myVideo.hasAttribute("controls")) {
                myVideo.removeAttribute("controls");
            }
        } else {
            myVideo.pause();

            // Если видео имеет класс "start", сбрасываем его к началу
            if (myVideo.classList.contains("start")) {
                myVideo.currentTime = 0;
            }
        }
    });
}

// function copyText() {
//     var button = document.querySelector('.btn');
//     var dataToCopy = button.getAttribute('data-copy');
//     navigator.clipboard.writeText(dataToCopy)
//         .then(function () { alert('Text copied: ' + dataToCopy); })
//         .catch(function (err) { console.error('Failed to copy text:', err); });
// }

// AOS.init({ duration: 1200, offset: 100, });
$('.menu__btn').on('click', function () {
    $('.menu__btn, .menu, body').toggleClass('active')
})
