let functions = ["sort", "reverse", "shuffle", "fibonacci"];
let chart = functions.map((func) => {
  return new MakeChart(func, 100, 10000);
});
chart.forEach((chart) => {
  return chart.generate();
});
