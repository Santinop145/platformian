let character = document.getElementById("iwannabetheguy");
let position = window.getComputedStyle(character);
let altura = position.getPropertyValue("bottom");
let alturamov = 500;
let accel = 1;

function gravity(){
    if(parseInt(altura) > 200){
        altura = position.getPropertyValue("bottom");
        accel++;
        alturamov -= accel;
        character.style.setProperty("bottom", alturamov.toString() + "px");
    }
    else{
        character.style.setProperty("bottom", "200px");
        alturamov = 200;
        accel = 0;
    }
}

setInterval(gravity, 50);
