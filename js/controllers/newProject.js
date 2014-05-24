angular.module('outcode')

.controller('createController', function($scope){
  var create = {
  	projectname: "",
  	projectdescription: "",
  };

  $scope.create = create;

$scope.button_click = function() {
  	$http.post('/newProject', create)
  	.success(function(data) {
  		$scope.message = data.name;
  	});
  };

});