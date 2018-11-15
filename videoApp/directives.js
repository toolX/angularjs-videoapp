//DIRECTIVES
app.directive('videoDetail', function () {
  return {
    restrict: 'E',
    templateUrl: 'directives/videoDetail.html',
    replace: true,
    scope: {
      
    }
  }
});

app.directive('videoList', function () {
  return {
    restrict: 'E',
    templateUrl: 'directives/videoList.html',
    replace: true,
    scope: {
      videoList: '='
    }
  }
});
