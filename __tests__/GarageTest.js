import { MissionUtils } from '@woowacourse/mission-utils';

import Garage from '../src/models/Garage';

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickNumberInRange);
};

describe('차고 테스트', () => {
  test('차고에 전달할 자동차들의 이름 중 중복이 있는 경우 예외 처리한다.', () => {
    expect(() => {
      new Garage('jun,jun,zed');
    }).toThrow();

    expect(() => {
      new Garage('jun,zed,jun');
    }).toThrow();
  });

  test('차고에 전달한 자동차 이름이 하나인 경우 예외 처리한다.', () => {
    expect(() => {
      new Garage('jun');
    }).toThrow();
  });

  test('차고에 전달한 자동차 이름이 공백이거나 없을 경우 예외 처리한다.', () => {
    expect(() => {
      new Garage();
    }).toThrow();

    expect(() => {
      new Garage('');
    }).toThrow();
  });

  test('차고가 보유한 자동차들을 반환한다', () => {
    const NAMES = 'jun,zed,july';
    const NAMES_ARRAY = NAMES.split(',');
    const garage = new Garage(NAMES);
    const cars = garage.getCars();

    NAMES_ARRAY.forEach((name, index) => {
      expect(cars[index].getName()).toBe(name);
    });
  });

  test('차고가 보유한 자동차들 모두 한번 씩 전진 또는 정지시킨다.', () => {
    const NAMES = 'jun,zed,july';
    const garage = new Garage(NAMES);
    const CARS_ACTIONS = [4, 1, 5];
    const CARS_TRAVEL_DISTANCE = [1, 0, 1];

    mockRandoms([...CARS_ACTIONS]);
    garage.takeActionCars();

    const cars = garage.getCars();

    cars.forEach((car, index) => {
      expect(car.getTravelDistance()).toBe(CARS_TRAVEL_DISTANCE[index]);
    });
  });

  test('차고가 보유한 자동차 중 가장 먼 거리를 전진한 자동차들의 이름을 반환한다.', () => {
    const NAMES = 'jun,zed,july';
    const garage = new Garage(NAMES);
    const CARS_ACTIONS = [
      [4, 1, 5],
      [5, 4, 1],
      [5, 0, 4],
    ];
    const FUREST_TRAVEL_CAR_NAMES = ['jun'];

    CARS_ACTIONS.forEach((carAction) => {
      mockRandoms([...carAction]);
      garage.takeActionCars();
    });

    expect(garage.getFurthestTravelCarNames()).toEqual(FUREST_TRAVEL_CAR_NAMES);
  });

  test('차고가 보유한 자동차 중 가장 먼 거리를 전진한 자동차들의 이름을 반환할 때 가장 먼 거리의 자동차가 여러 개인 경우 모두 반환한다.', () => {
    const NAMES = 'jun,zed,july';
    const garage = new Garage(NAMES);
    const CARS_ACTIONS = [
      [4, 1, 5],
      [5, 4, 1],
      [5, 0, 4],
      [3, 0, 9],
    ];
    const FUREST_TRAVEL_CAR_NAMES = ['jun', 'july'];

    CARS_ACTIONS.forEach((carAction) => {
      mockRandoms([...carAction]);
      garage.takeActionCars();
    });

    expect(garage.getFurthestTravelCarNames()).toEqual(FUREST_TRAVEL_CAR_NAMES);
  });
});
