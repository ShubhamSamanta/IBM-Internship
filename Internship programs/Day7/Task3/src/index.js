var r = document.getElementById("r");
var g = document.getElementById("g");
var b = document.getElementById("b");
var app = document.getElementById("app");

r.addEventListener("click", function () {
  app.setAttribute("class", "RED");
});

g.addEventListener("click", function () {
  app.setAttribute("class", "GREEN");
});

b.addEventListener("click", function () {
  app.setAttribute("class", "BLUE");
});
