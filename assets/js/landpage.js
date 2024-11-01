var clicked = false ;

window.addEventListener("click", function(){
    clicked = true ;
})

var effect = document.getElementsByClassName("effect")[0] ;
document.addEventListener("mousemove", function(event){
    effect.style.top = (event.clientY) + "px" ;
    effect.style.left = (event.clientX) + "px" ;
})

var textChanger = document.getElementsByClassName("textChanger-body")[0] ;
var clickCnt = 0 ;
function text_change_Function() {
    clickCnt ++ ;
    if (clickCnt >= 4) {
        // window.location.assign("mainapp.html") ;
        window.location.href = "userLogin.html" ;
    }
    else {
        var y = clickCnt * 50 ;
        textChanger.style.transform = "translateY(-"+y+"px)" ;
    }
}

setInterval(function(){
    if (clicked) {
        text_change_Function();
    }
}, 1000)