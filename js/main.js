'use strict';
//recojo mis objetos html en variables const
const counter = document.querySelector('.header__counter');
const input =document.querySelector('.main__input');
const btn = document.querySelector('.btn');
const resetBtn = document.querySelector('.reset-btn');
const footerText = document.querySelector('.footer__text');
const prize = document.querySelector('.prize');


let tries=0;
counter.innerHTML=tries;  




//generamos un número random
function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
  }
let myRandomNumber = getRandomNumber(100); 
console.log(myRandomNumber);


//generamos la función que activa el botón
function guessGame(){
    
    const inputNumber = parseInt(input.value);
    console.log(inputNumber);
   
    if (inputNumber === myRandomNumber){
        footerText.innerHTML= '<strong>👏👏👏👏¡HAS GANADO, CAMPEONA!</strong>👏👏👏👏';
        prize.innerHTML='>>💖<<';
    }
    else if (inputNumber >100) {
        footerText.innerHTML = '<strong>¡¿Dónde vas?!</strong> El número ha de ser menor que 100';
    }
    else if (inputNumber<0) {
        footerText.innerHTML = '<strong>¡no se acepta tanta negatividad!</strong> Es un número positivo'
    }
    else if (inputNumber > myRandomNumber){
        footerText.innerHTML = 'el número es muy alto';
        tries++;
        counter.innerHTML = tries;
    }
    else if (inputNumber < myRandomNumber){
        footerText.innerHTML = 'el número es muy bajo';
        tries++;
        counter.innerHTML = tries;
    }
    else if(input.value === ""){
        footerText.innerHTML = '<strong>De donde no hay no se puede sacar</strong>, introduce un número por favor.';
    }
    else {
        footerText.innerHTML= '<strong>No funciona así.</strong>¡Has de introducir un número, no una letra!';
    }          
}


function pressEnter (event) {
    if (event.key==='Enter') {
        guessGame();
    }
}


function resetGame () {
    tries=0;
    counter.innerHTML=tries;
    input.value = "";
    footerText.innerHTML = 'Escribe un número y dale a <em>prueba</em>';
    myRandomNumber = getRandomNumber(100); 
    console.log(myRandomNumber);
}



//escucho al botón de comprobar y al enter
btn.addEventListener('click',guessGame);
document.addEventListener('keyup', pressEnter);
resetBtn.addEventListener('click',resetGame);



//Add a reset button that cleans the input, the counter, writes the initial feedback and generates a new random number to play again!



