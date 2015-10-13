	var srcs = [
	'img/i0.jpg',
	'img/i1.jpg',
	'img/i2.jpg',
	'img/i3.jpg',
	'img/i4.jpg',
	'img/i5.jpg',
	'img/i6.jpg',
	'img/i7.jpg'
	]
	var step =1;
	var available = true;
	function nextSrc(){
		step++;
		if (step >= srcs.length ) {
			step = 0;
		}
		return(srcs[step]);
	}
	var container = document.querySelector('.container');


document.addEventListener('click', function(event){

	if (event.target.classList.contains('btn') && available){
		available = false;
		var oldImg = document.querySelector('.img');
		var newImg = document.createElement('img');
		newImg.src = nextSrc();

		if (event.target.classList.contains('next')){
			newImg.className = 'img right';
			container.appendChild(newImg);

			requestAnimationFrame(function(){
				newImg.classList.remove('right');
				oldImg.classList.add('left');
			});
		}

		if (event.target.classList.contains('prev')){
			newImg.className = 'img left';
			container.insertBefore(newImg, oldImg);

			requestAnimationFrame(function(){
				newImg.classList.remove('left');
				oldImg.classList.add('right');
			});
		}

		

		setTimeout(function(){
			requestAnimationFrame(function(){
				container.removeChild(oldImg);
				available = true;
			});
		}, 800);

	}
})