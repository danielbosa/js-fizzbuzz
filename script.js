//Scrivi un programma che stampi in console i numeri da 1 a 100,
// ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
// Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.



//For Cycle - to get number or string
// for (let i = 1; i < 100; i++){
//     if ((i % 3 == 0) && (i % 5 == 0))
//     i = 'FizzBuzz';
//     else if (i % 3 == 0)
//     i = 'Fizz';
//     else if (i % 5 == 0)
//     i = 'Buzz';
//     else
//     i === i;
// };

const squareWrapper = document.createElement('div');
squareWrapper.setAttribute('id', 'board');
squareWrapper.className = 'd-flex flex-wrap justify-content-between m-auto max-width-900';


let numBox = 100;
let tempHtml = '';
let text = '';
let colorClass = '';

for(let i = 1; i <= numBox; i++){
    if ((i % 3 == 0) && (i % 5 == 0)){
        text = 'FizzBuzz';
        colorClass = 'fizzbuzz';
    } else if (i % 3 == 0){
        text = 'Fizz';
        colorClass = 'fizz';
    } else if (i % 5 == 0){
        text = 'Buzz';
        colorClass = 'buzz';
    } else {
        text = i;
    }
    tempHtml += `
    <div class="box d-flex justify-content-center align-items-center ${colorClass}">
            ${text}
        </div>
    `
};

squareWrapper.innerHTML = tempHtml;

const container = document.querySelector('.container');
container.append(squareWrapper);