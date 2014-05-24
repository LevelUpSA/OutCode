angular.module('outcode')

.controller('registrationController', function($scope, $http){
  $scope.title = "registration";

  var user = { 	
    name: "",
    username: "",
    password: "",
    passwordConfirm: "",
    email: "",
    typeofuser: "",
    organisationname: "",
    organisationdescription: "" 
  };

  $scope.user = user;
  $scope.useraccept = false;
  $scope.isorganisation = false;

  $scope.button_click = function() {
    if ($scope.useraccept==false) {
      $scope.message = "Agree to terms before submitting";
      return;
    }
    $scope.message = null;
    
  	$http.post('/register', user)
  	.success(function(data) {
  		$scope.message = data.name;
      user.name = data.name;
      //user.username=data.username;
      //user.password=data.password;
      //user.passwordConfirm=data.passwordConfirm;
    // user.email=data.email;
  	});
  };

});