let calculateRectangleArea = function (L, l) {
  return L * l;
};

console.warn(`Stiind ca un camp dreptunghiular de hamei produce 25kg/m2 . Ce diferenta de productie este intre un teren de 100m pe 250m si unul de 350m pe 200m?`)

let field1 = calculateRectangleArea(100, 250);
let field2 = calculateRectangleArea(350, 200);
let qtyPerSquareMeter = 25;
let yield1 = field1 * qtyPerSquareMeter;
let yield2 = field2 * qtyPerSquareMeter;
let output = Math.abs(yield1 - yield2);

console.log(output);


console.warn(`Stiind ca din 10kg de hamei produc 2.5l de bere, cati litri de bere va produce un teren de 400m pe 370m?`)

let field3 = calculateRectangleArea(400, 370);
let yield3 = field3 * qtyPerSquareMeter;
let beerPerKg = 10;
let beerOutput = yield3 / beerPerKg;

console.log(beerOutput);


console.warn(`Stiind ca un camp dreptunghiular de grau produce 32kg/m2 de faina. Afla si afiseaza cate kilograme de paine produce un camp de 300 pe 200 metri stiind ca dintr-un kilogram de faina ies 2.5 kg de paine.`)

let flowerPerSq = 32;
let bread = 2.5;
let breadPerSq = bread * flowerPerSq;
let flowerField = calculateRectangleArea(300, 200);
let totalBread = flowerField/100 * breadPerSq;

console.log(totalBread);