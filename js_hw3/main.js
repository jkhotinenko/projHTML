// Є змінна х, якій ви надаєте довільне числове значення.
//    Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

let a=[1,0,-3] ;

if (a[0]===0){
    console.log('Вірно')}
else{
    console.log('Невірно');
}
//- Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
//(в першу, другу, третю или четверту частину години).
let cht=20;

if (cht>=0 && cht<15){
    console.log('Перша чвертина')
} else if (cht>=15 && cht<30){
    console.log('Друга чвертина')
} else if (cht>=30 && cht<45){
    console.log('Третя чвертина')
} else if (cht>=45 && cht<=59){
    console.log('Четверта чвертина')
} else
console.log('Діапазон віходіть з0........59')
//- У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
let x = 10;
if (x>0 && x<=10){
    console.log('Перша декада')
} else if (x>10 && x<=20){
    console.log('Друга декада')
} else if (x>20 && x<=31){
    console.log('Третя декада')
} else
console.log('Не зрозуміло що за дані')
//- Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
 x=6;
switch(x) {
   case 1: {
       console.log('Make t-shot');
       break;
   }
   case 2: {
       console.log('Make elecxtricy in home');
       break;
   }
  case 3: {
       console.log('Make homework daugter');
      break;
   }
  case 4: {
       console.log('Make homework for me');
      break;
   }
  case 5: {
       console.log('Drink with friends');
      break;
   }
  default:
  {
      console.log('Nothing');
  }
}

  //  - Користувач вводить або має два числа.
        //Потрібно знайти та вивести максимальне число з тих двох .
        //Також потрібно врахувати коли введені рівні числа.

 a=100;
let b=200;

if (a===b){
    console.log('====');
} else  if (a > b)
    {
        console.log('max a');
    }
   else if (a < b)
    {
        console.log('max b');
    }


    //- є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
      //  за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподыбне, тобто кастується до false)
x=false;
//x=100;
//x='Text ';
if(!!x===false) {
    console.log('default')}
else{
    console.log(x)}


