edat=prompt("quants anys tens?")

if (isNaN(edat)){
    //NO És UN NÚMERO
    console.log("has d'introduir un número")
}else{
    //ja sabem que tenim un número
    if(edat<0){
        //edat negativa
        console.log("ERROR: HAS INTRODUÏO UNA EDAT NEGATIVA")  
    }else{
        //SABEM EDAT POSITIVA
        if(edat <0){
        console.log("la edat es positiva")}

        //MIRAR SI TÉ 21 ANYS
        if(edat == 21){
        console.log("Felicitats")}

        //MIRA SI ES PARELL O IMPARELL
        if(edat % 2 == 0){
            console.log ("Es par")
        }else{
    
        console.log ("Es impar")}
        
        //MIRAR SI ES QUADRAT PERFECTE

    }
}