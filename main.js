let character = document.getElementById("iwannabetheguy");
let upwardPos = character.style.bottom;

setInterval(gravity, 1000);

function gravity(){
    if(upwardPos > 200){
        upwardPos -= 9;
    }
}