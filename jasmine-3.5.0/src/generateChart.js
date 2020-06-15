let functions = ["sort", "reverse", "shuffle", "fibonacci"];
let chart = functions.map((func) => {
  return new MakeChart(func, 100, 10000);
});
console.log(chart);
chart.forEach((chart) => {
  return chart.generate();
});
