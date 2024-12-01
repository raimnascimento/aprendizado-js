(function escrevaMeuNome(nome) {
    console.log(`Meu nome é ${nome}`);
})('Raissa');

function verificarIdade(idade){
    if (idade < 18) {
        console.log(`Sua idade é ${idade}, você ainda é de menor`);
    } else {
    console.log(`Aí sim! Sua idade é ${idade}, você ja atingiu sua maior idade`);
    }
}

verificarIdade(12);