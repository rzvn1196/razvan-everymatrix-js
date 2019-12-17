
let stage = document.querySelector('.stage');
let message = document.querySelector('.message');
let count = 0;
let countElement = document.querySelector('.count');

stage.addEventListener('mouseover', () => {
  message.innerText = 'Soricelul e pe masa';
  count += 1;
});

stage.addEventListener('mouseout', () => {
  message.innerText = 'Soricelul nu-i pe masa';
  countElement.innerText = `Mouseul a fost pe scena de ${count} ori.`;
});
