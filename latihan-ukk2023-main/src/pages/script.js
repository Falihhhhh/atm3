const input = document.getElementById('input')
const user = 2204
function tten() {
    if (input.value == '') {
      alert('pin tidak boleh kosong')
    }
    else if (input.value == user) {
        location.href = 'nominal.html'
    }
    else {
        alert('pin salah')
    }
}