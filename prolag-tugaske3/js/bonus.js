function hitungBonus() {
    let nilaiUAS = 72;
    let nilaiTugas = 68;
    let kehadiran = 80;

    let lulus = (nilaiUAS >= 70) && (nilaiTugas >= 60) && (kehadiran >= 75);
    
    // Bonus: Ubah boolean ke angka tanpa IF
    let statusKelulusan = Number(lulus); 

    let res = document.getElementById("hasil");
    res.style.display = "block";
    res.innerHTML = `
        <div>Nilai Boolean: <b>${lulus}</b></div>
        <div style="margin-top:5px; padding:10px; background:rgba(255,255,255,0.1); border-radius:8px;">
            Status Angka: <span style="font-size:1.2rem; color:#22d3ee; font-weight:800;">${statusKelulusan}</span>
        </div>
    `;
}