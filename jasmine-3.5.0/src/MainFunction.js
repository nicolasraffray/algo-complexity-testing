class MainFunction {
  constructor() {
    this.timing = [];
    this.dataset = [];
    this.labels = [];
    this.step = 10000;
    this.end = 100;
  }

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
