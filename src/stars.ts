export function stars() {
    let e = document.createElement("div");
    e.setAttribute("class", "star");

    e.style.position = "absolute";
    e.style.zIndex = "-1";

    document.body.appendChild(e);
    e.style.left = Math.random() * +innerWidth + "px";
    e.style.top = Math.random() * innerHeight + "px";
  
    let size = Math.random() * 12;
    let duration = Math.random() * 3;

    e.style.width = `${size}px`;
    e.style.height = `${size}px`;
    e.style.borderRadius = "50%";
    e.style.backgroundColor = "white";
    e.style.fontSize = 12 + "px";
    e.style.animationDuration = 2 + duration + "s";

    setTimeout(function () {
      document.body.removeChild(e);
    }, 5000);
  }

  
  
  setInterval(function () {
    stars();
  }, 50);