
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
let rt = (a, b) => a * b;
console.log(rt(20, 30));
// - створити функцію яка обчислює та повертає площу кола з радіусом r
const retC=(r)=>Math.PI*Math.pow(r,2);
console.log(retC(24));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
const retCH=(r,h)=>Math.PI*Math.pow(r,2)*h;
console.log(retCH(24,10));
// - створити функцію яка приймає масив та виводить кожен його елемент
arr=[1,2,3,4,5,true,false,'text'];
function exArr(array){
    for (const arrayElement of array) {
        console.log(arrayElement);
    }
}
exArr(arr);
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
txt='Text  is this ';
function par(xtx){
    document.write('<p>'+xtx+'</p>');
}

par(txt);
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

litxt='Text  is this ';
function parli(xtx){
    document.write('<ul>' +
        '<li>'+xtx+'</li>' +
        '<li>'+xtx+'</li>' +
        '<li>'+xtx+'</li>' +
        '</ul>');
}

parli(litxt);

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
litxtn='Text  is this number';
function parlin(xtx,n){
    document.write('<ul>');
    for (let i = 0; i < n; i++) {
        document.write('<li>'+xtx+' '+i+'</li>');
    }
    document.write('</ul>');
}

parlin(litxtn,12);
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
arr1=[1,2,3,4,5,true,false,'text','Ánd second text'];
function exArr1(array){
    document.write('<ul>');
    for (const arrayElement of array) {
        document.write('<li>' + arrayElement + '</li>');
    }
    document.write('</ul>');
}
exArr1(arr1);
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
arrobj=[{name:'Anna',
        age:40 },
        {name:'Yaroslav',
         age:46 },
        {name:'Artem',
        age:38 }];
function ArrO(array){
    document.write('<h2>Names</h2>');
    document.write('<ul>');
    for (const arrayElement of array) {
        document.write('<li>' + arrayElement.name + '</li>');
    }
    document.write('</ul>');
    document.write('<h2>Ages</h2>');
    document.write('<ul>');
    for (const arrayElement of array) {
        document.write('<li>' + arrayElement.age + '</li>');
    }
    document.write('</ul>');
}
ArrO(arrobj);

// - створити функцію яка повертає найменьше число з масиву
arrmin=[1,4,-3,-5,2];
const x=function mn(arr){
    let mn=arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]<mn){mn=arr[i]}
    }
    return mn;

}
console.log(x(arrmin));
document.write('<h2>'+x(arrmin)+'</h2>');


// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

arrmins=[1,10,3,-5,2];
const xs=function smn(arr){
    let mn=0;
    for (let i = 0; i < arr.length; i++) {
       mn=mn+arr[i];
    }
    return mn;

}
console.log(xs(arrmins));
document.write('<h2> Sum=>'+xs(arrmins)+'</h2');