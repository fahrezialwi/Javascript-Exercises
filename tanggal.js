var tanggal, bulan, tahun = ""
var arrBulan = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember"
]

var d = new Date();
var year = d.getFullYear();
var month = d.getMonth()
var date = d.getDate()

for (var i = 1; i <= 31; i++) {
    if (i == date) {
        tanggal += `<option selected>${i}</option>`
    } else {
        tanggal += `<option>${i}</option>`
    }
}

for (var i = 0; i < arrBulan.length; i++) {

    if (i == month) {
        bulan += `<option selected>${arrBulan[i]}</option>`
    } else {
        bulan += `<option>${arrBulan[i]}</option>`
    }
}

for (var i = 1950; i <= 2020; i++) {
    if (i == year) {
        tahun += `<option selected>${i}</option>`
    } else {
        tahun += `<option>${i}</option>`
    }
}

document.getElementById("tanggal").innerHTML = tanggal
document.getElementById("bulan").innerHTML = bulan
document.getElementById("tahun").innerHTML = tahun