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
