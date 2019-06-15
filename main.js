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

  deleteBtn.appendChild(document.createTextNode("X"));

  li.appendChild(deleteBtn);

  itemList.append(li);
}

//remove item
function removeItem(e) {
  if (e.target.classList.contains("delte")) {
    var li = e.target.parentElement;
    itemList.removeChild(li);
  }
}

//filter items
function fitlerItems(e) {
  var text = e.target.value.toLowerCase();

  var items = itemList.getElementsByTagName("li");

  Array.form(items).forEach(function(item) {
    var itemName = item.firstChild.textContent;
    if (itemName.toLowerCase().indexOf(text) != -1) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}
