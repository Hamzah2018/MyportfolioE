// function ChangeColor(){
//     var SeletColor = document.getElementById("selectColor").value;
//     var bodyGround = document.getElementById("body");
//    bodyGround.style.backgroundColor = SeletColor;
// }
function ChangeColor(){
    var SeletColor = document.getElementById("selectColor").value;
    var bodyGround = document.getElementById("body");
    bodyGround.style.backgroundColor = SeletColor;
}
const form = document.getElementById('form');
const username = document.getElementById('form');
const email = document.getElementById('form');
const password = document.getElementById('form');
const password2 = document.getElementById('form');

form.addEventListener('submit', (e) => {
   e.preventDefault();
checkInputs();
});

function checkInputs() {
const usernameValue = username.value
const emailValue = email.value
const passwordValue = password.value
const password2Value = password.
}


function validFrom(){
    var ageValid = document.getElementById("age").value;
    if(ageValid == less){
        alert("You are Child You can't eneter our website!");
        return flase;
    } 
}