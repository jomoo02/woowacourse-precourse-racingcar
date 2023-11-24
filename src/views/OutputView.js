import { Console } from '@woowacourse/mission-utils';
import { PRINT_RESULT } from '../constants/print.js';

const OutputView = {
  outputRunResultPhrase() {
    Console.print(`${PRINT_RESULT.phrase}`);
  },

  outputRunResult(cars) {
    cars.forEach(([name, travelDistance]) => {
      const carRunResult = `${name} : ${this.makeTravelDistanceString(travelDistance)}`;
      Console.print(carRunResult);
    });

    Console.print();
  },

  outputFinalWinners(garage) {
    const furestTravelCarsNames = garage.getFurthestTravelCarsNames().join(', ');
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
