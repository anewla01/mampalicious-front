$(document).ready(function() {

	// $("#slide_menu_icon").hide();

	$("#menu_icon").click(function() {


		console.log('clicked!');

		$("#content").animate({
			left: "500px"
			});	

		

		$("#slide_menu_icon").toggle();
		});
});
