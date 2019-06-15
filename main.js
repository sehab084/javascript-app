//form submit event
var form = document.getElementById("addForm");
var itemList = document.getElementById("items");
var filter = document.getElementById("filter");

form.addEventListener("submit", addItem);

itemList.addEventListener("click", removeItem);

filter.addEventListener("keyup", fitlerItems);

function addItem(e) {
  event.preventDefault();

  var newItem = document.getElementById("item").nodeValue;

  var li = document.createElement("li");

  li.className = "list-group-list";

  li.appendChild(document.createTextNode(newItem));

  var deleteBtn = document.createElement("button");

  deleteBtn.className = "btn btn-danger btn-smfloat-right delete";

  console.log("Hello");
}
