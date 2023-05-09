var eventData = [], dates = [];
var names = ["a","b","c","d","e","f","g","h","i","j"];
var endX, startX;
var data =  [ 
	{ "Date":"1960", "Value":"24.36"},  
	{ "Date":"1961", "Value":"24.36"},  
	{ "Date":"1962", "Value":"36.05"},  
	{ "Date":"1963", "Value":"50.64"},  
	{ "Date":"1964", "Value":"61.08"},  
	{ "Date":"1965", "Value":"69.08"},  
	{ "Date":"1966", "Value":"94.45"},  
	{ "Date":"1967", "Value":"61.06"},  
	{ "Date":"1968", "Value":"77.45"},  
	{ "Date":"1969", "Value":"107.46"},  
	{ "Date":"1970", "Value":"24.36"},  
	{ "Date":"1971", "Value":"24.36"},  
	{ "Date":"1972", "Value":"36.05"},  
	{ "Date":"1973", "Value":"50.64"},  
	{ "Date":"1974", "Value":"61.08"},  
	{ "Date":"1975", "Value":"69.08"},  
	{ "Date":"1976", "Value":"94.45"},  
	{ "Date":"1977", "Value":"61.06"},  
	{ "Date":"1978", "Value":"77.45"},  
	{ "Date":"1979", "Value":"107.46"},  
	{ "Date":"1980", "Value":"24.36"},  
	{ "Date":"1981", "Value":"24.36"},  
	{ "Date":"1982", "Value":"36.05"},  
	{ "Date":"1983", "Value":"50.64"},  
	{ "Date":"1984", "Value":"61.08"},  
	{ "Date":"1985", "Value":"69.08"},  
	{ "Date":"1986", "Value":"94.45"},  
	{ "Date":"1987", "Value":"61.06"},  
	{ "Date":"1988", "Value":"77.45"},  
	{ "Date":"1989", "Value":"107.46"},  
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
	{ "Date":"2000", "Value":"96.29"},  
	{ "Date":"2001", "Value":"52.58"},
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
//d3.json("data/data.json", function(error, data) { //json file

	/* data parameter is array of object.
		if data is same from tsv, csv, json file,
		using any file is no relation
	*/  
	
	data.forEach(function (d) {
		dates.push(d.Date);
	});
	startX = d3.min(data, function(d) { return d.Date;});
	endX = d3.max(data, function(d) { return d.Date;});
	
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
		console.log(eventData);
	// bind data with DOM
	var body = document.getElementsByTagName('body')[0];
	var element = d3.select(body).append('div').datum(eventData);

	// draw the chart
	eventDropsChart(element);
//});

