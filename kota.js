arrKota = []
var lanjut

do {
    if (arrKota.length<5) {
        var kota = prompt("Masukkan nama kota:")
        arrKota.push(kota)
        lanjut = true
    } else {
        lanjut = false
    }
} while (lanjut)

console.log(arrKota)

var arrKotaSort = arrKota.sort((a, b) => {
    var kotaA = a.toLowerCase()
    var kotaB = b.toLowerCase()
    if (kotaA < kotaB)
        return -1
    else if (kotaA > kotaB)
        return 1
    return 0
})

console.log (arrKotaSort)

var arrKotaIncludes = []

for (var i = 0 ; i<arrKota.length ; i++){
    var ada = arrKota[i].includes("a")
    if (ada) {
        arrKotaIncludes.push(arrKota[i])
    }
}

console.log(arrKotaIncludes)