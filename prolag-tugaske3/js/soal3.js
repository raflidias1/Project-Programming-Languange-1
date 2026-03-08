function cekLulus() {
    let nilaiUAS = 72;
    let nilaiTugas = 68;
    let kehadiran = 80;

    let lulus = (nilaiUAS >= 70) && (nilaiTugas >= 60) && (kehadiran >= 75);

    let res = document.getElementById("hasil");
    res.style.display = "block";
    res.innerHTML = `
        <div style="text-align:center;">
            Status Kelulusan:<br>
            <span style="font-size:1.5rem; font-weight:800; color: ${lulus ? '#34d399' : '#fb7185'}">
                ${lulus ? 'LULUS' : 'TIDAK LULUS'}
            </span>
        </div>
    `;
}