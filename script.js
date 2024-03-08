//dichiaro costante e la assegno ad un elemento div creato in js
const squareWrapper = document.createElement('div');

//setto l'id 
squareWrapper.setAttribute('id', 'board');

//attribuisco classi
squareWrapper.className = 'd-flex flex-wrap justify-content-start m-auto mb-5 py-5 max-width-900';

//dichiaro variabili
//per limite di cicli
let numBox = 100;

//scatola in cui inserire stringa generata da ciclo, senza inserirlo subito in pagina html --> se no, ricaricherebbe ogni volta la pagina
let tempHtml = '';
//scatola in cui inserire il testo da stampare
let text = '';

//scatola in cui inserire class con cui attribuire proprietà tramite css
let colorClass = '';

//ciclo for
//cicla da 1 a 100
//ad ogni ciclo verifica le condizioni da rispettare per valorizzare relativamente le variabili text e colorClass
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
        colorClass = ''
    }
    //nella scatola inserisco la stringa con i valori derivanti dal ciclo SENZA SOVRASCRIVERE: la aggiungo. Così ho tutti i div, da 1 a 100.
    tempHtml += `
    <div class="box d-flex justify-content-center align-items-center text-break text-center ${colorClass}">
            ${text}
    </div>
    `
};

//inserisco la scatola con i div nella scatola che poi inserisco in html
squareWrapper.innerHTML = tempHtml;
//seleziono il container in html in cui inserire la scatola squareWrapper
const container = document.querySelector('.container');
//inserisco scatola in html
container.append(squareWrapper);