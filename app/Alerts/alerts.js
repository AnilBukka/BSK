'use strict';

angular.module('myApp.alerts', [ 'ngRoute' ])

.controller('alertsCtrl', [ '$scope', '$http', function($scope, $http) {
		
	$scope.listOfAlertStatus=function(){	
		$http.get("http://localhost:8080/BSK/getAlertsStatuses")
		.success(function(response){
			$scope.alertStatus = [];
			for(var i=0; i< response.length; i++){
				var data = {id:i, alertStatus:response[i]};
				$scope.alertStatus.push(data);
			}	
			$scope.AlertsDataSources=$scope.alertStatus;
		$scope.example1model=$scope.alertStatus;
			return response;
		})
		.error(function(error){
		 return error;
	})
	}
   $scope.listOfAlertStatus();
	

	$scope.listOfAlertImpactAreas=function(){
		$http.get("http://localhost:8080/BSK/getAlertImpactAreas")
		.success(function(response){
	         $scope.alertImpactAreas = [];
	         for(var i=0;i<response.length;i++){
	        	 var data={id:1,alertImpactAreas:response[i]}
	        	 $scope.alertImpactAreas.push(data);
	         }
	         $scope.productsDataSources=$scope.alertImpactAreas;
	        
			return response;
		})
		.error(function(error){
			return error;
		})
		
	}
	
	$scope.listOfAlertImpactAreas();
	
	$scope.listOfDivisions=function(){
		$http.get("http://localhost:8080/BSK/getDivisions")
		.success(function(response){
			$scope.divisionArea =[];
			for(var i=0;i<response.length;i++){
				var data={id:i,divisionArea:response[i]}
				$scope.divisionArea.push(data);
			}
			var data1 = {id:'ALL',divisionArea:'ALL'};
			$scope.divisionArea.push(data1);
			$scope.divisionsDataSources=$scope.divisionArea;
			return response;	
		})
		.error(function(error){
			return error;
		})
	}
	
	$scope.listOfDivisions();
	
}]);
