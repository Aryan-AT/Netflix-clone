const splash = document.getElementById("splash");
const mainContent = document.getElementById("main-content");

splash.addEventListener("click", () => {
  splash.style.display = "none";
  mainContent.style.display = "block";
});
