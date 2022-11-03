const nome = 'Luiz';

function falaNome() {
    // const nome = 'Otavio'; -> encontrou no escopo de função, então vai usar essa variável!
    console.log(nome);
}
falaNome(); //Escopo Léxico = Buscar uma variável fora do escopo da função, se ela não existir no escopo da função.

function usaFalaNome() {
    // const nome = 'Otavio'; -> a função executa e imprime 'Luiz', porque ela lembra o escopo léxico de onde ela foi declarada, 
    // que leva em consideração a variável nome = 'Luiz'
    falaNome();
}
usaFalaNome(); //Continua lembrando onde foi declarada e o que foi declarada dentro dela
