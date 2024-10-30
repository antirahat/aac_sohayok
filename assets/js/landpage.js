var effect = document.getElementsByClassName("effect")[0] ;
document.addEventListener("mousemove", function(event){
    effect.style.top = (event.clientY) + "px" ;
    effect.style.left = (event.clientX) + "px" ;
})