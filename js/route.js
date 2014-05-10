
angular.module('outcode', ['ngRoute'])
.config(function($routeProvider) {

  $routeProvider
  .when('/index', {
    templateUrl: 'templates/index.html',
    controller: "indexController"
  });
});