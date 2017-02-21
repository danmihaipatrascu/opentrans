myApp.controller('ParcCtrl', function ($scope, $http, $uibModal) {
    $scope.masini = [];
    loadMasini();
    $scope.tipuri = ["EXCAVATOARE",
                    "BULDOEXCAVATOARE",
                    "INCARCATOARE FRONTALE",
                    "STIVUITOARE",
                    "PLATFORME PENTRU LUCRU LA INALTIME"];

    function loadMasini() {
        $http.get("resources/masini.json")
        .then(function (response) {
            $scope.masini = response.data.masini;
            angular.forEach($scope.masini, function (masina) {
                slides.push({
                    image: masina.url,
                    text: masina.nume,
                    id: currIndex++
                });
            });
        });
    }

    $scope.hideShow = function () {
        $scope.menuhidden = !$scope.menuhidden;
    }

    $scope.openModalImage = function (imageSrc, imageDescription) {
        $uibModal.open({
            templateUrl: "/views/modals/modalImage.html",
            resolve: {
                imageSrcToUse: function () {
                    return imageSrc;
                },
                imageDescriptionToUse: function () {
                    return imageDescription;
                }
            },
            controller: [
              "$scope", "imageSrcToUse", "imageDescriptionToUse",
                function ($scope, imageSrcToUse, imageDescriptionToUse) {
                    $scope.ImageSrc = imageSrcToUse;
                    return $scope.ImageDescription = imageDescriptionToUse;
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