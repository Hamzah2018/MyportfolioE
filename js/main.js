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
const usernameValue = username.value.trem();
const emailValue = email.value.trem();
const passwordValue = password.value.trem();
const password2Value = password2.vaule.trem();;
if(usernameVlaue === ''){
    setErrorFor(username, 'Username cannot be blank')
    }
    else{
    setSuccessFor(username)
    }
    
} 
function setErrorFor(input, message){
    const formControl = input.parentElement;// .form-control
    const small = fromControl.querySelector('small');
    }
    


// function validFrom(){
//     var ageValid = document.getElementById("age").value;
//     if(ageValid == less){
//         alert("You are Child You can't eneter our website!");
//         return flase;
//     } 
// }