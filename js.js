// Objects
// Редко используемый метод
let obj = new Object(); 

// Объект содержит пару ключ:значение, например бана-это фрукт, лук-это овощ итд
// Записывая такие вещи в объект, создаем свойства объекта
let options = {
    width: 1024,
    height: 1024,
    name: 'test'
};
console.log(options.name);
//options.bool = false; мы могли бы записать внутри переменной 
//в виде нового свойства, однако не всегда можно сразу задать все свойства у объекта
// которые должны быть они возможно появятся сами в течении работы самой программы, 
//именно для этогоу  есть данная конструкция

options.bool = false; // добавление нового св-ва у объекта

options.colors = {
    border: 'black',
    bg: 'red'
};
delete options.bool; // удаление св-ва у объекта
console.log(options); // выводим весь набор свойств объекта

// Иногда необходимо перебрать все свойства в объекте
// для этого можем использовать цикл for-in

for(let key in options) {
    console.log('Свойство ' + key + 'имеет значение: ' + options[key]);
}
// узнать кол-во св-в в объекте
console.log(Object.keys(options).length);

//Есть свойства и методы объекта-это такие действия, которые может совершать объект

// Массивы и псевдомассивы
// Это такие структуры, которые содержат элементы по порядку
// Это может быть набор функций или смешанный массив с разными данными
// Чаще всего необходимо удалить, добавить элемент
// Есть методы для работы с концом массива и с его началом

let arr = [1,2,3,4,5];
arr.pop(); // метод для удаления элемента с конца массива
arr.push('5'); // метод для добавления элемента в виде строки с конца массива

arr.shift(); // метод для удаления элемента с начала массива
arr.unshift('1'); // метод для добавления элемента в начало массива
console.log(arr);

// Перебрать массив 
//с помощью цикла

let arr = [1,2,3,4,5];

for(let i = 0; i < arr.length; i++) {
    console.log(arr[i]); // достукиваемся до каждого эл-та массива
}
console.log(arr);

// forEach
// callback functions

let arr = ['first', 2, 3,'four', 5];

arr.forEach(function(item, i, mass) {
    console.log(i + ':' + item + ' (массив: ' + mass + ')');
})
console.log(arr);

// Способы перебора метод for-in, метод for-of

// методом for-in получаем ключ эл-та
let mass = [1,3,4,6,7];

for (let key in mass) {
    console.log(key);
}

// методом for-of получаем значение эл-та
let mass = [1,3,4,6,7];

for (let key of mass) {
    console.log(key);
}

// Есть еще несколько методов для трансформации массива через callback functions,
// но используются они намного реже - filter(), map(), reduce(), some(), every()
// Используемые методы - splite(), join(), sort()
// Например, при получении большой строки, где через знаки препинания написаны товары
// их надо поместить в массив и здесь помогает м-д split

let ans = prompt('', ''),
    arr = [];

arr = ans.splite(',');
console.log(arr); //получаем массив данных

// отправить весь массив данных одной строкой

let arr = ['vvvv', 'ccc', 'zzz', 'kkk'],
    i = arr.join(', ');

console.log(i);

// сортировка по алфавиту-строки

let arr = ['vvvv', 'ccc', 'zzz', 'kkk'],
    i = arr.sort();

console.log(arr);

// сортировка по алфавиту-числа
// Алгоритм быстрой сортировки, он ориентируется на разницу между элементами, которая передается
// она либо положительная, либо отрицательная, так сравнивается каждый эл-т массива
let arr = [1,14,4,7],
    i = arr.sort(compareNum);

function compareNum(a,b) {
    return a-b;
}
console.log(arr);

// Псевдомассивы. Это объект, структура которых совпадает со структурой массива, но при этом
// они не обладают методами, свойствами полноценного массива из-за отличия в своем прототипе


// ООП
// Объектно-ориентированный подход-это подход, где главную роль играет объект.Он может содержать
// в себе методы и свойства, любой вид данных и представлять собой целостную сущность и предсталяет
// собой, некую боевую единицу
// Например, легковой автомобиль-это объект.У него есть свойства как двигатель(), кузов(), колеса()
// Методы, такие как езда, перевозка грузов. И вроде бы у всех авто все так, но(!) если посмотреть
// на потомков нашего прототипа, то все эти качества у всех абсолютно разные-другой двигатель, другой
// диаметр колез, кузов итд - это и есть применение ООП в реальной жизни
// У нас есть объект-прототип с определенным набором характеристик и качеств и немного изменяя или 
// добавляя их, мы штампуем из них новый экземпляр.В программировании точно также-это может быть прототип 
// модального окна, на основании которых мы сделаем несколько новых и не похожих друг на друга итд
// В программировании ООП это целая наука, как правильно делать архитектуру
// В JS массивы, функции-это объекты, поэтому главным всему будет это объект, т.е все свойства и методы
// прототипно наследуются от объекта, цепочка наследования.Объект-главная сущность

let soldier = {
    health: 400,
    armor: 100
};

let John = {
    health: 100 // John является потомком от soldier, наследуется от него прототипно
};
John._proto_ = soldier;

console.log(John);
console.log(John.armor);


// DOM.Получение элементов со страницы
// Мы всегда работаем с информацией и именно со страницей мы научимся получать различные элементы
// DOM-объектная модель документа 
// Для того чтобы добраться до определенного элемента в DOM существуют специальные методы поиска
// Будем использовать встроенный в браузере объект document. с его методами и свойствами

let box = document.getElementById('box'),
    btn = document.getElementsByTagName('button'),
    circle = document.getElementsByClassName('circle'),
    heart = document.querySelectorAll('.wrapper .heart'),//работает по методу forEach, работает со вложенностью
    oneHeart = document.querySelector('.heart');

console.log(box);
console.log(btn);
console.log(btn[0]);
console.log(circle[2]);
console.log(heart[1]);
console.log(oneHeart);

// DOM.Действия с элементами на странице
