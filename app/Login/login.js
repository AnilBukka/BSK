'use strict';

angular.module('myApp.login', ['ngRoute'])

.controller('loginCtrl', ['$scope','$http','$window',function($scope,$http,$window) {
	
	$scope.login=function(){
    	$http.get("http://localhost:8080/BSK/getLoginDetails/"+$scope.username)

		.success(function(response){
			
			
			if($scope.password==response.password){
				$window.sessionStorage.registrationId = response.registrationId;
				$window.location.href="/index.html#!/home";
			}
			
			
			
		}).error(function(error){
			return error;
		})
		
		
		
	}
	
	

}]);