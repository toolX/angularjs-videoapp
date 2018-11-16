// CONTROLLERS
app.controller('homeController', ['$scope', function ($scope) {

}]);

app.controller('videoCenterController', ['$scope', 'videoService', function ($scope, videoService) {
  $scope.videos = [];

  $scope.selectedVideo;

  $scope.editTitle = false;

  videoService.GetVideos().then(function (data) {
    $scope.videos = data.data;
  }, function (e) {
    console.log(e);
  });

  $scope.onSelect = function(video) {
    $scope.selectedVideo = video;
    videoService.currentVideo = video;
  };

  $scope.applyClass = function(video) {
    if ($scope.selectedVideo === video) {
      return 'active';
    } else {
      return '';
    }
  };

  $scope.onTitleClick = function() {
    $scope.editTitle = true;
  };

  $scope.updateVideo = function() {
    videoService.UpdateVideos($scope.selectedVideo).then(function (data) {
      console.log(data);
    }, function (e) {
      console.log(e);
    });
  };

  $scope.deleteVideo = function() {
    videoService.DeleteVideo($scope.selectedVideo).then(function (data) {
      console.log(data);
    }, function (e) {
      console.log(e);
    });
  }
}]);
