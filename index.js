const span = document.getElementById('span');
const button = document.getElementById('button');
const body = document.getElementById('body');
const clipboard = document.getElementById('clipboard');

button.addEventListener('click', () => {
	let randomColor = Math.floor(Math.random() * 16777215).toString(16);

	body.style.backgroundColor = `#${randomColor}`;
	span.innerText = randomColor;
});

clipboard.addEventListener('click', () => {
	const textarea = document.createElement('textarea');

	if (!span) {
		return;
	}

	textarea.value = span;
	body.appendChild(textarea);
	textarea.select();
	document.execCommand('copy');
	textarea.remove();
	alert('color copied');
	console.log(span.textContent);
});
