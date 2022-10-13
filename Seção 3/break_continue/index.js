const numeros = [1,2,3,4,5,6,7,8,9];


// tanto break quanto continue funcionam em todos os tipos de for
for (let numero of numeros) {
    if (numero === 2) {
        console.log('Pulei o número 2');
        continue; //Pula o numero 2
    }

    if (numero === 7) {
        console.log('7 encontrado, saindo...');
        break; //quebra o laço, ele sai do laço quando esse comando é executado
    }

    console.log(numero);
}