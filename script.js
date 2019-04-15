// javascript
var dataset = [300.93,
294.08,
300.34,
291.21,
287.69,
293.35,
300.08,
290.24,
283.37,
283.46,
280.69,
285.48,
294.075,
293.9,
299.92,
301.15,
284.45,
294.09,
302.77,
301.97,
306.85,
305.02,
301.04,
291.97,
284.18,
286.48,
284.54,
276.82,
284.49];

var svgWidth = 500, svgHeight = 300, barPadding = 5;
var barWidth = (svgWidth / dataset.length);


var svg = d3.select('svg')
   .attr("width", svgWidth)
   .attr("height", svgHeight);

var barChart = svg.selectAll("rect")
   .data(dataset)
   .enter()
   .append("rect")
   .attr("y", function(d) {
        return svgHeight - d
   })
   .attr("height", function(d) {
       return d;
   })
   .attr("width", barWidth - barPadding)
   .attr("transform", function (d, i) {
       var translate = [barWidth * i, 0];
       return "translate("+ translate +")";
   });
