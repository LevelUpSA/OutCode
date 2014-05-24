angular.module('outcode')

.controller('forgotPasswordController', function($scope){
  var validate = {
  	email: "",
  	
  };

  $scope.create = create;

$scope.button_click = function() {
  	$http.post('/newProject', validate)
  	.success(function(data) {
  		$scope.message = data.name;
  	});
  };

});