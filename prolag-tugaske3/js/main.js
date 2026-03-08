// js/main.js
// Fungsi untuk memuat navbar ke dalam elemen dengan id "navbar-container"
async function loadNavbar() {
    const isSubPage = window.location.pathname.includes('/pages/');
    const prefix = isSubPage ? '../' : '';
    
    const navbarHTML = `
    <nav class="navbar">
        <div class="logo">PROLANG<span>TASK</span></div>
        <div class="nav-links">
            <a href="${prefix}index.html">Home</a>
            <a href="${prefix}pages/soal1.html">P1</a>
            <a href="${prefix}pages/soal2.html">P2</a>
            <a href="${prefix}pages/soal3.html">P3</a>
            <a href="${prefix}pages/bonus.html">Bonus</a>
        </div>
    </nav>`;

    document.getElementById('navbar-container').innerHTML = navbarHTML;
}

// Jalankan fungsi saat halaman dimuat
document.addEventListener('DOMContentLoaded', loadNavbar);