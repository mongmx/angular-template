angular.module("about", [])
	.controller('AboutController', ['$scope', '$location', function($scope, $location){
		$scope.title = 'About';
		$scope.isActive = function (viewLocation) { 
			// console.log(viewLocation === $location.path());
			return viewLocation === $location.path();
		};
		// console.log('/about' === $location.path());
	}]);