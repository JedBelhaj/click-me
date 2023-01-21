let r = document.querySelector(":root");
let hitbox = document.getElementById("hitbox");
let btn = document.getElementById("btn");
let body = document.getElementById("body");
let won = document.getElementById("won");
let act = true;
let x = 0,
    maintainX = 0;
let y = 0,
    maintainY = 0;
hitbox.addEventListener("mouseover", handleHover);
hitbox.addEventListener("mouseleave", handleReset);
btn.addEventListener("mousedown", handleClick);
hitbox.addEventListener("mouseover", handleHover);
function handleHover() {
    x = rand();
    y = rand();
    console.log(`${x} ${y}`);
    hitbox.style.top = `${y}px`;
    hitbox.style.right = `${x}px`;
    // if (act) {
    //     setTimeout(() => {
    //         act = true;
    //     }, 500);
    //     act = false;
    //     r.style.setProperty("--x", `${x}px`);
    //     r.style.setProperty("--y", `${y}px`);
    //     hitbox.className = "hitbox active";
}
function handleReset() {
    hitbox.className = "hitbox";
}
function handleClick() {
    hitbox.style.display = "none";
    won.style.display = "inline";
}
function rand() {
    if (Math.floor(Math.random() * 2)) return Math.floor(Math.random() * 600);
    else {
        return -Math.floor(Math.random() * 100);
    }
}
