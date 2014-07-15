window.onload = function() {

	// State Vars
	var form = document.getElementById('form');
	var inputField = document.getElementById('listInput');
	var submit = document.getElementById('submitButton');
	var tasks = document.getElementById('displayList');

	// event listener
	form.onsubmit = function(event) {
		event.preventDefault();

		// creating new elements and nodes
		var newItem = document.createElement('li');
		var text = document.createTextNode(inputField.value);

		var rm = document.createElement('button');
		var check = document.createTextNode("X");

		//appending elements and nodes
		tasks.appendChild(newItem);
		newItem.appendChild(text);

		rm.appendChild(check);
		newItem.appendChild(rm);

		// remove items function 
		rm.onclick = function() {
		// removes li element and everything appended in it
		newItem.remove();
	}
	// reset after each added item
	this.reset();
	}


}