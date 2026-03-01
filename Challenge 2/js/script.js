const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const hasil = document.getElementById("hasil");
const card = document.getElementById("card");
const loading = document.getElementById("loading");

/* ENTER pindah field */
usernameInput.addEventListener("keydown", function(e) {
  if (e.key === "Enter") {
    e.preventDefault();
    passwordInput.focus();
  }
});

/* ENTER langsung login */
passwordInput.addEventListener("keydown", function(e) {
  if (e.key === "Enter") {
    e.preventDefault();
    login();
  }
});

/* Auto select saat fokus */
usernameInput.addEventListener("focus", function() {
  this.select();
});

passwordInput.addEventListener("focus", function() {
  this.select();
});

/* Show Hide Password */
function togglePassword() {
  passwordInput.type =
    passwordInput.type === "password" ? "text" : "password";
}

/* Login Logic */
function login() {

  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();

  hasil.innerHTML = "";
  card.classList.remove("shake", "success-glow");
  loading.classList.remove("hidden");

  setTimeout(() => {

    loading.classList.add("hidden");

    if (username === "admin" && password === "12345") {

      hasil.innerHTML =
        "<span class='text-green-300 font-bold'>Login Berhasil ✅</span>";

      card.classList.add("success-glow");

    } else {

      hasil.innerHTML =
        "<span class='text-red-300 font-bold'>Login Gagal ❌</span>";

      card.classList.add("shake");

      setTimeout(() => {
        card.classList.remove("shake");
      }, 400);
    }

  }, 1000);
}