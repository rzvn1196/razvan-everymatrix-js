var i;

// i++
// i = i + 1 
// i += 1

// Modifica exemplul astfel incat bucla sa numere de la 1 la 89.

// for (i = 1; i < 89; i++) {
//   console.log(i);
// }


// Modifica exemplul astfel incat bucla sa numere de la 1 la 88 .

// for (i = 1; i < 88; i++) {
//   console.log(i);
// }


// Folosind keywordul break opreste bucla atunci cand numarul este egal cu 42.

// for (i = 1; i < 88; i++) {
//   if (i === 42) {
//     break
//   }
//   console.log(i);
// }


// Folosind keywordul continue, afiseaza doar numele impare intre 1 si 89.

for (i = 1; i < 89; i++) {
  if (i % 2 === 0) {
    continue
  }
  console.log(i);
}
// In mod similar, afiseaza doar numerele care sunt divizibile cu 3. 

for (i = 1; i< 89; i++) {
  if (i % 3 ===0) {
    continue
  }
  console.log(i);
}