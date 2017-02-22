myApp.controller('ParcCtrl', function ($scope, $http, $uibModal) {
    $scope.masini = [];
    loadMasini();
    $scope.tipuri = ['Autobetoniera',
                    'Pompa beton',
                    'Autoutilitara',
                    'Automacara',
                    'Utilaj multifunctional',
                    'Incarcator frontal',
                    'Stivuitor',
                    'Greder',
                    'Buldoexcavator',
                    'Buldozer',
                    'Cilindru compactor',
                    'Excavator',
                    'Freza asfalt',
                    'Finisor',
                    'Foreza',
                    'Reciclator asfalt',
                    'Platforma ridicatoare',
                    'Compresor',
                    'Concasor piatra',
                    'Statie sortare',
                    'Repartizor agregate'];

    function loadMasini() {
        $http.get("resources/masini.json")
        .then(function (response) {
            $scope.masini = response.data.masini;
            groupMasiniByTip();
        });
    }

    $scope.categorii = [];
    var groupMasiniByTip = function () {
        angular.forEach($scope.tipuri, function (tip) {
            var cat = {
                nume: tip,
                masini: []
            };
            var currIndex = 0;
            angular.forEach($scope.masini, function (masina) {
                if (masina.tip == tip)
                    cat.masini.push({ id: currIndex++, nume: masina.nume, url: masina.urls[0] });
            });
            $scope.categorii.push(cat);
        });
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