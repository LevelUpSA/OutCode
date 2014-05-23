angular.module('outcode')

.controller('registrationController', function($scope, $http){
  $scope.title = "registration";

  var user = { 	
    name: "Lebo",
    username: "",
    password: "",
    passwordConfirm: "",
    email: ""
  };

  $scope.user = user;

  $scope.button_click = function() {
  	$http.post('/register', user)
  	.success(function(data) {
  		$scope.message = data.name;
  	});
  };

});