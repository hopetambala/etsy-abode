document.addEventListener("DOMContentLoaded", () => {
  const assets = document.querySelector("a-assets");

  const groundTexture = document.createElement("img");
  groundTexture.id = "groundTexture";
  groundTexture.src = "https://cdn.aframe.io/a-painter/images/floor.jpg";

  const skyTexture = document.createElement("img");
  skyTexture.id = "skyTexture";
  skyTexture.src = "assets/environment/sky.jpg";

  assets.append(groundTexture, skyTexture);
});