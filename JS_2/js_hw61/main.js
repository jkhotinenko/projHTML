// описати колоду карт
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
//
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
//

// -- Сорри как то привычка работать с database :)
cardColor=['red','black'];
cardSuit=['spade', 'diamond','heart', 'clubs'];
cardValue=[6,7,8,9,10,'ace','jack','queen','king'];

cardSuits=[{col:String,suit:String}];

cardSuits[0]={col:cardColor[0],suit:cardSuit[2]};
cardSuits[1]={col:cardColor[0],suit:cardSuit[1]};
cardSuits[2]={col:cardColor[1],suit:cardSuit[0]};
cardSuits[3]={col:cardColor[1],suit:cardSuit[3]};


cd=[];
for (const item of cardSuits) {
    for (const val of cardValue) {
        const ret = {cardSt:item.suit,
             value:val,
              color:item.col };

    cd.push(ret);
  }
}
console.log(cd);
//
// - знайти піковий туз
console.log(cd.filter(value=>(value.cardSt === cardSuit[0] && value.value === 'ace')));
// - всі шістки
console.log(cd.filter(value=>( value.value === 6)));
// - всі червоні карти
console.log(cd.filter(value=>( value.color === cardColor[0])));
// - всі буби
console.log(cd.filter(value=>(value.cardSt === cardSuit[3])));
// - всі трефи від 9 та більше (тут подсмотрел)
console.log(cd.filter(value=>(value.cardSt === cardSuit[3] && value.value >=cardValue[3])
|| (value.cardSt === cardSuit[3] && typeof value.value === 'string') ));




// Додатково по reduce
// Взяти описану колоду карт, та за допомоги редюсу попакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }


let ccd;
ccd = cd.reduce((accum, value) => {
        if (value.cardSt === cardSuit[0]) {
            accum.spades.push(value);
        } else if (value.cardSt === cardSuit[1]) {
            accum.diamonds.push(value);
        } else if (value.cardSt === cardSuit[2]) {
            accum.hearts.push(value);
        } else if (value.cardSt === cardSuit[3]) {
            accum.clubs.push(value);
        }
        return accum;
    },
    {
        spades: [],
        diamonds: [],
        hearts: [],
        clubs: []
    });
console.log(ccd);