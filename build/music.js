  // create a global audio source
  function loadMusic() {

      // load a sound and set it as the Audio object's buffer
      var audioLoader = new THREE.AudioLoader();
      audioLoader.load('music/Vivat ITS.mp3', function(buffer) {
            sound.setBuffer(buffer);
            sound.setLoop(true);
            sound.setVolume(50);
            sound.play(); //belum di add ke scene
      });
      console.log("lagu backsound keluar")
  }

  function playerExplosion(){
        var audioLoader2 = new THREE.AudioLoader();
        audioLoader2.load('music/Salam Ganesha.mp3', function(buffer){
            sound.setBuffer(buffer);
            sound.setVolume(50);
            sound.play(); //belum di add ke scene
        })
    console.log("lagu ledakan keluar")
  }