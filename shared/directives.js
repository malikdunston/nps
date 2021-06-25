 nps.directive('viewport', ['$window', function ($window) {
 	return {
 		restrict: 'A',
 		link: link,
 		controller: function ($scope) {
 			$scope.ifSize = function () {
 				if ($window.innerWidth < 500) {
 					$scope.viewtype = "mobile";
 					$scope.viewport = 0;
 				} else if ($window.innerWidth < 700) {
 					$scope.viewtype = "tablet";
 					$scope.viewport = 500;
 				} else if ($window.innerWidth < 1024) {
 					$scope.viewtype = "laptop";
 					$scope.viewport = 700;
 				} else if ($window.innerWidth < 1330) {
 					$scope.viewtype = "desktop";
 					$scope.viewport = 1024;
 				} else if ($window.innerWidth < 2400) {
 					$scope.viewtype = "studio";
 					$scope.viewport = 1330;
 				} else {
 					$scope.viewtype = "undefined or too big";
 					$scope.viewport = 1330;
 				}
 				console.log("Your view is: " + $scope.viewtype + "  ( " + $scope.viewport + " )");
 			}
 		}
 	};
 	function link(scope, element, attrs) {
 			scope.ifSize(); // "Your view is:" first run
 		angular.element($window).bind('resize', function () {
 			scope.$digest();
 			scope.ifSize();
 		});
 	}
 }]);

 nps.directive('navigation', function () {
 	return {
 		restrict: 'A',
 		templateUrl: 'shared/nav.html',
 		controller: function ($scope, $interval) {
 			var tick = function () {
 				var time = Date.now();
 				var x = time;
 				var y = 3600000;
 				var central = x - y;
 				$scope.clock = central;
 			}
 			tick();
 			$interval(tick, 1000);
 			$scope.links = [
 				"home",
 				"park",
 				"article"
 			];
			 $scope.navClick = function(){
				 $("#menu").toggle();
			 }
 		},
 	};
 });

 nps.directive("scroll", function ($window) {
 	return {
 		restrict: "A",
 		link: link,
 		controller: function ($scope) {
 			$scope.ifScroll = function (Offset) {
 				$scope.scroll = Offset;
 			};
 		}
 	}
 	function link(scope, element, attrs) {
 		angular.element($window).bind("scroll", function () {
 			scope.ifScroll(this.pageYOffset);
 			scope.$apply();
 		});
 	};
 });

nps.directive("whichlocation", function ($location, $rootScope) {
 	return {
 		restrict: "A",
 		controller: function ($scope) {
			$rootScope.$on("$locationChangeStart", function () {
				function findTemplate() {
					var template = $location.path();
					return (template.replace(/^\/|\/$/g, ''));
				}
				$rootScope.pageName = findTemplate();
				if ($rootScope.pageName != '' || $rootScope.pageName == 'home'){
					// alert("directives.whichLocation \n\n" + $rootScope.pageName + "-specific");
				}else	{
					// alert("directives.whichLocation \n\nworks!");
				}
				$scope.siteTitle = $rootScope.pageName;

			});
 		}
 	}
 });

 nps.directive("npsData", function ($http, $rootScope, ) {
 	return {
 		restrict: "A",
 		controller: function ($scope) {
			$http.get('data/nps.json')
				.then(function (response) {
					$rootScope.nps = response.data;
					$scope.states.sort();
				});
		}
 	}
 });