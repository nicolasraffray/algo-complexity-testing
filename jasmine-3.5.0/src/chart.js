class MakeChart {
  constructor(name) {
    this.chartName = name;
    this.functions = {
      sort: new Sort(100, 10000),
      reverse: new Reverse(100, 10000),
    };
  }

  _generateOptions = () => {
    let options = {
      scales: {
        xAxes: [
          {
            scaleLabel: {
              display: true,
              labelString: "Elements in Array",
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

  generate = () => {
    this.functions[this.chartName].run();
    var ctx = document.getElementById(this.chartName).getContext("2d");
    var myChart = new Chart(ctx, {
      type: "line",
      data: {
        labels: this.functions[this.chartName].labels,
        datasets: [
          {
            label: this.chartName,
            data: this.functions[this.chartName].dataset,
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
          },
        ],
      },
      options: this._generateOptions(),
    });
  };
}
