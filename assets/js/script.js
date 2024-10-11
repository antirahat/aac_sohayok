var loading = document.getElementsByClassName("loading")[0] ;
var progress = document.getElementsByClassName("progress")[0] ;
var progress_value = 0 ;
let intervalId  ;

function loading_function(event) {
    loading.style.top = event.clientY + "px" ;
    loading.style.left = event.clientX + "px" ;
}

function loading_enter_function() {
    intervalId = setInterval(function() {
        if (progress_value < 100) {
            progress_value += 20;
            progress.style.width = progress_value + "%";            
        } else {
            clearInterval(intervalId);
            // alert('Progress completed!');
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

var symptom = document.querySelectorAll(".symptom-item") ;

symptom.forEach((item) => {
    item.addEventListener("mouseenter", loading_enter_function)
    item.addEventListener("mousemove", loading_function)
    item.addEventListener("mouseleave", loading_leave_function)
});

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