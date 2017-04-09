'use strict';

angular.module('myApp.home', ['ngRoute'])

.controller('homeCtrl', ['$http','$scope','$window',function($http,$scope,$window) {

		
		
		$scope.checkLogin=function(){
			
			if($scope.registrationId!=null){
			
				$window.location.href="/index.html#!/login";
			}
			
		}
		
		$scope.checkLogin();	
		
	 

}]);