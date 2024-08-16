let character = document.getElementById("iwannabetheguy");
let position = window.getComputedStyle(character);
let altura = 500;
let left = 0;
let jumpLimit = 0;
let alturavel = 1;
let gravActive = false;
const accel = 2;


function isTouchingGround(){
    if (altura > 200){
        return true;
    }
    return false;
}

function isJumping(e){
    if(e.keyCode == 87 && !isTouchingGround()){
        jumpInterval = setInterval(() => {
            alturavel += accel * 2.8;
            altura += alturavel - jumpLimit * 4;
            character.style.setProperty("bottom", altura.toString() + "px");
            jumpLimit++;
            console.log(altura);
            if(jumpLimit > 14){
                clearInterval(jumpInterval);
                alturavel -= 75;
                jumpLimit = 0;
            }
        }, 25);
        clearInterval(gravInter);
        gravActive = false;
        setTimeout(gravity, 400);
        return true;
    }
    return false;
}

function characterMove(e){
    if(e.keyCode == 68 && left >= 0){
        left += 5;
        character.style.setProperty("left", left.toString() + "px");
    }
    else if(e.keyCode == 65 && left >= 0){
        left -= 5;
        character.style.setProperty("left", left.toString() + "px");
    }
}

document.addEventListener("keydown", e => characterMove(e))
document.addEventListener("keydown", e => isJumping(e))

function gravity(){
    if(isTouchingGround()){
        alturavel += accel;
        altura -= alturavel;
        character.style.setProperty("bottom", altura.toString() + "px");
    }
    else if(alturavel > 1){
        alturavel /= 2;
        altura += alturavel;
        character.style.setProperty("bottom", altura.toString() + "px");
        }
    else{
        alturavel = 0;
        altura = 200;
        character.style.setProperty("bottom", altura.toString() + "px");
    }
    if(!gravActive){
        gravInter = setInterval(gravity, 50)
    } 
    gravActive = true;
}

gravity();