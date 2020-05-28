class Reverse {
  constructor() {
    this.timing = new Timing(this._reverse);
  }

  _reverse = (input) => {
    input.reverse();
  };
}
