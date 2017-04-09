'use strict';

angular.module('myApp.reservation', [ 'ngRoute' ])

.controller('reservationCtrl', [ '$scope', '$http', function($scope, $http) {
     
	$scope.type=["economy","Standard"];
	
	$scope.newType='';
	$scope.$watch('newType',function(){
		if($scope.newType=="economy"){
			$scope.reserv=["Kia","maxima"];		
			
		}else{
			$scope.Model1='';
		}
		
	});
	
	$scope.carReservation = function() {

		$http.get("http://localhost:8080/BSK/getReservation/"+$scope.name)
		

		.success(function(response) {

			return response;

		}).error(function(error) {
			return error;
		})
	}
} ]);