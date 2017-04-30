// CONTROLLERS
weatherApp.controller('homeController', ['$scope', 'cityService', function($scope,cityService) {
    $scope.city = cityService.city;
    // $scope.$watch('city', function(){
    // 	cityService.city = $scope.city;
    // });
    $scope.cityChange = function(){
        cityService.city = $scope.city;
    }
}]);

weatherApp.controller('forecastController', ['$scope', '$resource', '$routeParams', '$http', 'cityService', 'weatherService', function($scope, $resource, $routeParams, $http, cityService, weatherService) {
    $scope.city = cityService.city;
    $scope.count = $routeParams.days || '2';
    $scope.weatherResult = {};

    $scope.weatherResult = weatherService.getWeatherResult($scope.city, $scope.count);

    console.log($scope.weatherResult);
    
    // $http.get('http://api.openweathermap.org/data/2.5/forecast/daily?' + 'q=' +$scope.city +'&cnt=' +$scope.count +'&appid=0e2eec80ef318e9a8bcda957187600b8')
    // .success(function(response) {
    //     $scope.weatherResult = response;          
    //  })
    // .error(function(response) {
    //     console.log(response);
    //  });

    $scope.convertCelciusToFahrenheit = function(degK){
        return Math.round((1.8 * (degK - 273)) + 32);
    };
    $scope.convertToDate = function(dt){
        return new Date(dt * 1000);
    }

}]);