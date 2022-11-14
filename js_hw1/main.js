// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log , alert, document.write
//
// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)
//
// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//     let a = 100; let b = '100'; let c = true;
//
// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль
//

let hl ='hello';
console.log(hl);
let ow ='owu';
console.log(ow);
let cm ='com';
console.log(cm);
let ua ='ua';
console.log(ua);
let one =1;
console.log(one);
let ten =10;
console.log(ten);
let mn =-999;
console.log(mn);
let otwo =123;
console.log(otwo);
let pi=3.14;
console.log(pi);
let ti=2.7;
console.log(ti);
let fr=16;
console.log(fr);
let tr=true;
console.log(tr);
let fs=false;
console.log(fs);


let firstName ='Ярослав';
console.log(firstName);
let middleName='Ярославович';
console.log(middleName);
let lastName='Хотиненко';
console.log(lastName);
let person=lastName+' '+firstName+' '+middleName;
console.log(person);


let a = 100; let b = '100'; let c = true;
console.log(typeof a);console.log(typeof b);console.log(typeof c);

firstName=prompt('firstName');

middleName=prompt('middleNam');

lastName=prompt('lastName');
person=lastName+' '+firstName+' '+middleName;
console.log('=>'+person);