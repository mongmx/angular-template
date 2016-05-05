var app = angular.module('theAppName', [
	'ui.bootstrap', 
	'ui.router',
	'about',
	'bug', 
	'contact', 
	'home'
]);

app.config([
	'$urlRouterProvider', 
	'$stateProvider', 
	function($urlRouterProvider, $stateProvider) {
		$urlRouterProvider.otherwise('/');

		$stateProvider
		.state('home', {
			url: '/',
			templateUrl: 'templates/home.html',
			controller: 'HomeController'
		})
		.state('about', {
			url: '/about',
			templateUrl: 'templates/about.html',
			controller: 'AboutController'
		})
		.state('bug', {
			url: '/bug',
			templateUrl: 'templates/bug.html',
			controller: 'BugController'
		})
		.state('contact', {
			url: '/contact',
			templateUrl: 'templates/contact.html',
			controller: 'ContactController'
		})
	}
]);

app.run(function ($rootScope) {
	$rootScope.appName = 'Ng App Template';
	$rootScope.endPoint = 'http://localhost:3004/';
});

app.controller('MainController', ['$scope', '$rootScope', function($scope, $rootScope){
	$scope.appTitle = $rootScope.appName;
}])