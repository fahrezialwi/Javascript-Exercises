let arrIkan = []

do {
    let ikan = prompt("Masukkan nama ikan:")
    lanjut = ikan.includes("-")

    arrIkan.push(ikan)
    
} while (!lanjut)

console.log(arrIkan)


let hasilFilterIkan = arrIkan.filter((val) => {
   return val.length > 4
})

console.log(hasilFilterIkan)

let hasilSortIkan = hasilFilterIkan.sort((a, b) => {
    let nameA = a.toLowerCase()
    let nameB = b.toLowerCase()
    if (nameA < nameB)
        return 1
    else if (nameA > nameB)
        return -1
    return 0
})

alert('Nama-nama ikan:\n' + hasilSortIkan.map((val, idx) => `${idx+1}. ${val}\n`).join(""))