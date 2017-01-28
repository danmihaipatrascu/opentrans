myApp.controller('ContactCtrl', function ($scope, $http) {
    var vm = this;

    function initEmailJs() {
        emailjs.init("user_VOtzoEw2lKT8vCO1OcQXr");
    };
    initEmailJs();
    vm.showErrorAlert = false;
    vm.showSuccesAlert = false;

    var _send = function () {
        vm.showSuccesAlert = true; //TODO : handle response
        emailjs.send("opentransservice", "opentransemailtemplate",
              {
                  name: vm.name,
                  email: vm.email,
                  phone: vm.phone,
                  message: vm.message
              }).then(

              function (data) {
                  vm.showSuccesAlert = true;

              }, function (response) {
                  vm.showErrorAlert = true;
              }
            );
    }

    vm.send = _send;
});