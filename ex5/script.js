const quadrado = (num) => Math.pow(num, 2);

function exec() {
    var num = document.getElementById('num').valueAsNumber
    
    const quad = document.getElementById('quad')

    quad.textContent = quadrado(num);
}

