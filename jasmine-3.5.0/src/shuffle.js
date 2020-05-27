class Shuffle extends GenerateData {
  constructor(step, end) {
    super(step, end);
    this.timing = new Timing(this.shuffle);
    this.step = step;
    this.end = end;
  }

  shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  };
}
