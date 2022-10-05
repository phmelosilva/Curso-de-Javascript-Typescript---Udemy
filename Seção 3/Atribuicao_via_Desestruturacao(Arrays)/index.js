// ... rest, ... spread

// const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];
//     /* A desestruturação consegue pegar valores de um array e 
//         adicioná-los diretamente aos valores de uma variável
//             */

// const [primeiroNumero, segundoNumero, ...resto] = numeros; /*
//             primeiroNumero apresenta o valor 1000 e segundoNumero o valor 2000
//             já o resto é uma variável que se tornou um array por armazenar o resto dos valores do array que 
//             foi atribuído de forma desestruturada
// */
// console.log(primeiroNumero, segundoNumero, resto);

// const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];
// const [um, ,tres, ,cinco, ,sete]  = numeros;

// console.log(um, tres, cinco, sete);


// No índice 0 de numeros temos o array [1, 2,3], no índice 1 temos o [4, 5, 6] e no índice 3 temos [7, 8, 9]
const numeros = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ];
const [lista1, lista2, lista3] = numeros;
console.log(lista3[2]); //acessa o número 9 
