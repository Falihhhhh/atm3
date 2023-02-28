const uang ={
    seratus:"100000",
    duaratus:"200000",
    tigaratus:"300000",
    satujuta:"1000000",
    satusetengah:"1500000",
    duajuta:"2000000",
}
const saldo = 5000000
alert("saldo anda "+ saldo)
function transaksiHandler(value) {
    if (value <= saldo) {
        const konfirm = confirm(`Anda akan menarik uang sebesar ${value} saldo anda sebesar ${saldo}`)

        if (konfirm == true) {
            location.href = "Kartu.html"
        }
        
    } else {
        alert("Saldo anda tidak mencukupi")
        const konfir = confirm("Fitur tidak tersedia, Apakah anda ingin membatalkan ?")
        if (konfir) {
            alert("sisa saldo Anda "+ saldo-value)
            location.href = "Kartu.html"
        }
    }
}

function cancel() {
    
    const konfir = confirm("Fitur tidak tersedia, Apakah anda ingin membatalkan ?")
    if (konfir) {
        location.href = "Kartu.html"
    }
}