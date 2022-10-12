// For in -> lê os índices ou chaves do objeto

const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Otávio',
    idade: 30
};

for (let chave in pessoa) {
    console.log(chave, pessoa[chave]);
}

const chave = 'nome';
console.log(pessoa[chave]);







//                 0       1      2
// const frutas = ['Pera', 'Maça', 'Uva'];

// for (let i = 0; i < frutas.length; i++) {
//     console.log(frutas[i]);
// }

// for (let i in frutas) {
//     console.log(i);
// }

// for (let indice in frutas) {
//     console.log(frutas[indice]);
// }