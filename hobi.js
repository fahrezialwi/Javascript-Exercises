let hobi, cekAngka
let arrHobi = []
let manusia = {}

let nama = prompt("Masukkan nama:")

do {
    let hobi = prompt("Masukkan hobi:")
    cekAngka = isNaN(hobi)

    if (cekAngka){
        arrHobi.push(hobi)
    } else {
        if (arrHobi.length<=2){
            alert("Hobi Anda kurang banyak")
            cekAngka = true
        } else {
            cekAngka = false
        }
    }

} while (cekAngka)

manusia = {
    nama: nama,
    hobi: arrHobi
}

console.log(manusia)