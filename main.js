var input = document.querySelector("input");
var btn = document.querySelector("button");
var ul = document.querySelector("ul");

function inputLength() {
	return input.value.length;
}

function addListItem() {
	var li = document.createElement("li");
		li.appendChild(document.createTextNode(input.value));
		ul.appendChild(li);
		input.value = "";
		console.log("Clicked!!");
}

btn.addEventListener("click", function (){
	if (inputLength() > 0) {
		addListItem();
	}
});

input.addEventListener("keypress", function(event) {
	if (inputLength() > 0 && event.keycode === 13) {
		addListItem();
	}
})