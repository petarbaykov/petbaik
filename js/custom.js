jQuery(document).ready(function($){
	$('.portfolio-items').mixItUp();
	$('.testimonial').owlCarousel({
		items:1,
		singleItem:true,
		pagination:false,
		navigation:true,
		navigationText:["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
	});
});