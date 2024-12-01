
function aplicarDesconto(valor, desconto){
    return (valor - (valor * (desconto / 100)));
}

function aplicarJuros(valor, juros){
    return (valor + (valor * (juros / 100)));
}

const valorProduto = 100;
const formaDePagamento = 1;

if (formaDePagamento === 1) {
    console.log(`O valor a ser pago é ${aplicarDesconto(valorProduto, 10).toFixed(2)}`);
} else if (formaDePagamento === 2) {
    console.log(`O valor a ser pago é ${aplicarDesconto(valorProduto, 15).toFixed(2)}`);
} else if (formaDePagamento === 3) {
    console.log(`O valor a ser pago é ${valorProduto}`);
} else {
    console.log(`O valor a ser pago é ${aplicarJuros(valorProduto, 2).toFixed(2)}`);
}
