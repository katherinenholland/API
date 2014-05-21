$(document).ready(function() {
	$('.button').submit(function () {
		var photo = $(this).value();
	
	$.ajax({
	dataType: "jsonp",
	url:"http://api.instagram.com/oembed?url=http://instagr.am/p/BUG/",
	data: data,
	success: foodPic(),
	});		
	
	return false;
	
	}) //end of submit

}); //end of ready

function foodPic(photo) {
			if (photo =='pass') {
				$('.results').html('<div>' + photo + '</div>');
			} else {	
			$('.results').html("<div> We didn't find your food!</div>");
		
		};//end foodPic