const loginForm = document.getElementById("loginForm");

if (loginForm) {
  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Login simulasi berhasil. Selanjutnya masuk ke Dashboard Ustadz.");
  });
}