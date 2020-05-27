class Timing {
  constructor(callback) {
    this.startTime = 0;
    this.times = [];
    this.function = callback;
  }

  _runFunction = (inputLength, input) => {
    let start = performance.now();
    this.function(input);
    let end = performance.now();
    this._setTime(inputLength, start, end);
  };

  _setTime = (iteration, start, end) => {
    this.times.push({ input: iteration, time: end - start });
  };

  iterateFunction = (step, endPoint) => {
    for (let i = 0; i <= endPoint; i += step) {
      var input = [...Array(i).keys()];
      input = this._shuffle(input);
      this._runFunction(i, input);
    }
  };

  _shuffle = (array) => {
    if (this.function === sort) {
      console.log("in the shuffle");
      for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
    }
    return array;
  };
}

const shuffle = (array) => {
  if (this.function === sort) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
};
