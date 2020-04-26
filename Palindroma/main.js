//Chiedere la parola all'utente
var parola_da_controllare = prompt("Inserisci una parola per sapere se é Palindroma")
console.log("La parola da te scelta é: " + parola_da_controllare);
//una volta ottenuto il risultato inserisco il valore finale nella variabile parola



var parola = checkPalindroma(parola_da_controllare)
if (parola == true) {
  //se la parola é true é pertanto palindroma
  console.log("La parola: " + parola_da_controllare + " é Palindroma.");
} else {
  //se la parola é false é pertanto non palindroma
  console.log("La parola: " + parola_da_controllare + " NON é Palindroma!.");
}



//stabilisco la funzione per controllare se la parola data dall'utente è palindroa
function checkPalindroma(parola_da_controllare) {
  //assegno ad una variabile quello che sarebbe la parola riggirata
  var parola_riggirata = parola_da_controllare.split('').reverse().join('');
  //stampo la parola riggirata
  console.log("La parola al contrario é: " + parola_riggirata);
  //se la parola riggirata é uguale alla parola dell utente allora é palindroma : true
  if (parola_riggirata == parola_da_controllare) {
       return true;
  }
  //se la parola riggirata non é uguale alla parola dell utente allora non é palindroma : false
     else {
      return false;
  }
}
