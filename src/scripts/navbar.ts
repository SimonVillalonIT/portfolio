const openNavbar = document.getElementById("open");
const closeNavbar = document.getElementById("close");
const menu = document.getElementById("menu");

function toggle() {
  openNavbar?.classList.toggle("hidden");
  closeNavbar?.classList.toggle("hidden");
  menu?.classList.toggle("translate-x-[100vw]");
}

openNavbar?.addEventListener("click", toggle);
closeNavbar?.addEventListener("click", toggle);
