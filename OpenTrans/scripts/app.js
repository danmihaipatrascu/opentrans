//create a module myApp
var myApp = angular.module('myApp',
    ['ui.router',
    'ui.bootstrap']);

//Now Configure  our  routing
myApp.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider

   // set route for the contact page
        .state('root', {
            url: '/opentrans',
            views: {
                'contact': {
                    templateUrl: 'views/contact.html'
                }
            }
        })
    // set route for the home page
    .state('root.paginaprincipala',
    {
        url: '/paginaprincipala',
        views: {
            'container@': {
                controller: 'HomeCtrl',
                templateUrl: 'views/home.html'
            }
        }
    })

    .state('root.inchiriereutilaje', {
        url: '/inchiriereutilaje',
        views: {
            'container@': {
                controller: 'ParcCtrl',
                templateUrl: 'views/parc.html'
            }
        }
    })

    // set route for the about page
   .state('root.portofoliu', {
       url: '/portofoliu',
       views: {
           'container@': {
               controller: 'PortofoliuCtrl',
               templateUrl: 'views/portofoliuLucrari.html'
           }
       }
   })

     // set route for the about page
    .state('root.despre', {
        url: '/despre',
        views: {
            'container@': {
                controller: 'AboutCtrl',
                templateUrl: 'views/aboutus.html'
            }
        }
    });

    // if not match with any route config then send to home page


    $urlRouterProvider.otherwise('/opentrans/paginaprincipala');
})
.run(function ($rootScope, $state, $stateParams) {
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
    $rootScope.$on('$stateChangeSuccess', function () {
        document.body.scrollTop = document.documentElement.scrollTop = 0;
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
myApp.controller('HomeCtrl', function ($scope, $state) {
    // create a message to display in our view
    $scope.hover = $scope.hover || {};
    $scope.message = "(',')---I am on Home page---(',')";

    $scope.goToPage = function (page) {
        $state.go(page);
    }
});

// set for About Controller
myApp.controller('AboutCtrl', function ($scope) {
    $scope.message = "(',')---I am on About page---(',')";
});

myApp.directive('scrollOnClick', function () {
    return {
        restrict: 'A',
        link: function (scope, $elm, attrs) {
            var idToScroll = attrs.href;
            $elm.on('click', function () {
                var $target;
                if (idToScroll) {
                    $target = $(idToScroll);
                } else {
                    $target = $elm;
                }
                $("body").animate({ scrollTop: $target.offset().top - 100 }, "slow");
            });
        }
    }
});
