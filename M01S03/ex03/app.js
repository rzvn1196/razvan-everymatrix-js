var dragos = {
  name: 'Dragos',
  surname: 'Iordache',
  friends: {}
};

var larry = {
  name: 'Larry',
  surname: 'Larryson',
  friends: {}
};

var carol = {
  name: 'Carol',
  surname: 'Carlson',
  friends: {}
};

var steven = {
  name: 'Steven',
  surname: 'Stevenson',
  friends: {}
};

var anita = {
  name: 'Andra',
  surname: 'Andrason',
  friends: {}
};

dragos.friends.larry = larry;
dragos.friends.steven = steven;
dragos.friends.anita = anita;

larry.friends.dragos = dragos;
steven.friends.dragos = dragos;
anita.friends.dragos = dragos;

larry.friends.steven = steven;
anita.friends.steven = steven;
steven.friends.larry = larry;
steven.friends.anita = anita;

anita.friends.carol = carol;
carol.friends.anita = anita;

delete dragos.friends.larry;
delete larry.friends.dragos;

console.log(
  larry.friends.steven.friends.dragos.name + ' ' + larry.friends.steven.friends.dragos.surname
);

console.log(
  dragos.friends.steven.friends.larry.name + ' ' + dragos.friends.steven.friends.larry.surname
);

console.log(
  carol.friends.anita.friends.dragos.name + ' ' + carol.friends.anita.friends.dragos.surname
);

console.log(
  anita.friends.dragos.name.length + anita.friends.dragos.surname.length
);

console.log(
  dragos.name.length + dragos.surname.length
);
