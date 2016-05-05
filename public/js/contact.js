angular.module("contact", [])
	.controller('ContactController', ['$scope', '$location', function($scope, $location){
		$scope.title = 'Contact';
	}]);