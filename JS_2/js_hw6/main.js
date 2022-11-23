// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
let s1='hello world';
let s2='lorem ipsum';
let s3='javascript is cool';
function getLn(s){
    console.log(s.length);
}
getLn(s1);getLn(s2);getLn(s3);
// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
function uPP(s){
    console.log(s.toUpperCase());
}
uPP(s1);uPP(s2);uPP(s3);
// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
 s1='HELLO WORLD';
 s2='LOREM IPSUM';
 s3='JAVASCRIPT IS COOL';
function lWr(s){
    console.log(s.toLowerCase());
}
lWr(s1);lWr(s2);lWr(s3);

console.log('-------------------------------------------------------------');
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let str = ' dirty string   '
function clrs(s){
    console.log(s.trim());
    console.log('Length before:'+s.length+' Length after:'+s.trim().length);
}
clrs(str);
//
//
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
let str10 = 'Ревуть воли як ясла повні';
function stringToarray(str){
    let arr=str.split(' ');
    console.log(arr);
}
stringToarray(str10);
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
let arr=[10,8,-7,55,987,-1011,0,1050,0];

arr.map((item)=>{console.log(`${item}`);
    console.log(typeof `${item}`);
})

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
let nums = [11,21,3];

console.log(nums.sort(function (a, b) {
        return a - b;
    }
));
console.log(nums.sort(function (a, b) {
        return b - a;
    }
));

// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

console.log(coursesAndDurationArray.sort(
    function (a, b) {
    return a.monthDuration-b.monthDuration;
}
));

console.log(coursesAndDurationArray.filter((item) => item.monthDuration > 5));

