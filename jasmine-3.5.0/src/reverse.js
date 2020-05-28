class Reverse {
  constructor() {
    this.timing = new Timing(this._reverse);
    this.functionNames = ["JavaScript Reverse"];
  }

  _reverse = (input) => {
    input.reverse();
  };
}
