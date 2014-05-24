
angular.module('outcode', ['ngRoute'])
.config(function($routeProvider) {

  $routeProvider
  .when('/index', {
      templateUrl: 'templates/index.html',
    controller: "indexController"
  })

  .when('/login', {
    templateUrl: 'templates/login.html',
    controller: "loginController"
  })

  .when('/registration', {
    templateUrl: 'templates/registration.html',
    controller: "registrationController"
  })

.when('/newProject', {
    templateUrl: 'templates/create_project.html',
    controller: "createprojectController"
  })

  
.when('/forgotPassword', {
    templateUrl: 'templates/forgot_Password.html',
    controller: "forgotPasswordController"
  })  

  .when('/contact', {
    templateUrl: 'templates/contact.html',
    controller: "contactController"
  }) 

  .otherwise({
    redirectTo: '/index'
  });
});