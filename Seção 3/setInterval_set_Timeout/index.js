function mostraHora() {
    let data = new Date();

    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    });
}

// function funcaDoInterval() {
//     console.log(mostraHora());
// }

//setInterval() -> Vai configurar um intervalo de tempo para que alguma função seja executada durante um determinado momento.
//Primeiro parâmetro é a função passada como referência e o segundo é de quanto em quanto tempo que seja executado, temos 1000 que corresponde a 1000 milisegundos que é 1 segundo.
// setInterval(funcaDoInterval, 1000); 

const timer = setInterval(function () {
    console.log(mostraHora());
}, 1000);

//setTimeout() -> Função que para a execução do setInterval, ela também recebe uma função
//              e o segundo parâmetro é o tempo, em milisegundos, que deve percorrer para executar a função passada
setTimeout(function () {
    clearInterval(timer);
}, 3000);

setTimeout(function() {
    console.log('Olá mundo!');
}, 5000 );
