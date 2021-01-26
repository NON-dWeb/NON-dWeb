var h1 = document.querySelector("#motbienvenue");

h1.addEventListener("input", function() {
  this.setAttribute("data-text", this.innerText);
});
