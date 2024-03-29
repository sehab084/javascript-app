var form = document.getElementById("addForm");
var item = document.getElementById("items");

form.addEventListener("submit", addItem);
function addItem(e) {
  e.preventDefault();
  //add input text
  var newItem = document.createElement("li");
  newItem.className = "list-group-item";
  inputValue = document.createTextNode(document.getElementById("item").value);
  newItem.appendChild(inputValue);
  //make delete button
  var btn = document.createElement("button");
  btn.className = "btn btn-dark btn-sm float-right delete";
  newBtn = document.createTextNode("-");
  btn.appendChild(newBtn);
  // add to main
  newItem.appendChild(btn);

  //add text
  item.appendChild(newItem);
}

var remove = document.getElementById("items");
remove.addEventListener("click", removeItem);
function removeItem(e) {
  if (e.target.classList.contains("delete")) {
    item.removeChild(e.target.parentElement);
  }
}

//filter
var filter = document.getElementById("filter");
filter.addEventListener("keyup", filterFunction);
function filterFunction(e) {
  inputValue = e.target.value.toLowerCase();
  //get items name as array
  itemsTagName = item.getElementsByTagName("li");
  //  console.log(itemsTagName);

  Array.from(itemsTagName).forEach(function(item) {
    var itemName = item.firstChild.textContent;
    console.log(itemName);
    if (itemName.toLowerCase().indexOf(inputValue) == -1) {
      item.style.display = "none";
    } else {
      item.style.display = "block";
    }
  });
}

// // Remove item
// function removeItem(e) {
//   if (e.target.classList.contains("delete")) {
//     var li = e.target.parentElement;
//     itemList.removeChild(li);
//   }
// }

// var form = document.getElementById("addForm");
// var itemList = document.getElementById("items");
// var filter = document.getElementById("filter");

// // Form submit event
// form.addEventListener("submit", addItem);
// // Delete event
// itemList.addEventListener("click", removeItem);
// // Filter event
// filter.addEventListener("keyup", filterItems);

// // Add item
// function addItem(e) {
//   e.preventDefault();

//   // Get input value
//   var newItem = document.getElementById("item").value;

//   // Create new li element
//   var li = document.createElement("li");
//   // Add class
//   li.className = "list-group-item";
//   // Add text node with input value
//   li.appendChild(document.createTextNode(newItem));

//   // Create del button element
//   var deleteBtn = document.createElement("button");

//   // Add classes to del button
//   deleteBtn.className = "btn btn-danger btn-sm float-right delete";

//   // Append text node
//   deleteBtn.appendChild(document.createTextNode("X"));

//   // Append button to li
//   li.appendChild(deleteBtn);

//   // Append li to list
//   itemList.appendChild(li);
// }

// // Remove item
// function removeItem(e) {
//   if (e.target.classList.contains("delete")) {
//     var li = e.target.parentElement;
//     itemList.removeChild(li);
//   }
// }

// // Filter Items
// function filterItems(e) {
//   // convert text to lowercase
//   var text = e.target.value.toLowerCase();
//   // Get lis
//   var items = itemList.getElementsByTagName("li");
//   // Convert to an array
//   Array.from(items).forEach(function(item) {
//     var itemName = item.firstChild.textContent;
//     if (itemName.toLowerCase().indexOf(text) != -1) {
//       item.style.display = "block";
//     } else {
//       item.style.display = "none";
//     }
//   });
// }
// */

// //form submit event
// var clickSubmit = document.getElementById("addForm");
// var itemList = document.getElementById("items");
// var removeItem = document.getElementById("button");

// document.addEventListener("submit", addItem);

// function addItem(e) {
//   e.preventDefault();
//   //get input value
//   var newItem = document.getElementById("item").value;
//   //create element
//   var li = document.createElement("li");
//   // add class
//   li.className = "list-group-item";
//   // add text
//   li.appendChild(document.createTextNode(newItem));

//   //delete button
//   var deleteBtn = document.createElement("button");
//   // add class
//   deleteBtn.className = "btn btn-danger btn-sm float-right delete";
//   // add text
//   deleteBtn.appendChild(document.createTextNode("-"));
//   //delete btn to li
//   li.appendChild(deleteBtn);

//   itemList.appendChild(li);
// }

// var removeItems = document.addEventListener("click", removeItemsFunction);
// function removeItemsFunction(e) {
//   if (e.target.classList.contains("delete")) {
//     var itemNumber = e.target.parentElement;
//     itemList.removeChild(itemNumber);
//   }
// }
