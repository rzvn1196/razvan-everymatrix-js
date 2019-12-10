class Car {
  topSpeed = 220;
  topReverseSpeed = -50;
  isTrunkOpen = false;
  areLightsOn = false;

  constructor(
    make, 
    color, 
    wheels, 
    speed
  ) {
    this.make = make;
    this.color = color;
    this.wheels = wheels; 
    this.speed = speed;
  }

  accelerate() {
    this.speed++;
  }

  decelerate() {
    this.speed--;
  }

  stop() {
    this.speed = 0;
    console.log(this.speed)
  }

  setSpeed(speed) {
    if (speed > this.topSpeed) {
      this.speed = this.topSpeed;
      return;
    }

    if (speed < this.topReverseSpeed) {
      this.speed = this.topReverseSpeed;
      return;
    }

    this.speed = speed;

    // return speed;

  }

  setRelativeSpeed(delta) {
    let intendedSpeed = this.speed + deltaSpeed;
    this.setSpeed(intendedSpeed);
  }

  openTrunk() {
    this.isTrunkOpen = true;
  }

  closeTrunk() {
    this.isTrunkOpen = false;
  }

  turnLightsOn() {
    this.areLightsOn = true;
  }

  turnLightsOff() {
    this.areLightsOn = false;
  }

  flashLights() {
    this.turnLightsOff();
    this.turnLightsOn();
    setTimeout(() => {
      this.turnLightsOff();
    },5000);
  }

}

var honda = new Car('Honda', 'blue', 4, 50);
let opel = new Car('Opel', 'red', 4, 3);

let cars = [honda, opel];

cars.forEach((car) => {
  console.log(`Masina era marca ${car.make} si se deplasa cu viteza ${car.speed}kmph.`)
  car.decelerate();
  car.decelerate();
  car.decelerate();
  car.decelerate();
  car.decelerate();

  console.log(`Viteza noua este ${car.speed}kmph.`)
});