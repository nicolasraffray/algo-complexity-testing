class Sort {
  constructor() {
    this.timing = new Timing(this.sort);
  }

  sort = (input) => {
    input.sort();
  };
}
