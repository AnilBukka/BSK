'use strict';

angular.module('myApp.registration', [ 'ngRoute' ])

.controller('registrationCtrl', ['$scope', '$http',  function($scope, $http) {

	$scope.Register = function() {

		$http.get("http://localhost:8080/BSK/getRegistration")

		.success(function(response) {
return response;
		})

		.error(function(error) {
			return error;
		})

	}

} ]);