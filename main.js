function ecmaScript() {
    var js = prompt('Каково оффициальное название "Javascript"?', '');
    if (js == 'ECMAScript') {
        alert('Верно!');
    } else {
        alert('не знаете? "ECMAScript"!');
    }
}

function putValue() {
    var value = prompt('Укажите значение', '');
    if (value > 0) {
        alert('1');
    } else if (value < 0) {
        alert('-1');
    } else if (value == 0) {
        alert('0');
    }
}

function admin() {
    var admin = prompt('Введите логин:', '');

    if (admin === 'admin') {
        var password = prompt('Введите пароль', '');
        if (password == 'Чёрный властелин') {
            alert('Добро пожаловать!');
        } else {
            alert('пароль неверен!');
        }
    } else {
        alert('Я Вас не знаю');
    }
}

function whileValue() {
    var i = 0;
    while (i < 3) {
        alert(i);
        i++;
    }
}

function value100() {
    var i = 0;

    do {
        i = prompt('введи число', '');
    }
    while (i != 100);
    alert('Вы ввели число : 100');
}


function year() {
    var years = prompt('Сколько тебе лет?', '');
    var year = 2020;


    alert('Вы родились в  ' + (year - years) + ' году!');
}


function dollar() {
    var dollar = prompt('Курс доллара: ', 26.6);
    var uah = prompt('Сколько у тебя грн? ', '');

    alert('У тебя получается: ' + (dollar * uah) + 'долларов!');
}


$(function (){
    var current = $("div#mass p").first();
    $('#next').click(function (){
        $(current).not('.last').hide("fast", function () {
            current = $(current).next('p');
            $(current).show("fast");
        });
    });
    $('#prev').click(function (){
        $(current).not('.first').hide("fast", function () {
            current = $(current).prev('p');
            $(current).show("fast");
        });
    });
});