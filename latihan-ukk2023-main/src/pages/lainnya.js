let nominal= document.getElementById('input')
    const saldo = 1000000
    alert(`Anda memiliki uang tunai sebesar ${saldo}`)

    function tten() {
        if (nominal.value == '') {
            alert('nominal tidak boleh kosong')
        }
        else if (nominal.value <= 0) {
            alert('nominal tidak boleh minus')
        }
        else if (nominal.value > saldo) {
            alert('saldo tidak cukup')
        }
        else if (nominal.value % 50000 == 0) {
            if (confirm(`Anda akan mengambil uang sebesar ${nominal.value} dengan sisa uang ${saldo - nominal.value}`)) {
               location.href = 'kartu.html' 
            }
        }
        else{
            alert('pecahan harus 50.000 dan 100.000')
        }
    }
