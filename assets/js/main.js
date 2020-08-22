$(document).ready(function() {

    $(window).bind('scroll', function() {
         if ($(window).scrollTop() > 0) {
             $('#header').addClass('header-scrolled');
         }
         else {
             $('#header').removeClass('header-scrolled');
         }
    });
    
    /* ======= Scrollspy ======= */
    $('body').scrollspy({ target: '#header', offset: 100});
    
    /* ======= ScrollTo ======= */
    $('a.scrollto').on('click', function(e){
        
        //store hash
        var target = this.hash;
                
        e.preventDefault();
        
		$('body').scrollTo(target, 800, {offset: -50, 'axis':'y'});
        //Collapse mobile menu after clicking
		if ($('.navbar-collapse').hasClass('show')){
			$('.navbar-collapse').removeClass('show');
		}
		
	});

    // Social Media Collapse
    $('#sm-close').click(function(){
        $('.s-media').addClass('sm-collapse');
        $('#sm-open').delay(300).css('left', '0');
    });

    $('#sm-open').click(function(){
        $('#sm-open').css('left', '-60px');
        $('.s-media').removeClass('sm-collapse');
        
    });

});

// Global smooth scroll functions
scrollingElement = (document.scrollingElement || document.body)
function scrollSmoothToBottom (id) {
    $(scrollingElement).animate({
      scrollTop: document.body.scrollHeight
    }, 500);
}


