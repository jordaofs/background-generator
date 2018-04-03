var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var color3 = document.querySelector(".color3");
var color4 = document.querySelector(".color4");
var body = document.getElementById("gradient");

function display_css(){
	css.textContent = body.style.background + ";"
}

function generate_background(){
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", "
	+ color2.value
	+ ")";

	display_css()
}

function getRandomColor() {
	max = 1 << 24;
	return '#' + 
	(max + Math.floor(Math.random()
	*max)).toString(16).slice(-6);
}

function random_gradient(){
	body.style.background =
	"linear-gradient(to right, "
	+ getRandomColor()
	+ ", "
	+ getRandomColor()
	+ ")";

	display_css()
}

function initialGradient(){
	body.style.background =
	"linear-gradient(to right, #FF0000, #FFFF00"
	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", generate_background);

color2.addEventListener("input", generate_background);

color3.addEventListener("click", random_gradient);

color4.addEventListener("click", initialGradient);