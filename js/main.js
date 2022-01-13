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
function validFrom(){
    var ageValid = document.getElementById("age").value;
    if(ageValid == less){
        alert("You are Child You can't eneter our website!");
        return flase;
    } 
}