
angular.module('outcode')

services.factory('LoginService', ['$http', function($http){

	var authUser = null;

	return{
		login: function(user){
		  	return $http.post('/api/login', user)
		  		.success(function(data) {
		  			authUser = data;	
		  		}).error(function(error){
		  			//
		  		});
  		},

  		logout: function(){
  			authUser = null;
  		},

  		getUser : function(){
  			return authUser;
  		},

  		isAuthenticated: function(){
  			return authUser != null;
  		}
  }

}]);


