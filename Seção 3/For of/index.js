//For clássico - Geralmente com iteráveis (array ou strings)
// For in - Retorna o índice ou chave (string, array ou objetos)
// For of - Retorna o valor em si (iteráveis, arrays ou strings)

const nomes = ['Luiz', 'Otavio', 'Henrique'];

// for clássico
for (let i = 0; i < nomes.length; i++) {
    console.log(nomes[i]);
}

console.log('####');

//retorna o índice quando precisarmos.
//funciona para objetos para pegarmos a propriedade de um objeto.
for (let i in nomes) { 
    console.log(nomes[i]); //preciso do array para pegar o valor
}

console.log('####');

// Lê cada índice e pega o valor de um objeto iterável
for (let valor of nomes) {
    console.log(valor); 
}

// Não faz muita diferença de qual vou usar, 

// Mais formas de iterar sobre arrays
nomes.forEach(function(valor, indice, array) {
    console.log(valor, indice, array);
});