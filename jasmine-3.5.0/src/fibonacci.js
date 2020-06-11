class Fibonnaci {
  constructor() {
    this.timing = new Timing(this.fibonnaci);
    this.functionNames = ["Fibonnaci"];
  }

  fibonnaci = (number) => {
    let n = 0;
    let f1 = 0;
    let f2 = 1;
    let fnth = 0;
    let v = [];
    while (fnth < number) {
      fnth = f1 + f2;
      v.push(fnth);
      f1 = f2;
      f2 = fnth;
    }
  };
}
