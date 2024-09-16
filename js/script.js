// Выбираем все видео на странице с помощью jQuery
const videos = $(".vid");

// Функция для активации видео на iOS
function once(el, event, fn, opts) {
    var onceFn = function (e) {
        el.removeEventListener(event, onceFn);
        fn.apply(this, arguments);
    };
    el.addEventListener(event, onceFn, opts);
    return onceFn;
}

// Активация видео на iOS (одноразово)
once(document.documentElement, "touchstart", function (e) {
    videos.each(function () {
        this.play();
        this.pause();
    });
});

// Регистрация плагина GSAP
gsap.registerPlugin(ScrollTrigger);

// Применяем GSAP таймлайны и ScrollTrigger для каждого видео
videos.each(function (index, video) {
    if (video.tagName.toLowerCase() === 'video') { // Проверяем, что это видео элемент
        let src = video.currentSrc || video.src;
        console.log(`Video ${index + 1}:`, video, src);

        let tl = gsap.timeline({
            defaults: { duration: 1 },
            scrollTrigger: {
                trigger: video, // используем текущее видео как триггер
                start: "0% 60%",
                end: "100% 50%",
                // markers: true,
                scrub: true
            },
        });

        // Начинаем анимацию, когда метаданные загружены
        once(video, "loadedmetadata", () => {
            tl.fromTo(
                video,
                { currentTime: 0 },
                { currentTime: video.duration || 1 }
            );
        });
    } else {
        console.error(`Element at index ${index} is not a video.`, video);
    }
});

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