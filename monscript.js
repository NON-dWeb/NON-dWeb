/* Mot de bienvenue */
var h1 = document.querySelector("#motbienvenue");

if(h1) {
  h1.addEventListener("input", function() {
    this.setAttribute("data-text", this.innerText);
  });
}