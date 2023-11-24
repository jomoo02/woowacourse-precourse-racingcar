import { Console } from '@woowacourse/mission-utils';
import { PRINT_RESULT, SKIP_ONE_LINE } from '../constants/print.js';

const OutputView = {
  outputRunResultPhrase() {
    Console.print(`${PRINT_RESULT.phrase}`);
  },

  outputOneRunResult(cars) {
    cars.forEach((car) => {
      const name = car.getName();
      const travelDistance = car.getTravelDistance();
      const carRunResult = `${name} : ${this.makeTravelDistanceString(travelDistance)}`;
      Console.print(carRunResult);
    });

    Console.print(SKIP_ONE_LINE);
  },

  outputFinalWinners(furestTravelCarsNames) {
    const finalWinners = `${PRINT_RESULT.finalWinner} : ${furestTravelCarsNames}`;
    Console.print(finalWinners);
  },

  makeTravelDistanceString(travelDistance, travelDistanceString = '') {
    if (travelDistance > 0) {
      return this.makeTravelDistanceString(
        travelDistance - 1,
        `${travelDistanceString}${PRINT_RESULT.travelDistance}`,
      );
    }
    return travelDistanceString;
  },
};

export default OutputView;
