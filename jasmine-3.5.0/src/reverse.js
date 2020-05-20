class Reverse {
  constructor(step, End) {
    this.timing = new Timing(this._reverse);
    this.dataset = [];
    this.labels = [];
    this.step = step;
    this.end = End;
  }

  _reverse = (input) => {
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
    this.timing.times.forEach((iteration) => {
      this.labels.push(iteration.input);
    });
  };

  run = () => {
    this._generateData();
  };
}
