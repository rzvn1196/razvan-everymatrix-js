var inputLenght = document.getElementById('lenght'),
  inputWidth = document.getElementById('width'),
  elementResult = document.getElementById('result'),
  form = document.querySelector('.rectangle-form');


form.addEventListener('submit', function(e) {
  var lenght = inputLenght.value || 0,
  width = inputWidth.value || 0,
  result = 0;

  result = lenght * width;

  elementResult.innerText = result;

  e.preventDefault();
}, false);