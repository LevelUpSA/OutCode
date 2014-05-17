
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
  })

  .when('/registration', {
    templateUrl: 'templates/registration.html',
    controller: "registrationController"
  })

  .otherwise({
    redirectTo: '/index'
  });
});