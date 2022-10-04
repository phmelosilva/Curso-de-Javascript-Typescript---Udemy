
// ****** Jeito mais complicado de mostrar a data atual na página ******

// const h1 = document.querySelector('.container h1');
// const data = new Date();

// function getDiaSemanaTexto (diaSemana) {
//     let diaSemanaTexto;

//     switch (diaSemana) { 
//         case 0:
//             diaSemanaTexto = 'domingo';
//             return diaSemanaTexto;  
//         case 1:
//             diaSemanaTexto = 'segunda-feira';
//             return diaSemanaTexto;
//         case 2:
//             diaSemanaTexto = 'terça-feira';
//             return diaSemanaTexto;
//         case 3:
//             diaSemanaTexto = 'quarta-feira';
//             return diaSemanaTexto;      
//         case 4:
//             diaSemanaTexto = 'quinta-feira';
//             return diaSemanaTexto; 
//         case 5:
//             diaSemanaTexto = 'sexta-feira';
//             return diaSemanaTexto;
//         case 6:
//             diaSemanaTexto = 'sábado';
//             return diaSemanaTexto; 
//         default:
//             diaSemanaTexto = '';
//             return diaSemanaTexto;  
//         }
// }

// function getMesTexto(mes) {
//     switch (mes) { 
//         case 0:
//             mesTexto = 'janeiro';
//             return mesTexto;  
//         case 1:
//             mesTexto = 'fevereiro';
//             return mesTexto;  
//         case 2:
//             mesTexto = 'março';
//             return mesTexto;  
//         case 3:
//             mesTexto = 'abril';
//             return mesTexto;      
//         case 4:
//             mesTexto = 'maio';
//             return mesTexto;  
//         case 5:
//             mesTexto = 'junho';
//             return mesTexto;  
//         case 6:
//             mesTexto = 'julho';
//             return mesTexto;
//          case 7:
//             mesTexto = 'agosto';
//             return mesTexto; 
//          case 8:
//             mesTexto = 'setembro';
//             return mesTexto; 
//          case 9:
//             mesTexto = 'outubro';
//             return mesTexto; 
//          case 10:
//             mesTexto = 'novembro';
//             return mesTexto; 
//          case 11:
//             mesTexto = 'dezembro';
//             return mesTexto;   
//         default:
//             mesTexto = '';
//             return mesTexto;   
//         }
// }

// function zeroAEsquerda (num) {
//     return num >=10 ? num : `0${num}`;
// }


// h1.innerHTML = `${getDiaSemanaTexto(data.getDay())}, 
// ${data.getDate()} de ${getMesTexto(data.getMonth())} 
// de ${data.getFullYear()}
// ${zeroAEsquerda(data.getHours())}:${zeroAEsquerda(data.getMinutes())}`;


// *** Solução com base na Documentação do objeto Date ***
const h1 = document.querySelector('.container h1');
const data = new Date();
// *** O código abaixo deveria mostrar o mesmo resultado da solução de switch/case mas por algum motivo não está mostrando a hora, apenas a data em si***
h1.innerHTML = data.toLocaleDateString('pt-BR', { dateStyle: 'full'}, {timeStyle: 'short'});

