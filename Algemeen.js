// Hamburgermenu
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


// to top button
mybutton = document.getElementById("toTop");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		//safari						andere browsers
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
}

function topFunction() {
	document.body.scrollTop = 0; // For Safari
	document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }


// change css
function swapStyleSheet(sheet) {
	document.getElementById('lightCss').setAttribute('href', sheet);
}


// // Modal image
// var modal = document.getElementsByClassName("modal");

// var img = document.getElementById("Project1Foto1");
// var modalImg = document.getElementById("img01");

// img.onclick = function(){
// 	modal.style.display = "block";
// 	modalImg.src = this.src;
// }

// var span = document.getElementsByClassName("close")[0];

// span.onclick = function() { 
//   modal.style.display = "none";
// }