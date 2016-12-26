document.addEventListener('DOMContentLoaded',function() {
	document.addEventListener('click', () => {
		const gif = `http://giphy.com/gifs/thedailyshow-wtf-bye-trevor-noah-xT9DPz0PhxgyrzLg7S/fullscreen`;
		window.open(gif);
	});

	const main = document.querySelector('.main');
	const h1 = main.querySelector('.tagline');
	const walk = 50;

	const shadow = e => {
		const {offsetWidth: width,offsetHeight: height} = main;
		let {offsetX: x,offsetY: y} = e;

		if(this !== e.target) {
			x += e.target.offsetLeft;
			y += e.target.offsetTop;
		}

		const xWalk = Math.round((x / width * walk) - (walk / 2));
		const yWalk = Math.round((y / height * walk) - (walk / 2));

		h1.style.textShadow = `${xWalk}px  ${yWalk}px 0 rgba(25,0,25,0.7)`;
	};

	main.addEventListener('mousemove', shadow);

});

