var edat=prompt ("Quina es sa teva edat?")

if(edat < 0){
    console.log("error")
}
else if(edat == 21){
    console.log("Felicitats")
}
else if(edat%2 == 0){
    console.log("parell")
} else {
    console.log("imparell")
}