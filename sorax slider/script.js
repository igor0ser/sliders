(function(){
	var srcs = [
	'img/img0.jpg',
	'img/img1.jpg',
	'img/img2.jpg',
	'img/img3.jpg',
	'img/img4.jpg',
	'img/img5.jpg',
	'img/img6.jpg',
	'img/img7.jpg'
	]
	var step =0;
	var container = document.querySelector('.container');

	function nextSrc(){
		step++;
		if (step >= srcs.length ) {
			step = 0;
		}
		return(srcs[step]);
	}

	function createDiv(src){
		var oldDiv = document.querySelector('.img');
		var newDiv = document.createElement('div');
		newDiv.className = 'img new';

		for (var i = 1; i < 7; i++){
			var frag = document.createElement('div');
			frag.className = 'frag frag'+i;
			frag.style.backgroundImage = 'url(' + src +')';
			newDiv.appendChild(frag);
		}
		measure(src);

		container.appendChild(newDiv);

		setTimeout(function(){
			newDiv.classList.add('start');
			oldDiv.classList.add('end');
		}, 1);

		setTimeout(function(){
			container.removeChild(oldDiv);
		}, 1100)
	}

	function measure(imgSrc){
		function getWidthAndHeight() {
			var width = this.width;
			var height = this.height;
			var frags = document.querySelectorAll('.new .frag')
			if (height > 1.5 * width){
				var coef = 400 / height;
				var posDifference = (600 - coef * width) / 2;
				for (i = 1; i < 7; i++){
					var frag = document.querySelector('.new .frag' + i);
					frag.style.backgroundPositionX = (-200) * i + posDifference + 'px';
					frag.style.backgroundSize = '400px auto';
				}
			} else if (1.5 * width > height) {
				var coef = 600 / width;
				var posDifference = (400 - coef * height) / 2;
				for (i = 1; i < 7; i++){
					var frag = document.querySelector('.new .frag' + i);
					console.dir(frag);
					frag.style.backgroundPositionY = posDifference + 'px';
					frag.style.backgroundSize = '600px auto';
					console.log(frag.style.backgroundPositionY);
					console.log(frag.style.backgroundSize);
				}
				alert(111);
			}


			return true;
		}

		function loadFailure() {
			return true;
		}

		var myImage = new Image();
		myImage.onload = getWidthAndHeight;
		myImage.onerror = loadFailure;
		myImage.src = imgSrc;
	}



	document.addEventListener('click', function(){
		if (event.target.id === 'btn1'){
			createDiv(nextSrc());
		}
		if (event.target.id === 'btn2'){
				measure(nextSrc());

		}
	});



})();