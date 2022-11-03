// argumentos (arguments) que sustenta todos os argumentos enviados
// function funcao() { //Mesmo se eu passar parâmetros e passar mais argumentos que o que ele sustenta, o arguments é preenchido com esse excesso.
//     let total = 0;
//     for (let argumento of arguments) {
//         total += argumento;
//     }

    // console.log(total);
    // console.log(arguments); -> Variável que armazena os argumentos passados, quando passados mais de 1 um, armazena num array.
//}
// funcao('Valor', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10); //Executa normalmente mesmo a função não tendo parâmetros

function funcao(a, b, c, d, e, f) {
    console.log(a, b, c, d, e, f);
}
funcao(1, 2, 3); // resulta: 1 2 3 undefined undefined undefined

function funcao(a, b) {
    b= b || 0; // Se eu n enviasse b, ele retornaria NaN porque seria 2 + undefined
    console.log(a + b);
}
funcao(2);

function funcao(a, b = 2, c = 4) {
    console.log(a + b + c);
}
funcao(2, undefined, 20); //Preciso mandar undefined se quero assumir o valor padrão do parâmetro

//Usando função para desestruturação de objetos
function funcao({ nome, sobrenome, idade}) {
    console.log(nome, sobrenome, idade);
}
funcao({ nome: 'Luiz', sobrenome: 'Otavio', idade: 20});

function conta(operador, acumulador, ...numeros) { // O rest operator sempre deve ser o último parâmetro da função!
    for (let numero of numeros) {
        if (operador === '+') acumulador += numero;
        if (operador === '-') acumulador -= numero;
        if (operador === '/') acumulador /= numero;
        if (operador === '*') acumulador *= numero;
    }
    console.log(acumulador);
}
conta('+', 0, 20, 30, 40, 50);