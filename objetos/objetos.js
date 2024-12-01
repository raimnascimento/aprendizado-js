// funcoes dentro de objeto chama-se metodo
// como a funcao esta dentro de um objeto, o this assume o objeto
const pessoa = {
    nome: 'Raissa',
    idade: 21,

    descricao: function () {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
}

console.log(pessoa.nome);
console.log(pessoa);

// editando informações
pessoa.altura = 1.62;
// editando dinamicamente
// pessoa['altura'] = 1.57;

// deletando informacoes
delete pessoa.nome;

pessoa.nome = 'Raissa';

pessoa.descricao();

console.log(pessoa['idade']);
