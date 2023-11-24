import Garage from '../models/Garage.js';
import InputView from '../views/InputView.js';
import OutputView from '../views/OutputView.js';

class Racing {
  #garage;

  #attemptNumber;

  ouputRunResult() {
    OutputView.outputRunResultPhrase();
    this.#outputAttemptNumberRunResult(this.#attemptNumber);
    return this;
  }

  outputFinalWinners() {
    const furestTravelCarsNames = this.#garage.getFurthestTravelCarsNames().join(', ');
    OutputView.outputFinalWinners(furestTravelCarsNames);
  }

  #outputAttemptNumberRunResult(attemptNumber) {
    if (attemptNumber > 0) {
      const cars = this.#garage.takeActionCars().getCars();
      OutputView.outputOneRunResult(cars);
      this.#outputAttemptNumberRunResult(attemptNumber - 1);
    }
  }

  async createGarage() {
    const carsNames = await InputView.readCarsNames();
    this.#garage = new Garage(carsNames);
    return this;
  }

  async inputAttemptNumber() {
    const attemptNumber = await InputView.readAttemptNumber();
    this.#attemptNumber = attemptNumber;
    return this;
  }
}

export default Racing;
