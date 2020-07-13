class Shuffle {
  constructor() {
    this.timing = new Timing([this.theShuffle, this.jsShuffle]);
    this.functionNames = ["My Shuffle", "Shuffle, Fisher-Yates"];
  }

  jsShuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  };

  theShuffle = (array) => {
    let shuffled = array
      .map((a) => ({ sort: Math.random(), value: a }))
      .sort((a, b) => a.sort - b.sort)
      .map((a) => a.value);
  };
}
