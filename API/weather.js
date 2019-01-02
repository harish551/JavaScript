let getJSON = require('get-json');
getJSON("https://api.openweathermap.org/data/2.5/weather?q=Hyderabad,IN&appid=7872addef1ffd717b0dd64a6244d8ba8&units=metric",gotData);

function gotData(err, data){
	let Weather = data;
	let showWeather = function(){
		console.log("City: "+Weather.name);
		console.log("Temperature: "+Weather.main.temp);
		console.log("Humidity: "+Weather.main.humidity);
		console.log("Pressure: "+Weather.main.pressure);
		console.log("weather description: "+Weather.weather[0].description);

		
	} 
	showWeather();

}

