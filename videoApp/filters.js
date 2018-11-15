// FILTERS
app.filter('trustURL', function($sce) {
  return function(url) {
    return $sce.trustAsResourceUrl(url);
  };
});
