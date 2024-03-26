function calc() {
    var fid = document.getElementById('fid').valueAsNumber;
    var val = document.getElementById('val').valueAsNumber;
    const output = document.getElementById('output');

    var result;

    if (fid >= 5) {
        if (val > 5000) 
            result = '20%';
        else if (val > 1000)
            result = '10%';
        else
            result = 'Sem desconto';
    } else
        result = 'Sem desconto';

    output.textContent = result;
}