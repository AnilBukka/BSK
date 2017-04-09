'use strict';

angular.module('myApp.hotel', ['ngRoute'])

.controller('hotelCtrl', ['$scope','$http',function($scope,$http) {
	$scope.location=["cincinnati","kansas"];
	$scope.newLocation="";
	$scope.$watch('newLocation',function(){
		if( $scope.newLocation=="cincinnati"){
			$scope.hotelnames=["Marriot","Taj"];
			$scope.noOfRooms=["4","4"];
		}else{
			$scope.newLocation="";
		}
	})
	
	$scope.hotelList=function(){
	
	$http.get("http://localhost:8080/BSK/getHotelList")
	
	.success(function(response){
		return response;
		
	}).error(function(error){
		return error;
	})
	
	}

}]);