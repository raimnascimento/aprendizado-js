const notas = [];

notas.push(5, 7, 8, 6, 10, 7);

// para saber o tamanho da lista
// console.log(notas.length);

let soma = 0

for (let i = 0; i < notas.length; i++) {
    const nota = notas[1];
    soma = soma + nota;    
}

const media = soma / notas.length;
console.log(media);