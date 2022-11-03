// return
// retorna um valor
// termina a função
function soma(a, b) {
    return a+b;
}
let s1 = soma(2, 5); //s1 recebe o valor de retorno da função soma(2, 5);

// document.addEventListener('click', function() {
//     document.body.style.backgroundColor = 'red';
// }); // Não retorna nada! Ou seja, retorna apenas undefined quando for chamado;

function criaPessoa(nome, sobrenome) {
    return {nome, sobrenome};
}

const p1 = criaPessoa('Luiz', 'Otavio');
const p2 = { 
    nome: 'João',
    sobrenome: 'Oliveira'
};
//Ambos os console.log abaixo retornam a mesma coisa!
console.log(p1);
console.log(p2);

// Função que executa outra dentro dela de forma dinãmica
function falaFrase(comeco) {
    function falaResto(resto) {
        return comeco + '' + resto;
    }
    return falaResto;
}

const fala = falaFrase('Olá');
const resto = fala('mundo!');
console.log(resto);

// Repetição que poderiamos evitar
// function duplica(n) {
//     return n*2;
// }

// function triplica(n) {
//     return n*3;
// }

// function quadriplica(n) {
//     return n*4;
// }

function criaMultiplicador(multiplicador) {
    // multiplicador
    return function(n) {
        return n * multiplicador;
    }
}

const duplica = criaMultiplicador(2); 
const triplica = criaMultiplicador(3); 
const quadriplica = criaMultiplicador(4); 

console.log(duplica(2)); // 4
console.log(triplica(2)); // 6 
console.log(quadriplica(2)); // 8