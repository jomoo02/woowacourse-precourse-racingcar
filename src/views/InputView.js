import { Console } from '@woowacourse/mission-utils';
import { PRINT_READ } from '../constants/print.js';

const InputView = {
  async readCarsNames() {
    const carsNames = await Console.readLineAsync(`${PRINT_READ.carsNames}\n`);

    return carsNames;
  },

  async readAttemptNumber() {
    const attemptNumber = await Console.readLineAsync(`${PRINT_READ.attemptNumber}\n`);
    Console.print();

    return attemptNumber;
  },
};

export default InputView;
