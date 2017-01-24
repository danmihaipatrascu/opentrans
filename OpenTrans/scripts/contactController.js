myApp.controller('ContactCtrl', function ($scope, $http) {
    var vm = this;

    function initEmailJs() {
        emailjs.init("user_VOtzoEw2lKT8vCO1OcQXr");
    };
    initEmailJs();

    var _send = function () {
        emailjs.send("opentransservice", "opentransemailtemplate",
            {
                name: vm.name,
                email: vm.email,
                phone: vm.phone,
                message: vm.message
            });
    }

    vm.send = _send;
});