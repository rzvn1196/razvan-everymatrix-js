var inputRadius = document.getElementById('radius'),
  elementResult = document.getElementById('result'),
  form = document.querySelector('.circle-form');


form.addEventListener('submit', function(e) {
  var radius = inputRadius.value || 0,
  result = 0;

  result = Math.pow(radius , 2) * Math.PI

  elementResult.innerText = result;

  e.preventDefault();
}, false);