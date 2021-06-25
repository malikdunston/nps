var nps = angular.module('app', [
	'ui.router',
]);

nps
	.config(["$stateProvider", function($stateProvider, $locationProvider){
		// $locationProvider.html5Mode({
		// 	enabled: true,
		// 	requireBase: false
		// });
		$stateProvider
			.state('home', {
				url: "",
				templateUrl: "shared/pages/home.html",
				controller: "Controller"
			})
			.state('article', {
				url: "/article",
				templateUrl: "shared/pages/article.html",
				controller: "Controller"
			})
			.state('park', {
				url: "/park",
				templateUrl: "shared/pages/park.html",
				controller: "Controller"
			})
	}]);
