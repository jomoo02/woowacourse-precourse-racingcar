import ERROR_MESSAGE from '../constants/errorMessage.js';

class GarageValidation {
  #carNames;

  constructor(carNames) {
    this.#carNames = carNames;
  }

  validate() {
    this.#checkDuplicate();
  }

  #checkDuplicate() {
    const carNamesSet = new Set([...this.#carNames]);
    const isDuplicate = carNamesSet.size !== this.#carNames.length;

    if (isDuplicate) {
      GarageValidation.#thorwError();
    }
  }

  static #thorwError() {
    throw new Error(ERROR_MESSAGE.garage);
  }
}

export default GarageValidation;
