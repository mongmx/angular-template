angular.module("home", [])
	.controller('HomeController', ['$scope', '$location', function($scope, $location){
		$scope.title = 'Home';
		$scope.isActive = function (viewLocation) {
			return viewLocation === $location.path();
		};
	}]);