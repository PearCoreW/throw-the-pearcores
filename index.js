new Image().src = "LiHe.png";
new Image().src = "afraid.jpg";
new Image().src = "angry.jpg";
new Image().src = "fxxk.jpg";
new Image().src = "joker.jpg";
new Image().src = "laugh.jpg";

new Audio().src = "!.mp3";
new Audio().src = "eat.mp3";
new Audio().src = "fly.mp3";
new Audio().src = "fxxk.mp3";

const music = document.getElementById("music");
const sound = document.getElementById("sound");
const Li = document.getElementById("Li");
const face = document.getElementById("face");

var count = 0;

function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

async function action() {
    document.getElementById("action").style.display = "none";
    music.play();
    await sleep(7000);
    music.volume = 0.3;
    sound.play();
    Li.style.display = "grid";
    await sleep(1500);
    sound.src = "eat.mp3";
    sound.play();
    await sleep(2000);
    Li.src = "LiHe.png";
    await sleep(1000);
    sound.src = "fly.mp3";
    sound.play();

    while(true) {
        if(Li.style.left == "1200px") {
           face.src = "afraid.jpg";
        }
        if(Li.style.left == "-500px") {
            break;
        }
        Li.style.left = String(1300 - count) + "px";
        count = count + 5;
        await sleep(1);
    }
    await sleep(2000);
    face.src = "angry.jpg";
    await sleep(3000);
    face.src = "fxxk.jpg";
    sound.src = "fxxk.mp3";
    sound.play();
    await sleep(5000);
    window.open("https://pearpit.github.io/throw-the-pearpits/menu.html","_self");
}