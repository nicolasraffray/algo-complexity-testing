class Fibonnaci {
  constructor() {
    this.timing = new Timing([this.fibonnaci, this.fib_recur], "fibonacci");
    this.functionNames = ["fibonacci while loop", "fib for loop"];
  }

  fibonnaci = (number) => {
    var f1 = 0;
    var f2 = 1;
    var fnth = 0;
    var v = [];
    while (fnth < number) {
      fnth = f1 + f2;
      v.push(fnth);
      f1 = f2;
      f2 = fnth;
    }
  };

  fib_recur = (num) => {
    // return num;
    let arr = [0, 1];
    for (let i = 2; i < num + 1; i++) {
      arr.push(arr[i - 2] + arr[i - 1]);
    }
  };
}
