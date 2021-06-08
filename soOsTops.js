function solucao(produtos) {
    let topDeLinha = 0;
    let vendaTotal = 0;
    let percentual = 0;
    
    let obj = {"totalTop": 0, "percentual": 0};
    
	for(i = 0; i < produtos.length; i++){
        vendaTotal += produtos[i].preco;
        if((produtos[i].preco/100) > 100){
            topDeLinha += produtos[i].preco;
        }
    }
    
    percentual = topDeLinha/vendaTotal;
    obj.totalTop = topDeLinha;
    obj.percentual = percentual;
    
    console.log(obj);
}

