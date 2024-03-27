function exec() {
    var name = document.getElementById('name').value
    var age = document.getElementById('age').valueAsNumber
    var sex = document.getElementById('sex').value

    const outName = document.getElementById('outName')
    const outAge = document.getElementById('outAge')
    const outSex = document.getElementById('outSex')

    const output = document.getElementById('output')

    outName.textContent = name;
    outAge.textContent = age;
    outSex.textContent = sex;

    if (sex == 'Masculino') {
        if (age >= 18 && age <= 65)
            output.textContent = `${name} está compreendido(a) entre 18 e 65 anos de idade e é do sexo masculino.`;
    } else
        output.textContent = `${name} ou não está entre 18 e 65 anos de idade e/ou não é do sexo masculino`;

}