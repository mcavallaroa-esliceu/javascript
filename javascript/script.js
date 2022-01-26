var numero=prompt ("Insereix un numero")
numero = parseInt(numero)

if(isNaN(numero)){
    console.log ("No es un número")
}else{

    if(numero % 2 == 0){
        console.log ("Es par")
}else{

    console.log ("Es impar")
    }
}
