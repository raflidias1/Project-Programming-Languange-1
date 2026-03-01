const motivasiList = [
  "Error hari ini = skill besok 💻",
  "Mahasiswa SI itu future tech leader 🚀",
  "Ngoding bukan bakat, tapi latihan 🔥",
  "Setiap bug bikin kamu naik level 🎮",
  "Konsisten lebih penting dari pintar 📈"
];

function sapa() {
  let nama = document.getElementById("nama").value.trim();
  const hasil = document.getElementById("hasil");
  const motivasi = document.getElementById("motivasi");

  if (nama === "") {
    hasil.innerHTML = "<span class='text-yellow-300'>Nama tidak boleh kosong 😅</span>";
    return;
  }

  typeWriter("Halo " + nama + ", selamat belajar JavaScript!", hasil);
  hasil.classList.add("fade-in");

  const randomMotivasi = motivasiList[Math.floor(Math.random() * motivasiList.length)];

  setTimeout(() => {
    typeWriter(randomMotivasi, motivasi);
    motivasi.classList.add("fade-in");
  }, 1500);

  confetti({
    particleCount: 150,
    spread: 90,
    origin: { y: 0.6 }
  });
}

function typeWriter(text, element) {
  element.innerHTML = "";
  let i = 0;

  function typing() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(typing, 35);
    }
  }

  typing();
}