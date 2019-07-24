var input = document.querySelector("input");
var btn = document.querySelector("img");
var ul = document.querySelector("ul");

function inputLength() {
	return input.value.length;
}

function addListItem() {
	var li = document.createElement("li");
		li.appendChild(document.createTextNode(input.value));
		ul.appendChild(li);
		input.value = "";
}

function clickEnter() {
	if (inputLength() > 0) {
		addListItem();
		console.log("Clicked!!");
	}
}

function pressEnter(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		addListItem();
		console.log("Pressed Enter");
	}
}

btn.addEventListener("click", clickEnter);

input.addEventListener("keypress", pressEnter);