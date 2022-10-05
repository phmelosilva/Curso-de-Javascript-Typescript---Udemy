const verdadeira = true;

let nome = 'Luiz'; // criando
var nome2 = 'Luiz';

if (verdadeira) {
    let nome = 'Otávio';  // criando outra variável
    console.log(nome, nome2); // resulta Otávio Luiz
    /* Isso ocorreu porque o let declarado dentro do If é um bloco,
     então é uma variável local daquele bloco diferente do escopo
     de fora do bloco!
    */

     if (verdadeira) {
        let nome = 'Outra coisa';
        console.log(nome); //resulta Outra coisa
        
        /* Se não existisse a variável let nome = 'Outra coisa' o
        Javascript iria buscar no próximo escopo o valor dessa variável
        para exibir no console.log, o que iria ser o let nome = 'Otávio' 
        */
     }
}