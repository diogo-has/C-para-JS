function count() {
    var num = document.getElementById('num').valueAsNumber
    const output = document.getElementById('output')

    var string = ''

    for (; num <= 100; num++) 
        string += `${num} - `

    output.textContent = string;
}