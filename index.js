const music = document.getElementById("music");
const soundLNN = document.getElementById("soundLNN");
const soundLi = document.getElementById("soundLi");
const face = document.getElementById("face");
const LNN = document.getElementById("LNN");
const Li = document.getElementById("Li");

new Image().src = "LiHe.png";
new Image().src = "afraid.jpg";
new Image().src = "angry.jpg";
new Image().src = "fxxk.jpg";
new Image().src = "get.jpg";

new Audio().src = "eat.ogg";
new Audio().src = "fly.ogg";
new Audio().src = "!.ogg";
new Audio().src = "angry.ogg";
new Audio().src = "fxxk.ogg";
new Audio().src = "get.ogg";

window.onload = function() {
    document.getElementById("action").setAttribute("onclick","action()");
    document.getElementById("action").textContent = "Action!";
}

function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

async function action() {
    document.getElementById("action").style.display = "none";
    music.play();
    await sleep(7000);
    music.volume = 0.3;
    soundLi.play();
    Li.style.display = "grid";
    await sleep(1500);
    soundLi.src = "eat.ogg";
    soundLi.play();
    await sleep(2000);
    Li.src = "LiHe.png";
    await sleep(1000);
    soundLi.src = "fly.ogg";
    soundLi.play();

    var count = 0;
    while(true) {
        if(Li.style.left == "500px") {
            face.src = "afraid.jpg";
            soundLNN.play();
        }
        if(Li.style.left == "-100px") {
            break;
        }
        Li.style.left = String(1100 - count) + "px";
        Li.style.top = String(130 + count/3.5) + "px";
        count = count + 5;
        await sleep(1);
    }
    await sleep(2000);
    face.src = "angry.jpg";
    soundLNN.src = "angry.ogg";
    soundLNN.play();
    Li.style.left = "1100px";
    Li.style.top = "130px";
    await sleep(1000);
    soundLi.src = "fly.ogg";
    soundLi.play();
    count = 0;
    while(true) {
        if(Li.style.left == "-100px") {
            break;
        }
        Li.style.left = String(1100 - count) + "px";
        Li.style.top = String(130 + count/3.5) + "px";
        count = count + 5;
        await sleep(1);
    }
    await sleep(1000);
    face.src = "fxxk.jpg";
    soundLNN.src = "fxxk.ogg";
    soundLNN.play();
    await sleep(500);
    Li.style.left = "1100px";
    Li.style.top = "130px";
    await sleep(800);
    soundLi.src = "fly.ogg";
    soundLi.play();
    count = 0;
    while(true) {
        if(Li.style.left == "200px") {
            soundLi.src = "get.ogg";
            soundLi.play();
            face.src = "get.jpg";
            let countLNN = -1;
            while(true) {
                if(countLNN == -91) {
                    break;
                }
                LNN.style.transform = "rotate(" + countLNN + "deg)";
                countLNN = countLNN - 1;
                await sleep(1);
            }
        }
        if(Li.style.left == "-100px") {
            break;
        }
        Li.style.left = String(1100 - count) + "px";
        Li.style.top = String(130 + count/3.5) + "px";
        count = count + 5;
        await sleep(1);
    }
    await sleep(3000);
    window.open("menu.html","_self");
}