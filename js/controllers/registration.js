angular.module('outcode')

.controller('registrationController', function($scope){
  $scope.title = "registration";

  var user = {
    name: "",
    username: "",
    password: "",
    passwordConfirm: "",
    email: ""
  };

  $scope.user = user;

});