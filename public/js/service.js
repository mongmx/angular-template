var module = angular.module('moduleName', []);

module.factory('factoryName', function ($http) {
	return {
		list: function (params) {
			return $http.list();
		},
		get: function (id) {
			return $http.get();
		},
		create: function (object) {
			return $http.post();
		},
		update: function (object) {
			return $http.put();
		},
		delete: function (id) {
			return $http.delete();
		}
	}
});

module.service('serviceName', function(){
	this.method1 = function() {
		//
	}
 
    this.method2 = function() {
    	//
	}
});