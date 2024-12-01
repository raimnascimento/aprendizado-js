// Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento.
// Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.   

// Código Condição de pagamento:

// 1 - A vista Débito, recebe 10% de desconto;
// 2 - A vista no Dinheiro ou PIX, recebe 15% de desconto;
// 3 - Em duas vezes, preço normal de etiqueta sem juros;
// 4 - Acima de duas vezes, preço normal de etiqueta mais juros de 10%;   

// Fontes e conteúdo relacionado

let valorProduto = 100;
const formaDePagamento = 4;


if (formaDePagamento === 1) {
    valorProduto = valorProduto - (valorProduto * 0.1);
} else if (formaDePagamento === 2) {
    valorProduto = valorProduto - (valorProduto * 0.150);
} else if (formaDePagamento === 3) {
    valorProduto = valorProduto / 2;
} else {
    valorProduto = valorProduto + (valorProduto * 0.1);
}

console.log(`O valor a ser pago é ${valorProduto.toFixed(2)}`);
