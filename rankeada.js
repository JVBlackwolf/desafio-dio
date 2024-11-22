let resultado = saldoVitorias(20,2)
let nivel = ""

function saldoVitorias(vitorias = 0,derrotas=0){
    let somatorio = vitorias - derrotas
    return somatorio
}

for(let contador=0; contador<10; contador++){
    if(resultado<10){
        nivel="ferro"
    }else if(resultado>10 && resultado<21){
        nivel="bronze"
    }else if(resultado>20 && resultado<51){
        nivel="prata"
    }else if(resultado>50 && resultado<81){
        nivel="ouro"
    }else if(resultado>80 && resultado<91){
        nivel="diamante"
    }else if(resultado>90 && resultado<101){
        nivel="lendário"
    }else if(resultado>=101){
        nivel="imortal"
    }

    console.log("O Herói tem saldo de " + resultado + ". Logo, está no nível de " + nivel)
    resultado+=10

    }

