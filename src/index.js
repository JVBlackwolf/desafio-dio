let nome = "Aelin"
//variável nome do herói
let experiencia = 0
//variável qt de xp
let nivel = ""

for(let contador=0; contador<11; contador++){
    if(experiencia<1000){
        nivel="ferro"
    }else if(experiencia>1000 && experiencia<2001){
        nivel="bronze"
    }else if(experiencia>2000 && experiencia<5001){
        nivel="prata"
    }else if(experiencia>5000 && experiencia<7001){
        nivel="ouro"
    }else if(experiencia>7000 && experiencia<8001){
        nivel="platina"
    }else if(experiencia>8000 && experiencia<9001){
        nivel="ascendente"
    }else if(experiencia>9000 && experiencia<10001){
        nivel="imortal"
    }else{
        nivel="radiante"
    }
    
    console.log ("Parabéns, você ganhou 1000xp!")
    console.log ("O herói " + nome + " está no nível " + nivel)
    
    experiencia+=1000
}        
