'use strict';
//recojo mis objetos html en variables const
const counter = document.querySelector('.header__counter');
const input =document.querySelector('#guessnumber');
const btn = document.querySelector('.btn');
const footerText = document.querySelector('.footer__text');


function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
  }
  const myRandomNumber = getRandomNumber(100); 
  const inputNumber = parseInt(input.value);
  console.log(inputNumber);
  console.log(inputNumber);
  console.log(inputNumber);

function guessGame(){
    
    if (inputNumber===myRandomNumber){
        footerText.innerHTML='lo has conseguido';
    }
    else if (inputNumber>myRandomNumber){
        footerText.innerHTML='el número es muy alto';
    }
    else if (inputNumber<myRandomNumber){
        footerText.innerHTML='el número es muy bajo';
    }
    else (inputNumber==='')
        footerText.innerHTML='introduce un número para participar';

}


btn.addEventListener('click',guessGame());






