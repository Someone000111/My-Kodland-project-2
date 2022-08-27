// Define the query
const mediaQuery = window.matchMedia('(min-width: 768px)')


// Войти или зарег.querySelector(".formInner");

let formInner = document.querySelector(".formInner");

// Глобальные переменные

window.currentUser = {
    name: "",
    email: "",
    password: "",
};

// Функция обработки данных формы

var off = false;
function handle(event) {
    event.preventDefault();
    let inputs = document.querySelectorAll(".accountInput");
    let input_values = [];
    for (let i = 0; i < inputs.length; i++) {
        input_values.push(inputs[i].value);
    }

    // Проверка регистрируется пользователь или входит в свой аккаунт

    // Пользователь регистрируется
    if (off == true) {
        currentUser.name = inputs[0].value;
        currentUser.email = inputs[1].value;
        currentUser.password = inputs[2].value;

        //  Проверка заполненности формы регистрации
        if (currentUser.name == "") {
            alert("Введите имя");
        } else if (currentUser.email == "") {
            alert("Введите почтовый адрес");
        } else if (currentUser.password == "") {
            alert("Введите пароль");
        } else {
            alert("Вы зарегистрировались как " + currentUser.name);
            document.getElementById("sign_up").style.display = "none";

            inputs.forEach(element => {
                element.value = "";
            });

            document.querySelectorAll(".account_path").forEach(element => {
                element.style.animation = "none";
                element.style.fill = "#679798";
            });
        }
    }
    // Пользователь входит в аккаунт
    else {
        currentUser.email = inputs[0].value;
        currentUser.password = inputs[1].value;

        //  Проверка заполненности формы входа
        if (currentUser.email == "") {
            alert("Введите почтовый адрес");
        } else if (currentUser.password == "") {
            alert("Введите пароль");
        } else {
            alert("Вы вошли в аккаунт");

            document.getElementById("sign_up").style.display = "none";

            inputs.forEach(element => {
                element.value = "";
            });

            // Если пользователь вошел, то иконка окрашивается в другой цвет
            document.querySelectorAll(".account_path").forEach(element => {
                element.style.animation = "none";
                element.style.fill = "#679798";
            });
        }
    }
}

// Выбор входа или регистрации

// Изменение сожержимого формы (вход)
function logInClick() {
    $(".logIn").click(function () {
        off = false;

        formInner.innerHTML =
            '<h4>Почта</h4><input class="accountInput" type="email" placeholder="Введите почтовый адрес"><h4>Пароль</h4><input class="accountInput" type="password" name="" id="" placeholder="Введите пароль"><button onclick="handle(event)" class="sign_up_button">Войти</button>';

        document.querySelector(".signUp").style.opacity = " 0.5";
        document.querySelector(".logIn").style.opacity = " 1";
    });
}

// Изменение сожержимого формы (регистрация)
function signUpClick() {
    $(".signUp").click(function (event) {
        off = true;

        formInner.innerHTML =
            '<h4>Имя</h4><input class="accountInput" type="text" name="" id="name"  placeholder="Введите имя"><h4> Почта</h4 > <input class="accountInput" type="email" placeholder="Введите почтовый адрес"><h4>Пароль</h4><input class="accountInput" type="password" name="" id="" placeholder="Введите пароль"><button onclick="handle(event)" class="sign_up_button">Зарегистрироваться</button>';

        document.querySelector(".signUp").style.opacity = "1";
        document.querySelector(".logIn").style.opacity = " 0.5";
    });
}

// функция для кнопки закрытия формы

function closeButton() {
    $(".close").click(function () {
        document.getElementById("sign_up").style.display = "none";
        $(".label_checkbox_account").click(function () {
            document.getElementById("sign_up").style.display = "flex";
            document.querySelector(".close").style.display = "block";
        });
    });
}

// Функция приведения в действие вышеперечисленных функций

function open_sign_up_window() {
    $(".label_checkbox_account").click(function () {
        document.getElementById("sign_up").style.display = "flex";
        // document.getElementById("sign_up").style.position = "fixed";

        document.querySelector(".close").style.display = "block";
        logInClick();
        signUpClick();
        closeButton();
    });
}

$(document).ready(open_sign_up_window);

// Функция для плавной прокрутки якорных ссылок

$(document).ready(function () {
    $("a.scrollto2").click(function (event) {
        event.preventDefault();
        elementClick = $(this).attr("href");
        destination = $(elementClick).offset().top;
        $("html:not(:animated),body:not(:animated)").animate(
            { scrollTop: destination },
            1100
        );
        return false;
    });
});

// Вычисление количества ссылок
let hrefs = document.querySelectorAll(".all_A");
let list = [];

hrefs.forEach(element => {
    list.push(element);
});

// Создаем счетчик ссылок
window.currentUser = {
    count: 0,
};

//  ВАЖНО
// Функция скролла при нажатии на кнопку

function scroll(selfHeight, selfY) {
    elementClick = $(".scrollto").attr("href");

    selfHeight = [];
    selfY = [];

    // Вычисляем положение каждого элемента
    list.forEach(element => {
        selfHeight.push(element.clientHeight);
        selfY.push(element.offsetTop);
    });

    // Выполнение функций при скролле
    $(window).on("scroll", (windowScrollPosition, hrefNow, log) => {
        hrefNow = document.getElementById("hrefA").href;

     

        console.log(hrefNow);

        windowScrollPosition = $(window).scrollTop();

        // Проверка положения и выдача соответствующей функции

        if (
            (windowScrollPosition == hrefNow.offsetTop &&
                hrefNow ==
                    "file:///C:/Users/User/Desktop/%D0%9F%D1%80%D0%BE%D0%B5%D0%BA%D1%82%20Kodland%202/index.html#t0") ||
            hrefNow ==
                "file:///C:/Users/Someone/Documents/GitHub/-Kodland-2/index.html#t0" ||
            hrefNow == "http://127.0.0.1:5500/#t0" ||
            hrefNow == 'file:///C:/Users/Someone/Documents/GitHub/My-Kodland-project-2/index.html#t0'
        ) {
            anime({
                targets: ".advArt",
                opacity: [0, 1],
                duration: 4000,
                delay: anime.stagger(400),
                // easing: 'easeOutCrc',
                loop: false,
            });
            // console.log("ок1");
        } else if (
            (windowScrollPosition == hrefNow.offsetTop &&
                hrefNow ==
                    "file:///C:/Users/User/Desktop/%D0%9F%D1%80%D0%BE%D0%B5%D0%BA%D1%82%20Kodland%202/index.html#t1") ||
            hrefNow ==
                "file:///C:/Users/Someone/Documents/GitHub/-Kodland-2/index.html#t1" ||
            hrefNow == "http://127.0.0.1:5500/#t1"||
            hrefNow == 'file:///C:/Users/Someone/Documents/GitHub/My-Kodland-project-2/index.html#t1'

        ) {
            anime({
                targets: ".online *",

                translateX: [500, 0],
                duration: 1000,
                delay: anime.stagger(50),
                easing: "easeOutExpo",
                loop: false,
            });
            // console.log("ок2");
        } else if (
            (windowScrollPosition == hrefNow.offsetTop &&
                hrefNow ==
                    "file:///C:/Users/User/Desktop/%D0%9F%D1%80%D0%BE%D0%B5%D0%BA%D1%82%20Kodland%202/index.html#t2") ||
            hrefNow ==
                "file:///C:/Users/Someone/Documents/GitHub/-Kodland-2/index.html#t2" ||
            hrefNow == "http://127.0.0.1:5500/#t2"||
            hrefNow == 'file:///C:/Users/Someone/Documents/GitHub/My-Kodland-project-2/index.html#t2'

        ) {
            anime({
                targets: ".years",
                opacity: [0, 1],
                duration: 1000,
                delay: anime.stagger(400),
                // easing: 'easeOutCirc',
                loop: false,
            });
            // console.log("ок3");
        }
    });

    // Задаем переменной destination значение
    destination = selfY[currentUser.count];

    $("html,body").animate({ scrollTop: destination }, 1000);
    return false;
}
//  ВАЖНО

// Функция изменения ссылки кнопки при каждои нажатии кнопки

function plus(tTopH, tTopTop) {
    tTopH = document.getElementById("tTop").offsetHeight;
    tTopTop = document.getElementById("tTop").offsetTop;

    $(".button_up").click(function (event) {
        event.preventDefault();
        document.body.style.overflow = "hidden";

        if (currentUser.count < list.length) {
            document.getElementById("hrefA").href = "#t" + currentUser.count;

            scroll();
            currentUser.count += 1;

            return false;
        } else if (currentUser.count >= list.length) {
            // Проверка количества ссылок на странице
            document.getElementById("hrefA").href = "#tTop";

            elementClick = $(".scrollto").attr("href");

            document.body.style.overflowY = "scroll";

            $("html,body").animate({ scrollTop: tTopTop }, 1000);

            currentUser.count = 0;
            return false;
        }
        // Поворот кнопки при достижении нижней границы окна (в этом случае при последней ссылке)
    });
}

// Выполнение функции выше

$(document).ready(plus);

// Изменение слайдера

$(".bx-prev, .bx-next").click(function (event) {
    event.preventDefault();
});

$(document).ready(function () {
    $(".slider").bxSlider({
        // slideSelector: $('.slider'),
        controls: true,
        prevSelector: $(".bx-prevCont"),
        nextSelector: $(".bx-nextCont"),
        randomStart: false,
        touchEnabled: false,
        adaptiveHeight: true,

        // responsive: true,
        // infiniteLoop: false,
        // hideControlOnEnd: true,

        speed: 2000,
        slideMargin: 250,
        // easing: 'swing',

        nextText: "     ",
        prevText: "     ",
    });
});
