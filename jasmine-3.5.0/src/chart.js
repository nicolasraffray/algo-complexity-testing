class MakeChart {
  constructor(name, step, endPoint) {
    this.chartName = name;
    this.step = step;
    this.endPoint = endPoint;
    this.functions = {
      sort: new Sort(),
      reverse: new Reverse(),
      shuffle: new Shuffle(),
    };
  }

  _generateOptions = () => {
    let options = {
      scales: {
        xAxes: [
          {
            scaleLabel: {
              display: true,
              labelString: "Number of Elements in Array",
            },
          },
        ],
        yAxes: [
          {
            scaleLabel: {
              display: true,
              labelString: "Milliseconds",
            },
          },
        ],
      },
    };
    return options;
  };

  runFunctions = () => {
    this.functions[this.chartName].timing.iterateFunction(
      this.step,
      this.endPoint
    );
  };

  _generateLabels = () => {
    this.runFunctions();
    let labels = [];
    this.functions[this.chartName].timing.times[0].forEach((iteration) => {
      labels.push(iteration.input);
    });
    return labels;
  };

  generateData = () => {
    let datasets = [];
    this.functions[this.chartName].timing.times.forEach((set) => {
      let data = [];
      set.forEach((iteration) => {
        data.push(iteration.time);
      });
      datasets.push(data);
    });
    return datasets;
  };

  generateDataSets = () => {
    let data = this.generateData();
    let datasets = [];
    console.log(this.chartName, data);
    for (let val in data) {
      console.log(this.chartName, data[val]);
      datasets.push({
        label: this.chartName,
        data: data[val],
        fill: false,
        backgroundColor: "#fbbd08",
        borderColor: "#fbbd08",
        borderWidth: 2,
        pointBackgroundColor: "#fbbd08",
        pointBorderWidth: 0.5,
        pointStyle: "rectRounded",
        pointRadius: 4,
        pointHitRadius: 5,
        pointHoverRadius: 5,
        hoverBackgroundColor: "#FFFFFF",
      });
    }
    return datasets;
  };

  generate = () => {
    var ctx = document.getElementById(this.chartName).getContext("2d");
    var myChart = new Chart(ctx, {
      type: "line",
      data: {
        labels: this._generateLabels(),
        datasets: this.generateDataSets(),
      },
      options: this._generateOptions(),
    });
  };
}
