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

console.warn(`Calculeaza suprafata de tapet necesara pentru o camera de 12 pe 9 m cu tavan inalt de 2.5m, stiind ca exista o usa de 3 pe 2 si o suprafata de ferestre de 3 pe 2.`)

let wallZ = calculateRectangleArea(12, 2.5);
let wallX = calculateRectangleArea(9, 2.5);
let doorZ = calculateRectangleArea(3, 2);
let windowZ = calculateRectangleArea (3, 2);
let fullTap = (wallZ + wallX) * 2 - (doorZ + windowZ);
console.log(fullTap);

console.warn(`Creaza o functie wrapper pentru calculateRectangleArea() care sa primeasca 4 parametrii: latimea si lungimea unui dreptunghi initial, apoi latimea si lungimea altui dreptunghi. Functia se va numi aggregateSurfaceArea().`)

let aggregateSurfaceArea = (L1, l1, L2, l2) => {
  let surface1 = calculateRectangleArea(L1, l1);
  let surface2 = calculateRectangleArea(L2, l2);

  return surface1 + surface2;
};

console.log(`Suprafata celor doua dreptunghiuri este ${aggregateSurfaceArea(48, 92, 51, 102)}`);