const hora = 10.0
const horaExtra = 15.0

function exec() {
    var norm = document.getElementById('norm').valueAsNumber
    var ext = document.getElementById('ext').valueAsNumber

    const outNorm = document.getElementById('outNorm')
    const outExt = document.getElementById('outExt')
    const outAno = document.getElementById('outAno')
    const outPop = document.getElementById('outPop')

    outNorm.textContent = `R$${(norm * hora).toFixed(2)}`;
    outExt.textContent = `R$${(ext * horaExtra).toFixed(2)}`
    outAno.textContent = `R$${((norm * hora) + (ext * horaExtra)).toFixed(2)}` 
    outPop.textContent = `R$${(((norm * hora) + (ext * horaExtra)) * 0.08).toFixed(2)}`
}