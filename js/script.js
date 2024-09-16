// Регистрация плагина GSAP
gsap.registerPlugin(ScrollTrigger);

// Функция для создания таймлайна для одного видео
function createVideoTimeline($video, startTrigger, endTrigger) {
    // jQuery объект преобразуем в DOM-элемент
    let video = $video.get(0);

    // Активация видео на iOS (одноразово)
    $(document).one("touchstart", function () { video.play(); video.pause(); });

    // Создаем GSAP таймлайн для видео
    let tl = gsap.timeline({
        defaults: { duration: 1 },
        scrollTrigger: {
            trigger: video,      // используем текущее видео как триггер
            start: startTrigger, // параметры начала
            end: endTrigger,     // параметры окончания
            // markers: true,       // маркеры для отладки
            scrub: true          // плавный скролл
        },
    });

    // Начинаем анимацию, когда метаданные видео загружены
    $video.one("loadedmetadata", function () {
        tl.fromTo(
            video,
            { currentTime: 0 },              // Начальная точка анимации
            { currentTime: video.duration || 1 } // Финальная точка анимации
        );
    });

    return tl; // Возвращаем таймлайн для дальнейшего использования, если нужно
}

// Пример использования функции с несколькими видео

// Видео 1
createVideoTimeline($("#video1"), "0% 10%", "100% 100%");

// Видео 2
createVideoTimeline($("#video2"), "20% 60%", "90% 80%");

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