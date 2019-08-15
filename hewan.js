let arrHewan = ["Ayam", "Kucing", "Macan", "Gajah", "Kera", "Sapi", "Kuda"]
let namaHewan = ""

let fungsiMasuk = () => {
    let namaBaru = document.getElementById("input").value
    arrHewan.push(namaBaru)
    fungsiTabel(arrHewan)
}

let fungsiTabel = (array) => {
    let arrBaru = array.map((val) => {
        return `<tr><td>${val}</td></tr>`
    })

    document.getElementById("hewan").innerHTML = arrBaru.join("")
}

let toggle = 1

let fungsiSort = () => {
    if (toggle == 1) {

        let hasilSortHewan = []

        hasilSortHewan = arrHewan.sort((a, b) => {
            let nameA = a.toLowerCase()
            let nameB = b.toLowerCase()
            if (nameA < nameB)
                return -1
            else if (nameA > nameB)
                return 1
            return 0
        })

        fungsiTabel(hasilSortHewan)
        toggle = 0

    } else {

        let hasilSortHewan = []
        hasilSortHewan = arrHewan.sort((a, b) => {
            let nameA = a.toLowerCase()
            let nameB = b.toLowerCase()
            if (nameA < nameB)
                return 1
            else if (nameA > nameB)
                return -1
            return 0
        })

        fungsiTabel(hasilSortHewan)
        toggle = 1
    }
}

fungsiTabel(arrHewan)
