document.addEventListener("DOMContentLoaded", () => {
  const assets = document.querySelector("a-assets");

  const groundTexture = document.createElement("img");
  groundTexture.id = "groundTexture";
  groundTexture.src = "assets/environment/ground.png";

  const skyTexture = document.createElement("img");
  skyTexture.id = "skyTexture";
  skyTexture.src = "assets/environment/brightsky.png";

  assets.append(groundTexture, skyTexture);
});