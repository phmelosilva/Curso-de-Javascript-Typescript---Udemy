function rand(min = 1000, max = 3000) {
    const num = Math.random() * (max - min) + min;
    return Math.floor(num);
}
console.log(rand());

// function f1() {
//     setTimeout(function() {
//         console.log('f1');
//     }, rand());
// }
// function f2() {
//     setTimeout(function() {
//         console.log('f2');
//     }, rand());
// }
// function f3() {
//     setTimeout(function() {
//         console.log('f3');
//     }, rand());
// }
//O código abaixo executa primeiro o Olá mundo porque não tem timeout 
// e depois f1,f2 e f3 numa ordem que não sabemos qual é por conta do rand() e setTimeout para simular a demora de uma resposta no navegador
// f1();
// f2();
// f3();
// console.log('Olá mundo!');

// Já quando usamos callback, podemos por a ordem que queremos de quando eu quero que uma função seja executada
function f1(callback) {
    setTimeout(function() { //a função anônima já é um callback porque depende do setTimeout para ser executado.
        console.log('f1');
        if (callback) callback(); // se existir callback ele executa callback()
    }, rand());
}
function f2(callback) {
    setTimeout(function() {
        console.log('f2');
        if (callback) callback();
    }, rand());
}
function f3(callback) {
    setTimeout(function() {
        console.log('f3');
        if (callback) callback();
    }, rand());
}

// Da seguinte forma, f2 nunca será executado antes de f1
// assim como f3 nunca será executado antes de f2 usando callback.

// f1(function() {
//     f2(function() {
//         f3(function() {
//             console.log('Olá mundo!');
//         });
//     });
// });

// Criando funções que fazem a mesma coisa que os callbacks acima!
f1(f1Callback);

function f1Callback() {
    f2(f2Callback);
}

function f2Callback() {
    f3(f3Callback);
}

function f3Callback() {
    console.log('Olá mundo!');
}
// Logo, callback são funções que você chama quando outra terminar de ocorrer.