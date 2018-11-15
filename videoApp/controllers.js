// CONTROLLERS
app.controller('homeController', ['$scope', function ($scope) {

}]);

app.controller('videoCenterController', ['$scope', 'videoService', function ($scope, videoService) {
  $scope.videos = [];
  videoService.GetVideos().then(function (data) {
    $scope.videos = data.data;
  }, function (e) {
    console.log(e);
  });
}]);
