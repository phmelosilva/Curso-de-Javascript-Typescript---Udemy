
// const tresHoras = 60 * 60 * 3 * 1000; //Multiplicamos por 1000 por ser em milésimos de segundo
// const umDia = 60 * 60 * 24 * 1000;
// const data = new Date(0 + tresHoras); // 01/01/1970 Timestamp unix ou época unix
// console.log(data.toString()); //Resulta em 1 de janeiro de 1970 às 00:00 no GMT

// ----------- Date em number ------------
// const data = new Date(a, m, d, h, M, s, ms) a = ano, m = mês, d = dia, h = hora, M = minuto, s = segundo, ms = milésimo segundo
// const data = new Date(2019, 3, 20, 15, 14, 27, 500); // 20 de abril de 2019 às 15:14:27 , 500 é um valor de milésimos de segundos.
// const data = new Date(2019, 3, 20, 15, 14, 60); // se eu coloco 60 segundos, ele corrige os minutos para 15
// const data = new Date(2019, 3); // Omitindo o dia, hora, etc ele seta esses valores para 0, o Mês Abril é o 3 pq ele começa a contar Janeiro a partir do 0.

// -------- Date em String ---------------
const data = new Date('2019-04-20 20:20:59'); //Passando os dados em string
console.log('Dia', data.getDate()); // os métodos pegam os valores,
console.log('Mês', data.getMonth() + 1); // Mẽs começa do valor zero
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Min', data.getMinutes());
console.log('Seg', data.getSeconds());
console.log('ms', data.getMilliseconds());
console.log('Dia semana', data.getDay()); // 0 - Domingo, 6 - Sábado
console.log(data.toString()); 
console.log(Date.now()); //Retorna um valor correspondente ao tempo que se passou desde o início em milésimos de segundos.

