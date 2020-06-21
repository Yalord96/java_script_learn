var js = prompt('Каково оффициальное название "Javascript"?','');


if (js == 'ECMAScript') {
    alert('Верно!');
}
else {
    alert('не знаете? "ECMAScript"!');
}

var value = prompt('Укажите значение','');
if (value > 0){
    alert('1');
}
else if (value < 0){
    alert('-1');
}
 else if (value == 0){
     alert('0');
}

var admin = prompt('Введите логин:','');

 if (admin == 'admin') {
     var password = prompt('Введите пароль', '');
     if (password == 'Чёрный властелин'){
         alert('Добро пожаловать!');}
     else {
         alert('пароль неверен!');
     }
 }
 else {
     alert('Я Вас не знаю');
 }




var i = 0;
while (i < 3){
    alert(i);
    i++;
}

var i = 0;

do {
    i = prompt('введи число','');
}
while (i != 100);


alert('Дима намазал голову гелем');




// var years = prompt('Сколько тебе лет?', '');
// var year = 2020;
//
//
// alert('Вы родились в  ' +(year-years)+ ' году!');
//
// var dollar = prompt('Курс доллара: ', 26.86);
// var uah = prompt('Сколько у тебя грн? ', '');
//
//     alert('У тебя получается: '+(dollar*uah)+'долларов!');
//
// var gel = confirm("Дима мазал гелем волосы на прошлом занятии?");
//
// alert(gel);
//
// console.log(typeof 42);
// console.log(typeof 'qwe');
// console.log(typeof true);
// console.log(typeof dasdasdas);
// console.log(typeof {a: 1});