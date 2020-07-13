class Reverse {
  constructor() {
    this.timing = new Timing([this._reverse, this.myReverse]);
    this.functionNames = ["JavaScript Reverse", "My While Iteration Reverse"];
  }

  _reverse = (input) => {
    console.log(input);
    return input.reverse();
  };

  myReverse = (input) => {
    console.log(input);
    var result = [];
    while (input.length > 1) {
      result.push(input.pop());
    }
    return result;
  };
}
