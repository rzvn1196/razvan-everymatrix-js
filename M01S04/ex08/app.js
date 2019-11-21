let yourNumber = prompt('Alege numarul tau');
let maxNumber = prompt('Alege limita superioara')
let i = 5;

while (i <= maxNumber) {
  if (i % yourNumber !== 0) {
    i++;
    continue;
  };
  console.log(i);

  i++;
};