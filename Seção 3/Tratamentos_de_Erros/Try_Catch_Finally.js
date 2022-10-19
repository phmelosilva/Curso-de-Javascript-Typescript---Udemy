function retornaHora(data) {
    if (data && !(data instanceof Date)) { //quando a variável não é uma instância
        throw new TypeError('Esperando instância de Date.');
    }

    if (!data) {
        data = new Date(); //Envia a data automática se não enviarmos uma data
    }

    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit', 
        second: '2-digit',   
        hour12: false
    });
}

try {
    const data = new Date('01-01-1970 12:58:12');
    const hora = retornaHora(data);
    console.log(hora);
} catch(e) {
    // Tratar erro
    //console.log(e);
} finally {
    console.log('Tenha um bom dia.');
}









// try {
  
//     console.log('Abri um arquivo'); // É executada quando não há erros
//     console.log('Maipulei o arquivo e gerou erro');
//     console.log('Fechei o arquivo');    
    
//     // Este outro try catch também pode ser executado!
//     try {
//         console.log(b);
//     } catch(e) {
//         console.log('Deu erro');
//     } finally {
//         console.log('Também sou finally.');
//     }
    
// } catch (e) {
//     console.log('Tratando o erro');  //Não fecharia o arquivo, só trataria o erro

// } finally {
//     console.log('FINALLY: Eu sempre sou executado'); // É executado sempre, mas podemos omiti-lo

// }