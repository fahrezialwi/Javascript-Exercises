do {
    var nama = prompt("Masukkan nama:")
    var lanjut

    if (isNaN(nama) == true ) {
        lanjut = false
        document.getElementById("nama").innerHTML = nama
    } else {
        alert ('Nama tidak boleh berupa angka')
        lanjut = true
    }
} while (lanjut)

var alamat = prompt("Masukkan alamat:")
document.getElementById("alamat").innerHTML = alamat

do {
    var umur = prompt("Masukkan umur:")
    var lanjut

    if (isNaN(umur) == false ) {
        lanjut = false
        document.getElementById("umur").innerHTML = umur
    } else {
        alert ('Umur tidak boleh berupa huruf')
        lanjut = true
    }
} while (lanjut)

var biodata = {
    nama: nama,
    alamat: alamat,
    umur: umur
}

console.log(biodata)