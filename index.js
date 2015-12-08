$(document).ready(function() {


	$("#slide_menu_icon").hide();

	$("#menu_icon").click(function() {


		// console.log('clicked!');

		$(".container-fluid").animate({
			left: "10%"
		});	

		$("#slide_menu_icon").toggle();
	});

	$(".btn").click(function(e) {
		var target = $(e.target), type;
		if (target.is('#title')) {
			type = "title";
		} else if (target.is('#ingred')) {
			type = "ingredients";
		}
	});
});


/* Sends request to search for recipes by title */
function search() {

	var box = document.getElementById('recipes');
	var keyword = document.getElementById('search-bar').value;

	var xhttp = new XMLHttpRequest();
	  xhttp.onreadystatechange = function() {
	    if (xhttp.readyState == 4 && xhttp.status == 200) {
		 box.innerHTML = xhttp.responseText;

	    }
	  };
	 xhttp.open("GET", "https://mampalicious.herokuapp.com/searchtitle?title=" + keyword.toLowerCase(), true);
	 xhttp.send();

}

/* Handles the event of a enter-bar initiated search */
function keypress_search(event) {

	if(event.keyCode == 13){
		search();
	}
}