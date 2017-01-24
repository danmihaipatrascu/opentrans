﻿myApp.controller('ParcCtrl', function ($scope, $http, $uibModal) {
    $scope.masini = [
        { id: 1, tip: 'betoniera', nume: 'Betoniera Trakker – Iveco', url: 'resources/parc/betoniera_iveco.jpg' },
        { id: 2, tip: 'betoniera', nume: 'TGA32,350 8*4 BB – MAN', url: 'resources/parc/tga32.jpg' },
        { id: 3, tip: 'betoniera', nume: 'Actros 2631 - Mercedes-Benz ', url: 'resources/parc/actros.jpg' },
        { id: 4, tip: 'cap tir', nume: 'R420LA4X2MNA/R420 – Scania  ', url: 'resources/parc/R420LA4X2MNA.jpg' },
        { id: 5, tip: 'cap tir', nume: 'R124LA4*2NA420 – Scania', url: 'resources/parc/R124LA42NA420.jpg' },
        { id: 6, tip: 'cap tir', nume: 'R400LA4X2MNA - SCANIA                       ', url: 'resources/parc/R400LA4X2MNA.jpg' },
        { id: 7, tip: 'macara', nume: 'Macara mobila Grove – GMX2035E', url: 'resources/parc/MacaraMobilaGroveGMX2035E.jpg' },
        { id: 8, tip: 'macara', nume: 'Liebherr - Macara LTM1030', url: 'resources/parc/LiebherrMacaraLTM1030.jpg' },
        { id: 9, tip: '', nume: 'Renault - Cisterna MIDLUM 220 DCI', url: 'resources/parc/RenaultCisternaMIDLUM220DCI.jpg' },
        { id: 10, tip: '', nume: 'Unimog + Lama+ Sararita  Mercedes-Benz - TYP 408/10 U900    ', url: 'resources/parc/sararita.jpg' },
        { id: 11, tip: '', nume: 'Automobil mixt – Fiat Ducato 2.3 JTD', url: 'resources/parc/Automobil mixt – Fiat Ducato 2.3 JTD.jpg' },
        { id: 12, tip: '', nume: 'Autoutilitara – Mercedes-Benz', url: 'resources/parc/Autoutilitara – Mercedes-Benz.jpg' },
        { id: 13, tip: '', nume: 'Autoutilitara - Citroen Jumper', url: 'resources/parc/Autoutilitara - Citroen Jumper.jpg' },
        { id: 14, tip: '', nume: 'Transporter - Volkswagen 7HC    ', url: 'resources/parc/Transporter - Volkswagen 7HC.jpg' },
        { id: 15, tip: '', nume: 'Incarcator frontal – FIATALLIS FR 15', url: 'resources/parc/Incarcator frontal – FIATALLIS FR 15.jpg' },
        { id: 16, tip: '', nume: 'Incarcator frontal - Hanomag 70 E                   ', url: 'resources/parc/Incarcator frontal - Hanomag 70 E.jpg' },
        { id: 17, tip: '', nume: 'Incarcator frontal  - Liebherr L564', url: 'resources/parc/Incarcator frontal  - Liebherr L564.jpg' },
        { id: 18, tip: '', nume: 'Stivuitor STILL DFG 4106                         ', url: 'resources/parc/Stivuitor STILL DFG 4106.jpg' },
        { id: 19, tip: '', nume: 'Motogreder – Komatsu GD 555-5', url: 'resources/parc/Motogreder – Komatsu GD 555-5.jpg' },
        { id: 20, tip: '', nume: 'Greder – Caterpillar 140  H         ', url: 'resources/parc/Greder – Caterpillar 140  H.jpg' },
        { id: 21, tip: '', nume: 'Buldoexcavator – Caterpillar 428F', url: 'resources/parc/Buldoexcavator – Caterpillar 428F.jpg' },
        { id: 22, tip: '', nume: 'Buldoexcavator – Caterpillar 427F2     ', url: 'resources/parc/Buldoexcavator – Caterpillar 427F2.jpg' },
        { id: 23, tip: '', nume: 'Buldozer – Caterpillar D6M', url: 'resources/parc/Buldozer – Caterpillar D6M.jpg' },
        { id: 24, tip: '', nume: 'Buldozer – Caterpillar D6M LGP  ', url: 'resources/parc/Buldozer – Caterpillar D6M LGP.jpg' },
        { id: 25, tip: '', nume: 'Buldozer – Caterpillar D6M XL', url: 'resources/parc/Buldozer – Caterpillar D6M XL.jpg' },
        { id: 26, tip: '', nume: 'Cilindru compactor – Caterpillar     ', url: 'resources/parc/Cilindru compactor – Caterpillar.jpg' },
        { id: 27, tip: '', nume: 'Cilindru compactor mixt – Lebrero', url: 'resources/parc/Cilindru compactor mixt – Lebrero.jpg' },
        { id: 28, tip: '', nume: 'Cilindru compactor – Terex TV1200                       ', url: 'resources/parc/Cilindru compactor – Terex TV1200.jpg' },
        { id: 29, tip: '', nume: 'Cilindru compactor mixt – AMMANN', url: 'resources/parc/Cilindru compactor mixt – AMMANN.jpg' },
        { id: 30, tip: '', nume: 'Cilindru compactor mixt – Bomag BW 138 AC      ', url: 'resources/parc/Cilindru compactor mixt – Bomag BW 138 AC.jpg' },
        { id: 31, tip: '', nume: 'Cilindru compactor Hamm – HD 90', url: 'resources/parc/Cilindru compactor Hamm – HD 90.jpg' },
        { id: 32, tip: '', nume: 'Cilindru compactor Hamm – HD 110  ', url: 'resources/parc/Cilindru compactor Hamm – HD 110.jpg' },
        { id: 33, tip: '', nume: 'Cilindru compactor – Bomag BW 80 AD', url: 'resources/parc/Cilindru compactor – Bomag BW 80 AD.jpg' },
        { id: 34, tip: '', nume: 'Cilindru compactor manual – Bomag BW 65 HS        ', url: 'resources/parc/Cilindru compactor manual – Bomag BW 65 HS.jpg' },
        { id: 35, tip: '', nume: 'Excavator pe pneuri  - Liebherr 904 Litronic', url: 'resources/parc/Excavator pe pneuri  - Liebherr 904 Litronic.jpg' },
        { id: 36, tip: '', nume: 'Excavator pe pneuri – Liebherr A 900 B     ', url: 'resources/parc/Excavator pe pneuri – Liebherr A 900 B.jpg' },
        { id: 37, tip: '', nume: 'Excavator pe senile – Komatsu PC 210 LC', url: 'resources/parc/Excavator pe senile – Komatsu PC 210 LC.jpg' },
        { id: 38, tip: '', nume: 'Excavator pe senile – Komatsu PC 210-6 ', url: 'resources/parc/Excavator pe senile – Komatsu PC 210-6.jpg' },
        { id: 39, tip: '', nume: 'Excavator pe senile – Caterpillar 325 C L', url: 'resources/parc/Excavator pe senile – Caterpillar 325 C L.jpg' },
        { id: 40, tip: '', nume: 'Excavator pe senile – Caterpillar 324 D L  ', url: 'resources/parc/Excavator pe senile – Caterpillar 324 D L.jpg' },
        { id: 41, tip: '', nume: 'Freza asfalt – Wirtgen W100', url: 'resources/parc/Freza asfalt – Wirtgen W100.jpg' },
        { id: 42, tip: '', nume: 'Freza asfalt – Bitelli SF 101    ', url: 'resources/parc/Freza asfalt – Bitelli SF 101.jpg' },
        { id: 43, tip: '', nume: 'Finisor – Vogele Super 1600-2', url: 'resources/parc/Finisor – Vogele Super 1600-2.jpg' },
        { id: 44, tip: '', nume: 'Finisor – Vogele Super 800   ', url: 'resources/parc/Finisor – Vogele Super 800.jpg' },
        { id: 45, tip: '', nume: 'Reciclator asfalt – BAGELA BA7000F', url: 'resources/parc/Reciclator asfalt – BAGELA BA7000F.jpg' },
        { id: 46, tip: '', nume: 'Foreza – Wirth Ecodril 18            ', url: 'resources/parc/Foreza – Wirth Ecodril 18.jpg' },
        { id: 47, tip: '', nume: 'Utilaj de marcat asfalt – Hofmann H8', url: 'resources/parc/Utilaj de marcat asfalt – Hofmann H8.jpg' },
        { id: 48, tip: '', nume: 'Motocompresor mobil – KASER M43         ', url: 'resources/parc/Motocompresor mobil – KASER M43.jpg' },
        { id: 49, tip: '', nume: 'Nacela cu platforma – JLG 40RTS', url: 'resources/parc/Nacela cu platforma – JLG 40RTS.jpg' },
        { id: 50, tip: '', nume: 'Platforma articulate – Genie Z-45/25 RT   ', url: 'resources/parc/Platforma articulate – Genie Z-45_25 RT.jpg' },
        { id: 51, tip: '', nume: 'Platforma telescopica – Genie S-60', url: 'resources/parc/Platforma telescopica – Genie S-60.jpg' },
        { id: 52, tip: '', nume: 'Platforma tijera electrica – Genie GS2646     ', url: 'resources/parc/Platforma tijera electrica – Genie GS2646.jpg' },
        { id: 53, tip: '', nume: 'Pompa beton – Putzmeister BSA 1005 D ', url: 'resources/parc/Pompa beton – Putzmeister BSA 1005 D.jpg' },
        { id: 54, tip: '', nume: 'Concasor piatra – Pegson 1100x650  ', url: 'resources/parc/Concasor piatra – Pegson 1100x650.jpg' },
        { id: 55, tip: '', nume: 'Statie sortare mobila – Finay 393 C', url: 'resources/parc/Statie sortare mobila – Finay 393 C.jpg' },
        { id: 56, tip: '', nume: 'Repartizor agregate – DG 1500      ', url: 'resources/parc/Repartizor agregate – DG 1500.jpg' }
    ];

    $scope.openModalImage = function (imageSrc, imageDescription) {
        $uibModal.open({
            templateUrl: "modalImage.html",
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