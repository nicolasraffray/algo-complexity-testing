class Timing {
  constructor(callback) {
    this.startTime = 0;
    this.times = [];
    this.function = callback;
    this.dataStore = [];
  }

  _runFunction = (inputLength, input, theFunction, dataStore) => {
    let start = performance.now();
    theFunction(input);
    let end = performance.now();
    this._setTime(inputLength, start, end, dataStore);
  };

  _setTime = (iteration, start, end, dataStore) => {
    dataStore.push({ input: iteration, time: end - start });
  };

  iterateFunction = (step, endPoint) => {
    if (typeof this.function === "function") {
      this._loopFromStartToFinish(step, endPoint, this.function, this.times);
    } else {
      for (let func in this.function) {
        this.dataStore = [];
        this._loopFromStartToFinish(
          step,
          endPoint,
          this.function[func],
          this.dataStore
        );
        this.times.push(this.dataStore);
      }
    }
    console.log(JSON.stringify(this.function), this.times);
  };

  _loopFromStartToFinish = (step, endPoint, theFunction, dataStore) => {
    for (let i = 0; i <= endPoint; i += step) {
      var input = [...Array(i).keys()];
      input = this._shuffle(input);
      this._runFunction(i, input, theFunction, dataStore);
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
