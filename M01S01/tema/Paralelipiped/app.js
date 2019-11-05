var inputLenght = document.getElementById('lenght'),
  inputWidth = document.getElementById('width'),
  inputHeight = document.getElementById('height')
  elementResult = document.getElementById('result'),
  form = document.querySelector('.parallelepiped-form');


form.addEventListener('submit', function(e) {
  var lenght = inputLenght.value || 0,
  width = inputWidth.value || 0,
  height = inputHeight.value || 0,
  result = 0;

  result = lenght * width * height;

  elementResult.innerText = result;

  e.preventDefault();
}, false);