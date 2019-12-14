  // create a global audio source
  function loadMusic() {

      // load a sound and set it as the Audio object's buffer
      var audioLoader = new THREE.AudioLoader();
      audioLoader.load('music/th06_15.wav', function(buffer) {
          sound.setBuffer(buffer);
          sound.setLoop(true);
          sound.setVolume(0.5);
          sound.play(); //belum di add ke scene
      });
  }