myApp.controller('ParcCtrl', function ($scope, $http, $uibModal, $location, $anchorScroll) {
    $scope.masini = [];
    loadMasini();
    $scope.tipuri = [
                    'Automacarale',
                    'Foreze',
                    'Excavatoare',
                    'Cilindri compactori',
                    'Buldoexcavatoare',
                    'Gredere',
                    'Buldozere',
                    'Incarcatoare frontale',
                    'Autocamioane',
                    'Finisoare asfalt',
                    'Freze asfalt',
                    'Reciclatoare asfalt',
                    'Autoutilitare',
                    'Autopompe',
                    'Autobetoniere',
                    'Statii de sortare',
                    'Concasoare piatra',
                    'Platforme ridicatoare',
                    'Stivuitoare',
                    'Pompe stationare',
                    'Utilaje deszapezire',
                    'Repartizoare agregate',
                    'Compresoare',
    ];

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
                if (masina.tip == tip) {
                    cat.masini.push({ id: currIndex++, nume: masina.nume, url: masina.urls[0], font: masina.font });
                    cat.numeUtilaj = masina.nume;
                }
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

    // solution #3 use with the below onCarouselChange directive
    $scope.onSlideChanged = function (nextSlide, direction, catIndex) {
        var nume = $(nextSlide.element).find('.carousel-caption p').text();
        if (nume.indexOf('{{slide.nume}}') == -1)
            $scope.categorii[catIndex].numeUtilaj = nume;
    };

    $scope.gotoAnchor = function (x) {
        var newHash = x;
        if ($location.hash() !== newHash) {
            // set the $location.hash to `newHash` and
            // $anchorScroll will automatically scroll to it
            $location.hash(x);
        } else {
            // call $anchorScroll() explicitly,
            // since $location.hash hasn't changed
            $anchorScroll();
        }
    };

    $scope.myInterval = 3000;
    $scope.noWrapSlides = false;
    $scope.active = 0;
    var slides = $scope.slides = [];
    var currIndex = 0;

    $scope.openSlider = function (categorie, id) {
        $uibModal.open({
            templateUrl: "/views/modals/sliderModal.html",
            size: 'lg',
            controller: [
              "$scope",
                function ($scope) {
                    $scope.slides = [];
                    var slideId = 0;
                    $scope.active = 0;
                    angular.forEach(categorie.masini, function (slide) {
                        if (id == slide.id)
                            $scope.active = slideId;
                        $scope.slides.push({
                            image: slide.url,
                            text: slide.nume,
                            id: slideId++
                        });
                    });

                    $scope.myInterval = 5000;
                    $scope.noWrapSlides = false;
                    var currIndex = 0;
                }
            ]
        });
    };
})
.directive('onCarouselChange', function ($parse) {
    return {
        require: 'uibCarousel',
        link: function (scope, element, attrs, uibCarouselCtrl) {
            var fn = $parse(attrs.onCarouselChange);
            var origSelect = uibCarouselCtrl.select;
            uibCarouselCtrl.select = function (nextSlide, direction) {
                if (nextSlide !== this.currentSlide) {
                    fn(scope, {
                        nextSlide: nextSlide,
                        direction: direction,
                    });
                }
                return origSelect.apply(this, arguments);
            };
        }
    };
});