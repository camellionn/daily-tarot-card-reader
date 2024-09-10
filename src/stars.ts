export function stars() {
    let e = document.createElement("div");
    e.classList.add("star");

    e.style.position = "absolute";

    e.style.left = Math.random() * +innerWidth + "px";
    e.style.top = Math.random() * innerHeight + "px";
  
    let size = Math.random() * 12;
  

    e.style.width = `${size}px`;
    e.style.height = `${size}px`;

    document.body.appendChild(e);

    setTimeout(function () {
      document.body.removeChild(e);
    }, 5000);
  }

  
  
  setInterval(stars, 50);