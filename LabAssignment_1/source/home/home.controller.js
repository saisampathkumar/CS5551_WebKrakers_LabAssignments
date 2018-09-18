(function () {
    "use strict";

    angular
        .module("app")
        .controller("HomeController", HomeController);


    HomeController.$inject = ["$location","UserService", "$rootScope","$http"];
    function HomeController($location,UserService, $rootScope,$http)

    {

        var vm = this;

        vm.user = null;
        vm.allUsers = [];
        vm.deleteUser = deleteUser;
        vm.logout = logout;
        vm.searchKnowledge = searchKnowledge;
        vm.searchText = "";
        vm.searchResult;
        vm.searchResult1;

        function searchKnowledge() {
            var url = "https://kgsearch.googleapis.com/v1/entities:search?query='+vm.searchText+'&key='+config.gKey+'&limit=1&indent=True";
            var url1 = "https://api.uclassify.com/v1/uclassify/sentiment/classify?readkey=o9tfns2s1mik&text="+vm.searchText;
            $http.get(url).then(function(response) {
                console.log(response.data);
                vm.searchResult = response.data.itemListElement[0].result;
            }, function(error){
                vm.errorText = error;
            });
            $http.get(url1).then(function(response) {
                console.log("Sentimental analysis"+response.data);
                vm.searchResult1 = response.data;
            }, function(error){
                vm.errorText = error;
            });
        }

        function logout() {
          $location.path("/login");
          FB.logout(function(response) {
             // Person is now logged out
             console.log("Person is now logged out");

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

        function initController()
        {
            loadCurrentUser();
            loadAllUsers();
        }
        initController();
    }

})();
