import ERROR_MESSAGE from '../constants/errorMessage.js';
import { FIRST_DIGIT_ZERO } from '../constants/setting.js';

class AttemptNumberValidation {
  #attemptNumber;

  constructor(attemptNumber) {
    this.#attemptNumber = attemptNumber;
  }

  validate() {
    this.#checkNotFirstDigitZero().#checkInteger().#checkNotExistWhiteSpace();

    return Number(this.#attemptNumber);
  }

  #checkNotFirstDigitZero() {
    const isFirstDigitZero = this.#attemptNumber[0] === FIRST_DIGIT_ZERO;

    if (isFirstDigitZero) {
      AttemptNumberValidation.#throwError();
    }
    return this;
  }

  #checkInteger() {
    const isNotInteger = !Number.isInteger(Number(this.#attemptNumber));

    if (isNotInteger) {
      AttemptNumberValidation.#throwError();
    }
    return this;
  }

  #checkNotExistWhiteSpace() {
    const isExistWhiteSpace = this.#attemptNumber.includes(' ');

    if (isExistWhiteSpace) {
      AttemptNumberValidation.#throwError();
    }
    return this;
  }

  static #throwError() {
    throw new Error(ERROR_MESSAGE.attemptNumber);
  }
}

export default AttemptNumberValidation;
