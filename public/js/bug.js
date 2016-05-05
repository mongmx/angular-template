var module = angular.module('bug', []);

// module.config(function() {
// 	/** notify laravel that these request is ajax */
// 	$httpProvider.defaults.headers.common = {'X-Requested-With': 'XMLHttpRequest'};
// });

// module.factory('bugFactory', function ($http, $rootScope, ApiConfig) {
// 	var api_url = ApiConfig.endPoint+'bugs/';
// 	var onFail = function (data, status) {
// 		if (status == 401) {
// 			console.log('ERROR:'+status);
// 		}
// 	};

// 	return {
// 		convertDateTime: function (datetime) {
// 			return moment(datetime, "DD/MM/YYYY HH:mm").format("YYYY-MM-DD HH:mm:00");
// 		}
// 		list: function (params) {
// 			return $http.get(api_url).error(onFail);
// 		},
// 		get: function (id) {
// 			return $http.get(api_url+id).error(onFail);
// 		},
// 		create: function (bug) {
// 			return $http({
// 				method: "POST",
// 				url: api_url,
// 				headers: {'Content-Type': 'application/json'},
// 				data: $.param(bug)
// 			}).error(onFail);
// 		},
// 		update: function (bug) {
// 			data._method = 'PUT';
// 			return $http({
// 				method: "POST",
// 				url: api_url,
// 				headers: {'Content-Type': 'application/json'},
// 				data: $.param(data)
// 			}).error(onFail);
// 		},
// 		delete: function (id) {
// 			return $http.delete(api_url+id).error(onFail);
// 		}
// 	}
// });

module.controller('BugController', [
	'$scope', '$http', '$rootScope',
	function($scope, $http, $rootScope){
		$scope.title = 'Bugs';
		$scope.bugs = {};
		$scope.name = '';
		$scope.description = '';

		$scope.getData = function () {
			$http.get($rootScope.endPoint+'bugs')
				.then(function(res) {
					$scope.bugs = res.data;
				});
		}

		$scope.addData = function () {
			if (($scope.name == '') && ($scope.description == '')) return;

			var data = {
				name: $scope.name,
				description: $scope.description
			};
			$scope.name = '';
			$scope.description = '';

			$http({
				method: "POST",
				url: $rootScope.endPoint+'bugs',
				headers: {'Content-Type': 'application/json'},
				data: data
			}).then(function(res) {
				$scope.getData();
			});
		}

		$scope.getData();
	}
]);