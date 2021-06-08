function solucao(tempo, distancia) {
    
    let valPorMin = 0;
    let valPorKm = 0;
    let valPago = 0;
    
	if(tempo < 5){
        console.log("600");
    } else if(tempo >= 5 && tempo <= 60) {
        valPorMin = tempo * 100;
        valPorKm = distancia * 50;
        console.log(valPorMin + valPorKm);
    } else if(tempo > 60){
        if(distancia < 100){
            valPorKm = 200 * distancia;
        } else {
            valPorKm = 150 * distancia;
        }
        console.log(valPorKm);
    }
}

