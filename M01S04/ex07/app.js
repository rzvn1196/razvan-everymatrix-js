var friends = [{
  name: 'Dragos',
  surname: 'Iordache'
}, {
  name: 'Larry',
  surname: 'Larryson'
}, {
  name: 'Steven',
  surname: 'Stevenson'
}, {
  name: 'Carol',
  surname: 'Carolson'
}, {
  name: 'Andra',
  surname: 'Andrason'
}];

for (let i = 0; i < friends.length; i++) {
  console.log(friends[i].surname);
};

for (let i = 0; i < friends.length; i++) {
  console.log(`${friends[i].name} ${friends[i].surname}`);
  if (friends[i].name === 'Steven') {
    break;
  }
};

for (let i = 0; i < friends.length; i++) {
  let fullName = friends[i].name + friends[i].surname;
  if (fullName.length <= 13) {
    continue;
  }
  console.log(fullName);
}

// Folosind o bucla for afiseaza proprietatea name a tuturor obiectelor din arrayul friends.
// Afiseaza numele complet al tuturor prietenilor.
// Folosind keywordul break, afiseaza numele complet al prietenilor dar opeste bucla la primul surname care are numarul de caractere mai mare sau egal decat 9.


console.warn('Folosind o bucla for afiseaza proprietatea name a tuturor obiectelor din arrayul friends.');
for (let i = 0; i < friends.length; i++) {
  console.log(friends[i].name);
}

console.warn('Afiseaza numele complet al tuturor prietenilor.');
for (let i = 0; i < friends.length; i++) {
  console.log(`${friends[i].name} ${friends[i].surname}`);
}

console.warn('Folosind keywordul break, afiseaza numele complet al prietenilor dar opeste bucla la primul surname care are numarul de caractere mai mare sau egal decat 9.');
for (let i = 0; i < friends.length; i++) {
  console.log(`${friends[i].name} ${friends[i].surname}`);
  if (friends[i].surname.length >= 9) {
    break;
  }
};