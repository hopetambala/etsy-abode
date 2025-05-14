document.addEventListener("DOMContentLoaded", () => {
  const scene = document.querySelector("a-scene");

  // Sky
  const sky = document.createElement("a-sky");
  sky.setAttribute("height", "2048");
  sky.setAttribute("radius", "30");
  sky.setAttribute("src", "#skyTexture");
  sky.setAttribute("theta-length", "90");
  sky.setAttribute("width", "2048");
  sky.setAttribute("scale", "3 1.18 3");
  scene.appendChild(sky);

  // Ground plane
  const plane = document.createElement("a-plane");
  plane.setAttribute("src", "#groundTexture");
  plane.setAttribute("rotation", "-90 0 0");
  plane.setAttribute("height", "100");
  plane.setAttribute("width", "100");
  plane.setAttribute("scale", "2 2 1");
  // plane.setAttribute("color", "#7BC8A4");
  scene.appendChild(plane);

});