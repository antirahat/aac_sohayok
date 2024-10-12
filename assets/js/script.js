var loading = document.getElementsByClassName("loading")[0] ;
var progress = document.getElementsByClassName("progress")[0] ;
var progress_value = 0 ;
let intervalId  ;

function loading_function(event) {
    loading.style.top = event.clientY + "px" ;
    loading.style.left = event.clientX + "px" ;
}

function loading_enter_function(callback) {
    intervalId = setInterval(function() {
        if (progress_value < 100) {
            progress_value += 20;
            progress.style.width = progress_value + "%";            
        } else {
            clearInterval(intervalId);
            callback() ;
        }
    }, 1000);
}

function loading_leave_function() {
    loading.style.top = "-100px" ;
    loading.style.left = "-100px" ;
    progress_value = 0 ;
    progress.style.width = progress_value + "%";
    clearTimeout(intervalId) ;
}

function pain_scale_function() {
    var scale = document.getElementsByClassName("pain-scale-part")[0].style ;
    scale.width = "100%" ;
    scale.height = "100%" ;
}

function audio_play_function(path) {
    let audio = new Audio("assets/media/audio-"+path+".mp3");
    console.log("assets/media/audio-"+path+".mp3") ;
    audio.play();
}

function close_pain_scale_function() {
    var scale = document.getElementsByClassName("pain-scale-part")[0].style ;
    scale.width = "0" ;
    scale.height = "0" ;
}


var symptom = document.querySelectorAll(".symptom-item") ;

symptom.forEach((item) => {
    item.addEventListener("mouseenter", () => {
        loading_enter_function(pain_scale_function);
    });
    item.addEventListener("mousemove", loading_function) ;
    item.addEventListener("mouseleave", loading_leave_function) ;
});

var scale = document.querySelectorAll(".scale-item") ;

scale.forEach((item,index) => {
    item.addEventListener("mouseenter", () => {
        loading_enter_function(() => audio_play_function(index+1));
    });
    item.addEventListener("mousemove", loading_function) ;
    item.addEventListener("mouseleave", loading_leave_function) ;
});

var pain_div = document.getElementsByClassName("pain-cross")[0] ;
pain_div.addEventListener("mouseenter", () => {
    loading_enter_function(close_pain_scale_function);
});
pain_div.addEventListener("mousemove", loading_function) ;
pain_div.addEventListener("mouseleave", loading_leave_function) ;




// document.getElementsByClassName("symptom-item")[0].addEventListener("mouseenter", loading_enter_function)
// document.getElementsByClassName("symptom-item")[0].addEventListener("mousemove", loading_function)
// document.getElementsByClassName("symptom-item")[0].addEventListener("mouseleave", loading_leave_function)

// document.getElementsByClassName("symptom-item")[1].addEventListener("mouseenter", loading_enter_function)
// document.getElementsByClassName("symptom-item")[1].addEventListener("mousemove", loading_function)
// document.getElementsByClassName("symptom-item")[1].addEventListener("mouseleave", loading_leave_function)

// document.getElementsByClassName("symptom-item")[2].addEventListener("mouseenter", loading_enter_function)
// document.getElementsByClassName("symptom-item")[2].addEventListener("mousemove", loading_function)
// document.getElementsByClassName("symptom-item")[2].addEventListener("mouseleave", loading_leave_function)

// document.getElementsByClassName("symptom-item")[3].addEventListener("mouseenter", loading_enter_function)
// document.getElementsByClassName("symptom-item")[3].addEventListener("mousemove", loading_function)
// document.getElementsByClassName("symptom-item")[3].addEventListener("mouseleave", loading_leave_function)

// document.getElementsByClassName("symptom-item")[4].addEventListener("mouseenter", loading_enter_function)
// document.getElementsByClassName("symptom-item")[4].addEventListener("mousemove", loading_function)
// document.getElementsByClassName("symptom-item")[4].addEventListener("mouseleave", loading_leave_function)