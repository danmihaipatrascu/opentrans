myApp.controller('ParcCtrl', function ($scope, $http, $uibModal) {
    $scope.masini = [];
    loadMasini();

    function loadMasini() {
        $http.get("resources/masini.json")
        .then(function (response) {
            $scope.masini = response.data.masini;
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
});