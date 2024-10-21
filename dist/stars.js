let activeStars = 0;
const maxStars = 150;
export function stars() {
    if (activeStars >= maxStars)
        return;
    const e = document.createElement("div");
    e.classList.add("star");
    activeStars++;
    //Set initial position
    e.style.position = "absolute";
    e.style.left = Math.random() * innerWidth + "px";
    e.style.top = "0px"; //Start at top of the screen
    const size = Math.random() * 12 + 5;
    e.style.width = `${size}px`;
    e.style.height = `${size}px`;
    e.style.background = "none";
    e.style.borderRadius = "0";
    document.body.appendChild(e);
    e.style.transition = `top 5s linear, opacity 5s ease-out`;
    setTimeout(function () {
        e.style.top = innerHeight + "px";
        e.style.opacity = "0";
    }, 150);
    setTimeout(function () {
        document.body.removeChild(e);
        activeStars--;
    }, 5000);
}
