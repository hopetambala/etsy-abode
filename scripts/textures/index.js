document.addEventListener("DOMContentLoaded", () => {
  const scene = document.querySelector("a-scene");

  // Assets
  const assets = document.createElement("a-assets");

  const boxTexture = document.createElement("img");
  boxTexture.id = "boxTexture";
  boxTexture.src = "https://i.imgur.com/mYmmbrp.jpg";

  const groundTexture = document.createElement("img");
  groundTexture.id = "groundTexture";
  groundTexture.src = "https://cdn.aframe.io/a-painter/images/floor.jpg";

  const skyTexture = document.createElement("img");
  skyTexture.id = "skyTexture";
  skyTexture.src = "https://cdn.aframe.io/a-painter/images/sky.jpg";

  assets.append(boxTexture, groundTexture, skyTexture);
  scene.appendChild(assets);
});