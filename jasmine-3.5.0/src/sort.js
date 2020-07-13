class Sort {
  constructor() {
    this.timing = new Timing([this.sort, this.quickSort], "Sort");
    this.functionNames = ["JavaScript Sort", "QuickSort"];
  }

  sort = (input) => {
    input.sort();
  };

  quickSort = (input) => {
    if (input.length <= 1) {
      return input;
    }

    let pivot = input[0];

    let low = [];
    let high = [];

    for (let i = 1; i < input.length; i++) {
      input[i] < pivot ? low.push(input[i]) : high.push(input[i]);
    }

    return this.quickSort(low).concat(pivot, this.quickSort(high));
  };
}
