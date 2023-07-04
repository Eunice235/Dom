function handleHoverIn() {
  document.getElementById("demo").style.backgroundColor = "blue";
}

// Function to handle hover-out event for the input with id "demo"
function handleHoverOut() {
  document.getElementById("demo").style.backgroundColor = "initial";
}

// Function to handle click event for the input with id "submit"
function handleClick() {
  document.getElementById("submit").style.backgroundColor = "red";
}

// Function to handle hover-in event for the input with id "submit"
function handleHoverInSubmit() {
  document.getElementById("submit").style.backgroundColor = "red";
}
function handleHoverOutSubmit() {
  document.getElementById("submit").style.backgroundColor = "initial";
}

// Adding event listeners for the hover events and click event
document.getElementById("demo").addEventListener("mouseover", handleHoverIn);
document.getElementById("demo").addEventListener("mouseout", handleHoverOut);

document.getElementById("submit").addEventListener("click", handleClick);
document.getElementById("submit").addEventListener("mouseover", handleHoverInSubmit);
document.getElementById("submit").addEventListener("mouseout", handleHoverOutSubmit);


function handleHoverInDom() {
  var elements = document.getElementsByClassName("Dom");
  for (var i = 0; i < elements.length; i++) {
      elements[i].style.backgroundColor = "red";
  }
}

// Function to handle hover-out event for elements with class "Dom"
function handleHoverOutDom() {
  var elements = document.getElementsByClassName("Dom");
  for (var i = 0; i < elements.length; i++) {
      elements[i].style.backgroundColor = "initial";
  }
}

// Adding event listeners for the hover events
var domElements = document.getElementsByClassName("Dom");
for (var i = 0; i < domElements.length; i++) {
  domElements[i].addEventListener("mouseover", handleHoverInDom);
  domElements[i].addEventListener("mouseout", handleHoverOutDom);
}