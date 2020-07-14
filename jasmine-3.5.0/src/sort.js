class Sort {
  constructor() {
    this.timing = new Timing(
      [this.sort, this.quickSort, this.mergeSort, this.selectionSort],
      "Sort"
    );
    this.functionNames = [
      "JavaScript Sort",
      "QuickSort",
      "MergeSort",
      "SelectionSort",
    ];
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

  mergeSort = (input) => {
    if (input.length < 2) return input;

    let mid = Math.floor(input.length / 2);
    let left = input.slice(0, mid);
    let right = input.slice(mid);

    const merge = (left, right) => {
      let result = [];
      let leftInd = 0,
        rightInd = 0;

      while (leftInd < left.length && rightInd < right.length) {
        if (left[leftInd] < right[rightInd]) {
          result.push(left[leftInd]);
          leftInd += 1;
        } else {
          result.push(right[rightInd]);
          rightInd += 1;
        }
      }
      return result.concat(left.slice(leftInd)).concat(right.slice(rightInd));
    };
    return merge(this.mergeSort(left), this.mergeSort(right));
  };

  selectionSort = (input) => {
    for (let i = 0; i < input.length; i++) {
      var check = input[i];

      var pointer = i - 1;
      while (pointer > 0 && check < input[pointer]) {
        input[pointer + 1] = input[pointer];
        pointer -= 1;
      }
      input[pointer + 1] = check;
    }
    console.log(input);
  };
}
