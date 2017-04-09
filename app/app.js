'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp',
		[ 'ngRoute', 'myApp.home', 'myApp.movies','myApp.hotel','myApp.listOfCars','myApp.carRental','myApp.reservation','myApp.registration','myApp.addCarsList','myApp.addRegistrations','myApp.login','myApp.addMovies','myApp.movie','myApp.addHotel', 'myApp.alerts','myApp.version' ]).config(
		[ '$locationProvider', '$routeProvider',
				function($locationProvider, $routeProvider) {
					$locationProvider.hashPrefix('!');

					$routeProvider.when('/home', {
						templateUrl : 'Home/home.html',
						controller : 'homeCtrl'
					});
					
					$routeProvider.when('/movies', {
						templateUrl : 'Movies/movies.html',
						controller : 'moviesCtrl'
					});

					$routeProvider.when('/hotel', {
						templateUrl : 'Hotel/hotel.html',
						controller : 'hotelCtrl'
					});
					
					$routeProvider.when('/carRental', {
						templateUrl : 'CarRental/carRental.html',
						controller : 'carRentalCtrl'
					});

					$routeProvider.when('/listOfCars', {
						templateUrl : 'ListOfCars/listOfCars.html',
						controller : 'listOfCarsCtrl'
					});
					
					$routeProvider.when('/reservation', {
						templateUrl : 'Reservation/reservation.html',
						controller : 'reservationCtrl'
					});
					

					$routeProvider.when('/registration', {
						templateUrl : 'Registration/registration.html',
						controller : 'registrationCtrl'
					});
					
					$routeProvider.when('/addCarsList', {
						templateUrl : 'AddCarsList/addCarsList.html',
						controller : 'addCarsListCtrl'
					});
					$routeProvider.when('/addRegistrations', {
						templateUrl : 'AddRegistrations/addRegistrations.html',
						controller : 'addRegistrationsCtrl'
					});
					

					$routeProvider.when('/login', {
						templateUrl : 'Login/login.html',
						controller : 'loginCtrl'
					});
					$routeProvider.when('/addMovies', {
						templateUrl : 'AddMovies/addMovies.html',
						controller : 'addMoviesCtrl'
					});

					$routeProvider.when('/movie', {
						templateUrl : 'Movie/Movie.html',
						controller :'movieCtrl'
					});
					$routeProvider.when('/addHotel', {
						templateUrl : 'AddHotel/addHotel.html',
						controller : 'addHotelCtrl'
					});

					$routeProvider.when('/alerts', {
						templateUrl : 'Alerts/alerts.html',
						controller : 'alertsCtrl'
					});


					$routeProvider.otherwise({

						redirectTo : '/home'

					});
				} ]);
