var input = document.querySelector("input");
var btn = document.querySelector("button");
var ul = document.querySelector("ul");

// function inputLength() {
// 	return ;
// }

btn.addEventListener("click", function (){
	if (input.value.length > 0) {
		var li = document.createElement("li");
		li.appendChild(document.createTextNode(input.value));
		ul.appendChild(li);
		console.log("Clicked!!");
	}
});