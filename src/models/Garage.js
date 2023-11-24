import GarageValidation from '../validations/GarageValidation.js';
import Car from './Car.js';

class Garage {
  #cars;

  constructor(carNames) {
    this.#createCars(carNames);
    this.#validateCarNameDuplication();
  }

  getCars() {
    return this.#cars;
  }

  getFurthestTravelCarsNames() {
    const furthestTravelDistance = this.#getFurthestTravelDistance();
    const furestTravelCarsNames = this.#cars
      .filter((car) => car.getTravelDistance() === furthestTravelDistance)
      .map((car) => car.getName());

    return furestTravelCarsNames;
  }

  takeActionCars() {
    this.#cars.forEach((car) => {
      car.takeAction();
    });
    return this;
  }

  #getFurthestTravelDistance() {
    const carsTravelDistances = this.#cars
      .map((car) => car.getTravelDistance())
      .sort((a, b) => b - a);
    return carsTravelDistances[0];
  }

  #createCars(carNames) {
    const carNamesArray = carNames.split(',');
    const cars = carNamesArray.map((carName) => new Car(carName));
    this.#cars = cars;
  }

  #validateCarNameDuplication() {
    const carNames = this.#cars.map((car) => car.getName());
    const validation = new GarageValidation(carNames);
    validation.validate();
  }
}

export default Garage;
