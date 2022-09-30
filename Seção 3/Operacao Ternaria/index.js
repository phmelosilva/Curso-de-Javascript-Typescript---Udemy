// (condicao) ? 'Valor para verdadeiro' : 'Valor para falso';
const pontuacaoUsuario = 999;

//Formato usando operador ternário, equivalente ao uso do If
const nivelUsuario = pontuacao >= 1000 ? 'Usuário VIP' : 'Usuário normal';

const corUsuario = null;
const corPadrao = corUsuario || 'Preta'; // Falback -> Setando um valor padrão para a variável
console.log(nivelUsuario, corPadrao);

// Formato com If
// if (pontuacaoUsuario >= 1000) {
//     console.log('Usuário VIP');
// } else {
//     console.log('Usuário normal');
// }
