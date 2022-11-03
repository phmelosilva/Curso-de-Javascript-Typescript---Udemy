function retornaFuncao() {
    const nome = 'Luiz';
    return function () {
        return nome;
    };
}

const funcao = retornaFuncao();
console.log(funcao); // A variável funcao vai receber a função anônima de dentro da retornaFuncao()
console.dir(funcao); // retorna [Function] para dizer que a variável é uma função anônima, a mesma do console.log acima.

// Closure = Habilidade de uma função de acessar o seu escopo léxico
// No caso acima, o Closure da função é 'Luiz'

// Na função abaixo, podemos mudar o Closure ao passarmos ele como parâmetro da função! 
function retornaFuncao2(nome) {
    return function () {
        return nome;
    };
}

const funcao2 = retornaFuncao2('Luiz');
const funcao3 = retornaFuncao2('João');

console.log(funcao2(), funcao3()); // Retornam Luiz e João
