/*
Pari e Dispari
    L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
    Generiamo un numero random (sempre da 1 a 5) per il computer attraverso una funzione.
    Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari attraverso un'altra funzione
    Dichiariamo chi ha vinto.
*/

// il giocatore sceglie pari o dispari
const choiche = prompt("pari o dispari?");
//definisco se il numero del giocatore è pari o dispari
if(choiche % 2 === 0){
    console.log(choiche + " è pari");
    //se è dispari è falso
} else if(choiche %2 === 1){
    console.log(choiche + " è dispari");
}
// il giocatore inserisce un numero da 1 a 5
const numPlayer = parseInt(prompt("scegli un numero da 1 a 5"));
// genero un numero random da 1 a 5
let numComputer = getNumbRandomPc(1, 5);
// sommo i numeri
let sum = numPlayer + numComputer;
//se la scelta dell'utente è uguale alla funzione numPariDispari ha vinto
if( choiche === numPariDsipari(sum)){
    console.log("hai vinto");
    //altrimenti ha perso
} else {
    console.log("hai perso");

}

// funzione numeri random
function getNumbRandomPc(min, max){
    return Math.floor(Math.random() * (max - min) + min);
}

// funzione per stabilire se un numero è pari
function numPariDsipari(nums){
    if(nums % 2 === 0){
        return even = true;
    } else {
        return even = false;
    }
}



//stampo i risultati
console.log("l'utente ha scelto", choiche);
console.log("numero scelto dal giocatore è", numPlayer);
console.log("numero scelto dal computer è", numComputer );
console.log("la somma dei due numeri è :", sum);