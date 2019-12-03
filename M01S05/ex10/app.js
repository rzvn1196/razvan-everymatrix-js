const calculateSurface = (L, l) => {
  if (l) {
    return L * l;
  } else {
    return Math.pow(L, 2);
  }
};

console.log(`Suprafata unui patrat de 2x2 este: ${calculateSurface(2)}`);
console.log(`Suprafata unui dreptunghi 6x7 este: ${calculateSurface(6, 7)}`);