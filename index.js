
function showDiv() {
   document.getElementById('choice2').style.display = "block";
}

function buttoneins(){
    if(document.getElementById('Nein').checked){
        location.href = "egoistisch.html";
    }
    else if(document.getElementById('Ja').checked){
        showDiv();
    }
}

function buttonzwei(){
    if(document.getElementById('answer2.1').checked){
        location.href = "egoistisch.html";
    }
    else if(document.getElementById('answer2.2').checked){
        location.href = "egoistisch.html";
    }
    else if(document.getElementById('answer2.3').checked){
        location.href = "altruistisch.html";
    }
    else if(document.getElementById('answer2.4').checked){
        location.href = "egoistisch.html";
    }
}