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

	// localScroll
	$.localScroll({duration:800, hash:true});

	// Navigation Active Class
	var firstSlide = $("#first-slide").offset().top;
	var secondSlide = $("#second-slide").offset().top;
	var thirdSlide = $("#third-slide").offset().top;
	var fourthSlide = $("#fourth-slide").offset().top;
	var fithSlide = $("#fith-slide").offset().top;

	var $w = $(window).scroll(function(){
		$( '.nav li a' ).each(function( index ) {
			console.log($(this).text());
			$(this).removeClass('active');
		});
		if ( ($w.scrollTop() >= firstSlide) && ($w.scrollTop() < secondSlide)){
			$('#menu-home').addClass('active');
		}else if ( ($w.scrollTop() >= secondSlide) && ($w.scrollTop() < thirdSlide)){
			$('#menu-about').addClass('active');
		}else if ( ($w.scrollTop() >= thirdSlide) && ($w.scrollTop() < fourthSlide)){
			$('#menu-portfolio').addClass('active');
		}else if ( ($w.scrollTop() >= fourthSlide) && ($w.scrollTop() < fithSlide)){
			$('#menu-education').addClass('active');
		}else{
			$('#menu-contact').addClass('active');
		}
	});

});
