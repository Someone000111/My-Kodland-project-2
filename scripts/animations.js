// Анимации

anime({
    targets: ".adv",
    keyframes: [
        {
            translateX: 1000,
        },
        {
            translateX: 0,
        },
    ],
    duration: 3500,
    delay: anime.stagger(1000),
    easing: "easeOutCirc",
    loop: false,
});

anime({
    targets: ".n1, .nav-list li",
    keyframes: [
        {
            translateY: -500,
        },
        {
            translateY: 0,
        },
    ],
    duration: 3500,
    delay: anime.stagger(300),
    easing: "easeOutCirc",
    loop: false,
});

anime({
    targets: ".contacts a",
    keyframes: [
        {
            translateY: 500,
        },
        {
            translateY: 0,
        },
    ],
    duration: 3500,
    delay: anime.stagger(300),
    easing: "easeOutCirc",
    loop: false,
});

anime({
    targets: ".Top h4, .Top h1",
    keyframes: [
        {
            translateX: -1000,
        },
        {
            translateX: 0,
        },
    ],
    duration: 3500,
    delay: anime.stagger(500),
    easing: "easeOutCirc",
    loop: false,
});

function rotateButton(deg, time) {
    anime({
        targets: ".button_up",

        rotate: deg,
        duration: time,
        easing: "easeOutElastic",
        loop: false,
    });
}

$(window).on(
    "scroll",
    function (windowScrollPosition, blockHeight, blockPosition, blockHeight2, blockPosition2) {
        blockPosition = document.querySelector(".block4").offsetTop;
        blockHeight = document.querySelector(".block4").offsetHeight / 2;
        
        blockPosition2 = document.querySelector(".block3").offsetTop;
        // blockHeight2 = document.querySelector(".block3").offsetHeight / 2;


        windowScrollPosition = $(window).scrollTop();

        if (windowScrollPosition > blockPosition + blockHeight / 2) {
            rotateButton(180, 2000);
            console.log("Ответ: ok");
        } else if (windowScrollPosition < blockPosition2 / 2) {
            rotateButton(0, 3000);
            console.log("Ответ:");
        }
    }
);



if (document.getElementById("hrefA").href == "#t0") {
    anime({
        targets: ".button_up",
        rotate: 180,
        duration: 3000,
        loop: false,
    });
}
else if (document.getElementById("hrefA").href == "#t1") {
    anime({
        targets: ".button_up",
        rotate: 180,
        duration: 3000,
        loop: false,
    });
}