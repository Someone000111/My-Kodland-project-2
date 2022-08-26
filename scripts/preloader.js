
// Загрузка страницы

function loaded() {
    document.querySelector('.preloader').style.display = "none";
}

function start() {
    document.querySelector('.preloader').style.display = "flex";
    document.body.style.display = "block";

    setTimeout(loaded, 3000);
}

document.addEventListener('DOMContentLoaded', start);

function start2() {
    document.querySelector('.preloader').style.display = "flex";
    setTimeout(loaded, 1000);
};



$('.label_checkbox_account').click(start2);
