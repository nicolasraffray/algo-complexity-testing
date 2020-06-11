class Timing {
  constructor(callback, name = null) {
    this.startTime = 0;
    this.times = [];
    this.function = callback;
    this.dataStore = [];
    this.name = name;
  }

  iterateFunction = (step, endPoint) => {
    if (typeof this.function === "function") {
      this._loopFromStartToFinish(
        step,
        endPoint,
        this.function,
        this.dataStore
      );
      this.times.push(this.dataStore);
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
  };

  _runFunction = (inputLength, input, theFunction, dataStore) => {
    let start = performance.now();
    theFunction(input);
    let end = performance.now();
    this._setTime(inputLength, start, end, dataStore);
  };

  _setTime = (iteration, start, end, dataStore) => {
    dataStore.push({ input: iteration, time: end - start });
  };

  _loopFromStartToFinish = (step, endPoint, theFunction, dataStore) => {
    if (this.name !== "fibonacci") {
      for (let i = 0; i <= endPoint; i += step) {
        var input = [...Array(i).keys()];
        input = this._shuffle(input);
        this._runFunction(i, input, theFunction, dataStore);
      }
    } else {
      for (let i = 0; i <= endPoint; i += step) {
        this._runFunction(i, i, theFunction, dataStore);
      }
    }
  };

  _shuffle = (array) => {
    if (this.function === sort) {
      for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
    }
    return array;
  };
}
