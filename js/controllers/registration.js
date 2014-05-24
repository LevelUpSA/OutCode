angular.module('outcode')

.controller('registrationController', function($scope, $http){
  $scope.title = "registration";

  var user = { 	
    name: "",
    username: "",
    password: "",
    passwordConfirm: "",
<<<<<<< HEAD
    email: "" ,
=======
    email: "",
    typeofuser: "",
    organisationname: "",
    organisationdescription: "" 
>>>>>>> 7b3413e10a299331f2a81740fd676c6faa2d18ba
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
<<<<<<< HEAD
      
=======
      //user.username=data.username;
      //user.password=data.password;
      //user.passwordConfirm=data.passwordConfirm;
    // user.email=data.email;
>>>>>>> 7b3413e10a299331f2a81740fd676c6faa2d18ba
  	});
  };

});