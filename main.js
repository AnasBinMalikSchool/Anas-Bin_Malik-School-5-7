
document.addEventListener("DOMContentLoaded", function () {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    x_z240$$ = document.querySelector(".pass");
    x_z240$$.style.display = "none"

    document.addEventListener('keydown', function (e) {
        // منع Ctrl + '+' أو Ctrl + '-'
        if ((e.ctrlKey || e.metaKey) && (e.key === '=' || e.key === '+' || e.key === '-' || e.key === '0')) {
            e.preventDefault();
        }
    }, { passive: false });

    document.addEventListener('wheel', function (e) {
        if (e.ctrlKey || e.metaKey) {
            e.preventDefault();
            console.log(phones[1].name);
        }
    }, { passive: false });


    document.addEventListener("keydown", function (e) {
        if (e.ctrlKey &&
            (e.key === "u" ||
                e.key === "U" ||
                e.key === "s" ||
                e.key === "S")) {
            e.preventDefault();
        }

        if (e.key === "F12") {
            e.preventDefault();
        }
    });
});

all = document.querySelector("*")
nav = document.querySelector("nav")
nav2 = document.querySelectorAll("nav *")

function light() {
    location.reload();
}

function dark() {
    document.querySelectorAll("*").forEach(el => {
        el.style.setProperty("background-color", "#111", "important");
        el.style.setProperty("color", "#ddd", "important");
    });
    nav.style.setProperty("background-color", "rgb(87, 17, 34)", "important");
    navItems.forEach(el => {
        el.style.setProperty("background-color", "rgb(87, 17, 34)", "important");
    });
}

