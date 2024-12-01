// ex de classe: carro com cor e ano / ex de instancia: civic 2012
class Pessoa {
    nome;
    idade;
    anoDeNascimento

// constructor é o que acontece quando algo é instanciado
// o parametro obriga que sempre que algo for instanciado, tenha aqueles valores, no caso: nome e idade
    constructor (nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2024 - idade;
    }

    descricao () {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
}

function compararPessoas(p1, p2) {
    if (p1.idade > p2.idade) {
        console.log(`${p1.nome} é mais velho(a) que ${p2.nome}`);
    } else if (p1.idade < p2.idade) {
        console.log(`${p1.nome} é mais novo(a) que ${p2.nome}`);
    } else {
        console.log(`${p1.nome} e ${p2.nome} possuem a mesma idade`);
    }
}

const raissa = new Pessoa('Raissa', 21);
const helena = new Pessoa('Helena', 30);

compararPessoas(raissa, helena);

// // instanciar novo objeto
// const raissa = new Pessoa('Raissa', 21);
// // raissa.nome = 'Raissa Nascimento';
// // raissa.idade = 21;

// const helena = new Pessoa('Helena', 30);
// // helena.nome = 'Helena Souza';
// // helena.idade = 30;

// console.log(raissa);
// console.log(helena);

// raissa.descricao();
// helena.descricao();