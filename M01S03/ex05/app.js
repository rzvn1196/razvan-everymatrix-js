var person = {
  name: 'Razvan',
  surname: 'Serban',
  age: '23',
  petOwner: false,
  skills: ['html', 'css', 'javascript'],
  friends: [{
    name: 'Larry',
    surname: 'Larryson',
    age: 30
  }, {
    name: 'Carol',
    surname: 'Carolson',
    age: 31
  }, {
    name: 'Steven',
    surname: 'Stevenson',
    age:29
  }]
};

console.log(person.friends);

console.log(`Ma numesc ${person.surname} ${person.name} si stiu ${person.skills[0]} si ${person.skills[1]}`);

console.log(`Ma numesc ${person.name} si invat JavaScript.`);

console.log(`Am ${person.friends.length} prieteni: ${person.friends[0].name}, ${person.friends[2].name} si ${person.friends[1].name}.`)

// Afiseaza propozitia: “Ma numesc xxx yyy si vreau sa invat javascript.” Foloseste notatia cu paranteze patrate.
// Afiseaza propozitia “Sunt xxx si stiu HTML si CSS.”. Nu folosi valoarea din arrayul de skills.
// Afiseaza propozitia “Am x prieteni: Larryson, Stevenson si Carolson.”. Foloseste proprietatea length si apeleaza direct proprietatile name ale obiectelor.
// Afiseaza propozitia “Numele meu este xxx yyy, am zz ani si n prieteni.”. Foloseste metoda length pentru a calcula lungimea arrayului de prieteni.


console.log(`Ma numesc ${person.surname} ${person.name} si vreau sa invat ${person.skills[2]}.`);

console.log(`Ma numesc ${person.name} si stiu HTML si CSS.`);

console.log(`Am ${person.friends.length} prieteni: ${person.friends[0].surname}, ${person.friends[2].surname} si ${person.friends[1].surname}.`)

console.log(`Numele meu este ${person.surname} ${person.name}, am ${person.age} de ani si ${person.friends.length} prieteni.`);
