// Code your solutions in this file
function writeCards(array, occasion){
    let thankYouCards = []
    for (let i = 0; i < array.length; i++) {
        thankYouCards.push(`Thank you, ${array[i]}, for the wonderful ${occasion} gift!`)
    }
    return   thankYouCards
}


function countDown(number){
let i = number;
while (i > -1 ) {
    console.log (`${i}`);
    i--
}

}