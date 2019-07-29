'use strict';
//recojo mis objetos html en variables const
const counter = document.querySelector('.header__counter');
const input =document.querySelector('.main__input');
const btn = document.querySelector('.btn');
const footerText = document.querySelector('.footer__text');


let n=0;
counter.innerHTML=0;  


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
        footerText.innerHTML='¡HAS GANADO, CAMPEONA!';
    }
    else if (inputNumber > myRandomNumber){
        footerText.innerHTML='el número es muy alto';
    }
    else if (inputNumber < myRandomNumber){
        footerText.innerHTML='el número es muy bajo';
    }
    else {
        footerText.innerHTML='has de introducir un número!';
    }
        
    
        n = n+1;
        counter.innerHTML = n;
}

//escucho al botón de comprobar 

btn.addEventListener('click',guessGame);





