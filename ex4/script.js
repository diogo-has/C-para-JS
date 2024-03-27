const hora = 10.0
const horaExtra = 15.0

function exec() {
    var norm = document.getElementById('norm').valueAsNumber
    var ext = document.getElementById('ext').valueAsNumber

    const outNorm = document.getElementById('outNorm')
    const outExt = document.getElementById('outExt')
    const outAno = document.getElementById('outAno')
    const outPop = document.getElementById('outAno')

    outNorm.textContent = norm * hora;

}