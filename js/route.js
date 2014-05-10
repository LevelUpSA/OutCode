
angular.module('outcode', ['ngRoute'])
.config(function($routeProvider) {

  $routeProvider
  .when('/index', {
    templateUrl: 'templates/index.html',
    controller: "indexController"
  });
})

.controller('indexController', function($scope) {
     
    $scope.greeting = 'Lebohang is not happy with angular';
     
});