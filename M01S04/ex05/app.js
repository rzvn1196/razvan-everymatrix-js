var i;
var number = prompt('Introdu un numar divizibil cu X')  || 10;
var superior = prompt('Introdu un numar maxim');

for (i = 0; i <= superior; i++) {

  console.log(i);

  if (i % number !== 0) {
    continue
  }

  console.log(`Acest numar este multiplu de ${number}`);
}

// Folosind metoda prompt cere utilizatorului numarul pentru care trebuie sa gasesti multipli si afiseaza mesajul: “Acest numar este multiplu de x.” Afla multiplii pentru acest numar intre 1 si 1000. 
// Folosind inca o metoda prompt, cere utilizatorului si limita superioara pana la care sa numere bucla si sa afiseze multipli.
