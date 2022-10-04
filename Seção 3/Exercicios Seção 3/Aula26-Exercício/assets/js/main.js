//pegou o formulario que precisava
const form = document.querySelector('#formulario'); 

form.addEventListener('submit', function(e) {

     // adicionou um evento de submit e prevenimos ele ser enviado sempre.
    e.preventDefault();
    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');
    
    // convertendo os inputs para numbers
    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if(!altura && !peso) {
        setResultado('Altura e peso inválidos', false);
        return;// não podemos esquecer do return para que
               // o resto do código não seja executado.
    }

    if (!peso) {
        setResultado('Peso inválido', false);
        return; // não podemos esquecer do return para que
                // o resto do código não seja executado.
    }

    if (!altura) {
        setResultado('Altura inválida', false);
        return; // não podemos esquecer do return para que
                // o resto do código não seja executado.
    }

   

    const imc = getImc(peso, altura);
    const nivelImc = getNivelImc(imc);
    
    const msg = `Seu IMC é ${imc} (${nivelImc}).`;
    setResultado(msg, true);
    console.log(imc, nivelImc);

    function getNivelImc (imc) {
        const nivel = ['abaixo do peso', 'Peso normal', 'Sobrepeso',
            'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];
        
        if (imc >= 39.9) return nivel[5];
        if (imc >= 34.9) return nivel[4];
        if (imc >= 29.9) return nivel[3];
        if (imc >= 24.9) return nivel[2];
        if (imc >= 18.5) return nivel[1];
        if (imc < 18.5) return nivel[0];
        
        
    }
 
;});

function getImc (peso, altura) {
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
}

function criaP () {
    const p = document.createElement('p');
    return p;
}


function setResultado (msg, isValid) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';

    const p = criaP();

    if (isValid) {
        p.classList.add('paragrafo-resultado');
    } else {
        p.classList.add('bad');
    }
    p.innerHTML = msg;
    resultado.appendChild(p);

}

