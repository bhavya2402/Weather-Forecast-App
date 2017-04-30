//Directives
weatherApp.directive('weatherDirective', function(){
	return {
		restrict: 'E',
		templateUrl: 'templates/forecastDisplay.htm',
		replace: true,
		scope: {
			weatherDay : '=',
			dateFormat : '@',
			convertToDate : '&',
			convertToStandard : '&'
		} 
	};
});
