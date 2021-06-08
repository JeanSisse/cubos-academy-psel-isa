function solucao(letra, palavras) {
	let respostaErrada = 0;
    
    for(i = 0; i < palavras.length; i++){
        if(palavras[i].substring(0, 1) != letra){
            respostaErrada++;
        }
    }
    console.log(respostaErrada);
}
