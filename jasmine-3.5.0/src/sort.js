class Sort {
  constructor(step, End, input) {
    this.timing = new Timeing(_reverse);
    this.dataset = [];
    this.labels = [];
    this.step = step;
    this.end = End;
  }

  _sort = (input) => {
    input.sort(input);
  };

  _generateData = () => {
    this.timing.iterateFunction(this.step, this.end);
    this.timing.times.forEach((iteration) => {
      this.dataset.push(iteration.time);
    });
    this._generateLabels();
  };

  _generateLabels = () => {
    Time.times.forEach((iteration) => {
      inputs.push(iteration.input);
    });
  };

  run = () => {
    this._generateData();
  };
}
