'use strict';

angular.module('myApp.listOfCars', ['ngRoute'])

.controller('listOfCarsCtrl', ['$scope', '$http',  function($scope, $http) {

	$scope.listOfCars = function() {

		$http.get("http://localhost:8080/BSK/getListOfCars")

		.success(function(response) {

		})

		.error(function(error) {
			return error;
		})

	}

} ]);