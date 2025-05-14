document.addEventListener("DOMContentLoaded", () => {
  const scene = document.querySelector("a-scene");

  // Box
  const box = document.createElement("a-box");
  box.setAttribute("position", "0 2 -5");
  box.setAttribute("rotation", "0 45 45");
  box.setAttribute("scale", "2 2 2");
  box.setAttribute("src", "#boxTexture");

  const anim1 = document.createElement("a-animation");
  anim1.setAttribute("attribute", "position");
  anim1.setAttribute("direction", "alternate");
  anim1.setAttribute("dur", "2000");
  anim1.setAttribute("repeat", "indefinite");
  anim1.setAttribute("to", "0 2.2 -5");

  const anim2 = document.createElement("a-animation");
  anim2.setAttribute("attribute", "rotation");
  anim2.setAttribute("begin", "click");
  anim2.setAttribute("dur", "2000");
  anim2.setAttribute("to", "360 405 45");

  const anim3 = document.createElement("a-animation");
  anim3.setAttribute("attribute", "scale");
  anim3.setAttribute("begin", "mouseenter");
  anim3.setAttribute("dur", "300");
  anim3.setAttribute("to", "2.3 2.3 2.3");

  const anim4 = document.createElement("a-animation");
  anim4.setAttribute("attribute", "scale");
  anim4.setAttribute("begin", "mouseleave");
  anim4.setAttribute("dur", "300");
  anim4.setAttribute("to", "2 2 2");

  box.append(anim1, anim2, anim3, anim4);
  scene.appendChild(box);
});