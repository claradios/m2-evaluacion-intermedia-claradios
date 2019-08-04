'use strict';
//recojo mis objetos html en variables const
const counter = document.querySelector('.header__counter');
const input =document.querySelector('.main__input');
const btn = document.querySelector('.btn');
const footerText = document.querySelector('.footer__text');


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
        footerText.innerHTML= '¡HAS GANADO, CAMPEONA!';
    }
    else if (inputNumber >100) {
        footerText.innerHTML = '¡¿Dónde vas?! el número ha de ser menor que 100';
    }
    else if (inputNumber<0) {
        footerText.innerHTML = '¡no se acepta tanta negatividad!'
    }
    else if (inputNumber > myRandomNumber){
        footerText.innerHTML = 'el número es muy alto';
    }
    else if (inputNumber < myRandomNumber){
        footerText.innerHTML = 'el número es muy bajo';
    }
    else {
        footerText.innerHTML= 'has de introducir un número!';
    }        
        tries++;
        counter.innerHTML = tries;
}

//escucho al botón de comprobar 

btn.addEventListener('click',guessGame);





