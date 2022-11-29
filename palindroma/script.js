/*
Palidroma
    Chiedere all’utente di inserire una parola:
Creare una funzione per capire se la parola inserita è palindroma
*/

function Palindrome(word){

    let characters=[];

    for(let i=word.length; i>=0; i--){
        characters.push(word[i]);
    }

    for(let i=0;i<parola.length;i++){

    if(parola[i]!=characters[i+1]){
        console.log('la parola non è palindroma');
        return false;
    }
    }
    console.log('la parola è palindroma');
    return true;
}

const parola=prompt("Inserisci una parola");

let palindroma=Palindrome(parola);

console.log(palindroma);
