$(document).ready(function() {


	$("#slide_menu_icon").hide();

	$("#menu_icon").click(function() {


		// console.log('clicked!');

		$(".container-fluid").animate({
			left: "10%"
		});	

		$("#slide_menu_icon").toggle();
		});
});


function search() {

	var box = document.getElementById('recipes');
	var keyword = document.getElementById('search-bar').value;
	box.innerHTML = keyword;
	console.log("just set the recieps to " + keyword);

	var xhttp = new XMLHttpRequest();
	  xhttp.onreadystatechange = function() {
	    if (xhttp.readyState == 4 && xhttp.status == 200) {
		 box.innerHTML = xhttp.responseText;

	    }
	  };
	 xhttp.open("GET", "https://mampalicious.herokuapp.com/searchtitle?title=" + keyword, true);
	  xhttp.send();

}

function keypress_search(event) {

	if(event.keyCode == 13){
		search();
	}

}