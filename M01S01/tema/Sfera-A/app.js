var inputRadius = document.getElementById('radius'),
  elementResult = document.getElementById('result'),
  form = document.querySelector('.sphere-form');


form.addEventListener('submit', function(e) {
  var radius = inputRadius.value || 0,
  result = 0;

  result = 4 * Math.PI * Math.pow(radius , 2);

  elementResult.innerText = result;

  e.preventDefault();
}, false);