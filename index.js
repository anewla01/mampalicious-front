$(document).ready(function() {
	$("#slide_menu_icon").hide();

	$("#menu_icon").click(function() {


		// console.log('clicked!');

		// $(".container-fluid").animate({
		// 	left: "10%"
		// });	

		$("#slide_menu_icon").toggle();
	});

	$(".btn").click(function(e) {
		var target = $(e.target), type;
		if (target.is('#title')) {
			document.getElementById("title").setAttribute('class','btn btn-default active');
			document.getElementById("ingred").setAttribute('class','btn btn-default');
		} else if (target.is('#ingred')) {
			document.getElementById("title").setAttribute('class','btn btn-default');
			document.getElementById("ingred").setAttribute('class','btn btn-default active');
		}
	});
});


/* Sends request to search for recipes by title */
function search() {

	// console.log("search type is", type);
	var active = document.getElementsByClassName('active');
	var type = (active[0].innerHTML).toLowerCase();
	type = type.trim();

	var box = document.getElementById('recipes');
	var keyword = document.getElementById('search-bar').value;
	keyword = keyword.trim();

	var xhttp = new XMLHttpRequest();
	  xhttp.onreadystatechange = function() {
	    if (xhttp.readyState == 4 && xhttp.status == 200) {
		 box.innerHTML = xhttp.responseText;
	    }
	  };
	 xhttp.open("GET", "https://mampalicious.herokuapp.com/searchtitle?type="+type+"&keyword="+ keyword.toLowerCase(), true);
	 xhttp.send();

}

/* Handles the event of a enter-bar initiated search */
function keypress_search(event) {
	if(event.keyCode == 13){
		search();
	}
}