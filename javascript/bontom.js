var button=document.getElementById("button")
var graella=document.getElementById("graella")

button.addEventListener("click", function(){
    var div=document.createElement("div");
    div.classList.add("capsa");
    graella.appendChild(div);

})   

