// ==========================
// Loading Screen
// ==========================

window.addEventListener("load", () => {
    setTimeout(() => {
        const loading = document.querySelector(".loading");
        if (loading) {
            loading.style.display = "none";
        }
    }, 2500);
});

// ==========================
// Floating Hearts
// ==========================

const heartContainer = document.getElementById("hearts");

function createHeart() {

    const heart = document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML = ["❤️","💖","💕","💗","🌸"][Math.floor(Math.random()*5)];

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.fontSize = (18 + Math.random()*20) + "px";

    heart.style.animationDuration = (4 + Math.random()*4) + "s";

    heartContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    },8000);

}

setInterval(createHeart,250);

// ==========================
// Music Button Play / Pause
// ==========================

const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

if (music && musicBtn) {

    music.volume = 0.3;

    musicBtn.addEventListener("click", () => {

        if (music.paused) {

            music.play().catch(()=>{});

            musicBtn.style.opacity = "0.6";

        } else {

            music.pause();

            musicBtn.style.opacity = "1";

        }

    });

}

// ==========================
// YES Button
// ==========================

const yesBtn = document.getElementById("yesBtn");

if(yesBtn){

yesBtn.addEventListener("click",()=>{

    document.body.style.opacity="0";

    document.body.style.transition="1s";

    setTimeout(()=>{

        window.location="surprise.html";

    },1000);

});

}

// ==========================
// NO Button
// ==========================

const noBtn=document.getElementById("noBtn");

function moveButton(){

    const maxX=window.innerWidth-160;

    const maxY=window.innerHeight-80;

    const x=Math.random()*maxX;

    const y=Math.random()*maxY;

    noBtn.style.position="fixed";

    noBtn.style.left=x+"px";

    noBtn.style.top=y+"px";

}

noBtn.addEventListener("mouseenter",moveButton);

noBtn.addEventListener("touchstart",moveButton);

// ==========================
// Sparkle Cursor
// ==========================

document.addEventListener("mousemove",(e)=>{

    const sparkle=document.createElement("div");

    sparkle.innerHTML="✨";

    sparkle.style.position="fixed";

    sparkle.style.left=e.clientX+"px";

    sparkle.style.top=e.clientY+"px";

    sparkle.style.pointerEvents="none";

    sparkle.style.fontSize="14px";

    sparkle.style.opacity="1";

    sparkle.style.transition="1s";

    document.body.appendChild(sparkle);

    setTimeout(()=>{

        sparkle.style.transform="translateY(-25px)";

        sparkle.style.opacity="0";

    },20);

    setTimeout(()=>{

        sparkle.remove();

    },1000);

});