class Sort extends GenerateData {
  constructor(step, end) {
    super(step, end);
    this.timing = new Timing(this._sort);
    this.step = step;
    this.end = end;
  }

  _sort = (input) => {
    input.sort();
  };
}
