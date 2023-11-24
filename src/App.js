import Racing from './controllers/Racing.js';

class App {
  // eslint-disable-next-line class-methods-use-this
  async play() {
    const racing = new Racing();
    await racing.createGarage();
    await racing.inputAttemptNumber();
    racing.ouputRunResult().outputFinalWinners();
  }
}

export default App;
