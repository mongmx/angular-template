angular.module("about", [])
	.controller('AboutController', ['$scope', '$location', function($scope, $location){
		$scope.title = 'About';
	}]);