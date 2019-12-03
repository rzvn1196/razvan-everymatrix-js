let car = {
  make: 'Honda',
  color: 'blue',
  wheels: 4,
  speed: 50,
  topSpeed: 220,
  topReverseSpeed:-50,
  isTrunkOpen: false,
  areLightsOn: false,
  openTrunk: function() {
    this.isTrunkOpen = true;
  },
  closeTrunk: function() {
    this.isTrunkOpen = false;
  },
  lightsOn: function() {
    this.areLightsOn = true;
  },
  lightsOff: function() {
    this.areLightsOn = false;
  },
  flashLights: function () {
    this.lightsOff();
    this.lightsOn();
    setTimeout(() => {
      this.lightsOff();
    },800)
  },
  accelerate: function() {
    this.speed++;
  },
  decelerate: function() {
    this.speed--;
  },
  stopCar: function() {
    this.speed = 0;
  },
  setSpeed: function(speed) {
    if (speed > this.topSpeed) {
      this.speed = this.topSpeed;
      return;
    };

    if (speed < this.topReverseSpeed) {
      this.speed = this.topReverseSpeed;
      return;
    };

    this.speed = speed;
  }
};

console.log(`Masina era marca ${car.make} si mergea cu viteza ${car.speed}/kmph.`);
car.decelerate();
car.decelerate();
car.decelerate();
car.decelerate();
car.decelerate();
console.log(`Viteza noua este de ${car.speed}/kmph.`);
car.stopCar();
console.log(`${car.speed}/kmph.`);



