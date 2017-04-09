'use strict';

angular.module('myApp.addCarsList', ['ngRoute'])

.controller('addCarsListCtrl', ['$scope','$http',function($scope,$http) {
	
			
	
	$scope.addCarsList=function(){
	
		var data=
		{
			"location":this.newlocation,
			 "type":this.newtype,
			 "name":this.newname	
		}
		$http.post("http://localhost:8080/BSK/addCarsList",data)
		
		.success(function(response)	
		
				
		{
			
		}).error(function(error){
			
			return error;
			
		})
		
	}
	
	

}]);