// SERVICES
app.service('videoService', ['$http', function ($http) {
  this.currentVideo = {};

  this.getUrl = "/api/videos";
  this.postUrl = "/api/video";
  this.putUrl = '/api/video/';
  this.deleteUrl = '/api/video/';
  
  this.GetVideos = function() {
    return $http.get(this.getUrl);
  };

  this.AddVideo = function(video) {
    var headers = { 'Content-Type': 'application/json' };
    var options = { headers: headers };
    return $http.post(this.postUrl, JSON.stringify(video), options);
  }

  this.UpdateVideos = function(video) {
    var headers = { 'Content-Type': 'application/json' };
    var options = { headers: headers };
    return $http.put(this.putUrl + video._id, JSON.stringify(video), options);
  };

  this.DeleteVideo = function(video) {
    return $http.delete(this.deleteUrl + video._id);
  }
}]);
