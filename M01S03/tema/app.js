// Creeaza un obiect numit person 
// Obiectul sa contina urmatoarele proprietati: firstName, lastName, email, birthYear, pets, zipCode. 
// Proprietatea pets sa contina un array de obiecte cu trei pozitii. 
// Obiectele din pets sa contina urmatoarele proprietati: name, species, age. 
// Toata informatia poate fi inventata. Nu divulga informatii personale inutil.


var person = {
  firstName: 'Razvan',
  lastName: 'Serban',
  email: 'Razvan@gmail.com',
  birthYear: 1996,
  pets: [{
    name: 'Sofocle',
    species: 'dog',
    age:3
  }, {
    name: 'Aristotel',
    species: 'cat',
    age:9
  }, {
    name: 'Ionut',
    species: 'piropopircanita',
    age:89
  }],

  zipCode: 102222
}

// Afiseaza propozitia: “Numele meu este: xxx si yyy si am x animale”. Nu uita de proprietatea length a arrayului pets. 
// Afiseaza propozitia: “Am acelasi email din copilarie: xxx”.
// Afiseaza propozitia: “Unul din cele x animale ale mele este species si are age ani.”
// Calculeaza si afiseaza (folosind anul curent) anul de nastere al animalului de pe pozitia 2. 
// Calculeaza si salveaza in variabila difference diferenta de ani dintre persoana si animalul de pe pozitia 0. Foloseste anul curent. 
// Salveaza numele animalului de pe pozitia 0 intr-o variabila numita petName. 
// Afiseaza propozitia: “Intre firstName si petName este o diferenta de difference ani”.

console.log(`Numele meu este: ${person.firstName + ' ' + person.lastName} si am ${person.pets.length} animale.`);
console.log(`Am acelasi email din copilarie: ${person.email}.`);
console.log(`Unul din cele ${person.pets.length} animale ale mele este ${person.pets[2].species} si are ${person.pets[2].age} de ani.`);
console.log(`${person.pets[2]} s-a nascut in anul ${2019 - person.pets[2]}.`);

var difference = person.age - person.pets[0].age;
console.log(difference);

var petName = person.pets[0].name;
console.log(`Intre ${petName} si ${person.firstName} este o diferenta de ${difference} de ani.`);

// In documentul HTML creeaza o lista neordonata <ul> cu 5 elemente goale <li>. 
// Fiecare li sa aiba un id: prop01, prop02… etc 
// Folosind metoda document.getElementById() afiseaza urmatoarele 5 afirmatii despre obiectul person. 
// Afiseaza propozitia “ firstName, pet1, pet2, pet3 locuiesc toti in aceeasi casa” (folosind bracket notation pe arrayul pets)
// Calculeaza si afiseaza diferenta de varsta dintre animalul de pe pozitia 0 si cel de pe pozitia 2 
// Afiseaza propozitia: “Ma numesc xxx yyy, m-am nascut in birthYear si codul meu postal este: zipCode”
// Afiseaza propozitia: “Animalele mele s-au nascut in xxxx, xxx, respectiv xxx.” Foloseste anul curent pentru a efectua scaderea. 
// Folosirea variabilelor este optionala dar incurajata. 

var firstName = person.firstName;
var firstProp = document.getElementById('prop01'),
    secondProp = document.getElementById('prop02'),
    thirdProp = document.getElementById('prop03'),
    fourthProp = document.getElementById('prop04'),
    fifthProp = document.getElementById('prop05');

var variable = 'variabilelor'

firstProp.innerText = `${firstName}, ${person.pets[0].name}, ${person.pets[1].name}, ${person.pets[2].name} locuiesc toti in aceeasi casa.`;
secondProp.innerText = person.pets[0].age - person.pets[2].age;
thirdProp.innerText = `Ma numesc ${firstName} ${person.lastName}, m-am nascut in ${person.birthYear} si codul meu postal este: ${person.zipCode}.`;
fourthProp.innerText = `Animalele mele s-au nascut in ${2019 - person.pets[0].age}, ${2019 - person.pets[1].age}, respectiv ${2019 - person.pets[2].age}. `;
fifthProp.innerText = `Folosirea ${variable} este optionala dar incurajata.`


