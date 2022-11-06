$("input").keyup(function (e) {
  console.log(e.key);
  if (e.key === "Enter") {
    this.value = "";
    this.blur();
  }
});


document.querySelector("#note").value = localStorage.getItem("Note");
document.querySelector("#note").addEventListener("keyup", (e) => localStorage.setItem("Note", e.target.value));