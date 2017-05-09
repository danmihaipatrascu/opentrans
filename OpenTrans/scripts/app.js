//create a module myApp
var myApp = angular.module('myApp',
    ['ui.bootstrap']);

//Now Configure  our  routing
myApp.config(function () {
})
.run(function () {
});


// set for Home Controller
myApp.controller('NavCtrl', function ($scope, $location) {
    //set current tab as active
    $scope.isActive = function (viewLocation) {
        return document.location.href.indexOf(viewLocation) > -1;
    };
});

// set for Home Controller
myApp.controller('HomeCtrl', function ($scope) {
    // create a message to display in our view
    $scope.hover = $scope.hover || {};
});

myApp.controller('AboutCtrl', function ($scope) {
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