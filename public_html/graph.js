//alert('hello');

$("#drops").click(function () {
    drop();
});
$("#cubism").click(function () {
    cube();
});
$("#line").click(function () {
    line();
});
$("#scatter").click(function () {
    scatter();
});
$("#bar").click(function () {
    bar();
});

//bar();

//declearing variable globaly so if we change there values they can be accesed in whole script
           var _fir;
           var _sec;
           var _thi;
           var _fou;
           var _fiv;
           var arr= new Array(200);

// assigning value to global varaibles
var assigning_values = function (f,a,b,c,d,e)
{
    arr = f;    // awarding the prices of previous years
    // awarding the prices of new year into array so we can plot this array on charts easily.
    arr.push(a);    
    arr.push(b);
    arr.push(c);
    arr.push(d);
    arr.push(e);
    //alert(arr);
}
// funtion to draw EventDrops chart
var drop = function () {

    //making svg, its like dedicated for chart
    d3.select("svg").remove();   // cleaning the already existing chart on svg 
    
//  //where you want the new element to do
//var target = document.getElementById("container"); 
//// create the new element
//var element = document.createElement("h4");
//element.appendChild(document.createTextNode("An EventDrops chart showing historical and predicted prices for Oil and Gas from 2002-2020"));
//// append
//target.appendChild(element);
    
    
    var eventData = [], dates = [];     //variables
    var names = ["100","90","80","70","60","50","40","30","20","10"];  // text shown on left side
    var endX, startX;       //variables for X axis

    // assigning data to variable
 var data =  [ 
	{ "Date":"2003", "Value":arr[1]},  
	{ "Date":"2004", "Value":arr[2]},  
	{ "Date":"2005", "Value":arr[3]},  
	{ "Date":"2006", "Value":arr[4]},
    { "Date":"2007", "Value":arr[5]},  
	{ "Date":"2008", "Value":arr[6]},  
	{ "Date":"2009", "Value":arr[7]},  
	{ "Date":"2010", "Value":arr[8]},
    { "Date":"2011", "Value":arr[9]},  
	{ "Date":"2012", "Value":arr[10]},  
	{ "Date":"2013", "Value":arr[11]},  
	{ "Date":"2014", "Value":arr[12]},
    { "Date":"2015", "Value":arr[13]},  
	{ "Date":"2016", "Value":arr[14]},  
	{ "Date":"2017", "Value":arr[15]},  
	{ "Date":"2018", "Value":arr[16]},
    { "Date":"2019", "Value":arr[17]},  
	{ "Date":"2020", "Value":arr[18]}
];
    
//asigning all dates(years) to varialbe to show in y axis 
    data.forEach(function (d) {
		dates.push(d.Date);
	});
    
	startX = d3.min(data, function(d) { return d.Date;});      // minimum value in years
	endX = d3.max(data, function(d) { return d.Date;});        // maximum value in years
	
	function createEvent (name) {
		var event = {
			name: name,
			dates: []
		};
        
		for (var j = 0; j < dates.length; j++) {
			//console.log(Math.random());
			if(Math.random()>0.3){
				var time = new Date(dates[j]);
				event.dates.push(time);
			}
		}
		return event;
	}

	for (var i = 0; i < names.length; i++) {
		eventData.push(createEvent(names[i]));
	}


	
    var color = d3.scale.category20();
    // create chart function
    
	var eventDropsChart = d3.chart.eventDrops()
		.eventLineColor(function (value, index) {
			return color(index);
		})
		.start(new Date(startX))
		.end(new Date(endX));
//		console.log(eventData);
	// bind data with DOM
//	var body = document.getElementsByTagName('')[0];
	var element = d3.select(document.getElementById("container")).append('div').datum(eventData);

   
	// draw the chart
	eventDropsChart(element);
};

var line = function () {   
    d3.select("svg").remove();  // cleaning already existing charts on SVG
    //Assigning all  data
    
 var data =  [ 
	{ "Date":"2002", "Value":arr[1]},  
	{ "Date":"2003", "Value":arr[1]},  
	{ "Date":"2004", "Value":arr[2]},  
	{ "Date":"2005", "Value":arr[3]},  
	{ "Date":"2006", "Value":arr[4]},
    { "Date":"2007", "Value":arr[5]},  
	{ "Date":"2008", "Value":arr[6]},  
	{ "Date":"2009", "Value":arr[7]},  
	{ "Date":"2010", "Value":arr[8]},
    { "Date":"2011", "Value":arr[9]},  
	{ "Date":"2012", "Value":arr[10]},  
	{ "Date":"2013", "Value":arr[11]},  
	{ "Date":"2014", "Value":arr[12]},
    { "Date":"2015", "Value":arr[13]},  
	{ "Date":"2016", "Value":arr[14]},  
	{ "Date":"2017", "Value":arr[15]},  
	{ "Date":"2018", "Value":arr[16]},
    { "Date":"2019", "Value":arr[17]},  
	{ "Date":"2020", "Value":arr[18]}
];
    
var width = 950;    // width of svg
var height = 480;   //height of svg

    var svg = dimple.newSvg(document.getElementById("container"), width, height);   //selecting item, where to add the svg
	data.forEach(function(d) {
	  d.year = +d.Date;
	  d.price = +d.Value;
	});
	
  // Create and Position a Chart
  var myChart = new dimple.chart(svg, data);
  myChart.setBounds(120, 70, width-100, height-150);
  var x = myChart.addCategoryAxis("x", "year");
  myChart.addMeasureAxis("y", "price");

  // Order the x axis by date
  x.addOrderRule("Year");

  // Min price will be green, middle price yellow and max red
  myChart.addColorAxis("Value", ["green", "yellow", "red"]);

  // Add a thick line with markers
  var lines = myChart.addSeries(null, dimple.plot.line); 
  lines.lineWeight = 3;
  lines.lineMarkers = true;
    
  // Draw the chart
  myChart.draw();

      svg.append("text")
      .attr("x",width-100)
      .attr("y", 35)
      .style("text-anchor", "end")
      .attr("class", "label")
      .style("font-size","16px")
	  .text("A Line chart showing historical and predicted prices for Oil and Gas from 2002-2020");

    
    // added new Text :) yahoooooooooooooooo its working 
  svg.append("text")
      .attr("x",0)
      .style("text-anchor","start")
      .attr("class", "label")
      .style("font-size","18px")
      .attr("y", 252)
	  .text("Prices($)");
};

var cube = function () {
     // cleaning already existing charts on SVG
    d3.select("svg").remove();
var margin = {top: 100, right: 20, bottom: 30, left: 100},
    width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

var parseDate = d3.time.format("%d-%b-%y").parse;

var x = d3.scale.linear()
    .range([0, width]);

var y = d3.scale.linear()
    .range([height, 0]);

var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom")
	.tickFormat(d3.format("d"));

var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left");

var area = d3.svg.area()
    .x(function(d) { return x(d.date); })
    .y0(height)
    .y1(function(d) { return y(d.close); });

var svg = d3.select(document.getElementById("container")).append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom+30)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

	var data =  [
	{ "Date":"2002", "value":arr[1]},  
	{ "Date":"2003", "value":arr[1]},  
	{ "Date":"2004", "value":arr[2]},  
	{ "Date":"2005", "value":arr[3]},  
	{ "Date":"2006", "value":arr[4]},
    { "Date":"2007", "value":arr[5]},  
	{ "Date":"2008", "value":arr[6]},  
	{ "Date":"2009", "value":arr[7]},  
	{ "Date":"2010", "value":arr[8]},
    { "Date":"2011", "value":arr[9]},  
	{ "Date":"2012", "value":arr[10]},  
	{ "Date":"2013", "value":arr[11]},  
	{ "Date":"2014", "value":arr[12]},
    { "Date":"2015", "value":arr[13]},  
	{ "Date":"2016", "value":arr[14]},  
	{ "Date":"2017", "value":arr[15]},  
	{ "Date":"2018", "value":arr[16]},
    { "Date":"2019", "value":arr[17]},  
	{ "Date":"2020", "value":arr[18]}
];
 
//d3.tsv("data.tsv", function(error, data) {
//  if (error) throw error;

  data.forEach(function(d) {
    d.date = d.Date;
    d.close = +d.value;
  });

  x.domain(d3.extent(data, function(d) { return d.date; }));
  y.domain([0, d3.max(data, function(d) { return d.close; })]);
  
	   svg.append("text")
      .attr("x",width-100)
      .attr("y", -60)
      .style("text-anchor", "end")
      .attr("class", "label")
      .style("font-size","16px")
	  .text("A chart showing historical and predicted prices for Oil and Gas from 2002-2020");

	
	svg.append("linearGradient")
      .attr("id", "areaGradient")
      .attr("gradientUnits", "userSpaceOnUse")
      .attr("x1", '0%').attr("y1", '0%')
      .attr("x2", '0%').attr("y2", '100%')
    .selectAll("stop")
      .data([
        {offset: "0%", color: "steelblue"},
        {offset: "50%", color: "gray"},
        {offset: "100%", color: "red"}
      ])
    .enter().append("stop")
      .attr("offset", function(d) { return d.offset; })
      .attr("stop-color", function(d) { return d.color; });

	svg.append("path")
      .datum(data)
      .attr("class", "area")
      .attr("d", area);
	  
  svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis)
	.append("text")
      .attr("class", "label")
      .attr("x", width)
      .attr("y", 40)
      .style("text-anchor", "end")
      .text("YEAR");
	  
  svg.append("g")
      .attr("class", "y axis")
      .call(yAxis)
    .append("text")
  .style("font-size","15px")
      .attr("transform", "rotate(-90)")
      .attr("y", -3)
    .attr("dx","-10em")
      .attr("dy", "-3em")
      .style("text-anchor", "end")
      .text("Price ($)");
	  
    };

var randomColor = (function(){
  var golden_ratio_conjugate = 0.618033988749895;
  var h = Math.random();

  var hslToRgb = function (h, s, l){
      var r, g, b;

      if(s == 0){
          r = g = b = l; // achromatic
      }else{
          function hue2rgb(p, q, t){
              if(t < 0) t += 1;
              if(t > 1) t -= 1;
              if(t < 1/6) return p + (q - p) * 6 * t;
              if(t < 1/2) return q;
              if(t < 2/3) return p + (q - p) * (2/3 - t) * 6;
              return p;
          }

          var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
          var p = 2 * l - q;
          r = hue2rgb(p, q, h + 1/3);
          g = hue2rgb(p, q, h);
          b = hue2rgb(p, q, h - 1/3);
      }

      return '#'+Math.round(r * 255).toString(16)+Math.round(g * 255).toString(16)+Math.round(b * 255).toString(16);
  };
  
  return function(){
    h += golden_ratio_conjugate;
    h %= 1;
    return hslToRgb(h, 0.5, 0.60);
  };
})();

var bar = function () {
 d3.select("svg").remove();
    var data =  [
	{ "Date":"2002", "Value":arr[1]},  
	{ "Date":"2003", "Value":arr[1]},  
	{ "Date":"2004", "Value":arr[2]},  
	{ "Date":"2005", "Value":arr[3]},  
	{ "Date":"2006", "Value":arr[4]},
    { "Date":"2007", "Value":arr[5]},  
	{ "Date":"2008", "Value":arr[6]},  
	{ "Date":"2009", "Value":arr[7]},  
	{ "Date":"2010", "Value":arr[8]},
    { "Date":"2011", "Value":arr[9]},  
	{ "Date":"2012", "Value":arr[10]},  
	{ "Date":"2013", "Value":arr[11]},  
	{ "Date":"2014", "Value":arr[12]},
    { "Date":"2015", "Value":arr[13]},  
	{ "Date":"2016", "Value":arr[14]},  
	{ "Date":"2017", "Value":arr[15]},  
	{ "Date":"2018", "Value":arr[16]},
    { "Date":"2019", "Value":arr[17]},  
	{ "Date":"2020", "Value":arr[18]}
];
    var margin = {top: 100, right: 20, bottom: 70, left: 100},
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

var svg = d3.select(document.getElementById("container")).append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", 
          "translate(" + margin.left + "," + margin.top + ")");

    
    
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

     svg.append("text")
      .attr("x",width-100)
      .attr("y", -50)
      .style("text-anchor", "end")
      .attr("class", "label")
      .style("font-size","16px")
	  .text("A Bar chart showing historical and predicted prices for Oil and Gas from 2003-2020");

    svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis)
	  .append("text")
	  .attr("transform", "rotate(0)" )
      .attr("dx", "45em")
      .attr("dy", "3.5em")
      .style("font-size","11px")
      .style("text-anchor", "end")
	  .text("YEAR");
	  
  svg.append("g")
      .attr("class", "y axis")
      .call(yAxis)
	  .append("text")
      .attr("transform", "rotate(-90)")
      .attr("dx", "-12em")
      .style("font-size","15px")
      .attr("class", "label")
      .attr("dy", "-3em")
      .style("text-anchor", "end")
      .text("Price ($)");
	  
  svg.selectAll(".bar")
      .data(data)
      .enter().append("rect")
      .attr("class", "bar")
      .attr("x", function(d) { return x(d.date); })
      .attr("width", x.rangeBand())
      .attr("y", function(d) { return y(d.value); })
      .attr("height", function(d) { return height - y(d.value); })
      .style({fill: randomColor});
    
    function type(d) {
	  d.frequency = +d.frequency;
	  return d;
	}

};

var scatter = function () {
    d3.select("svg").remove();
      var data =  [
	{ "Date":"2003", "Value":arr[1],"group":"1"},  
	{ "Date":"2004", "Value":arr[2],"group":"1"},  
	{ "Date":"2005", "Value":arr[3],"group":"1"},  
	{ "Date":"2006", "Value":arr[4],"group":"1"},
    { "Date":"2007", "Value":arr[5],"group":"1"},  
	{ "Date":"2008", "Value":arr[6],"group":"1"},  
	{ "Date":"2009", "Value":arr[7],"group":"2"},  
	{ "Date":"2010", "Value":arr[8],"group":"2"},
    { "Date":"2011", "Value":arr[9],"group":"2"},  
	{ "Date":"2012", "Value":arr[10],"group":"2"},  
	{ "Date":"2013", "Value":arr[11],"group":"2"},  
	{ "Date":"2014", "Value":arr[12],"group":"2"},
    { "Date":"2015", "Value":arr[13],"group":"2"},  
	{ "Date":"2016", "Value":arr[14],"group":"3"},  
	{ "Date":"2017", "Value":arr[15],"group":"3"},  
	{ "Date":"2018", "Value":arr[16],"group":"3"},
    { "Date":"2019", "Value":arr[17],"group":"3"},  
	{ "Date":"2020", "Value":arr[18],"group":"3"}
];

var margin = {top: 100, right: 20, bottom: 30, left: 80},
    width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

/* 
 * value accessor - returns the value to encode for a given data object.
 * scale - maps value to a visual display encoding, such as a pixel position.
 * map function - maps from data value to display value
 * axis - sets up axis
 */ 

// setup x 
var xValue = function(d) { return d.Calories;}, // data -> value
    xScale = d3.scale.linear().range([10, width]), // value -> display
    xMap = function(d) { return xScale(xValue(d));}, // data -> display
    xAxis = d3.svg.axis().scale(xScale).orient("bottom");

// setup y
var yValue = function(d) { return d["Protein (g)"];}, // data -> value
    yScale = d3.scale.linear().range([height, 10]), // value -> display
    yMap = function(d) { return yScale(yValue(d));}, // data -> display
    yAxis = d3.svg.axis().scale(yScale).orient("left");

// setup fill color
var cValue = function(d) { return d.group;},
    color = d3.scale.category10();

// add the graph canvas to the body of the webpage
var svg = d3.select(document.getElementById("container")).append("svg")
    .attr("width", width + margin.left + margin.right+70)
    .attr("height", 100+height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

// add the tooltip area to the webpage
var tooltip = d3.select(document.getElementById("container")).append("div")
    .attr("class", "tooltip")
    .style("opacity", 0);

// load data
//d3.csv("data/data_scatter.csv", function(error, data) {
//d3.csv("data/data.csv", function(error, data) {
 //  change string (from CSV) into number format
  console.log(data);
  data.forEach(function(d) {
    d.Calories = +d.Date;
    d["Protein (g)"] = +d.Value;
  });
   //console.log(data);
	/*data.forEach(function(d) {
    d.Calories = +d.Calories;
    d["Protein (g)"] = +d["Protein (g)"];
  });*/
  // don't want dots overlapping axis, so add in buffer to data domain
  xScale.domain([d3.min(data, xValue)-1, d3.max(data, xValue)+1]);
  yScale.domain([d3.min(data, yValue)-1, d3.max(data, yValue)+1]);

  // x-axis
  svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis)
    .append("text")
      .attr("class", "label")
      .attr("x", (width/2))
      .attr("y", 40)
      .style("text-anchor", "end")
      .text("YEAR");

  // y-axis
  svg.append("g")
      .attr("class", "y axis")
      .call(yAxis)
    .append("text")
      .attr("class", "label")
      .attr("transform", "rotate(-90)")
      .attr("y", -40)
	  .attr("x", -200)
      .attr("dy", ".71em")
      .style("text-anchor", "end")
      .style("font-size","15px")
      .text("PRICE($)");

  // draw dots
  svg.selectAll(".dot")
      .data(data)
    .enter().append("circle")
      .attr("class", "dot")
      .attr("r", 3.5)
      .attr("cx", xMap)
      .attr("cy", yMap)
      .style("fill", function(d) { return color(cValue(d));}) 
      .on("mouseover", function(d) {
          tooltip.transition()
               .duration(200)
               .style("opacity", .9);
          tooltip.html("(" + xValue(d) 
	        + ", " + yValue(d) + ")")
               .style("left", (d3.event.pageX + 5) + "px")
               .style("top", (d3.event.pageY - 28) + "px");
      })
      .on("mouseout", function(d) {
          tooltip.transition()
               .duration(500)
               .style("opacity", 0);
      });

//  // draw legend
//  var legend = svg.selectAll(".legend")
//      .data(color.domain())
//      .enter().append("g")
//      .attr("class", "legend")
//      .attr("transform", function(d, i) { return "translate(0," + i * 20 + ")"; });
//
//  // draw legend colored rectangles
//  legend.append("rect")
//      .attr("x", width - 18)
//      .attr("width", 18)
//      .attr("height", 18)
//      .style("fill", color);
//
//  // draw legend text
//  legend.append("text")
//      .attr("x", width - 24)
//      .attr("y", 9)
//      .attr("dy", ".35em")
//      .style("text-anchor", "end")
//      .text(function(d) { return 'group'+d;});
    
     svg.append("text")
      .attr("x",width-100)
      .attr("y", -50)
      .style("text-anchor", "end")
      .attr("class", "label")
      .style("font-size","16px")
	  .text("A Scattered plot showing historical and predicted prices for Oil and Gas from 2002-2020");
};