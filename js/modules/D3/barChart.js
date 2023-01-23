// https://www.youtube.com/watch?v=iEV8ZdTd2rg
// Set margins
const margin = {
  top: 10,
  right: 40,
  bottom: 50,
  left: 80
}

// Set dimensions for graph
//let clientWidth = window.innerWidth;
const width = 400 - margin.left - margin.right;
const height = 200 - margin.top - margin.bottom;

// append the svg object to the body of the page
var svg = d3.select("#my_dataviz")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");


export function stackedBars(data) {
  console.log(data)


let years = data.map(function(d) { return d.year});

let state = d3.keys(data[0])
              .filter(function(key) {return key !== "year"; });

      

data.forEach(function(d) {
  d.total = state.map(function(years) {
    return { "year": years,
              "totalCount": d[years]}
  });

  d.allTotal = d3.sum(d.total, function(d) { return d.totalCount; });
});  

var x = d3.scale.ordinal()
        .domain(years)
        .rangeRoundBands([0, width], 0.1);

      
var y = d3.scale.linear()
        .domain([0, d3.max(data, function(d) {return d.allTotal;})])
        .range([height, 0]);

var color = d3.scale.ordinal()
            .domain(state)
            .range(["#01689b", "#9ccde5"]);

var xAxis = d3.svg.axis()
            .scale(x)
            .orient("bottom");

var yAxis = d3.svg.axis()
            .scale(y)
            .orient("left")

            

var svgViewport = d3.select("#visualization").append("svg")
                  .attr("width", width + margin.left + margin.right)
                  .attr("height", height + margin.top + margin.bottom)
                  .append("g")
                  .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

svgViewport.append("g")
           .attr("class", "x-axis")
           .attr("transform", "translate(0," + height + ")")
           .call(xAxis);

svgViewport.append("g")
           .attr("class", "y-axis")
           .call(yAxis);


var layers = state.map(function(stat) {
            return data.map(function(d) {
              return {"x": x(d.year), "y": d[stat], "stat":stat};
            });
});

var stack = d3.layout.stack();

stack(layers);

var svgLayer = svgViewport.selectAll(".layer")
              .data(layers)
              .enter()
              .append("g")
                .attr("class", "layer");



var rect = svgLayer.selectAll("rect")
            .data(function(d) {return d;})
            .enter()
            .append("rect")
            .attr("x", function(d) { return d.x })
            .attr("y", function(d) { return y(d.y + d.y0); })
            .attr("width", x.rangeBand())
            .attr("height", function(d, i) { return height - y(d.y); })
            .attr("fill", function(d, i) { return color(d.stat); });

  
      }


