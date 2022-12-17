// - є масив
console.log('Задача 1');
document.body.append(document.createElement('br'));
document.body.append(document.createElement('div').innerText='Задача1');

let simpsons = [
    {
        name: 'Bart',
        surname: 'Simpson',
        age: 10,
        info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
        photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
    },
    {
        name: 'Homer',
        surname: 'Simpson',
        age: 40,
        info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
        photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
    },
    {
        name: 'Marge',
        surname: 'Simpson',
        age: 38,
        info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
    },
    {
        name: 'Lisa',
        surname: 'Simpson',
        age: 9,
        info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
    },
    {
        name: 'Maggie',
        surname: 'Simpson',
        age: 1,
        info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
    },
];
for (const simpson of simpsons) {
   let dv = document.createElement('div');
   dv.setAttribute('class','member');
  // dv.innerText=`Name: ${simpson.name}  Surname:${simpson.surname}  Age:${simpson.age}`;
   sdiv=document.createElement('div')
   sdiv.innerText=`Name: ${simpson.name}  Surname:${simpson.surname}  Age:${simpson.age}  ${simpson.info}`;

   ig=document.createElement('img');
   ig.src=simpson.photo;

   dv.append(sdiv,ig);
   document.body.append(dv);

}
// Проітерувати його, створиши для кожного об'єкту  масиву <div class='member'> та наповнити його данними з об'єкту.
//
//     Якщо людською мовою: під кожного члена родини зробити блок та наповнити його інформацією з цього об'єкту
//
//
//
//
//-------------------------------------------------------------------------------
// Цикл в циклі
// - Є масив
console.log('Задача 2');
document.body.append(document.createElement('br'));
document.body.append(document.createElement('div').innerText='Задача2');
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
let mainDv=document.createElement('div');
document.body.append(mainDv);

for (const item of coursesArray) {
    let crsDv=document.createElement('div');
    mainDv.append(crsDv);

    ttl=document.createElement('div');
    ttl.innerText=item.title;
    crsDv.append(ttl);

    monthDuration=document.createElement('div');
    monthDuration.innerText=item.monthDuration;
    crsDv.append(monthDuration);


    hourDuration=document.createElement('div');
    hourDuration.innerText=item.hourDuration;
    crsDv.append(hourDuration);

   let mul=document.createElement('ul');

    crsDv.append(mul);
    for (let i = 0; i < item.modules.length; i++) {
        const itt = item.modules[i];
        console.log(itt);
        li=document.createElement('li');
        li.innerText=itt;
        mul.append(li);
    }
}

// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих властивостей, для властивості modules зробити список з елементами
// Приклад структири знаходиться у файлі example.png

// -------------------------------------------------------------------------------------
//
//
//     - створити блок,
//     - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.
//
console.log('Задача 3');
document.body.append(document.createElement('br'));
document.body.append(document.createElement('div').innerText='Задача3');
////////////////////////////////// HW93 /////////////////////////////////////////////////
console.log('start');
let divi=document.createElement('div');
divi.innerText='Testing string';
divi.classList.add('wrap', 'collapse', 'alpha', 'beta');
divi.style.background='blue';
divi.style.color='red';
divi.style.fontSize='35px';
document.body.append(divi);
document.body.append(divi.cloneNode(true));
console.log('finish');


console.log('Задача 4');
document.body.append(document.createElement('br'));
document.body.append(document.createElement('div').innerText='Задача4');
//////////////////////////////// HW94 /////////////////////////////////////////////////
// - Є масив:
//     ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.

 const arr=['Main','Products','About us','Contacts'];
let ul = document.getElementsByClassName('menu')[0];
for (const ulElement of arr ){
    let li=document.createElement('li');
    li.innerText=`${ulElement}`;
    ul.append(li);
}
document.body.append(document.createElement('div').innerText='Четвертая задача привязана к меню');


console.log('Задача 5');
document.body.append(document.createElement('br'));
document.body.append(document.createElement('div').innerText='Задача5');
////////////////////////////////// HW95 /////////////////////////////////////////////////
// - Є масив
let coursesAndDurationArray1 = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
//


for (const item of coursesAndDurationArray1) {
    let dv=document.createElement('div')
    let tx1=document.createElement('div')
    tx1.innerText=item.title;
    let tx2=document.createElement('div')
    tx2.innerText=item.monthDuration;

    dv.append(tx1,tx2)

    document.body.append(dv)
}


console.log('Задача 6');
document.body.append(document.createElement('br'));
document.body.append(document.createElement('div').innerText='Задача6');
////////////////////////////////// HW96 /////////////////////////////////////////////////
// // - Є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
//
//
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу,
// та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.
for (const item of coursesAndDurationArray) {
    let dv1=document.createElement('div');
    dv1.classList.add('ítem');

    let h1=document.createElement('h1');
    h1.classList.add('heading');
    h1.innerText=item.title;

    let p=document.createElement('p');
    p.classList.add('description');
    p.innerText=item.monthDuration;

    dv1.append(h1,p);
    document.body.append(dv1);
}


console.log('Задача 7');
document.body.append(document.createElement('br'));
document.body.append(document.createElement('div').innerText='Задача7');
////////////////////////////////// HW97 /////////////////////////////////////////////////
// -----------
//
//     - Створити довільний елемент з id = text.  Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".
//
dvs=document.createElement('div');
dvs.id='text';
//dv.style.setProperty('íd','text')
//dv.setAttribute("íd","text");
dvs.innerText='Example text';

btn2=document.createElement('button');
btn2.innerText='Change IDs'

btn2.onclick=()=>{
    rs=document.getElementById("text");
    rs.hidden=true;

}
document.body.append(dvs,btn2);


console.log('Задача 8');
document.body.append(document.createElement('br'));
document.body.append(document.createElement('div').innerText='Задача8');

// ////////////////////////////////// HW98 /////////////////////////////////////////////////
// //     - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з
// //     інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
// //
// //

let inp=document.createElement('input')
let btn=document.createElement('button');
let res=document.createElement('div');

btn.innerText='Get';
btn.onclick=()=>{if(inp.value>18){
    res.innerText=`${inp.value}  Старше 18`;
    console.log('Старше 18');
    }else{
    console.log('Младше 18');
    res.innerText=`${inp.value}  Младше 18`;
}
    inp.value='';
}
document.body.append(inp,btn,res);

console.log('Задача 9');
document.body.append(document.createElement('br'));
document.body.append(document.createElement('div').innerText='Задача9');
////////////////////////////////// HW99 /////////////////////////////////////////////////
// *** Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)
let inp1=document.createElement('input')
let inp2=document.createElement('input')
let inp3=document.createElement('input')

let btn1=document.createElement('button');
btn1.innerText='Click';
document.body.append(inp1,inp2,inp3,btn1);


btn1.onclick=()=> {
    tr = inp1.value;
    td = inp2.value;
    dt = inp3.value;

    const tble=
    (tr, td, dt)=>
    {
        let tbl = document.createElement('table');
        tbl.style.border = '2px solid black';
        document.body.append(tbl);
        for (let i = 0; i < tr; i++) {
            let tr = document.createElement('tr');
            tbl.append(tr);
            for (let j = 0; j < td; j++) {
               let td = document.createElement('td');
                td.style.border = '2px solid blue';
                td.innerText = dt;
                tr.append(td);
            }
        }
    }
tble(tr,td,dt)
}