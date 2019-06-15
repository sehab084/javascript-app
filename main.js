//form submit event
var form = document.getElementById("addForm");
var itemList = document.getElementById("items");
var filter = document.getElementById("filter");
form.addEventListener("submit", addItem);
function addItem() {
  event.preventDefault();
  console.log("Hello");
}
