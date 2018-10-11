(function () {
    'use strict';

    angular
        .module('app')
        .controller('HomeController', HomeController);

		HomeController.$inject = ['$location','UserService', '$rootScope','$http'];
    function HomeController($location,UserService, $rootScope,$http)
	{

        var vm = this;

        vm.user = null;
        vm.allUsers = [];
        vm.deleteUser = deleteUser;
        vm.logout = logout;
        vm.searchKnowledge = searchKnowledge;
        vm.searchText = '';
        vm.searchResult;
        vm.searchResult1;

        function searchKnowledge() {
            var url = 'https://kgsearch.googleapis.com/v1/entities:search?query='+vm.searchText+'&key='+config.gKey+'&limit=1&indent=True';
            $http.get(url).then(function(response) {
                console.log(response.data);
                vm.searchResult = response.data.itemListElement[0].result;
            }, function(error){
                vm.errorText = error;
            });
        }
		function logout() {
          $location.path('/login');
          FB.logout(function(response) {
             // Person is now logged out
             console.log('Person is now logged out');

          });
		}
        function logout() {
          $location.path('/login');
          FB.logout(function(response) {
             // Person is now logged out
             console.log('Person is now logged out');
		  });
		} 
    }

})();
