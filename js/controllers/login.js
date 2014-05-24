angular.module('outcode')

.controller('loginController', function($scope, $http){

  $scope.user = {
  	"username": "",
  	"password": ""
  };

  $http.post('/login', $scope.user)
  .success(function(data) {

  });


});