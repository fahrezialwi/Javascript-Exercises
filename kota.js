arrKota = []
let kota, lanjut

do {
    if (arrKota.length < 5) {
        kota = prompt("Masukkan nama kota:")
        arrKota.push(kota)
        lanjut = true
    } else {
        lanjut = false
    }
} while (lanjut)

console.log(arrKota)

var arrKotaSort = arrKota.sort((a, b) => {
    let kotaA = a.toLowerCase()
    let kotaB = b.toLowerCase()
    if (kotaA < kotaB)
        return -1
    else if (kotaA > kotaB)
        return 1
    return 0
})

console.log (arrKotaSort)

let arrKotaIncludes = []

for (let i = 0 ; i<arrKota.length ; i++){
    let ada = arrKota[i].includes("a")
    if (ada) {
        arrKotaIncludes.push(arrKota[i])
    }
}

console.log(arrKotaIncludes)