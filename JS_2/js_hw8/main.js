// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone

function Usr(id, name, surname , email, phone){
    this.id=id;
    this.name=name;
    this.surname=surname;
    this.email=email;
    this.phone=phone;
}
// створити пустий масив, наповнити його 10 об'єктами new User(....)

let usr;
let usrArr=[];

for (let i = 0; i < 10; i++) {
    usr = new Usr(
        i,'Name'+i,'Surname'+i,'email'+i+'@domain.com','050-300-20-10'
    );
    usrArr[i] = usr;

}
console.log(usrArr);

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

fltUsr=usrArr.filter((item)=>(
     (item.id % 2 === 0)
    ));
console.log(fltUsr);
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
//

srt=usrArr.sort((a,b)=>(
  b.id-a.id
));
console.log(srt);

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

class Client {

    constructor(id, name, surname , email, phone,order) {
        this.id = id;
        this.name =name;
        this.surname=surname;
        this.email=email;
        this.phone=phone;
        this.order=[]
    }

}
let cltArr=[];
for (let i = 0; i < 10; i++) {
    let clt = new Client(
        i,'Name'+i,'Surname'+i,'email'+i+'@domain.com','050-300-20-10'
    );
    for (let j = 0; j < Math.floor(Math.random() * 7); j++) {
       clt.order[j]=i+' '+j+' продукт';

    }
    cltArr[i] = clt;

}
console.log(cltArr);



// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
//
//
srtClient=cltArr.sort((a,b)=>(
    a.order.length-b.order.length
))

console.log(srtClient);


// - Створити функцію конструктор яка дозволяє створювати об'єкти car,
// з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

function Car (model,prod,yrs,mxSpd,vEng){
    this.model=model;
    this.prod=prod;
    this.yrs=yrs;
    this.mxSpd=mxSpd;
    this.vEng=vEng;
    this.drive = function drive(){
        console.log(`їдемо зі швидкістю ${mxSpd} на годину`);
    }
    this.info = function (){
        return `Автомашина ${model} виробник ${prod}. ${yrs}  року випуску. З двигуном ${vEng} та їде зі швидкістю ${mxSpd}  `
    }
    this.increaseMaxSpeed =function (newSpeed){
        mxSpd=mxSpd+newSpeed;
    }
    this.changeYear=function(newValue){
        yrs=newValue;
    }
    this.addDriver=function(driver){
        this.driver=driver
    }
    this.useDriver=function (){
        return this.driver;
    }

}

mCar= new Car('VW','VW','2017',150,'Electro');
mCar.drive();
console.log(mCar.info());
mCar.increaseMaxSpeed(-20);
mCar.changeYear('2015');
console.log(mCar.info());
mCar.addDriver({name:'Yaroslav',lastname:'Khotinenko'})
console.log(mCar.useDriver());


// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
class Car1 {

    constructor(model,prod,yrs,mxSpd,vEng) {
    this.model=model;
    this.prod=prod;
    this.yrs=yrs;
    this.mxSpd=mxSpd;
    this.vEng=vEng;
    }

    drive(){
        console.log(`їдемо зі швидкістю ${this.mxSpd} на годину`);
    }
    info(){
        return `Автомашина ${this.model} виробник ${this.prod}. ${this.yrs}  року випуску. З двигуном ${this.vEng} та їде зі швидкістю ${this.mxSpd}  `
    }
    increaseMaxSpeed(newSpeed){
        this.mxSpd=this.mxSpd+newSpeed;
    }
    changeYear(newValue){
        this.yrs=newValue;
    }
    addDriver(driver){
        this.driver=driver
    }
    useDriver(){
        return this.driver;
    }

}

mCar1= new Car1('VW','VW','2017',150,'Electro');
mCar1.drive();
console.log(mCar1.info());
mCar1.increaseMaxSpeed(-20);
mCar1.changeYear('2015');
console.log(mCar1.info());
mCar1.addDriver({name:'Yaroslav',lastname:'Khotinenko'})
console.log(mCar1.useDriver());

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.

arrPope=[];
class Pope{
    constructor(name,age,footsize) {
        this.name=name;
        this.age=age;
        this.footsize=footsize;
    }
}

arrPope[0]=new Pope('Anna',27,34);
arrPope[1]=new Pope('Inna',22,37);
arrPope[2]=new Pope('Alina',29,39);
arrPope[3]=new Pope('Olga',21,35);
arrPope[4]=new Pope('Masha',20,36);
arrPope[5]=new Pope('Dasha',40,40);
arrPope[6]=new Pope('Ira',33,37);
arrPope[7]=new Pope('Tanja',31,35);
arrPope[8]=new Pope('Luba',17,40);
arrPope[9]=new Pope('Kate',19,37);
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
class Prince{
    constructor(name,age,size) {
        this.name=name;
        this.age=age;
        this.size=size;
    }
}
prnc= new Prince('Segre',27,34);


for (const item of arrPope) {
     if(item.footsize===prnc.size){
         console.log(item);}
}

resArr=arrPope.find((value, index, obj)=>(
    obj.footsize=prnc.size
))

console.log(resArr);