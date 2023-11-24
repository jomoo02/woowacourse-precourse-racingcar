const ERROR = '[ERROR]';
const CAR_NAME_ERROR_MESSAGE = '자동차 이름이 잘못된 형식입니다.';
const ATTEMPT_NUMBER_ERROR_MESSAGE = '숫자가 잘못된 형식입니다.';
const GARAGE_ERROR_MESSAGE = '중복되는 자동차 이름이 있습니다.';

const ERROR_MESSAGE = Object.freeze({
  carName: `${ERROR} ${CAR_NAME_ERROR_MESSAGE}`,
  attemptNumber: `${ERROR} ${ATTEMPT_NUMBER_ERROR_MESSAGE}`,
  garage: `${ERROR} ${GARAGE_ERROR_MESSAGE}`,
});

export default ERROR_MESSAGE;
