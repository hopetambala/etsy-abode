AFRAME.registerComponent('joystick-move', {
  tick: function () {
    const rig = this.el;
    const rightController = document.querySelector('#rightHand');
    const gamepad = rightController.components['oculus-touch-controls']?.controller;

    if (!gamepad) return;

    const axes = gamepad.axes;

    // Typically: [x-axis, y-axis] for thumbstick
    const x = axes[2]; // left/right
    const y = axes[3]; // forward/back

    if (Math.abs(x) > 0.1 || Math.abs(y) > 0.1) {
      const camera = document.querySelector('a-camera');
      const cameraRotation = camera.object3D.rotation.y;

      const speed = 0.05;

      // Translate input based on head direction (XZ only)
      const dx = -y * Math.sin(cameraRotation) + x * Math.cos(cameraRotation);
      const dz = -y * Math.cos(cameraRotation) - x * Math.sin(cameraRotation);

      rig.object3D.position.x += dx * speed;
      rig.object3D.position.z += dz * speed;
    }
  }
});

window.addEventListener('DOMContentLoaded', () => {
  const rig = document.querySelector('#rig');
  rig.setAttribute('joystick-move', '');
});