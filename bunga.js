let bunga
let arrBunga = []
let arrKapital = []

do {
    bunga = prompt("Masukkan nama bunga:")

    if (!bunga.includes(" ")){
        arrBunga.unshift(bunga)
    }
   
} while (!bunga.includes(" "))

console.log(arrBunga)

let arrPotong = arrBunga.slice(0, 2)

console.log(arrPotong)

arrKapital = arrPotong.map((val) => {
    return val.charAt(0).toUpperCase() + val.slice(1)
})

console.log(arrKapital)