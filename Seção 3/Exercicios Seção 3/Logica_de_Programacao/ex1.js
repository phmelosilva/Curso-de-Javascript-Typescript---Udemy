// Escreva uma função que recebe 2 números e retorne o maior deles

function max (x, y) {
    return (x > y) ? x : y;
}

const max2 = (x,y) => x > y ? x : y;

// const max2 = (x,y) => {
//     return x > y ? x : y;
// }

console.log(max2(4,13));