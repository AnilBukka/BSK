'use strict';

angular.module('myApp.carRental', ['ngRoute'])

.controller('carRentalCtrl', ['$scope','$http','$window',function($scope,$http,$window) {
	
	$scope.listOfCars = function(){
		
		$http.get("http://localhost:8080/BSK/searchCarsList/"+$scope.location+"/"+$scope.type)
		
		
		.success(function(response)	
		
		{
			
			if($scope.location == response[0].location){
			$window.location.href="/index.html#!/reservation";
			}
		})
		
		.error(function(error)
		{
			return error;
			
		});
	}
	
	
	

}]);