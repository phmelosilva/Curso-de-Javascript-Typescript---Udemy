// querySelector pega apenas o primeiro elemento que achar, se tiver outro de mesmo nome ele não pega
const paragrafos = document.querySelector('.paragrafos');
const ps = paragrafos.querySelectorAll('p'); //Cria uma NodeList

const estilosBody = getComputedStyle(document.body); //pega tudo de css que foi computado no body
const backgroundColorBody = estilosBody.backgroundColor;
console.log(backgroundColorBody);

for (let p of ps) { //Itera sobre os parágrafos
    // background-color(CSS) convertou para quemelCase em JS: backgroundColor
    p.style.backgroundColor = backgroundColorBody;
    p.style.color = '#FFFFFF'; //paragrafos na cor branca
    console.log(p);
}

// Colocar a cor de fundo do body nos ps
// colocar a cor do texto como branca
