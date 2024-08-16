let character = document.getElementById("iwannabetheguy");
let position = window.getComputedStyle(character);
let altura = position.getPropertyValue("bottom");
let alturamov = 500;
let accel = 1;


function isTouchingGround(){
    if (parseInt(altura) > 200){
        return true;
    }
    return false;
}

function gravity(){
    if(isTouchingGround()){
        altura = position.getPropertyValue("bottom");
        accel++;
        alturamov -= accel;
        character.style.setProperty("bottom", alturamov.toString() + "px");
    }
    else{
        if(accel > 0 || alturamov > 200){
        accel--;
        if(accel < 0){
            accel = -accel;
        }
        alturamov += accel;
        character.style.setProperty("bottom", alturamov.toString() + "px");
        }
        else{
            accel = 0;
            alturamov = 200;
            character.style.setProperty("bottom", alturamov.toString() + "px");
        }
    }
    console.log(accel);
}

setInterval(gravity, 50);