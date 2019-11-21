var person = {
  name: 'Razvan',
  surname: 'Serban',
  age: 32,
  petOwner: false,
  skills: ['html', 'javascript', 'css', 'java', 'c++', 'node', 'jquery'],
  friends: [{
    name: 'Larry',
    surname: 'Larryson',
    age: 30,
  }, {
    name: 'Steven',
    surname: 'Stevenson',
    age: 31,
  }, {
    name: 'Carol',
    surname: 'Carolson',
    age: 29,
  }]
};

// Folosind obiectul person si un for, afiseaza in consola skillurile pe care le are persoana 
// In mod similar, afiseaza skillurile care incep cu c 
// Folosind un for afiseaza propozitia: "Numele de familie ale prietenilor mei sunt xxx, xxx , xxx."
// Folosind un for, afiseaza numarul total de ani pe care il au persoanele din arrayul friends 
// Folosind un for, afiseaza suma anilor  persoanelor. 
// Afiseaza diferenta de varsta dintre persoana si prietenii din arrayul friends. 
// Afiseaza fraza: "Intre Dragos si Larry este o diferenta de xx ani. Intre Dragos si Steven... ". Repeta pentru tot arrayul friends.
// Afiseaza fraza prietenii mei sunt xxx yyy, xxx yyy, xxx yyy in ordine inversa a arrayului de prieteni. (Numarand de la length la 0).

console.warn('Folosind obiectul person si un for, afiseaza in consola skillurile pe care le are persoana ');
for(let i = 0; i < person.skills.length; i++) {
  console.log(person.skills[i]);
}

console.warn('In mod similar, afiseaza skillurile care incep cu c ')
for(let i = 0; i < person.skills.length; i++) {
  if(person.skills[i].startsWith('c'))
  console.log(person.skills[i]);
}

console.warn('Folosind un for afiseaza propozitia: "Numele de familie ale prietenilor mei sunt xxx, xxx , xxx."');
let sentence = "Numele de familie ale prietenilor mei sunt "
for(let i = 0; i < person.friends.length; i++) {
  sentence += `${person.friends[i].surname}`;
  if (i < person.friends.length  - 1) {
    sentence += ', ';
  } else {
    sentence += '.';
  }
}
console.log(sentence);

console.warn('Folosind un for, afiseaza numarul total de ani pe care il au persoanele din arrayul friends ');
let totalAge = 0;
for(let i = 0; i < person.friends.length; i++) {
  totalAge += person.friends[i].age
}
console.log(totalAge);

console.warn('Folosind un for, afiseaza suma anilor  persoanelor. ');
let maxAge = 0;
let totalAges = 0;
for(let i = 0; i < person.friends.length; i++) {
  dateBirth = 2019 - person.friends[i].age;
  maxAge += dateBirth;
}
console.log(totalAges);

console.warn('Afiseaza diferenta de varsta dintre persoana si prietenii din arrayul friends.');
let ageDifference = 0;
let totalFriendsAge = 0;
for(let i = 0; i < person.friends.length; i++) {
  totalFriendsAge += person.friends[i].age;
  ageDifference = totalFriendsAge - person.age;
}
console.log(ageDifference);

console.warn('Afiseaza fraza: "Intre Dragos si Larry este o diferenta de xx ani. Intre Dragos si Steven... ". Repeta pentru tot arrayul friends.');
let theSentence = ``;
for(i = 0; i < person.friends.length; ++i) {
  let diff = person.age - person.friends[i].age;
  theSentence += `Intre ${person.name} si ${person.friends[i].name} este o diferenta de ${diff} ani.`;
}
console.log(theSentence);

console.warn('Afiseaza fraza prietenii mei sunt xxx yyy, xxx yyy, xxx yyy in ordine inversa a arrayului de prieteni. (Numarand de la length la 0).')
let theSecondSentence = "Prietenii mei sunt "
for(i = 0; i < person.friends.length; ++i) {
  person.friends.reverse();
  theSecondSentence += `${person.friends[i].name} ${person.friends[i].surname}`;
  if (i < person.friends.length - 1) {
    theSecondSentence += ', ';
  } else {
    theSecondSentence += '.';
  }
}
console.log(theSecondSentence);



  

