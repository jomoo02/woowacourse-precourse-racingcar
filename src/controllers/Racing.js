import Garage from '../models/Garage.js';
import InputView from '../views/InputView.js';
import OutputView from '../views/OutputView.js';
import AttemptNumberValidation from '../validations/AttemptNumberValidation.js';

class Racing {
  #garage;

  #attemptNumber;

  ouputRunResult() {
    OutputView.outputRunResultPhrase();
    this.#outputAttemptNumberRunResult(this.#attemptNumber);
    return this;
  }

  outputFinalWinners() {
    const furestTravelCarNames = this.#garage.getFurthestTravelCarNames().join(', ');
    OutputView.outputFinalWinners(furestTravelCarNames);
  }

  #outputAttemptNumberRunResult(attemptNumber) {
    if (attemptNumber > 0) {
      const cars = this.#garage.takeActionCars().getCars();
      OutputView.outputOneRunResult(cars);
      this.#outputAttemptNumberRunResult(attemptNumber - 1);
    }
  }

  async createGarage() {
    const carsNames = await InputView.readCarNames();
    this.#garage = new Garage(carsNames);
    return this;
  }

  async inputAttemptNumber() {
    const attemptNumber = await InputView.readAttemptNumber();
    const validation = new AttemptNumberValidation(attemptNumber);
    this.#attemptNumber = validation.validate();
    return this;
  }
}

export default Racing;
