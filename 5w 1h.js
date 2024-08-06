let output_arr = []
let output = ''

let outputP

document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way
    let formData = new FormData(event.target);
    for (let [name, value] of formData) {
        console.log(`${name}: ${value}`); // Process form data locally
		
		output_arr.push(`${name}: ${value}`) 
    }
	output = output_arr.join('<br>');
	
	document.body.innerHTML = `
		<div class="output-container" id="output-container">
			<p id="output-p"></p>
			<div>
				<button id="copy-button" onclick="copyOutput()" style="min-width: 70px; min-height: 50px">
					<img src="copy button.png" alt="copy" width="20px" height="24px">
				</button>
				<button id="back-button" onclick="backToHome()" style="min-width: 70px; min-height: 50px">
					Back
				</button>
			</div>
		</div>
	`;
	
	outputP = document.getElementById('output-p')
	outputP.innerHTML = output
});

function copyOutput() {
	let copiedText = outputP.innerText;
	navigator.clipboard.writeText(copiedText).then(() => {
		// Change button text to indicate success
		const button = document.getElementById('copy-button');
		button.innerHTML = 'Copied';
		setTimeout(() => {
			button.innerHTML = '<img src="copy button.png" alt="copy" width="20px" height="24px">';
		}, 1000);
	}).catch(err => {
		console.error('Error copying text: ', err);
	});
}

function backToHome() {
	output_arr = []
	document.body.innerHTML = `
		<div class="form-container">
			<form id="form" autocomplete="off">
				<label for="who">who?</label>
				<input type="text" id="who" name="who">
				<label for="what">what?</label>
				<input type="text" id="what" name="what">
				<label for="where">where?</label>
				<input type="text" id="where" name="where">
				<label for="when">when?</label>
				<input type="text" id="when" name="when">
				<label for="why">why?</label>
				<input type="text" id="why" name="why">
				<label for="how">how?</label>
				<input type="text" id="how" name="how">
				<button>Submit</button>
			</form>
		</div>
	`;
	document.getElementById('form').addEventListener('submit', function(event) {
		event.preventDefault(); // Prevent the form from submitting the traditional way
		let formData = new FormData(event.target);
		for (let [name, value] of formData) {
			console.log(`${name}: ${value}`); // Process form data locally
			
			output_arr.push(`${name}: ${value}`) 
		}
		output = output_arr.join('<br>');
		
		document.body.innerHTML = `
			<div class="output-container" id="output-container">
				<p id="output-p"></p>
				<div>
					<button id="copy-button" onclick="copyOutput()" style="min-width: 70px; min-height: 50px">
						<img src="copy button.png" alt="copy" width="20px" height="24px">
					</button>
					<button id="back-button" onclick="backToHome()" style="min-width: 70px; min-height: 50px">
						Back
					</button>
				</div>
			</div>
		`;
		
		outputP = document.getElementById('output-p')
		outputP.innerHTML = output
	});
}