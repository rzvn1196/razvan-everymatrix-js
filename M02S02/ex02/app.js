let personForm = document.getElementById('personForm');
let addSkillButton = document.getElementById('addSkill');
let addSkillInput = document.getElementById('skillInput');
let petSwitch = document.getElementById('hasPets');
let petFieldset = document.getElementById('pet');
let petNameInput = document.getElementById('petName');
let petAgeInput = document.getElementById('petAge');
let petSpeciesInput = document.getElementById('petSpecies');
let addPetButton = document.getElementById('addPetButton');
let person;

class Person {
  skills = [];
  pets = [];

  constructor(name, surname, age) {
    this.name = name;
    this.surname = surname;
    this.age = age;

    this.container = document.getElementById('details');
  }

  render() {
    this.clear()

    this.namePara = document.createElement('p');
    this.surPara = document.createElement('p');
    this.agePara = document.createElement('p');
    this.skillsList = document.createElement('ul');
    this.petsList = document.createElement('ol');

    this.namePara.innerText = this.name;
    this.surPara.innerText = this.surname;
    this.agePara.innerText = this.age;

    this.skills.forEach((skill) => {
      let skillLi = document.createElement('li');
      skillLi.innerText = skill;

      this.skillsList.appendChild(skillLi);
    });

    this.pets.forEach((pet) => {
      let petLi = document.createElement('li');
      petLi.innerText = `Nume: ${pet.name}. Specie: ${pet.species} Varsta: ${pet.age}`;

      this.petsList.appendChild(petLi);
    })

    this.container.appendChild(this.namePara);
    this.container.appendChild(this.surPara);
    this.container.appendChild(this.agePara);
    this.container.appendChild(this.skillsList);
    this.container.appendChild(this.petsList);
  }

  clear() {
    this.container.innerHTML = '';
  }

  addSkill(skill) {
    this.skills.push(skill);
  }

  addPets(pet) {
    this.pets.push(pet);
  }
}


class Pet {
  constructor(petName, petSpecies, petAge) {
    this.name = petName;
    this.species = petSpecies;
    this.age = petAge;
  }
}

personForm.addEventListener('submit', (evt) => {
  let inputArray = evt.target.querySelectorAll('input');

  person = new Person(inputArray[0].value, inputArray[1].value, inputArray[2].value);
  person.render();

  evt.preventDefault();
});

addSkillButton.addEventListener('click', () => {
  let skillName = addSkillInput.value;

  if (skillName.trim().length > 0) {
    person.addSkill(skillName);
    person.render();
  }
  addSkillInput.value = '';
});

addPetButton.addEventListener('click', () => {
  let petName = petNameInput.value;
  let petSpecies = petSpeciesInput.value;
  let petAge = petAgeInput.value;

  if (petName.trim().length>0) {
    let pet = new Pet(petName, petAge, petSpecies);
    person.addPets(pet);
    person.render();
  }
  
  petNameInput.value = '';
  petAgeInput.value = '';
  petSpeciesInput.value = '';
})

petSwitch.addEventListener('change', (evt) => {
  if (evt.target.checked) {
    petFieldset.style.display = 'block';
  } else {
    petFieldset.style.display = 'none';
  }
});
