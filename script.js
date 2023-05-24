function changeSvgColors(svgId, newColor) {
	const svg = document.getElementById(svgId);
	const form = document.querySelector('form');
	form.classList.add('jumbotron');
	form.innerHTML = "<h2> Calculating...</h2>";
	function fillPaths(paths) {
		let i = 0;
		const intervalId = setInterval(() => {
			if (i >= paths.length) {
				clearInterval(intervalId);
				// Get the form element and replace it with a component
				const form = document.querySelector('form');
				const component = document.createElement('div');
				component.classList.add('jumbotron');

				const h2 = document.createElement('h2');
				h2.textContent = 'Your house is worth:';
				component.appendChild(h2);

				const p = document.createElement('p');
				p.textContent = "$" + (Math.floor(Math.random() * 1000000) + 50000); // generating a random number between 50,000 and 1,050,000 
				component.appendChild(p);

				// Replace the form with the component
				form.parentNode.replaceChild(component, form);

				return;
			}
			paths[i].setAttribute('fill', newColor);
			i++;
		}, 150);
	}


	const paths = svg.contentDocument.querySelectorAll('path');
	for (const path of paths) {
		path.setAttribute('stroke', '#fff');
	}
	fillPaths(paths);


}

document.addEventListener("DOMContentLoaded", function() {
	const svgId = 'my-svg';
	const newColor = '#00641B';
	const svg = document.getElementById(svgId);
	svg.addEventListener("load", function() {
		const paths = svg.contentDocument.querySelectorAll('path');
		for (const path of paths) {
			path.setAttribute('stroke', '#fff');
		}
		const button = document.querySelector("#submit-btn");
		button.addEventListener("click", function(event) {
			event.preventDefault();
			changeSvgColors(svgId, newColor);
			button.parentNode.removeChild(button);
		});
	});
});

//changeSvgColors('my-svg', '#00ff00');

