var RecipesApp=angular.module("Recipes", []);

RecipesApp.controller("RecipesController", function($scope, $http){
	console.log("inside recipes controller");

	$scope.search=function() {
		console.log("inside search function");
		var type = "ingredients";
		var keyword = "tahini";

		// GET Request 
		$http({
			method: 'GET',
			url: "https://mampalicious.herokuapp.com/searchtitle?type="+type+"&keyword="+ keyword.toLowerCase()+"&keywordOriginal=" + keyword.toLowerCase()
		}).then(function success(response) {
			console.log("SUCCESS");
		}, function error(response) {
			console.log("ERROR");
		});
	};
});

// $(document).ready(function() {
// 	$(".dropdown").on("click", function(event) {
// 		$(event.target).closest(".dropdown").siblings(".more_info").toggleClass("hidden");
// 	});
// 	$("#slide_menu_icon").hide();

// 	$("#menu_icon").click(function() {
// 		$("#slide_menu_icon").toggle();
// 	});

// 	$(".btn").click(function(e) {
// 		var target = $(e.target), type;
// 		if (target.is('#title')) {
// 			document.getElementById("title").setAttribute('class','btn btn-default active');
// 			document.getElementById("ingred").setAttribute('class','btn btn-default');
// 		} else if (target.is('#ingred')) {
// 			document.getElementById("title").setAttribute('class','btn btn-default');
// 			document.getElementById("ingred").setAttribute('class','btn btn-default active');
// 		}
// 	});
// });


// /* Sends request to search for recipes by title */
// function search() {

// 	// remove the previous search results
// 	// (avoiding removing the recipe_template which we populate)
// 	$(".recipe_item").each(function(i, val) {
// 		if (val.id != "recipe_template")
// 			val.remove();
// 	});

// 	var active = document.getElementsByClassName('active');
// 	var type = (active[0].innerHTML).toLowerCase();
// 	type = type.trim();

// 	var box = document.getElementById('recipes');
// 	var keyword = document.getElementById('search-bar').value;
// 	keyword = keyword.trim();

// 	// query the database
// 	var xhttp = new XMLHttpRequest();
//   	xhttp.onreadystatechange = function() {
// 	    if (xhttp.readyState == 4 && xhttp.status == 200) {

// 	    	// for each search result returned from the database, append it to our results
// 	    	$.each($.parseJSON(xhttp.responseText), function(i, val) {

// 	    		var title = val.display_title;
// 	    		var instructions = val.instructions;

//     			// duplicate the template div
//     			var new_recipe = $("#recipe_template").clone();

//     			// load the information
//     			new_recipe.find(".title").html(title);
//     			new_recipe.find(".instructions").html("Instructions: " + instructions);

//     			var ingredient_list = new_recipe.find(".ingredients");
// 	    		$.each(val.display_ingredients, function(i, ingredient) {
// 	    			ingredient_list.append(ingredient + ", " + val.amounts[i] + "<br>");
// 	    		});

// 	    		// update ID
// 	    		new_recipe.attr("id", title);

//     			// remove hidden designation
//     			new_recipe.removeClass("hidden");

//     			// add it to our recipe list
//     			new_recipe.appendTo("#recipes");

// 	    	});

// 	    }
// 	  };
// 	 xhttp.open("GET", "https://mampalicious.herokuapp.com/searchtitle?type="+type+"&keyword="+ keyword.toLowerCase()+"&keywordOriginal=" + keyword.toLowerCase(), true);
// 	 xhttp.send();

// }

// /* Handles the event of a enter-bar initiated search */
// function keypress_search(event) {
// 	if(event.keyCode == 13){
// 		search();
// 	}
// }