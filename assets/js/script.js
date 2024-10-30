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
            progress_value += 100;
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
    let audio = new Audio("assets/media/"+path);
    console.log("assets/media/"+path) ;
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
    item.addEventListener("click", () => {
        pain_scale_function();
    });
});

var feeling = document.querySelectorAll(".feeling-item") ;

feeling.forEach((item) => {
    item.addEventListener("mouseenter", () => {
        loading_enter_function(pain_scale_function);
    });
    item.addEventListener("mousemove", loading_function) ;
    item.addEventListener("mouseleave", loading_leave_function) ;
    item.addEventListener("click", () => {
        pain_scale_function();
    });
});

var scale = document.querySelectorAll(".scale-item") ;

scale.forEach((item,index) => {
    item.addEventListener("mouseenter", () => {
        loading_enter_function(() => audio_play_function("audio-"+index+".mp3"));
    });
    item.addEventListener("mousemove", loading_function) ;
    item.addEventListener("mouseleave", loading_leave_function) ;
    item.addEventListener("click", () => {
        audio_play_function("audio-"+index+".mp3");
    });
});

var action = document.querySelectorAll(".action-item") ;

action.forEach((item,index) => {
    item.addEventListener("mouseenter", () => {
        loading_enter_function(() => audio_play_function("chai-"+index+".mp3"));
    });
    item.addEventListener("mousemove", loading_function) ;
    item.addEventListener("mouseleave", loading_leave_function) ;
    item.addEventListener("click", () => {
        audio_play_function("chai-"+index+".mp3");
    });
});

var pain_div = document.getElementsByClassName("pain-cross")[0] ;
pain_div.addEventListener("mouseenter", () => {
    loading_enter_function(close_pain_scale_function);
});
pain_div.addEventListener("mousemove", loading_function) ;
pain_div.addEventListener("mouseleave", loading_leave_function) ;
pain_div.addEventListener("click", () => {
    close_pain_scale_function();
});

function create_meal_option_function() {
    var option = document.createElement("div") ;
    option.className = "option" ;

    var inp = document.createElement("input") ;
    inp.type = "checkbox" ;
    
    var label = document.createElement("label") ;
    label.appendChild(inp) ;
    label.appendChild(document.createTextNode(" "+document.getElementById("custom-meal").value)) ;

    option.appendChild(label) ;

    document.getElementsByClassName("meal-options")[0].appendChild(option) ;

}

function menu_item_change_function (ind) {
    var menu_item = document.querySelectorAll(".menu-item") ;    
    menu_item.forEach((item,index) => {
        item.style.backgroundColor = "#1e88e5" ;
        if (index === ind) {
            item.style.backgroundColor = "#00a046" ;
        }        
    }) ;

    var section_item = document.querySelectorAll(".section-item") ;    
    section_item.forEach((item,index) => {
        item.style.display = "none" ;
        if (index === ind) {
            item.style.display = "flex" ;
        }        
    }) ;
}

menu_item_change_function(0) ;

var menu = document.querySelectorAll(".menu-item") ;

menu.forEach((item,index) => {
    item.addEventListener("mouseenter", () => {
        loading_enter_function(() => menu_item_change_function(index));
    });
    item.addEventListener("mousemove", loading_function) ;
    item.addEventListener("mouseleave", loading_leave_function) ;
    item.addEventListener("click", () => {
        menu_item_change_function(index);
    });
});

function chat_open_function() {
    var ele = document.getElementsByClassName("chat-part")[0] ;
    ele.style.height = "60%" ;
}

function chat_close_function() {
    var ele = document.getElementsByClassName("chat-part")[0] ;
    ele.style.height = "0" ;
}

function speak() {
    // const text = document.getElementById('text').value;
    const text = "ami baire jete chai" ;
    if ('speechSynthesis' in window) {
        const speech = new SpeechSynthesisUtterance(text);

        // Optional: Customize voice properties
        speech.rate = 1;    // Speed (0.1 to 10)
        speech.pitch = 1;   // Pitch (0 to 2)
        speech.volume = 1;  // Volume (0 to 1)

        // Optional: Set the voice (if available)
        const voices = window.speechSynthesis.getVoices();
        speech.voice = voices[0];  // You can change to another voice if desired

        // Speak the text
        window.speechSynthesis.speak(speech);
    } else {
        alert('Sorry, your browser does not support text-to-speech.');
    }
}

function all_profile_loadFunction() {
    document.getElementsByClassName("profile")[0].style.transform = "translate(0%, 0%)";
}

function all_profile_closeFunction() {
    document.getElementsByClassName("all-profile-body")[0].style.display = "flex" ;
    document.getElementsByClassName("user-profile-body")[0].style.maxHeight = "0px" ;
    document.getElementsByClassName("profile")[0].style.transform = "translate(-100%, -100%)";    
}

function user_profile_loadFunction() {
    document.getElementsByClassName("all-profile-body")[0].style.display = "none" ;
    document.getElementsByClassName("user-profile-body")[0].style.maxHeight = "450px" ;
}

// speak()
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