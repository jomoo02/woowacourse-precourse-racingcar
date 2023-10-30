import { MissionUtils } from '@woowacourse/mission-utils';

const print = (printString = '') => {
  MissionUtils.Console.print(printString);
};

const getForwardDistanceString = (forwardDistance) => {
  const makeString = (currentString = '') => {
    if (currentString.length === forwardDistance) {
      return currentString;
    }

    return makeString(`${currentString}-`);
  };

  return makeString;
};

const getOneCarResult = (car) => {
  const carName = car.getCarName();
  const forwardDistance = car.getForwardDistance();
  const forwardDistanceString = getForwardDistanceString(forwardDistance)();

  return `${carName} : ${forwardDistanceString}`;
};

const printInputCarNames = () => {
  print('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)');
};

const printInputAttemptNumber = () => {
  print('시도할 횟수는 몇 회인가요?');
};

const printStartRaceResult = () => {
  print();
  print('실행 결과');
};

const printRaceResult = (cars) => {
  cars.forEach((car) => {
    print(getOneCarResult(car));
  });
  print();
};

const printWinners = (cars) => {
  print(`최종 우승자 : ${cars.join(', ')}`);
};

export {
  printInputCarNames,
  printInputAttemptNumber,
  printStartRaceResult,
  printRaceResult,
  printWinners,
};
