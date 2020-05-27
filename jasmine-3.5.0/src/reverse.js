class Reverse extends GenerateData {
  constructor(step, end) {
    super(step, end);
    this.timing = new Timing(this._reverse);
    this.step = step;
    this.end = end;
  }

  _reverse = (input) => {
    input.reverse();
  };
}
