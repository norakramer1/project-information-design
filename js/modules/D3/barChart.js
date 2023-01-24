// d3.js tutorial from: https://www.youtube.com/watch?v=iEV8ZdTd2rg
// Set margins
const margin = {
  top: 10,
  right: 40,
  bottom: 50,
  left: 80
}

// Set dimensions for graph
//let clientWidth = window.innerWidth;
const width = 450 - margin.left - margin.right;
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

  // find all years
  let years = data.map(function (d) {
    return d.year
  });

  // find all keys that are not year so online/ offline
  let state = d3.keys(data[0])
    .filter(function (key) {
      return key !== "year";
    });


  data.forEach(function (d) {
    d.total = state.map(function (years) {
      return {
        "year": years,
        "totalCount": d[years]
      }
    });

    d.allTotal = d3.sum(d.total, function (d) {
      return d.totalCount;
    });
  });

  let x = d3.scale.ordinal()
    .domain(years)
    .rangeRoundBands([0, width], 0.1);


  let y = d3.scale.linear()
    .domain([0, d3.max(data, function (d) {
      return d.allTotal;
    })])
    .range([height, 0]);

  let color = d3.scale.ordinal()
    .domain(state)
    .range(["#01689b", "#9ccde5"]);

  let xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom");

  let yAxis = d3.svg.axis()
    .scale(y)
    .orient("left")



  let svgViewport = d3.select("#visualization").append("svg")
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


  let layers = state.map(function (stat) {
    return data.map(function (d) {
      return {
        "x": x(d.year),
        "y": d[stat],
        "stat": stat
      };
    });
  });

  let stack = d3.layout.stack();

  stack(layers);

  let svgLayer = svgViewport.selectAll(".layer")
    .data(layers)
    .enter()
    .append("g")
    .attr("class", "layer");



  let rect = svgLayer.selectAll("rect")
    .data(function (d) {
      return d;
    })
    .enter()
    .append("rect")
    .attr("x", function (d) {
      return d.x
    })
    .attr("y", function (d) {
      return y(d.y + d.y0);
    })
    .attr("width", x.rangeBand())
    .attr("height", function (d, i) {
      return height - y(d.y);
    })
    .attr("fill", function (d, i) {
      return color(d.stat);
    })

  d3.select("body")
    .selectAll("rect")
    .on("mouseover touchstart", (e, d) =>
      d3
      .select("#tooltip")
      .transition()
      .duration(175)
      .style("opacity", 1)
      .text('tooltip')
    )

    .on("mousemove", (e) =>
      d3
      .select("#tooltip")
      .style("left", e.pageX + 15 + "px")
      .style("top", e.pageY + 15 + "px")
    )
    //Als de muis weer buiten de <circle> beweegt, dan verbergen
    //we de tooltip <div> weer
    .on("mouseout", e => d3.select("#tooltip").style("opacity", 0));

  //Als je ergens buiten de grafiek tapt op een touchscreen
  //verbergen we ook de tooltip
  d3.select("body").on("touchend", e => d3.select("#tooltip").style("opacity", 0));


}