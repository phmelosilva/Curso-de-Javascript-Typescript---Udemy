// Declaração de função (Function hoisting)
// Todas as execuções de funções são elevadas para o topo
// na ordem de execução pelo motor do Javascript, então não faz diferença eu chamar ela antes de declará-la ou depois

falaOi();
function falaOi() {
    console.log('Oie');
}

// First-class objects (Objetos de primeira classe)
// Function expression
// Uma constante recebe uma função como dado, isso é normal

// também podemos nomear a função para que outra variável a receba, da seguinte forma:
// const souUmDado = function nomeDaFuncao() {
//     console.log('Sou um dado.');
// }
const souUmDado = function() {  // função anônima
    console.log('Sou um dado.');
}

souUmDado(); // Executa a constante como uma função!

function executaFuncao(funcao) {
    console.log('Vou executar sua função abaixo:');
    funcao(); // Quando passo souUmDado, ele vira souUmDado() e a executa
}
executaFuncao(souUmDado);

// Arrow function
const funcaoArrow = () => {
    console.log('Sou uma arrow function');
}
funcaoArrow();

// Dentro de um objeto
const obj = {
    falar() {
        console.log('Estou falando...');
    }
};
obj.falar();