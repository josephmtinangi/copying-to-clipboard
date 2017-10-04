var aioColors = document.querySelectorAll('.color span');

aioColors.forEach(function(color) {
	color.addEventListener('click', function () {
		var selection = window.getSelection();
		var range = document.createRange();
		range.selectNodeContents(color);
		selection.removeAllRanges();
		selection.addRange(range);

		try{
			document.execCommand('copy');
			selection.removeAllRanges();

			var original = color.textContent;
			color.textContent = 'Copied!';
			color.classList.add('success');

			setTimeout(function () {
				color.textContent = original;
				color.classList.remove('success');
			}, 1200);
		} catch(e) {
			var errorMsg = document.querySelector('.error-msg');
			errorMsg.classList.add('show');


			setTimeout(function () {
				errorMsg.classList.remove('show');
			}, 1200);
		}

	});
})