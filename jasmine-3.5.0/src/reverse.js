class Reverse {
  constructor(step, End) {
    this.timing = new Timeing(_reverse);
    this.dataset = [];
    this.labels = [];
    this.step = step;
    this.end = End;
  }

  _sort = (input) => {
    input.reverse();
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
