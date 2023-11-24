import CarValidation from '../validations/CarValidation.js';
import pickNumber from '../pickNumber.js';
import { MIN_FORWARD_CONDITION } from '../constants/setting.js';

class Car {
  #name;

  #travelDistance;

  constructor(name) {
    Car.#validateName(name);
    this.#name = name;
    this.#travelDistance = 0;
  }

  getName() {
    return this.#name;
  }

  getTravelDistance() {
    return this.#travelDistance;
  }

  takeAction() {
    const randomNumber = pickNumber();

    if (randomNumber >= MIN_FORWARD_CONDITION) {
      this.#forward();
    }
  }

  #forward() {
    this.#travelDistance += 1;
  }

  static #validateName(name) {
    const validation = new CarValidation(name);
    validation.validate();
  }
}

export default Car;
