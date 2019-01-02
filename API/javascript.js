//var weather;
let getJSON = require('get-json');
//var $ = require('jQuery');
getJSON("https://api.openweathermap.org/data/2.5/weather?q=Hyderabad,IN&appid=7872addef1ffd717b0dd64a6244d8ba8&units=metric",gotData);
//var weather;
function gotData(err, data){
	console.log(data);
}

