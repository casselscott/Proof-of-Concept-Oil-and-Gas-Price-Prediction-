var bar1 = function(){
var margin = {top: 20, right: 20, bottom: 70, left: 50},
    width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

// Parse the date / time
var	parseDate = d3.time.format("%Y-%m").parse;

var x = d3.scale.ordinal().rangeRoundBands([0, width], .05);
//var x = d3.scale.linear().range([0, width]);
var y = d3.scale.linear().range([height, 0]);

var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom")
    //.ticks(10)
	;

var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left")
    .ticks(10);

var svg = d3.select("body").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", 
          "translate(" + margin.left + "," + margin.top + ")");
var data =  [ 
	{ "Date":"1990", "Value":"24.36"},  
	{ "Date":"1991", "Value":"28.1"},  
	{ "Date":"1992", "Value":"36.05"},  
	{ "Date":"1993", "Value":"50.64"},  
	{ "Date":"1994", "Value":"61.08"},  
	{ "Date":"1995", "Value":"69.08"},  
	{ "Date":"1996", "Value":"94.45"},  
	{ "Date":"1997", "Value":"61.06"},  
	{ "Date":"1998", "Value":"77.45"},  
	{ "Date":"1999", "Value":"107.46"},  
	{ "Date":"2000", "Value":"109.45"},  
	{ "Date":"2002", "Value":"24.36"},  
	{ "Date":"2003", "Value":"28.1"},  
	{ "Date":"2004", "Value":"36.05"},  
	{ "Date":"2005", "Value":"50.64"},  
	{ "Date":"2006", "Value":"61.08"},  
	{ "Date":"2007", "Value":"69.08"},  
	{ "Date":"2008", "Value":"94.45"},  
	{ "Date":"2009", "Value":"61.06"},  
	{ "Date":"2010", "Value":"77.45"},  
	{ "Date":"2011", "Value":"107.46"},  
	{ "Date":"2012", "Value":"109.45"},  
	{ "Date":"2013", "Value":"105.87"},  
	{ "Date":"2014", "Value":"96.29"},  
	{ "Date":"2015", "Value":"52.58"}
];
// Get the data
//d3.tsv("data/data.tsv", function(error, data) { //tsv file
//d3.csv("data/data.csv", function(error, data) { //csv file
//.json("data/data.json", function(error, data) { //json file

	/* data parameter is array of object.
		if data is same from tsv, csv, json file,
		using any file is no relation
	*/  
    data.forEach(function(d) {
        d.date = d.Date;
        d.value = +d.Value;
    });
	//console.log(data);
  x.domain(data.map(function(d) { return d.date; }));  
  y.domain([0, d3.max(data, function(d) { return d.value; })]);

    svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis)
	  .append("text")
	  .attr("transform", "rotate(0)" )
      .attr("dx", "45em")
      .attr("dy", "3.5em")
      .style("text-anchor", "end")
	  .text("YEAR")
	  ;
	  svg.append("text")
      .attr("x", width/2+50)
      .attr("y", height+60)
      .style("text-anchor", "end")
	  .text("Bar Chart using D3JS")
	  ;

  svg.append("g")
      .attr("class", "y axis")
      .call(yAxis)
	  .append("text")
      .attr("transform", "rotate(-90)")
      .attr("dx", "-20em")
      .attr("dy", "-3em")
      .style("text-anchor", "end")
      .text("Value ($)");
	  
  svg.selectAll(".bar")
      .data(data)
      .enter().append("rect")
      .attr("class", "bar")
      .attr("x", function(d) { return x(d.date); })
      .attr("width", x.rangeBand())
      .attr("y", function(d) { return y(d.value); })
      .attr("height", function(d) { return height - y(d.value); })
      .style({fill: randomColor})
	  ;
	  
	function type(d) {
	  d.frequency = +d.frequency;
	  return d;
	}
}