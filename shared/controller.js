nps.controller("Controller", function ($scope, $http) {
	$http.get('data/nps.json')
		.then(function (response) {
			$scope.nps = response.data;
				$scope.featured = $scope.nps.home.featured;
				$scope.popular = $scope.nps.home.popular;
				$scope.sequoia = $scope.nps.parks.sequoia;
				$scope.article = $scope.nps.article.all[0];
				$scope.stories = [
					$scope.nps.article.all[1],
					$scope.nps.article.all[2],
					$scope.nps.article.all[3]
				];
		});
});

