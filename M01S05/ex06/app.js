let person = {
  getName: function() {
    return 'Dragos Iordache'
  },
  getAge: function() {
    return 32
  }
};

const accessor = (methodSuffix) => {
  let methodName = `get${methodSuffix}`;

  return person[methodName]()
};

console.log(accessor('Name'));
console.log(accessor('Age'));

console.warn(`Folosind accesorul salveaza numele mic al persoanei intr-o variabila si foloseste-l in propoztia: “Eu sunt xxx.”`)
let firstName = accessor('Name');
console.log(firstName.split(' ')[0]);

console.warn(`Afiseaza diferenta de varsta dintre tine si persoana.`);
console.log(56 - accessor('Age'));

console.warn(`Afiseaza anul de nastere al persoanei folosind anul curent`);
console.log((new Date()).getFullYear() - accessor('Age'));

console.warn(`Afiseaza propozitia “Ma numesc xxx si am yy ani si m-am nascut acum aa ani.”`);
console.log(`Ma numesc ${accessor('Name').split(' ')[0]}, am ${accessor('Age')} si m-am nascut in anul ${(new Date()).getFullYear() - accessor('Age')}`)

console.warn(`Folosind accesorul afiseaza numele persoanei.`);
console.log(accessor('Name'));

console.warn(`Afiseaza varsta persoanei.`);
console.log(accessor('Age'));

console.warn(`Afiseaza anul de nastere al persoanei folosind anul curent.`);
console.log((new Date()).getFullYear() - accessor('Age'));

console.warn(`Afiseaza propozitia “Ma numesc xxx yyy si am aa ani!”`);
console.log(`Ma numesc ${accessor('Name')}si am ${accessor('Age')} de ani.`);