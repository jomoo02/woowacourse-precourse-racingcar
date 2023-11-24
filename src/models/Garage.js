import GarageValidation from '../validations/GarageValidation.js';
import Car from './Car.js';

class Garage {
  #cars;

  constructor(carNames) {
    this.#cars = Garage.#createCars(Garage.#validateCarNameDuplication(carNames));
  }

  getCars() {
    return this.#cars;
  }

  getFurthestTravelCarNames() {
    const furthestTravelDistance = this.#getFurthestTravelDistance();
    const furestTravelCarNames = this.#cars
      .filter((car) => car.getTravelDistance() === furthestTravelDistance)
      .map((car) => car.getName());

    return furestTravelCarNames;
  }

  takeActionCars() {
    this.#cars.forEach((car) => {
      car.takeAction();
    });

    return this;
  }

  #getFurthestTravelDistance() {
    const carTravelDistances = this.#cars
      .map((car) => car.getTravelDistance())
      .sort((a, b) => b - a);

    return carTravelDistances[0];
  }

  static #createCars(carNamesArray) {
    const cars = carNamesArray.map((carName) => new Car(carName));
    return cars;
  }

  static #validateCarNameDuplication(carNames) {
    const validation = new GarageValidation(carNames);
    const carNameArray = validation.validate();
    return carNameArray;
  }
}

export default Garage;
