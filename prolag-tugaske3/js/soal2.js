function distribusi() {
    let totalLaptop = 185;
    let jumlahLab = 7;

    let laptopPerLab = Math.floor(totalLaptop / jumlahLab);
    let sisaLaptop = totalLaptop % jumlahLab;

    let res = document.getElementById("hasil");
    res.style.display = "block";
    res.innerHTML = `
        <div>Laptop per Laboratorium: <b>${laptopPerLab} unit</b></div>
        <div style="color:#fb7185;">Laptop Tersisa: <b>${sisaLaptop} unit</b></div>
    `;
}