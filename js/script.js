gsap.registerPlugin(ScrollTrigger);
function createVideoTimeline($video, startTrigger, endTrigger) {
    let video = $video.get(0);

    // $(document).one("touchstart", function () {
    //     console.log('f');
    //     video.play(); video.pause();
    // });

    let tl = gsap.timeline({
        defaults: { duration: 1 },
        scrollTrigger: {
            trigger: video,
            start: startTrigger,
            end: endTrigger,
            markers: true,
            scrub: true
        },
    });

    $video.one("loadedmetadata", function () {
        tl.fromTo(
            video,
            { currentTime: 0 },
            { currentTime: video.duration || 1 }
        );
    });

    return tl;
}

// createVideoTimeline($("#video1"), "0% 10%", "100% 100%");
// createVideoTimeline($("#video2"), "20% 60%", "90% 80%");

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
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 300,
    touchThreshold: 10,
    variableWidth: true,
    infinite: true,
    focusOnSelect: true,
    touchMove: true,
    asNavFor: '.slider-nav',
    prevArrow: '<button class="slick-prev"> </button>',
    nextArrow: '<button class="slick-next"> </button>',
});

$('.slider-nav').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.slider',
    speed: 300,
    dots: false,
    centerPadding: 0,
    arrows: false,
    centerMode: true,
    focusOnSelect: true
})


// AOS.init({ duration: 1200, offset: 100, });
$('.menu__btn').on('click', function () {
    $('.menu__btn, .menu, body').toggleClass('active')
})

const loop = document.querySelectorAll('.loop');
const options = { root: null, rootMargin: '0px', threshold: 0.1 };
const observer = new IntersectionObserver(handleIntersection, options);
loop.forEach(video => observer.observe(video));
function handleIntersection(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.play();
            var myVideo = entry.target;
            myVideo.addEventListener("contextmenu", function (e) { e.preventDefault(); e.stopPropagation(); }, false);
            if (myVideo.hasAttribute("controls")) {
                myVideo.removeAttribute("controls")
            }
        }
        else { entry.target.pause(); }
    });
}


// function copyText() {
//     var button = document.querySelector('.btn');
//     var dataToCopy = button.getAttribute('data-copy');
//     navigator.clipboard.writeText(dataToCopy)
//         .then(function () { alert('Text copied: ' + dataToCopy); })
//         .catch(function (err) { console.error('Failed to copy text:', err); });
// }