angular.module('outcode')

.controller('createprojectController', function($scope, $http){
  $scope.title = "createproject";

  var cproject = { 	
    name: "",
    description: "",
  };

  $scope.cproject = cproject;
  

  $scope.button_click = function() {
   
    }
    
    
  	$http.post('/createproject', cproject)
  	.success(function(data) {
  		$scope.message = data.name;
      cproject.name = data.name;
