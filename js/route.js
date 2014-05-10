
angular.module('outcode', ['ngRoute'])
.config(function($routeProvider) {

  $routeProvider
  .when('/index', {
    templateUrl: 'templates/index.html',
    controller: "indexController"
  })

  .when('/login', {
    templateUrl: 'templates/login.html',
    controller: "loginController"
  });
});