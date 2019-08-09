

function hasilTambah(){
    var num1 = parseInt(document.getElementById("num1").value)
    var num2 = parseInt(document.getElementById("num2").value)
    document.getElementById("hasil").innerHTML = num1+num2
}

function hasilKurang(){
    var num1 = parseInt(document.getElementById("num1").value)
    var num2 = parseInt(document.getElementById("num2").value)
    document.getElementById("hasil").innerHTML = num1-num2
}

function hasilKali(){
    var num1 = parseInt(document.getElementById("num1").value)
    var num2 = parseInt(document.getElementById("num2").value)
    document.getElementById("hasil").innerHTML = num1*num2
}

function hasilBagi(){
    var num1 = parseInt(document.getElementById("num1").value)
var num2 = parseInt(document.getElementById("num2").value)
    document.getElementById("hasil").innerHTML = num1/num2
}
