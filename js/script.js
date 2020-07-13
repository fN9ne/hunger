function testWebP(callback) {
	var webP = new Image();
	webP.onload = webP.onerror = function () {
		callback(webP.height == 2);
	};
	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function (support) {
	if (support == true) {
		document.querySelector('body').classList.add('webp');
	} else{
		document.querySelector('body').classList.add('no-webp');
	}
});

$(document).ready(function() {
	$('.slider').slick({
		infinite: false,
		arrows: false,
		dots: true,
		appendDots: $('.specialties__dots'),
		speed: 1000,
	});
	$('.burger__button').click(function(){
		$('.burger__menu').toggleClass('burgerMenuActive')
	});
	$('.burger__link').click(function(){
		$('.burger__menu').toggleClass('burgerMenuActive')
	})
});

