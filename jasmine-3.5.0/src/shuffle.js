class Shuffle {
  constructor(step, end) {
    this.timing = new Timing(this._sort);
    this.dataset = [];
    this.labels = [];
    this.step = step;
    this.end = End;
  }

  shuffle = (array) => {
    if (this.function === sort) {
      for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
    }
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
