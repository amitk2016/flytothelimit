// A $( document ).ready() block.
$( document ).ready(function() {
    window.sr = ScrollReveal();

    sr.reveal('.navbar-brand',{
    	duration:2000,
    	origin:'bottom'
    });
    sr.reveal('.navbar-nav',{
    	duration:2000,
    	origin:'bottom'
    });
    sr.reveal('.hero-text',{
    	duration:2500,
    	origin:'bottom',
    	distance:'300px'
    });
    sr.reveal('.about-title h2',{
    	duration:2000,
    	origin:'left',
    	distance:'200px',
    	viewFactor:0.2
    });
    sr.reveal('.about-text',{
    	duration:2000,
    	origin:'right',
    	distance:'200px',
    	viewFactor:0.2
    });
     sr.reveal('.pilot-members',{
    	duration:2000,
    	viewFactor:0.2
    });
      sr.reveal('.gallery-container > div > div',{
    	duration:2000,
    	viewFactor:0.2
    },30);
        sr.reveal('.plane-left',{
    	duration:2000,
    	origin:'left',
    	distance:'100px',
    	viewFactor:0.2
    });
        sr.reveal('.plane-right',{
    	duration:2000,
    	origin:'right',
    	distance:'100px',
    	viewFactor:0.2
    });
});