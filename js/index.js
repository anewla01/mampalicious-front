var RecipesApp=angular.module("Recipes", []);

RecipesApp.controller("RecipesController", function($scope, $http){

	$scope.search_term;
	$scope.search_type = 'Title';
	$scope.search=function() {
		$http({
			method: 'GET',
			url: "https://mampalicious.herokuapp.com/searchtitle?type="+ $scope.search_type.toLowerCase() + "&keyword=" + $scope.search_term
		}).then(function success(response) {
			$scope.recipes = response.data;
		}, function error(response) {
			console.log("ERROR");
		});
	};
    
    $scope.recipes = [];
    $scope.hideFoodLogo = false;
    $scope.searchDiv = false;
    $scope.showDescrip = false;
    $scope.titleClass = "active";
	$scope.ingredientClass = " ";
	$scope.search_by = "Title";

	$scope.keypressEnter = function(keyEvent) {
	  	if (keyEvent.which === 13) {
	  		$scope.search();
	 	}
	}

    $scope.setSearchTitle = function () {
		$scope.search_type = 'Title';
		$scope.titleClass = "active";
		$scope.ingredientClass = " ";
	}

	$scope.setSearchIngredient = function () {
		$scope.search_type = 'Ingredient';
		$scope.ingredientClass = "active";
		$scope.titleClass = " ";
	}

	$scope.displayDiv = function () {
        $scope.hideFoodLogo = true;
        $scope.searchDiv = true;
	}
});

RecipesApp.controller("FormController", function($scope, $http) {
	$scope.form_ingredients = [];
	$scope.form_utilities = [];

	$scope.form_amount = '';
	$scope.form_ingredient = '';
	$scope.form_utility = '';

	$scope.form_title = '';
	$scope.form_instructions = '';
	$scope.form_cuisine = '';
	$scope.form_country = '';

	$scope.show_title_error       = false;
	$scope.show_ingredient_error  = false;
	$scope.show_instruction_error = false;


	$scope.addIngredient = function(keyEvent) {
		if ($scope.form_amount != ''  && 
			$scope.form_ingredient!= '') {
			form = { 
				"amount" : $scope.form_amount, 
				"ingredient" : $scope.form_ingredient
			}
		
	  		$scope.form_ingredients.push(form);
	  		$scope.form_amount = '';
	  		$scope.form_ingredient = '';
		}  	
	}

	$scope.addUtility = function() {
		if ($scope.form_utility != '') {
			$scope.form_utilities.push($scope.form_utility);
			$scope.form_utility = '';
		}
	}	

	$scope.deleteIngredient = function() {
		$scope.form_ingredients.splice(this.$index, 1);
	}

	$scope.deleteUtility = function() {
		$scope.form_utilities.splice(this.$index, 1);
	}

	$scope.keypressEnterIngredient = function(keyEvent) {
	  	if (keyEvent.which === 13) {
	  		$scope.addIngredient();
	 	}
	}

	$scope.keypressEnterUtility = function(keyEvent) {
	  	if (keyEvent.which === 13) {
	  		$scope.addUtility();
	 	}
	}

	$scope.sendRecipes = function () {
		var amounts = '';
		var ingredients = '';
		var utilities = '';

		for (i = 0; i < $scope.form_ingredients.length; i++) {
			amounts += "amounts=" + $scope.form_ingredients[i].amount + "&";
			ingredients += "ingredients=" + $scope.form_ingredients[i].ingredient + "&";
		}

		for (i = 0; i < $scope.form_utilities.length; i++) {
			utilities += "utilities=" + $scope.form_utilities[i] + "&";
		}

		var data = "title=" + $scope.form_title + "&" + 
					amounts + "&" + ingredients + utilities + 
					"instructions=" + $scope.form_instructions + "&" + 
					"country=" + $scope.form_country + "&" + 
					"cuisine=" + $scope.form_cuisine;

		var req = {
	 		method: 'POST',
			url: 'https://mampalicious.herokuapp.com/form',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded'
			}, data: data
		}

		$scope.show_title_error       = ($scope.form_title        == '');
		$scope.show_ingredient_error  = ($scope.form_ingredients.length  == 0);
		$scope.show_instruction_error = ($scope.form_instructions == '');

		if ($scope.form_title               != '' &&
			$scope.form_ingredients.length  != 0  &&
			$scope.form_instructions        != '') {
			$http(req).then(function success(response) {
				console.log("SUCCESS");
				alert("Recipe Added")
			}, function error(response) {
				console.log("ERROR");
			});
			$scope.form_ingredients = [];
			$scope.form_utilities = [];

			$scope.form_amount = '';
			$scope.form_ingredient = '';
			$scope.form_utility = '';

			$scope.form_title = '';
			$scope.form_instructions = '';
			$scope.form_cuisine = '';
			$scope.form_country = '';
		} else {
			alert("Fields Missing");
		}
	}
});


/* Contact us NOT USED CURRENTLY */
RecipesApp.controller("ContactController", function($scope, $http) {

	$scope.form_name = '';
	$scope.form_email = '';
	$scope.form_message = '';

	$scope.show_name_error    = false;
	$scope.show_email_error   = false;
	$scope.show_message_error = false;

	$scope.sendContactForm = function () {

		name = $scope.form_name;
		email = $scope.form_email;
		message = $scope.form_message;

		/* Dealing with missing fields */
		$scope.show_name_error    = ($scope.form_name    == '');
		$scope.show_email_error   = ($scope.form_email   == '');
		$scope.show_message_error = ($scope.form_message == '');

		if ($scope.form_name         != '' &&
			$scope.form_email        != ''  &&
			$scope.form_message      != '') {
			//alert("valid");
		} else {
			//alert("Fields Missing");
		}
	}
});

