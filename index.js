var screen=document.getElementById("screen");
function btnClick(value){
screen.value+=value;
}
function clearScreen(){
    screen.value=" ";
}

function findResult(){
    if(document.getElementById('screen').value!=1234){
        alert('Wrong Pin,Please enter the correct pin');
        return false;
    }
    if(document.getElementById('screen').value==1234){
        alert('You are enter the correct pin:1234');
    }
    return true;
}
