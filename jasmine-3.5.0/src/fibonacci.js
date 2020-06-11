class Fibonnaci {
  constructor() {
    this.timing = new Timing(this.fibonnaci, "fibonacci");
    this.functionNames = ["fibonacci"];
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
}
