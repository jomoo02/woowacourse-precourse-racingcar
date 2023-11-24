import { MissionUtils } from '@woowacourse/mission-utils';

import Car from '../src/models/Car';

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickNumberInRange);
};

describe('자동차 테스트', () => {
  test('자동차 이름의 길이가 1보다 작은 경우 예외 처리한다.', () => {
    expect(() => {
      new Car();
    }).toThrow();

    expect(() => {
      new Car('');
    }).toThrow();
  });

  test('자동차 이름의 길이가 5보다 큰 경우 예외 처리한다.', () => {
    expect(() => {
      new Car('carName1');
    }).toThrow();

    expect(() => {
      new Car('superLongLongLognCarName');
    }).toThrow();
  });

  test('자동차 이름에 공백이 있으면 예외 처리한다.', () => {
    expect(() => {
      new Car(' zin');
    }).toThrow();

    expect(() => {
      new Car('z in');
    }).toThrow();

    expect(() => {
      new Car('zin ');
    }).toThrow();
  });

  test('저장된 자동차의 이름을 반환한다.', () => {
    const NAME = 'zin';
    const car = new Car(NAME);

    expect(car.getName()).toBe(NAME);
  });

  test('자동차의 전진 거리를 반환한다. 처음 전진 거리는 0이다.', () => {
    const NAME = 'moo';
    const car = new Car(NAME);
    const TRAVEL_DISTANCE = 0;

    expect(car.getTravelDistance()).toBe(TRAVEL_DISTANCE);
  });

  test('자동차는 랜덤 값이 4이상인 경우 전진하다.', () => {
    const NAME = 'moo';
    const car = new Car(NAME);
    const CAR_ACTIONS = [4, 2, 9, 0, 5, 5, 3, 1, 7];
    const TRAVEL_DISTANCE = 5;

    mockRandoms([...CAR_ACTIONS]);

    CAR_ACTIONS.forEach(() => {
      car.takeAction();
    });

    expect(car.getTravelDistance()).toBe(TRAVEL_DISTANCE);
  });
});
