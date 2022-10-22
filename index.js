var screen=document.getElementById("screen");
function btnClick(value){
screen.value+=value;
}
function clearScreen(){
    screen.value=" ";
}
var password="1234";
function findResult(){
    if(document.getElementById('screen').value!=password){
        alert('Wrong Password');
    }
    if(document.getElementById('screen').value==password){
        alert('You are enter the correct password:1234');
    }
}