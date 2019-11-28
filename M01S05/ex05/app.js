let person = {
  getName: function () {
    return 'Dragos Iordache';
  },
  getAge: function () {
    return 32;
  }
};

console.warn(`Afiseaza primul nume al persoanei folosind metoda getName()`);
console.log(person.getName().split(' ')[0]);

console.warn(`Afiseaza diferenta de varsta dintre  persoana si varsta ta folosind metoda getAge().`);
console.log(`Diferenta de varsta dintre mine si persoana este: ${42 - person.getAge()}`);

console.warn(`Afiseaza ultimele doua cifre al anului de nastere al persoanei, folosind anul curent si metoda getAge(). (Exemplu: ‘87).`);
console.log(`Ultimele doua cifre ale anului de nastere al persoanei sunt: '${(new Date().getFullYear() - person.getAge()).toString().slice(-2)}`);

console.warn(`Afiseaza propozita: “Ma numesc xxx si am yy ani!”`);
console.log(`Ma numesc ${person.getName()} si am ${person.getAge()} de ani.`);

console.warn(`_______________________________________________`);
console.warn(`Afiseaza numele intreg al persoanei folosind metoda getName()`);
console.log(person.getName());

console.warn(`Afiseaza varsta persoanei folosind metoda getAge()`);
console.log(person.getAge());

console.warn(`Afiseaza anul de nastere al persoanei, folosind anul curent si metoda getName()`);
console.log(new Date().getFullYear() - person.getAge());

console.warn(`Afiseaza propozita: “Ma numesc xxx yyy m-am nascut acum aa ani in anul zzzz!”`);
console.log(`Ma numesc ${person.getName()}si m-am nascut acum ${person.getAge()} de ani in anul ${new Date().getFullYear() - person.getAge()}.`);