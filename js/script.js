$(document).ready(function(){
//toggle navar
	$('.navbar-toggler').click(function(){
		$('.navbar-toggler').toggleClass('change')
	})

//stickay navbar
	$(window).scroll(function(){
		let position = $(this).scrollTop();
		//console.log(position);
		if(position >=656){
			$('.navbar').addClass('navbar-background');
			$('.navbar').addClass('fixed-top');
		}else{
			$('.navbar').removeClass('navbar-background');
			$('.navbar').removeClass('fixed-top');
		}

	})

	//smoth scroll
	$('.nav-item a,.header-link,#back-to-top').click(function(){
		link.preventDefault();

		let target = $(this).attr('href');

		$('html,body').stop().animate({
			scrollTop: $(target).offset().top - 25
		}, 3000);
	})

	//back to top

	$(window).scroll(function(){
		let position = $(this).scrollTop();
		//console.log(position);
		if(position >=656){
			$('#back-to-top').addClass('scrollTop');
			
		}else{
			$('#back-to-top').removeClass('scrollTop');
			
		}

	})


	//Ripple Effect
	$("#header, .info").ripples({
  dropRadius: 25,
  perturbance: 0.6,
});

	//magnafic popup
	$('.parent-container').magnificPopup({
		delegate:'a',
		type:'image',
		gallery:{
			enabled:true
		}
	});
})