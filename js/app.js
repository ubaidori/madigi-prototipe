const loginScreen = document.getElementById("loginScreen");
const appScreen = document.getElementById("appScreen");
const loginForm = document.getElementById("loginForm");

const openSidebarButton = document.getElementById("openSidebar");
const sidebar = document.getElementById("sidebar");
const sidebarOverlay = document.getElementById("sidebarOverlay");

if (loginForm) {
  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    loginScreen.classList.add("hidden");
    appScreen.classList.remove("hidden");
  });
}

if (openSidebarButton && sidebar && sidebarOverlay) {
  openSidebarButton.addEventListener("click", function () {
    sidebar.classList.remove("-translate-x-full");
    sidebarOverlay.classList.remove("hidden");
  });

  sidebarOverlay.addEventListener("click", function () {
    sidebar.classList.add("-translate-x-full");
    sidebarOverlay.classList.add("hidden");
  });
}