
function computerPlay(minimo, maximo){
      let numero = Math.floor( Math.random() * (maximo-minimo +1)+ minimo  );
      return numero;
}

const rock = 0;
const paper = 1;
const scissors = 2;

// let opciones = ["Piedra","Papel","Tijeras"];

// alert( opciones[1] );

let playerSelection;
let computerSelection = computerPlay(0,2);

playerSelection = prompt("¿que elijes\nrock: 0\nPaper: 1\nscissors:2",0);


if(playerSelection == rock){
      alert("elejiste piedra!");
      if(computerSelection == rock)
      alert("You tied");
      else if(computerSelection == paper){
            alert("you lost");
      }else if(computerSelection ==  scissors){
            alert("you won");
      }
           
      
}else if(playerSelection == paper){
      alert("elejiste papel!");
      if(computerSelection == rock)
      
      alert("you won");
      else if(computerSelection== paper){
            alert("You tied");
      }else if(computerSelection ==  scissors){
            alert("you lost");
      }
      
}else if(playerSelection == scissors){
      alert("elejiste tijeras!");

      if(computerSelection == rock)
      alert("you lost");
      else if(computerSelection == paper){
            alert("you won");
      }else if(computerSelection ==  scissors){
            alert("You tied");
      }
}else {
      alert("no jugaste,porque?");
}























