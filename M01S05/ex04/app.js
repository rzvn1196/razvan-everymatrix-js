let calculateRectangleArea = (L, l) => {
  return L * l;
};

console.warn(`Calculeaza suprafata de tapet necesara pentru o camera de 6 pe 4 m cu tavan inalt de 2.5m, stiind ca exista o usa de 2.2 pe 1.5 si o suprafata de ferestre de 2 pe 1.5.`)

let wall1 = calculateRectangleArea(6, 2.5);
let wall2 = calculateRectangleArea(4, 2.5);
let wallPSize = (wall1 + wall2) * 2;
let door = calculateRectangleArea(2.2, 1.5);
let windowS = calculateRectangleArea(2, 1.5);
let dPlusWindow = door + windowS;
let wallAreaSize = wallPSize - dPlusWindow;

console.log(wallAreaSize);


console.warn('Creaza o functie wrapper numita calculateSquareArea() pentru calculateRectangleArea() care sa primeasca ca parametru latura unui patrat si sa calculeze suprafata acestuia. O functie wrapper este o functie care “imbraca” o functie existenta pentru a-i aduce imbunatatiri, extra cod sau pentru a-i limita in mod intentionat capacitatile.')

let calculateSquareArea = (l) => {
  return calculateRectangleArea(l, l);
};

console.log(calculateSquareArea(2));