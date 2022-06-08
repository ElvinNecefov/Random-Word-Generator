let letter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


let random = (min, max) => Math.floor(Math.random() * (max - min + 1) ) + min;


const addEvent = (selector, event, func) => {
	const elements = document.querySelectorAll(selector);
	for (let i = 0; i < elements.length; i++) {
		elements[i].addEventListener(event, func);
	}

	return elements;
}

let isStarted = false;
let timer;
let i = 0;

addEvent('.lets-go', 'click', e => {
	if(isStarted === false) {
		e.target.innerText = 'Stop';
		e.target.classList.remove('startbtn');
		e.target.classList.add('stopbtn');

		isStarted = true;

		timer = setInterval(() => {
			document.querySelector('.letter').innerText = letter[random(0, 25)];

			if(i === letter.length) {
				i = 0;
			}
		}, 100);

		//console.log('start ID - '+ timer);
	} else {
		e.target.innerText = 'Start';
		e.target.classList.remove('stopbtn');
		e.target.classList.add('startbtn');

		isStarted = false;
		clearInterval(timer);
		//console.log('stop ID - '+ timer);
	}
});