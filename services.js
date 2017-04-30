
//Services
weatherApp.service('cityService', function(){
	this.city = 'Delhi, IN';
});

weatherApp.service('weatherService', ['$resource', function($resource){

	this.getWeatherResult = function(city,count){
		var weatherApi = 
	    	$resource("http://api.openweathermap.org/data/2.5/forecast/daily", {callback: "JSON_CALLBACK"}, {get:{method: "JSONP"}} );
	    
	    return weatherApi.get( { q: city, cnt: count , appid: "0e2eec80ef318e9a8bcda957187600b8"});

	    // console.log($scope.weatherResult);
	 };
}]);