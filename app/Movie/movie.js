'use strict';

angular.module('myApp.movie', ['ngRoute'])

.controller('movieCtrl', ['$scope','$http',function($scope,$http) {

    	$scope.addMovie=function(){
    		
    		
		$http.get("http://localhost:8080/BSK/getMovie/"+$scope.newNoOfTickets)
		
		.success(function(response){
			return response;
			
		}).error(function(error){
			return error;
		})
		
	}
	
	
	
	

}]);