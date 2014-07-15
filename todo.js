window.onload = function() {

	var form = document.getElementById('form');
	var task = document.getElementById('taskList');
	var add = document.getElementById('addItem');
	var items = document.getElementById('displayList');

	form.onsubmit = function(event) {
		event.preventDefault();
		var newItem = document.createElement('li');
		var text = document.createTextNode(task.value);

		var rm = document.createElement('button');
		var check = document.createTextNode("X");


		items.appendChild(newItem);
		newItem.appendChild(text);

		rm.appendChild(check);
		newItem.appendChild(rm);


		rm.onclick = function() {
		newItem.remove();
	}
	this.reset();
	}


}