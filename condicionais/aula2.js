let numero = 7;

// recomendavel que em variaveis booleanas seja colocado o is antes do nome
const isNumeroPar = (numero % 2) === 0;

if (numero === 0) {
    console.log('Digite um número acima de 0');
} else if (isNumeroPar) {
    console.log('Par');
} else {
    console.log('Impar');
}

// a exclamação converte o booleano para o oposto dele
// if (!numeroPar) {
//     console.log('Impar');
// }