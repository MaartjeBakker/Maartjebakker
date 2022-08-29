document.getElementsByClassName('linkOpenen')[0].onclick = function() {
	
	var menu = document.getElementById('tekstUitbreiding');

	if(menu.classList.contains('active')){
		menu.classList.remove('active');
		menu.classList.add('inactive');
	}
	else {
		menu.classList.remove('inactive');
		menu.classList.add('active');
	}
}