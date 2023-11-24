import ERROR_MESSAGE from '../constants/errorMessage.js';

class GarageValidation {
  #carNamesArray;

  constructor(carNames) {
    GarageValidation.#checkInputCarNames(carNames);
    this.#carNamesArray = carNames.split(',');
  }

  validate() {
    this.#checkDuplication().#checkNotOneCar();

    return this.#carNamesArray;
  }

  #checkDuplication() {
    const carNamesSet = new Set([...this.#carNamesArray]);
    const isDuplicate = carNamesSet.size !== this.#carNamesArray.length;

    if (isDuplicate) {
      GarageValidation.#thorwError();
    }
    return this;
  }

  #checkNotOneCar() {
    const isOneCar = this.#carNamesArray.length === 1;

    if (isOneCar) {
      GarageValidation.#thorwError();
    }
    return this;
  }

  static #checkInputCarNames(carNames) {
    const isNotInput = carNames === undefined || carNames === '';

    if (isNotInput) {
      GarageValidation.#thorwError();
    }
    return this;
  }

  static #thorwError() {
    throw new Error(ERROR_MESSAGE.garage);
  }
}

export default GarageValidation;
