let arrAngka = []
let angka, minValue, maxValue

do {
    angka = prompt("Masukkan angka:")

    if (angka != 99) {
        arrAngka.push(angka)
    }

    minValue = Infinity
    maxValue = -Infinity

    for (item of arrAngka) {    
        if (item < minValue)
        minValue = item;
                    
        if (item > maxValue)
        maxValue = item;
    }

} while (angka != 99)

console.log(arrAngka)

let angkaKuadrat = arrAngka.map ((val) => {
    return val**2
})

console.log(angkaKuadrat)

console.log(`Angka terkecil: ${minValue}`)
console.log(`Angka terbesar: ${maxValue}`)
