'use strict';
var nps = angular.module('app', [
	'ngRoute',
	'ngTouch',
	'ngAnimate'
]);
nps.config(function ($locationProvider, $routeProvider) {
	$locationProvider.html5Mode({
		enabled: true,
		requireBase: false
	});
	// $locationProvider.hashPrefix('#');
	$routeProvider
		.when('/', {
			templateUrl: 'shared/pages/home.html',
		})
		.when('/home', {
			templateUrl: 'shared/pages/home.html',
		})
		.when('/article', {
			templateUrl: 'shared/pages/article.html',
		})
		.when('/park', {
			templateUrl: 'shared/pages/park.html',
		})
		.otherwise({
			redirectTo: '/'
		});
});