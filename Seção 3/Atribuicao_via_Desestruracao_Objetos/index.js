const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 30,
    endereco: {
        rua: 'Av Brasil',
        numero: 320
    }
};

// ** Atribuição normal **
// const nome = pessoa.nome; 

// ** Atribuição via desestruturação
const { nome, sobrenome, ...resto} = pessoa;
console.log(nome, resto); 