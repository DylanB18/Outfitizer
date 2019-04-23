// Set the width of the side navigation to 250px and the left margin of the page content to 250px
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
};

// Set the width of the side navigation to 0 and the left margin of the page content to 0
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
};

//Thank For Feedback
function thankUser() {
   alert("Thank you for you submission!");
};

//Hide a Div
function toggleDiv(id) {
  var div = document.getElementById(id);
  div.style.display = div.style.display == "none" ? "block" : "none";
}