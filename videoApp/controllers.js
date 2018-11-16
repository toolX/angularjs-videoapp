// CONTROLLERS
app.controller('homeController', ['$scope', function ($scope) {

}]);

app.controller('videoCenterController', ['$scope', 'videoService', function ($scope, videoService) {
  $scope.videos = [];

  $scope.selectedVideo = null;

  $scope.editTitle = false;

  $scope.hideNewVideoForm = true;

  $scope.isDisabled = false;

  videoService.GetVideos().then(function (data) {
    $scope.videos = data.data;
  }, function (e) {
    console.log(e);
  });

  $scope.onSelect = function(video) {
    $scope.selectedVideo = video;
    $scope.hideNewVideoForm = true;
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
    videoService.UpdateVideos($scope.selectedVideo).then(function (updatedVideo) {
      console.log(updatedVideo);
      $scope.selectedVideo = null;
    }, function (e) {
      console.log(e);
    });
  };

  $scope.deleteVideo = function() {
    videoService.DeleteVideo($scope.selectedVideo).then(function (deletedVideo) {
      console.log(deletedVideo);
      var videoArray = $scope.videos;

      for (var i = 0; i < videoArray.length; i++) {
        if (videoArray[i]._id === $scope.selectedVideo._id) {
          videoArray.splice(i, 1);
        }
      }

      $scope.selectedVideo = null;
    }, function (e) {
      console.log(e);
    });
  };

  $scope.addVideo = function(form) {
    var newVideo = {};
    newVideo.title = form.title.$viewValue;
    newVideo.url = form.url.$viewValue;
    newVideo.description = form.description.$viewValue;

    videoService.AddVideo(newVideo).then(function (addedVideo) {
      var videoArray = $scope.videos;
      videoArray.push(addedVideo.data);
      $scope.selectedVideo = addedVideo.data;
      $scope.hideNewVideoForm = true;
    }, function (e) {
      console.log(e);
    });
  };

  $scope.toggleNewVideoForm = function() {
    $scope.hideNewVideoForm = false;
  };
}]);
