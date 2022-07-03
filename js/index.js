// Setting height of bars
function calcHeight(figure) {
	let height = (figure / 55) * 130 + 'px';
	return height;
}
async function giveBarsHeight() {
	let data = await fetch('../data.json').then((res) => res.json());
	let figure;
	data.forEach((obj, i, arr) => {
		figure = obj.amount;
		const bars = document.querySelectorAll('ul li .bar');
		const bar = Array.from(bars)[i];
		bar.style.height = calcHeight(figure);

		// Setting title to bars
		bar.setAttribute('data-title', `$${figure}`);
	});
}
giveBarsHeight();
