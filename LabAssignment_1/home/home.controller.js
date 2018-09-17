(function () {
    'use strict';

    angular
        .module('app')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['$location','UserService', '$rootScope'];
    function HomeController($location,UserService, $rootScope)
    {

        var vm = this;

        vm.user = null;
        vm.allUsers = [];
        vm.deleteUser = deleteUser;
        vm.logout = logout;

        initController();


        function initController()
        {
            loadCurrentUser();
            loadAllUsers();
        }
        function logout() {
          $location.path('/login');
          FB.logout(function(response) {
             // Person is now logged out
             console.log('Person is now logged out');

          });

        }

        function loadCurrentUser()
        {
            UserService.GetByUsername($rootScope.globals.currentUser.username)
                .then(function (user)
                {
                    vm.user = user;
                });
        }


        function loadAllUsers()
        {
            UserService.GetAll()
                .then(function (users)
                {

                    vm.allUsers = users;
                });
        }


        function deleteUser(id)
        {
            UserService.Delete(id)
            .then(function ()
            {

                loadAllUsers();
            });
        }
    }

})();
