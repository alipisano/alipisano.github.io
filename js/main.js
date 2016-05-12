// When user clicks "Get Started" Button
$('#start').on('click', function() {

// Image on homepage appears

$('.nic').fadeIn();

});


//Carousel

// Create an array of image paths

var images = ["img/image_1.jpg", "img/image_2.jpg", "img/image_3.jpg"];

// Set a variable for our currentPosition
var currentPosition = 0;

// When user clicks on the "next" button
$('#next').on('click', function() {

	// Add one to the currentPosition
	currentPosition += 1;

	// If currentPosition is the last index
	if (currentPosition === images.length) {

		// Disable the "next" button
		$('#next').prop('disabled', true);	
	}

	// Otherwise change the src of #current-image to image at that index
	else {
		$('#current-image').attr("src", images[currentPosition]);
		
		// and enable "previous" button
		$('#prev').prop('disabled', false);
}});

// When the user clicks on the "previous button"
$('#prev').on('click', function() {

	//Subtract 1 from the currentPosition
	currentPosition -= 1;

	// If currentPosition is the first index
	if (currentPosition === 0) {

		// Disable the "previous" button
		$('#prev').prop('disabled', true);	
	}
	// Otherwise change the src of current-image to the image at that index
	else{
		$('#current-image').attr("src", images[currentPosition]);
		//And enable the next button
		$('#next').prop('disabled', false);

}});











