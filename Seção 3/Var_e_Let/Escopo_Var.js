const verdadeira = true;

// let nome = 'Luiz'; // criando
// var nome2 = 'Luiz'; // criando


// if (verdadeira) {
//     let nome = 'Otávio';  // criando outra variável
//     var nome2 = 'Rogério'; // redeclarando

//     if (verdadeira) {
//         var nome2 = 'Ronaldo'; //Redeclarada
//         let nome = 'Outra coisa';
//     } 
// }

// console.log(nome, nome2);

var sobrenome = 'Miranda';

function falaOi() {
    var nome = 'Luiz';
    console.log(sobrenome); // podemos usar porque a função consegue pegar variáveis globais
}
console.log(nome); /* Resultará em erro de definição porque o escopo
                   de função não se liga diretamente com o externo dessa forma
                   */
falaOi();
