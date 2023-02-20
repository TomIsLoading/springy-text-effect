const allText = document.querySelectorAll(".text");

let delay = 0;

allText.forEach((el, idx) => {
  el.style["animation-delay"] = `${delay}s`;
  el.style["z-index"] = allText.length - idx;
  el.classList.add("base-anim");

  delay += 0.15;
});

document.getElementById("wrapper").addEventListener("mousemove", (e) => {
  const { innerWidth, innerHeight } = window;
  const { clientX, clientY } = e;

  const percentX = clientX / innerWidth;
  const maxRangeX = innerWidth * 0.15;
  const minX = innerWidth / 2 - maxRangeX;
  const maxX = innerWidth / 2 + maxRangeX;
  const difX = maxX - minX;
  const pxOffset = difX * percentX;

  const left = minX + pxOffset;

  const percentY = clientY / innerHeight;
  const maxRangeY = innerHeight * 0.1;
  const minY = innerHeight / 2 - maxRangeY;
  const maxY = innerHeight / 2 + maxRangeY;
  const difY = maxY - minY;
  const pxOffsetY = difY * percentY;

  const top = minY + pxOffsetY;

  allText.forEach((el, idx) => {
    el.animate(
      {
        top: `${top}px`,
        left: `${left}px`,
      },
      { duration: 1000, fill: "forwards", delay: idx * 50 }
    );
  });
});
