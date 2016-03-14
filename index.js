var RecipesApp=angular.module("Recipes", []);

RecipesApp.controller("RecipesController", function($scope, $http){

	$scope.search_term;
	$scope.search_type = 'title';
	$scope.search=function() {
		$scope.search_type.toLowerCase();
		$scope.search_term.toLowerCase();

		$http({
			method: 'GET',
			url: "https://mampalicious.herokuapp.com/searchtitle?type="+$scope.search_type+"&keyword="+ $scope.search_term+"&keywordOriginal=" + $scope.search_term
		}).then(function success(response) {
			$scope.recipes = response.data;
			console.log("SUCCESS");
		}, function error(response) {
			console.log("ERROR");
		});
	};
    
    $scope.showMenu = false;
    $scope.showDescrip = false;
    $scope.titleClass = "active";
	$scope.ingredientClass = " ";

	$scope.keypressEnter = function(keyEvent) {
	  	if (keyEvent.which === 13) {
	  		$scope.search();
	 	}
	}

    $scope.setSearchTitle = function () {
		$scope.search_type = 'title';
		$scope.titleClass = "active";
		$scope.ingredientClass = " ";
	}

	$scope.setSearchIngredient = function () {
		$scope.search_type = 'ingredient';
		$scope.ingredientClass = "active";
		$scope.titleClass = " ";
	}

});