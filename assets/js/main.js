const id = "G01-dsc";
const version = "1.1.2";

$("input").keyup(function (e) {
  console.log(e.key);
  if (e.key === "Enter") {
    this.value = "";
    this.blur();
  }
});

$(".profil-logo").click(function () {
  console.log("Le as dado click al logo!");
});

document.querySelector("#note").value = localStorage.getItem("Note");
document.querySelector("#note").addEventListener("keyup", (e) => localStorage.setItem("Note", e.target.value));
