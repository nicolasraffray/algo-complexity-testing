class Sort {
  constructor() {
    this.timing = new Timing(this.sort);
    this.functionNames = ["JavaScript Sort"];
  }

  sort = (input) => {
    input.sort();
  };
}
