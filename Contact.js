document.getElementsByClassName('menutoggle')[0].onclick = function() {
	
	var menu = document.getElementById('menu');

	if(menu.classList.contains('active')){
		menu.classList.remove('active');
		menu.classList.add('inactive');
	}
	else {
		menu.classList.remove('inactive');
		menu.classList.add('active');
	}
}

// change css
function swapStyleSheet(sheet) {
	document.getElementById('lightCss').setAttribute('href', sheet);
}