$(document).ready(function() {
	$('.button').click(function () {
	var photo = $('.yum').val();
	

	var api_token="9301596.7d41089.a7f53828b96f43199f0ee424e08e144d";
	
	$.ajax({
	dataType: "jsonp",
	url:"https://api.instagram.com/v1/tags/" + photo +"/media/recent/?" + "access_token=" + api_token,
	data: api_token,
	success: function(data) {
		for (var i = 0; i < 20; i++) {
		$(".pics").append("<a target='_blank' href='" + data.data[i].link +
		"'><img src='" + data.data[i].images.low_resolution.url +"'></img></a>");
		}
	  }
	});//end of ajax call		
	
	//$('.yum').val("");

	}) //end of submit

	newSearch();

}); //end of ready



newSearch = function() {
	$('.button2').click(function() {
		location.reload();
	})
}; //reloads page to start a new game