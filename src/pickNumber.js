import { Random } from '@woowacourse/mission-utils';
import { RANDOM_NUMBER } from './constants/setting.js';

function pickNumber() {
  const { min, max } = RANDOM_NUMBER;
  const randomNumber = Random.pickNumberInRange(min, max);
  return Number(randomNumber);
}

export default pickNumber;
