'use strict';

angular.module('myApp.addHotel', ['ngRoute'])

.controller('addHotelCtrl', ['$scope','$http',function($scope,$http) {

	$scope.location=["cincinnati","kansas"];
	$scope.newLocation="";
	
	$scope.$watch("newLocation",function(){
		if($scope.newLocation=="cincinnati")
			$scope.hotelnames=["marriot","taj"];
		    $scope.noOfRooms=["4","5"];
	})
	
	$scope.addHotelList=function(){
		
		var data={
				"location":this.newLocation,
				"hotelnames":this.newHotelNames,
				"noofrooms":this.newNoOfRooms
		}
		
		$http.post("http://localhost:8080/BSK/addHotel",data)
		
		.success(function(response){
			
			
		}).error(function(error){
			return error;
		})
		
		
		
	}
	

}]);