// ROUTES
app.config(function ($routeProvider, $locationProvider) {
  $locationProvider.html5Mode(true);
  $routeProvider
    .when('/', {
      templateUrl: 'pages/home.html',
      controller: 'homeController'
    })
    .when('/home', {
      templateUrl: 'pages/home.html',
      controller: 'homeController'
    })
    .when('/videos', {
      templateUrl: 'pages/video-center.html',
      controller: 'videoCenterController'
    })
});
