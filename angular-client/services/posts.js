angular.module('app')
.service('postsService', function($http) {
  this.getAll = function(callback) {
    $http.get('/Posts')
    .then(function({data}) {
      if(callback) {
        callback(data);
      }
    })
    .catch(function(err) {
      console.log(err);
    });
  };
});