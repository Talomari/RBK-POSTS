angular.module('app')
.controller('AppCtrl', function(postsService) {
  postsService.getAll((data) => {
    this.posts = data;
  });
})
.component('app', {
  bindings: {},
  controller: 'AppCtrl',
  templateUrl: '/templates/app.html'
});