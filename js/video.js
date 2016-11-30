$(document).ready(function() {
	autoplay();
});

function autoplay () {
	var figure = $(".caja").hover( hoverVideo, hideVideo );
  // var box = $(".info").hover(hoverVideo, hideVideo);


	function hoverVideo(e) {  
	  $('video', this).get(0).play(); 
    $('video', this).removeClass('gris');
    // $('video', this).get(0).currentTime = 3;
 

	}

	function hideVideo(e) {
	  $('video', this).get(0).pause(); 
    $('video', this).addClass('gris');
    $('video', this).get(0).currentTime = 0;
	}
}