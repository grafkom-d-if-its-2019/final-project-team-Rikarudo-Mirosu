  // create a global audio source
  function loadMusic() {

      // load a sound and set it as the Audio object's buffer
      var audioLoader = new THREE.AudioLoader();
      audioLoader.load('music/Vivat ITS.mps', function(buffer) {
            sound.setBuffer(buffer);
            sound.setLoop(true);
            sound.setVolume(0.5);
            sound.play(); //belum di add ke scene
      });
  }

  function playerExplosion(){
        var audioLoader2 = new THREE.AudioLoader();
        audioLoader2.load('music/Salam Ganesha.mp3', function(buffer){
            sound.setBuffer(buffer);
            sound.setVolume(0.5);
            sound.play(); //belum di add ke scene
        })
  }