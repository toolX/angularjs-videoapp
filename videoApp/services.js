// SERVICES
/* app.service('cityService', function () {
  this.city = 'Vitebsk';
  this.weatherData = {};
}); */

app.service('videoService', ['$http', function ($http) {
  this.GetVideos = function() {
    return $http.get('/api/videos');
  };
}]);
