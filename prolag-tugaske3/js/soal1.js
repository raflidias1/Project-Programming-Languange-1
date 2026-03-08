function hitungBBM() {
    let jarak = 560;
    let konsumsiMobil = 12;
    let hargaBensin = 13500;

    let totalLiter = jarak / konsumsiMobil;
    let totalBiaya = totalLiter * hargaBensin;

    let res = document.getElementById("hasil");
    res.style.display = "block";
    res.innerHTML = `
        <div style="color:#22d3ee; font-weight:bold; margin-bottom:10px;">ANALISIS PERJALANAN</div>
        <div>Bensin Dibutuhkan: <b>${totalLiter.toFixed(1)} Liter</b></div>
        <div>Total Biaya: <b>Rp ${totalBiaya.toLocaleString('id-ID')}</b></div>
    `;
}