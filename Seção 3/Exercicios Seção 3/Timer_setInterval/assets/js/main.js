/*      **** Instruções da atividade ****
- O timer tem que iniciar uma contagem
- o botão de pausar deve pausar a contagem e o o relógio deve ficar com a coloração vermelha neste estado
- é preciso zerar o timer com o botão zerar
*/

// new Date(0);


// const relogio = document.querySelector('.relogio');
// const iniciar = document.querySelector('.iniciar');
// const pausar = document.querySelector('.pausar');
// const zerar = document.querySelector('.zerar');

function relogio() {
    
    function getTimeFromSeconds(segundos) {
        const data = new Date(segundos * 1000);
        return data.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'GMT'
            });
    }    

    const relogio = document.querySelector('.relogio');
    let segundos = 0;
    let timer;

    function iniciaRelogio() {
        timer = setInterval(function() {
            segundos++;
            relogio.innerHTML = getTimeFromSeconds(segundos);
    }, 1000);
    }

    document.addEventListener('click', function(e) {
        const el = e.target;
    
        if(el.classList.contains('zerar')) {
            relogio.classList.remove('pausado');
            clearInterval(timer);
            segundos = 0;
            relogio.innerHTML='00:00:00';
        }

        if(el.classList.contains('iniciar')) {
            relogio.classList.remove('pausado');
            clearInterval(timer);
            iniciaRelogio();
        }

        if(el.classList.contains('pausar')) {
            clearInterval(timer);
            relogio.classList.add('pausado');
        }

});

}
relogio();

// Como capturar evento de clique
// iniciar.addEventListener('click', function(event) {
//     relogio.innerHTML = 'clique no iniciar';
// });

// pausar.addEventListener('click', function(event) {
//     alert('Cliquei no pausar');
// });

// zerar.addEventListener('click', function(event) {
//     alert('Cliquei no zerar');
// });
