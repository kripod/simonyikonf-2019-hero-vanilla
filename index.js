const bg03El = document.getElementById("bg-03");
const bg04El = document.getElementById("bg-04");
const bg07El = document.getElementById("bg-07");

let windowWidth;
let windowHeight;

function handleResize() {
  windowWidth = window.innerWidth;
  windowHeight = window.innerHeight;
}

window.addEventListener("resize", handleResize);
handleResize(); // Initialize window dimension values

let offsetX;
let offsetY;

function parallaxLayerTransform(sensitivityX, sensitivityY) {
  return `translate(${-50 + sensitivityX * offsetX}%, ${-50 +
    sensitivityY * offsetY}%)`;
}

window.addEventListener("mousemove", e => {
  const { pageX: mouseX, pageY: mouseY } = e;

  // [0,  windowWidth] -> [  -1,   1]
  offsetX = (mouseX / windowWidth - 0.5) * 2;

  // [0, windowHeight] -> [-0.5, 0.5] (reduced sensitivity)
  offsetY = mouseY / windowHeight - 0.5;

  bg03El.style.transform = parallaxLayerTransform(-2.5, -2.5);
  bg04El.style.transform = parallaxLayerTransform(0.5, -0.5);
  bg07El.style.transform = parallaxLayerTransform(7.5, 7.5);
});
