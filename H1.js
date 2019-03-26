function splitScroll(){
	const controller = new ScrollMagic.Controller();

	new ScrollMagic.Scene({
		duration: '100%',
		triggerElement:'.about-title',
		triggerHookL: 1
	})
	.setPin('about-title')
	.addIndicators()
	.addTo(controller);
}

splitscrol();

$("nav ul li").click(function(){
  var xcoord = $(this).data("xcoord");
  
  $("nav div").stop().animate({marginLeft:xcoord}, 500, "easeInOutExpo");
  $(this).addClass("active");
  $("nav ul li").not(this).removeClass("active");
  
});