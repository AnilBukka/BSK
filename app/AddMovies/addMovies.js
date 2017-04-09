'use strict';

angular.module('myApp.addMovies', ['ngRoute'])
.controller('addMoviesCtrl', ['$scope','$http',function($scope,$http) {

	$scope.location=["cincinnati","kansas"];
	$scope.newLocation="";
	$scope.$watch('newLocation',function(){
		if( $scope.newLocation=="cincinnati"){
			$scope.theatre=["cinemark","AMC"];
			$scope.moviename=["Katamarayudu","khaidi"];
			$scope.noOfTickets=["4","4","4"];
		}else{
			$scope.newTheatre="";
		}
	})
	
	
	
	$scope.addmoviesList=function(){
		
		var data={
				
			"location":this.newLocation,
			"theatre":this.newTheatre,
			"moviename":this.newMovieName,
			"nooftickets":this.newNoOfTickets
				
		}
		
		
		$http.post("http://localhost:8080/BSK/addMoviesList",data)		
		.success(function(response){			
			return response;
		}).error(function(error){
			return error;
		})
		
		
		
	}
	
	
	
	
}]);