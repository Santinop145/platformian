let character = document.getElementById("iwannabetheguy");
let characterWeapon = document.getElementById("iwannabetheweapon");
let position = window.getComputedStyle(character);
let altura = 500;
let left = 400;
let jumpLimit = 0;
let alturavel = 1;
let jumpDelay = false;
let gravActive = false;
let activeKeys = {};
const accel = 2;

onkeydown = onkeyup = function(e){
    activeKeys[e.key] = e.type == 'keydown';
    if(activeKeys["w"]){
        isJumping();
    } 
    console.log(activeKeys);
}

function isTouchingGround(){
    if (altura > 200 || altura > 400 && left > 100 && left < 200){
        return true;
    }
    return false;
}

function updatePosition(){
    altura.toFixed(0);
    alturavel.toFixed(0);
    left.toFixed(0);
    character.style.setProperty("bottom", altura.toString() + "px");
    character.style.setProperty("left", left.toString() + "px");
}

setInterval(updatePosition, 25);
setInterval(characterMove, 25);

async function isJumping(){
    if(activeKeys["w"] && !isTouchingGround() && !jumpDelay){
        jumpInterval = setInterval(() => {
            alturavel += + accel * 2;
            altura += alturavel - jumpLimit / 2;
            jumpLimit++;
            console.log(alturavel);
            if(!jumpDelay){
                jumpDelay = true;
            }
            if(jumpLimit > 8){
                clearInterval(jumpInterval);
                alturavel -= 60;
                jumpLimit = 0;
            }
        }, 25);
        clearInterval(gravInter);
        gravActive = false;
        setTimeout(gravity, 250);
        setTimeout(() => {
            jumpDelay = false;
        }, 1500);
        return true;
    }
    return false;
}

async function characterMove(){
    if(activeKeys["d"] && !activeKeys["a"] && left >= 0){
        left += 10;
    }
    else if(activeKeys["a"] && !activeKeys["d"] && left >= 0){
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