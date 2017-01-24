//create a module myApp
var myApp = angular.module('myApp', ['ngRoute']);

//Now Configure  our  routing
myApp.config(function ($routeProvider, $locationProvider) {
    $routeProvider
    // set route for the home page
    .when('/home',
    {
        controller: 'HomeCtrl',
        templateUrl: 'views/home.html'
    })

     // set route for the about page

    .when('/about', {
        controller: 'AboutCtrl',
        templateUrl: 'views/aboutus.html'
    })

   // set route for the contact page

    .when('/contact', {
        controller: 'ContactCtrl',
        templateUrl: 'views/contact.html'
    })

    // if not match with any route config then send to home page

     .otherwise({
         redirectTo: '/home'
     });

});

// create the controller and inject Angular's $scope

// set for Home Controller
myApp.controller('NavCtrl', function ($scope, $location) {
    //set current tab as active
    $scope.isActive = function (viewLocation) {
        return viewLocation === $location.path();
    };
});

// set for Home Controller
myApp.controller('HomeCtrl', function ($scope) {
    // create a message to display in our view
    $scope.hover = $scope.hover || {};
    $scope.message = "(',')---I am on Home page---(',')";
});

// set for About Controller
myApp.controller('AboutCtrl', function ($scope) {
    $scope.message = "(',')---I am on About page---(',')";
});

// set for Contact Controller
myApp.controller('ContactCtrl', function ($scope) {
    $scope.message = "(',')---I am on Contact page---(',')";
});