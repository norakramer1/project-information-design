// set the dimensions and margins of the graph
var margin = {top: 30, right: 30, bottom: 70, left: 60},
    width = 460 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

// append the svg object to the body of the page
var svg = d3.select("#my_dataviz")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");




// Parse the Data

// COUNT OCCURENCES OF NUMBERS: https://stackoverflow.com/questions/5667888/counting-the-occurrences-frequency-of-array-elements
export function makeBars(data) {
const occurrences = data.reduce(function (acc, curr) {
  return acc[curr] ? ++acc[curr] : acc[curr] = 1, acc
  
}, []);

console.log(occurrences)

// X axis
var x = d3.scaleBand()
  .range([ 0, width ])
  .domain(occurrences)
  .padding(0.2);
svg.append("g")
  .attr("transform", "translate(0," + height + ")")
  .call(d3.axisBottom(x))
  .selectAll("text")
    .attr("transform", "translate(-10,0)rotate(-45)")
    .style("text-anchor", "end");

// Add Y axis
var y = d3.scaleLinear(occurrences)
  .domain([0, 50])
  .range([ height, 0]);
svg.append("g")
  .call(d3.axisLeft(y));

// Bars
svg.selectAll("mybar")
  .data(occurrences)
  .enter()
  .append("rect")
     .attr("x", function(d) { return x(d); })
    .attr("y", function(d) { return y(d); })
    .attr("width", x.bandwidth())
    .attr("height", function(d) { return height - y(d); })
    .attr("fill", "#01689b")

}