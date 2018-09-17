(function () {
    'use strict';

    angular
        .module('app')
        .controller('LoginController', LoginController);

    LoginController.$inject = ['UserService','$location', 'AuthenticationService', 'FlashService'];
    function LoginController(UserService,$location, AuthenticationService, FlashService) {
        var vm = this;

        vm.login = login;
        vm.fbLogin = fbLogin;

        function fbLogin() {
          console.log('fbLogin is called');
          FB.login(function(response) {
              if (response.authResponse) {
               console.log('Welcome!  Fetching your information.... ');
               FB.api('/me', function(response) {
                 console.log('Good to see you, ' + response.name + '.');
                 var fullname = response.name.split(" ");
                 var user = {firstName:fullname[0],
                              lastName:fullname[1],
                              username:response.name,
                              password:'pwd'};
                 UserService.Create(user)
                     .then(function (response) {
                         if (response.success) {
                           AuthenticationService.SetCredentials(response.name, 'pwd');
                           $location.path('/home');
                         } else {
                           AuthenticationService.SetCredentials(response.name, 'pwd');
                           $location.path('/home');
                         }
                     });
               });
              } else {
               console.log('User cancelled login or did not fully authorize.');
              }
          });
        }
        function login() {
            vm.dataLoading = true;
            AuthenticationService.Login(vm.username, vm.password, function (response) {
                if (response.success) {
                    AuthenticationService.SetCredentials(vm.username, vm.password);
                    $location.path('/home');
                } else {
                    FlashService.Error(response.message);
                    vm.dataLoading = false;
                }
            });
        };
        (function initController() {
            // reset login status
            AuthenticationService.ClearCredentials();

        })();

    }

})();
