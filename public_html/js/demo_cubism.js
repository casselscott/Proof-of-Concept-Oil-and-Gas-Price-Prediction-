var context = cubism.context()
		//.serverDelay(new Date(2012, 4, 2) - Date.now())
		.serverDelay(new Date(2015, 1, 1) - Date.now())
		.step(864e5)
		.size(1280)
		.stop();
var data =  [ 
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

function stock(name) {
  var format = d3.time.format("%Y");
  return context.metric(function(start, stop, step, callback) {
	//d3.json("data/data.json", function(error, data) {
     data = data.map(function(d) { return [format.parse(d.Date), +d.Value]; }).filter(function(d) { return d[1]; }).reverse();
	 //console.log(data);
	 var values = [];
      data.forEach(function(d) {
        values.push(d[1]);
		//console.log(d);
      });
	  console.log(data);
	  console.log(stop);
	  callback(null, values.slice(-context.size()));
    //});
  }, name);
}

d3.select("#container").selectAll(".axis")
		.data(["top", "bottom"])
	  .enter().append("div")
		.attr("class", function(d) { return d + " axis"; })
		.each(function(d) { d3.select(this).call(context.axis().ticks(12).orient(d)); });

	d3.select("#container").append("div")
		.attr("class", "rule")
		.call(context.rule());

	d3.select("#container").selectAll(".horizon")
		.data(["data"].map(stock))
	  .enter().insert("div", ".bottom")
		.attr("class", "horizon")
	  .call(context.horizon()
		.format(d3.format("+,.2p")));

	context.on("focus", function(i) {
	  d3.selectAll(".value").style("right", i == null ? null : context.size() - i + "px");
	});