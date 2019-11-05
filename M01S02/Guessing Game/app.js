// Creaza un document HTML in care exista un formular cu un camp de input in care utilizatorul poate ghici numarul pe care l-a gandit calculatorul.

// Daca numarul este mai mare decat cel generat, afiseaza o alerta cu "Mai mare" si analog pentru numere mai mici. Cand numarul este egal cu cel prezentat afiseaza o alerta cu "Ai ghicit numarul" si resteaza jocul.

// Math.ceil(Math.random() * 10)

var inputElement = document.getElementById('number'),
 secretNumber = Math.ceil(Math.random() * 10),
 form = document.querySelector('.guessing-game');

console.log(secretNumber);

form.addEventListener('submit', function(e) {
  var guessedNumber = inputElement.value || 0;

  guessedNumber = Number(guessedNumber);
  
  if (guessedNumber === secretNumber) {
    alert('Ai ghicit!');
  }
  
  if (guessedNumber < secretNumber ) {
    alert('Numarul este mai mare!');
  }
  
  if (guessedNumber > secretNumber) {
    alert('Numarul este mai mic');
  }

  e.preventDefault();
}, false);

