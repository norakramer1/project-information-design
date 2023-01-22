
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
    var colors = ["#C9D6DF", "#F7EECF", "#E3E1B2", "#F9CAC8"];
  
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
  
      
  
    
    // var yScale = d3.scale.linear()
    //   .domain([0, 600])
    //   .range([height, 0]);
      
  
      var groups = svg.selectAll("g.bars")
        .data(data)
        .enter().append("g")
        .attr("class", "bars")
        .style("fill", function(d, i) { return colors[i]; })
        .style("stroke", "#000");
      
      var rect = groups.selectAll("rect")
        .data(function(d) { return d; })
        .enter()
        .append("rect")
        .attr("x", function(d) { return xScale(d.x); })
        .attr("y", function(d) { return yScale(d.y0 + d.y); })
        .attr("height", function(d) { return yScale(d.y0) - yScale(d.y0 + d.y); })
        .attr("width", x.bandwidth())
        }