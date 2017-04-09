'use strict';

angular.module('myApp.movies', ['ngRoute'])
.controller('moviesCtrl', ['$scope','$http',function($scope,$http) {

	
	$scope.listOfLocations=function(){
		
	
		$http.get("http://localhost:8080/BSK/getLocations")
		.success(function(response){
		
			$scope.locations = [];
			for(var i=0; i< response.length; i++){
				var data = {id:i, location:response[i]};
				$scope.locations.push(data);
			}
			$scope.productsDataSources=$scope.locations;
			return response;
			
		})
		.error(function(error){
			return error;
			
		})
		}
	
	$scope.listOfLocations();
	
//	$scope.productsDataSources = [{location:'Cincinnati', id: '0'},{location:'Cincinnati1', id: '1'},{location:'Cincinnati2', id: '2'}];
//	$scope.selected = $scope.productsDataSources[0];
/*	
$scope.moviesList=function(){
		
		$http.get("http://localhost:8080/BSK/getMovies/"+$scope.location+"/"+$scope.theatre)
	
	
		
		.success(function(response){
			return response;			
		}).error(function(response){
			return response;
		})
		
	}
	
	*/
	

	
}]);