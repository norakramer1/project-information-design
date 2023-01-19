
// Set margins
const margin = {
  top: 10,
  right: 40,
  bottom: 50,
  left: 80
}

// Set dimensions for graph
let clientWidth = window.innerWidth;
const width = clientWidth - margin.left - margin.right;
const height = 400 - margin.top - margin.bottom;

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

  var years = d3.map(data, function(d){return(d.year)})

  // Add X axis
  var x = d3.scaleBand()
      .domain(years)
      .range([0, width])
      .padding([0.2])
  svg.append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x).tickSizeOuter(0));

  // Add Y axis
  var y = d3.scaleLinear()
    .domain([0, 60])
    .range([ height, 0 ]);
  svg.append("g")
    .call(d3.axisLeft(y));

let groups = ['online', 'offline']
  // color palette = one color per subgroup
  var color = d3.scaleOrdinal()
    .domain(groups)
    .range(['#e41a1c','#377eb8'])

  //stack the data? --> stack per subgroup
  var stackedData = d3.stack()
    .keys(groups)
     (data)

  // Show the bars
  svg.append("g")
    .selectAll("g")
    // Enter in the stack data = loop key per key = group per group
    .data(stackedData)
    .enter().append("g")
      .attr("fill", function(d) { return color(d.key); })
      .selectAll("rect")
      // enter a second time = loop subgroup per subgroup to add all rectangles
      .data(function(d) { return d; })
      .enter().append("rect")
        .attr("x", function(d) { return x(d.online); })
        .attr("y", function(d) { return y(d.offine); })
        .attr("height", function(d) { return x(d.online); })
        .attr("width",x.bandwidth())
      }