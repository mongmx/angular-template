angular.module("contact", [])
	.controller('ContactController', ['$scope', '$location', function($scope, $location){
		$scope.title = 'Contact';
		$scope.isActive = function (viewLocation) {
			return viewLocation === $location.path();
		};
	}]);