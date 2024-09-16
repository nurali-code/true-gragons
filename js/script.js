const video = document.querySelector("#vid_1");
let src = video.currentSrc || video.src;
console.log(video, src);

/* Make sure the video is 'activated' on iOS */
function once(el, event, fn, opts) {
    var onceFn = function (e) {
        el.removeEventListener(event, onceFn);
        fn.apply(this, arguments);
    };
    el.addEventListener(event, onceFn, opts);
    return onceFn;
}

once(document.documentElement, "touchstart", function (e) {
    video.play();
    video.pause();
});

gsap.registerPlugin(ScrollTrigger);

let tl = gsap.timeline({
    defaults: { duration: 1 },
    scrollTrigger: {
        trigger: "#vid_1",
        start: "20% 50%",
        end: "80% 50%",
        markers: true,
        scrub: true

    },
    // filter: "blur(5px)",
});

once(video, "loadedmetadata", () => {
    tl.fromTo(
        video,
        { currentTime: 0 },
        { currentTime: video.duration || 1 }
    );
});

setTimeout(function () {
    if (window["fetch"]) {
        fetch(src)
            .then((response) => response.blob())
            .then((response) => {
                var blobURL = URL.createObjectURL(response);

                var t = video.currentTime;
                once(document.documentElement, "touchstart", function (e) {
                    video.play();
                    video.pause();
                });

                video.setAttribute("src", blobURL);
                video.currentTime = t + 0.001;
            });
    }
}, 1000);

/* When first coded, the Blobbing was important to ensure the browser wasn't dropping previously played segments, but it doesn't seem to be a problem now. Possibly based on memory availability? */
setTimeout(function () {
    if (window["fetch"]) {
        fetch(src)
            .then((response) => response.blob())
            .then((response) => {
                var blobURL = URL.createObjectURL(response);

                var t = video.currentTime;
                once(document.documentElement, "touchstart", function (e) {
                    video.play();
                    video.pause();
                });

                video.setAttribute("src", blobURL);
                video.currentTime = t + 0.01;
            });
    }
}, 1000);



$('.slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    centerMode: true,
    speed: 300,
    touchThreshold: 10,
    variableWidth: true,
    infinite: true,
    focusOnSelect: true,
    touchMove: true,
    prevArrow: '<button class="slick-prev"> </button>',
    nextArrow: '<button class="slick-next"> </button>',
});


// AOS.init({ duration: 1200, offset: 100, });
$('.menu__btn').on('click', function () {
    $('.menu__btn, .menu, body').toggleClass('active')
})

// const videos = document.querySelectorAll('video');
// const options = { root: null, rootMargin: '0px', threshold: 0.1 };
// const observer = new IntersectionObserver(handleIntersection, options);
// videos.forEach(video => observer.observe(video));
// function handleIntersection(entries) {
//     entries.forEach(entry => {
//         if (entry.isIntersecting) {
//             entry.target.play();
//             var myVideo = entry.target;
//             myVideo.addEventListener("contextmenu", function (e) { e.preventDefault(); e.stopPropagation(); }, false);
//             if (myVideo.hasAttribute("controls")) {
//                 myVideo.removeAttribute("controls")
//             }
//         }
//         else { entry.target.pause(); }
//     });
// }


// function copyText() {
//     var button = document.querySelector('.btn');
//     var dataToCopy = button.getAttribute('data-copy');
//     navigator.clipboard.writeText(dataToCopy)
//         .then(function () { alert('Text copied: ' + dataToCopy); })
//         .catch(function (err) { console.error('Failed to copy text:', err); });
// }