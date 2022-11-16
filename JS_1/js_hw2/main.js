// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - масив. Кожен автор має поля name,age
// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
let arr=[1,6,3,'true',false,'This text',-33];
arr[10]='test';
console.log(arr);
console.log(arr.length);

let bk1={
    title: 'Book1',
    pageCount: 200,
    genre: 'Fantastic'

};
console.log(bk1);
let ba=[
    {
    title: 'Book1',
    pageCount: 200,
    genre: 'Fantastic'

},
    {
        title: 'Book2',
        pageCount: 150,
        genre: 'Fantastic'

    },
    {
        title: 'Book3',
        pageCount: 100,
        genre: 'Fantastic'

    }];
console.log(ba);

let abk1= [{
    title: 'Book4',
    pageCount: 200,
    genre: 'Comic',
    autors :[{name:'First',age:22},{name:'Second',age:42}]
},
    {
        title: 'Book1',
        pageCount: 100,
        genre: 'Fantastic',
        autors :[{name:'Three',age:20},{name:'Four',age:18}]
    },
    {
        title: 'Book2',
        pageCount: 300,
        genre: 'Transe',
        autors :[{name:'Five',age:33},{name:'Six',age:46}]
    }
    ]
console.log(abk1);

let x=[{user:'one',pass:'11'},
       {user:'two',pass:'22'},
       {user:'three',pass:'33'},
    {user:'Four',pass:'44'},
    {user:'Five',pass:'55'},
    {user:'Six',pass:'66'},
    {user:'Seven',pass:'77'},
    {user:'Eight',pass:'88'},
    {user:'Nine',pass:'99'},
    {user:'Ten',pass:'00'}
]
console.log(x.length);
/// Ну это циклом быстрее
for (let i=0;i<x.length;i++){
    console.log(x[i].pass);
}

///А не циклом как то так
console.log('А не циклом как то так');
console.log(x[0].pass);console.log(x[1].pass);
console.log('и так далее.................');
//..........................
console.log(x[9].pass);