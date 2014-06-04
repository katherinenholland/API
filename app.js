$(document).ready(function() {
	$('.yum').click(function () {
		var photo = $(this).val();

	var api_token="9301596.7d41089.a7f53828b96f43199f0ee424e08e144d";
	$.ajax({
	dataType: "jsonp",
	url:"https://api.instagram.com/v1/tags/search?q="+ photo + "&" + "access_token=" + api_token,
	data: api_token,
	success: foodPic(photo)
	});		
	
	return false;
	
	}) //end of submit

}); //end of ready

function foodPic(photo) {
			if (photo =='pass') {
				$('.results').html('<div>' + photo + '</div>');
			} else {	
			$('.results').html("<div> We didn't find your food!</div>");
		}

		};//end foodPic