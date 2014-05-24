angular.module('outcode')

.controller('loginController', function($scope, $http){

  $scope.user = {
  	"username": "",
  	"password": ""
  };

  $scope.login_click = function(){
  	$http.post('/login', $scope.user)
  		.success(function(data) {
  		console.log(data);
  	});
  }

  


});