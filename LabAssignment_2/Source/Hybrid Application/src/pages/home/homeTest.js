describe("TestinghomePage", function() {
  var scope;
  beforeEach(angular.mock.module("HomePage"));
  beforeEach(angular.mock.inject(function($rootScope, $controller) {
    scope = $rootScope.$new();
    $controller('TestinghomePage', {$scope: scope});
  }));
  it("check if city name and Keyword is empty", function() {

    scope.Valid('','');
    expect(scope.temp).toEqual("city name and Keyword can not be empty");
  });

  it("check if city name is empty", function() {

    scope.Valid('','Chicago');
    expect(scope.temp).toEqual("city name can not be empty");
  });
  it("check if Keyword is empty", function() {

    scope.Valid('Shopping Malls','');
    expect(scope.temp).toEqual("Keyword can not be empty");
  });

});
angular.module('HomePage', []).controller('TestinghomePage', function ($scope,$http) {
  $scope.temp = "";

  $scope.Valid = function (city,searchKeyword) {

    $scope.city = city;
    $scope.searchKeyword = searchKeyword;

    if($scope.city == '' && $scope.searchKeyword == '' )
    {

      $scope.temp = "city name and Keyword can not be empty";
    }

    else if($scope.city == '')
    {

      $scope.temp = "city name can not be empty";
    }

    else
    {

      $scope.temp = "Keyword can not be empty";
    }
  }
});
