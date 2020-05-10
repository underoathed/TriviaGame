var btn = document.querySelector("#btn");
btn.onclick = function(){
    var radioButtons = document.querySelectorAll("input[name='radio-1']");
    var selectedButton;
    for(var i = 0; i < radioButtons.length; i++){
        if(radioButtons[i].checked){
            selectedButton = radioButtons[i].value;
            break;
        }
    }
    document.getElementById("answerOne").innerHTML = selectedButton;
}

var btn2 = document.querySelector("#btn2");
btn2.onclick = function(){
    var radioButtons = document.querySelectorAll("input[name='radio-2']");
    var selectedButton;
    for(var i = 0; i < radioButtons.length; i++){
        if(radioButtons[i].checked){
            selectedButton = radioButtons[i].value;
            break;
        }
    }
    document.getElementById("answerTwo").innerHTML = selectedButton;
}

var btn3 = document.querySelector("#btn3");
btn3.onclick = function(){
    var radioButtons = document.querySelectorAll("input[name='radio-3']");
    var selectedButton;
    for(var i = 0; i < radioButtons.length; i++){
        if(radioButtons[i].checked){
            selectedButton = radioButtons[i].value;
            break;
        }
    }
    document.getElementById("answerThree").innerHTML = selectedButton;
}

function timerStart(){
    var windowTimeout = setTimeout(function() {
        alert("Time is over");
      }, 60000);

}

timerStart();

