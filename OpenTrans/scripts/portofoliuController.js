myApp.controller('PortofoliuCtrl', function ($scope, $http, $uibModal) {
    //$scope.masini = [];
    loadPortofoliu();

    function loadPortofoliu() {
        $http.get("resources/portofoliu.json")
        .then(function (response) {
            $scope.pozeBeclean = response.data.beclean;
            $scope.pozeTRC = response.data.trc;
            $scope.pozeNovis = response.data.novis;
        });
    }

    function setImagesForSlides(lucrare) {
        var slides = [];

        switch (lucrare) {
            case 'beclean':
                angular.forEach($scope.pozeBeclean, function (poza) {
                    slides.push({
                        image: poza.urls[0],
                        text: poza.nume,
                        id: poza.id - 1
                    });
                });
                return slides;
                break;

            case 'novis':
                angular.forEach($scope.pozeNovis, function (poza) {
                    slides.push({
                        image: poza.urls[0],
                        text: poza.nume,
                        id: poza.id - 1
                    });
                });
                return slides;
                break;

            case 'trc':
                angular.forEach($scope.pozeTRC, function (poza) {
                    slides.push({
                        image: poza.urls[0],
                        text: poza.nume,
                        id: poza.id - 1
                    });
                });
                return slides;
                break;
        }
    }

    $scope.openSlider = function (lucrare) {
        $uibModal.open({
            templateUrl: "/views/modals/sliderModal.html",
            size: 'lg',
            controller: [
              "$scope",
                function ($scope) {
                    $scope.slides =  setImagesForSlides(lucrare);
                    console.log($scope.items);

                    $scope.myInterval = 5000;
                    $scope.noWrapSlides = false;
                    $scope.active = 0;
                    var currIndex = 0;
                }
            ]
        });
    };

    $scope.myInterval = 5000;
    $scope.noWrapSlides = false;
    $scope.active = 0;
    var currIndex = 0;
});