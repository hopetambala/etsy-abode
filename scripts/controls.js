document.addEventListener("DOMContentLoaded", () => {
  AFRAME.registerComponent('thumbstick-movement', {
    schema: {
      speed: { type: 'number', default: 0.1 }
    },
    init: function () {
      const self = this;
      self.direction = new THREE.Vector3();
      self.leftHand = document.querySelector('#leftHand');
  
      self.leftHand.addEventListener('thumbstickmoved', function (evt) {
        const { x, y } = evt.detail;
  
        // Invert y so pushing forward moves forward
        self.direction.set(x, 0, -y).normalize();
      });
  
      self.leftHand.addEventListener('thumbstickdown', () => {
        // Optional: could be used to toggle run/walk
      });
  
      self.leftHand.addEventListener('thumbstickup', () => {
        self.direction.set(0, 0, 0); // stop when thumbstick is released
      });
    },
    // tick: function (time, deltaTime) {
    //   const el = this.el;
    //   const direction = this.direction.clone();
  
    //   if (direction.lengthSq() === 0) return;
  
    //   const cam = el.querySelector('a-camera');
    //   if (!cam) return;
  
    //   // Use the camera’s rotation to move in the direction the player is looking
    //   const camObj = cam.object3D;
    //   const camDir = new THREE.Vector3();
    //   camObj.getWorldDirection(camDir);
    //   camDir.y = 0; // prevent vertical movement
  
    //   const moveVector = new THREE.Vector3();
    //   moveVector.copy(direction).applyAxisAngle(new THREE.Vector3(0, 1, 0), camObj.rotation.y);
  
    //   el.object3D.position.addScaledVector(moveVector, this.data.speed);
    // }
    tick: function () {
      const el = this.el;
      const direction = this.direction.clone();
      if (direction.lengthSq() === 0) return;
    
      const camera = el.querySelector('a-camera');
      if (!camera) return;
    
      const cameraObj = camera.object3D;
      const euler = new THREE.Euler();
      const yaw = new THREE.Quaternion();
    
      // Extract only the Y (yaw) rotation from camera
      yaw.setFromEuler(euler.set(0, cameraObj.getWorldRotation(new THREE.Euler()).y, 0));
    
      // Rotate the input direction by the yaw rotation
      direction.applyQuaternion(yaw);
    
      // Apply movement to the rig (el is the rig)
      el.object3D.position.addScaledVector(direction, this.data.speed);
    }
  });
});
