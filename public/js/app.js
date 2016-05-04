var app = angular.module('theAppName', ['ui.router', 'about', 'contact', 'home']);

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
		.state('contact', {
			url: '/contact',
			templateUrl: 'templates/contact.html',
			controller: 'ContactController'
		})
	}
]);

app.controller('MainController', ['$scope', function($scope){
	$scope.appName = 'Angular Template';
}])