console.warn('Folosind codul de la exercitiul 08, numeste functia care ruleaza la click clickHandler si foloseste-i numele ca parametru al metodei addEventListener in locul celei anonime');

let button = document.getElementById('clicker');

const clickHandler = () => {
  alert('Ai apasat butonul!');
};

button.addEventListener('click', clickHandler);

removeEventButton.addEventListener('click', () => {
  button.removeEventListener('click', ClickHandler);
});

console.warn('AGEAGEAGEAGEAGEAGEAGEAGEAGEAGEAGEAGEAGEAGEAGEAGEAGEAGEAGEAGEAGEA');

let queryButton = document.getElementById("queryButton");
let age = 0;
let messageParagraph = document.getElementById("message");

queryButton.addEventListener('click', () => {
  age = prompt('Introdu varsta: ');
  let message = `Ai ${age} ani.`;

  messageParagraph.innerText = message;
});