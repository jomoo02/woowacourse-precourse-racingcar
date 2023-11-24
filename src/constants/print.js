const READ_CARS_NAMES = '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)';
const READ_ATTEMPT_NUMBER = '시도할 횟수는 몇 회인가요?';

const RUN_RESULT_PHRASE = '실행 결과';
const TRAVEL_DISTANCE = '-';
const FINAL_WINNER = '최종 우승자';

const SKIP_ONE_LINE = '';

const PRINT_READ = Object.freeze({
  carsNames: READ_CARS_NAMES,
  attemptNumber: READ_ATTEMPT_NUMBER,
});

const PRINT_RESULT = Object.freeze({
  phrase: RUN_RESULT_PHRASE,
  travelDistance: TRAVEL_DISTANCE,
  finalWinner: FINAL_WINNER,
});

export { PRINT_READ, PRINT_RESULT, SKIP_ONE_LINE };
