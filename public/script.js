$(document).ready(function(){

	// media query event handler
	if (matchMedia) {
	  var mq = window.matchMedia("(min-width: 991px)");
	  mq.addListener(WidthChange);
	  WidthChange(mq);
	}

	// media query change
	function WidthChange(mq) {
	  if (mq.matches) {
	    // window width is at least 991px
	  } else {
	    // window width is less than 991px
	  }
	}
});
