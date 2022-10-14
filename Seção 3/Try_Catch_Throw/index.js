

function soma(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        // O throw vai disparar um erro, sendo qualquer coisa que mandarmos
        // throw('x e y precisam ser números.');
        throw new Error('x e y precisam ser números.'); //Temos funções construtores de erros do próprio Javascript, temos ReferenceError e outros tipos 
                                                        //para entender o tipo de erro!     
    }                                                   // O Javascript informa a string que enviamos/lançamos para mostrar que é o erro em questão
                                                        // No caso, ele vai exibir 'x e y precisam ser números.' 
    return x + y;
}
try {
    console.log(soma(1, 2));
    console.log(soma('1', 2));
} catch(error) {
    // console.log(error);
    console.log('Alguma coisa mais amigável para o usuário.');
}




try {
    console.log(naoExisto); //Vai tentar executar este código, vai ver que não 
                            // funciona e ai vai ir pro catch que capturou o erro e executar 
                            // a linha de comando do catch, similar ao if/else.
} catch(err) {
    console.log('NaoExisto não existe.');
    console.log(err); //Captura do erro, aqui podemos ver ele.
}