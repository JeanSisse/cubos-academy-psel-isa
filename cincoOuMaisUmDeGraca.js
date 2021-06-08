function solucao(precos) {
    var total = 0;
    let menor = 1000000000000000;
    let posicao = -1;
    if(precos.length >= 5){
        for(i = 0; i < precos.length; i++){
            if(menor > precos[i]){
                menor = precos[i];
                posicao = i;
            }
        }
        precos[posicao] = 0;
        console.log(soma(precos));
    } else {
        console.log(soma(precos));
    }
    
    function soma(precos){
        for(i = 0; i < precos.length; i++){
            total += precos[i];
        }
        return total;
    }
}

