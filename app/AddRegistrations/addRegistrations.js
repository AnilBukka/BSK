'use strict';

angular.module('myApp.addRegistrations', ['ngRoute'])

.controller('addRegistrationsCtrl', ['$http','$scope',function($http,$scope) {
	
	
	$scope.addRegistrations=function(){
		
		var data={
		"username":this.newusername,
		 "password":this.newpassword,
		 "firstname":this.newfirstname,
		 "lastname":this.newlastname
		}
		
		$http.post("http://localhost:8080/BSK/addRegistrations",data)
		
		.success(function(response){
			return response;
		}).error(function(error){
			return error;
		})
		
	}
	

	
}]);