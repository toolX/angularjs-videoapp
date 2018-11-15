// CONTROLLERS
app.controller('homeController', ['$scope', function ($scope) {

}]);

app.controller('videoCenterController', ['$scope', 'videoService', function ($scope, videoService) {
  $scope.videos = [];

  $scope.selectedVideo;

  $scope.activeClass = 'active';

  videoService.GetVideos().then(function (data) {
    $scope.videos = data.data;
  }, function (e) {
    console.log(e);
  });

  $scope.onSelect = function(video) {
    $scope.selectedVideo = video;

    console.log($scope.selectedVideo === video);
  };

  $scope.applyClass = function(video) {
    if ($scope.selectedVideo === video) {
      return 'active';
    } else {
      return '';
    }
  }
}]);
