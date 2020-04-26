//chiedere un numero compreso tra 1 e 5 all utente
var numero_utente = parseInt(prompt("Scegliere un numero tra 1 e 5!"))
if (isNaN(numero_utente)) {
  //ERRORE se l'utente non inserisce un numero
  console.log("!!!ERRORE Si prega di inserire un numero.!!!");
} else if (numero_utente > 5){
  //ERRORE se l'utente inserisce un numero non compreso tra 1 e 5
  console.log("!!!ERRORE Si prega di inserire un numero tra 1 e 5.!!!");
} else {
  //se tutto rispetta le leggi indicate
  console.log("Il numero scelto dall'utente é: " + numero_utente);
}

//generare un numero tra 1 e 5 random del pc
var numero_pc = generaRandom(1,5);
console.log("Il numero scelto dal pc é: " + numero_pc);

//Calcolare la somma dei due numeri
var risultato_somma = numero_pc + numero_utente;
console.log("Il risultato dei numeri scelti é: " + risultato_somma);

//chiedere all utente di scegliere pari o dispari
var scelta_utente = prompt("Scegliere se si vuole puntare su il numero Pari o Dispari!")
if (scelta_utente != ("pari") && scelta_utente != ("dispari") ) {
  console.log("!!!ERRORE Si prega di scegliere PARI o DISPARI.!!!");
}  else {
  console.log("Hai scelto: " + scelta_utente);
}
//verificare se il risultato somma é pari o dispari
//comunicare di chi é la vittoria
var risultato_finale = Pari(risultato_somma)
if (risultato_finale == scelta_utente) {
  console.log("Hai VINTO!");
} else {
  console.log("Hai PERSO!");
}


function Pari(numero) {
    var resto = numero % 2;
    if(resto == 0) {
        // il numero è pari
        console.log('Il numero é Pari');
        return ('pari');
    } else {
        // il numero è dispari
         console.log('Il numero é Dispari');
        return ('dispari');
    }
}

function generaRandom(min, max) {
    var numero = Math.floor(Math.random() * (max - min + 1)) + min;
    return numero;
}
