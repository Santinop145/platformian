let character = document.getElementById("iwannabetheguy");
let characterWeapon = document.getElementById("iwannabetheweapon");
let position = window.getComputedStyle(character);
let altura = 500;
let left = 400;
let jumpLimit = 0;
let alturavel = 1;
let gravActive = false;
const accel = 2;

document.addEventListener("keydown", e => characterMove(e))
document.addEventListener("keydown", e => isJumping(e))


function isTouchingGround(){
    if (altura > 200){
        return true;
    }
    return false;
}

function updatePosition(){
    character.style.setProperty("bottom", altura.toString() + "px");
    character.style.setProperty("left", left.toString() + "px");
}

setInterval(updatePosition, 25);

async function isJumping(e){
    if(e.keyCode == 87 && !isTouchingGround()){
        jumpInterval = setInterval(() => {
            alturavel += + accel * 2;
            altura += alturavel - jumpLimit / 2;
            jumpLimit++;
            console.log(alturavel);
            if(jumpLimit > 8){
                clearInterval(jumpInterval);
                alturavel -= 75;
                jumpLimit = 0;
            }
        }, 25);
        clearInterval(gravInter);
        gravActive = false;
        setTimeout(gravity, 175);
        return true;
    }
    return false;
}

async function characterMove(e){
    if(e.keyCode == 68 && left >= 0){
        left += 10;
    }
    else if(e.keyCode == 65 && left >= 0){
        left -= 10;
    }
}

async function gravity(){
    if(isTouchingGround()){
        alturavel += accel;
        altura -= alturavel;
    }
    else if(alturavel > 1){
        alturavel /= 2;
        altura += alturavel;
        }
    else{
        alturavel = 0;
        altura = 200;
    }
    if(!gravActive){
        gravInter = setInterval(gravity, 25)
    } 
    gravActive = true;
}

gravity();