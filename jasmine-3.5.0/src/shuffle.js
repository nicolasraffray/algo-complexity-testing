class Shuffle extends MainFunction {
  constructor(step, end) {
    super(step, end);
    this.timing = new Timing(this._sort);
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
}
