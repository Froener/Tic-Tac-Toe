export default class GameObj {
  constructor() {
    this.active = false;
    this.pxSession = 0;
    this.poSession = 0;
  }

  getActiveStatus() {
    return this.active;
  }

  startGame() {
    this.active = true;
  }

  endGame() {
    this.active = false;
  }

  getPxSession() {
    return this.pxSession;
  }

  getPoSession() {
    return this.poSession;
  }

  pxWins() {
    this.pxSession += 1;
  }

  poWins() {
    this.poSession += 1;
  }
}
