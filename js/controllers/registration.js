angular.module('outcode')

.controller('registrationController', function($scope, $http){
  $scope.title = "registration";

  var user = { 	
    name: "",
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
      user.name = data.name;
      //user.username=data.username;
      //user.password=data.password;
      //user.passwordConfirm=data.passwordConfirm;
    //  user.email=data.email;
  	});
  };

});