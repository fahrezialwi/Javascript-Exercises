let negara
let arrNegara = []

do {
    negara = prompt("Masukkan nama negara:")
    let check = negara.includes("a")

    if (check) {
        arrNegara.push(negara)
    } else {
        alert("Nama negara tidak mengandung huruf 'a'")
    }

} while (arrNegara.length < 5)

console.log(arrNegara)