let dateBuilder = [
  function () {
    return '2019';
  },
  function () {
    return 'Februarie';
  },
  function () {
    return '24';
  }
];

console.log(dateBuilder);

dateBuilder[3] = function () {
  return 'Duminica';
};

console.log(dateBuilder[3]());

console.warn(`Folosind arrayul dateBuilder. Afiseaza luna curenta.
Afiseaza propozitia: “Suntem in anul an.”.
Afiseaza propozitia: “Suntem in luna ll in anul aa.”.
Afiseaza propozitia: “Astazi este zz”.`
);

console.log(dateBuilder[1]());
console.log(`Suntem in anul ${dateBuilder[0]()}.`);
console.log(`Suntem in luna ${dateBuilder[1]()} in anul ${dateBuilder[0]()}`);
console.log(`Astazi este ${dateBuilder[3]()}`);

console.warn(`Folosind arrayul dateBuilder. Afiseaza anul curent.
Afiseaza propozitia: “Suntem in luna an”.
Afiseaza propozitia: “Astazi este zi, data”.
Afiseaza propozitia: “Data curenta este zi luna an”.`
);

console.log(dateBuilder[0]());
console.log(`Suntem in luna ${dateBuilder[1]()}`);
console.log(`Astazi este ${dateBuilder[3]()}, ${dateBuilder[2]()} ${dateBuilder[1]()} ${dateBuilder[0]()}`);
console.log(`Data curenta este ${dateBuilder[2]()} ${dateBuilder[1]()} ${dateBuilder[0]()}`);