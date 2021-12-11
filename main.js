document.addEventListener('DOMContentLoaded',() => {
	const elementos = document.querySelectorAll('.carousel');
	M.Carousel.init(elementos, { 
		duration: 150,
		dist: -80,
		shift: 5,
		padding: 5,
		numVisible: 5,
		indicators: true,	
	});
});