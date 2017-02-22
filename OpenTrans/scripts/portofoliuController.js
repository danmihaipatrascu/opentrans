myApp.controller('PortofoliuCtrl', function ($scope, $http, $uibModal) {
    $scope.masini = [];
    loadMasini();

    function loadMasini() {
        $http.get("resources/masini.json")
        .then(function (response) {
            $scope.masini = response.data.masini;
            angular.forEach($scope.masini, function (masina) {
                slides.push({
                    image: masina.urls[0],
                    text: masina.nume,
                    id: currIndex++
                });
            });
        });
    }

    $scope.openSlider = function () {
        $uibModal.open({
            templateUrl: "/views/modals/sliderModal.html",
            size: 'lg',
            controller: [
              "$scope",
                function ($scope) {
                    $scope.slides = slides;
                }
            ]
        });
    };

    $scope.myInterval = 5000;
    $scope.noWrapSlides = false;
    $scope.active = 0;
    var slides = $scope.slides = [];
    var currIndex = 0;
});