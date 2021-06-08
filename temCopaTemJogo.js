function solucao(ano) {
	let copa = 2018;
    let jogos = 2020;
    
    var dif1 = ano - copa;
    var dif2 = ano - jogos;
    
    if(dif1 % 4 == 0){
        console.log("COPA");
    } else if(dif2 % 4 == 0){
        console.log("JOGOS");
    } else {
        console.log("MEH");
    }
}

