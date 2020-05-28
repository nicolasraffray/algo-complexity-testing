class Shuffle {
  constructor() {
    this.timing = new Timing([this.theShuffle, this.jsShuffle]);
  }

  jsShuffle = (array) => {
    array.sort();
  };

  theShuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  };
}
