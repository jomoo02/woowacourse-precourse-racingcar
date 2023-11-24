import ERROR_MESSAGE from '../constants/errorMessage.js';
import { CAR_NAME_LENGTH } from '../constants/setting.js';

class CarValidation {
  #name;

  constructor(name) {
    this.#name = name;
  }

  validate() {
    this.#checkLengthGreaterThanOrEqualMin()
      .#checkLengthLessThanOrEqualMax()
      .#checkNotIncludeWhiteSpace();
  }

  #checkLengthLessThanOrEqualMax() {
    const isNotLessThanMax = this.#name.length > CAR_NAME_LENGTH.max;

    if (isNotLessThanMax) {
      CarValidation.#throwError();
    }

    return this;
  }

  #checkLengthGreaterThanOrEqualMin() {
    const isNotGraterThanMin = this.#name.length < CAR_NAME_LENGTH.min;

    if (isNotGraterThanMin) {
      CarValidation.#throwError();
    }

    return this;
  }

  #checkNotIncludeWhiteSpace() {
    const isincludeWhiteSpace = this.#name.includes(' ');

    if (isincludeWhiteSpace) {
      CarValidation.#throwError();
    }

    return this;
  }

  static #throwError() {
    throw new Error(ERROR_MESSAGE.carName);
  }
}

export default CarValidation;
