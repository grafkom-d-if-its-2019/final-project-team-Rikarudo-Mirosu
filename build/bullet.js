        function spawnshoot() {
            var bullet = new THREE.Mesh(
                new THREE.SphereGeometry(0.1, 0.1),
                new THREE.MeshBasicMaterial({
                    color: 0xffffff
                })
            );
            bullet.velocity = new THREE.Vector3(0, 0.2, 0);

            // bullet yang dispawn akan berada dalam pesawat
            bullet.position.set(
                    player1.object.position.x,
                    player1.object.position.y + 0.5, // posisi 
                    player1.object.position.z
                )
                // bullet yang dispawn akan memiliki lifetime selama 1 detik.
                // untuk mengubah lifetime, ubah 1000 yang ada pada fungsi setTimeout()
            bullet.alive = true;
            // setTimeout(function() {
            //     bullet.alive = false;
            //     scene.remove(bullet);
            // }, 700);

            //if(bullet.position.y >= 1 || bullet.position.y <= -7){
            //      bullet.alive = false;
            // }

            bullets.push(bullet);
            scene.add(bullet);
        }

        function shoot() {
            // loop untuk bergerakan bullet yang telah dispawn
            for (var index = 0; index < bullets.length; index += 1) {
                // kalao ternyata bulletnya belum dibikin sama sekali, ya skip
                if (bullets[index] === undefined) continue;
                // ketika bullet telah mati, maka tidak perlu dirender. maka di skip ke bullet selanjutnya
                // dan bullet yang mati di-remove dari list bullets
                if (bullets[index].alive == false) {
                    bullets.splice(index, 1);
                    continue;
                }

                bullets[index].position.add(bullets[index].velocity);
            }
        }

        function bulletAliveCheck() {

            for (var index = 0; index < bullets.length; index += 1) {
                // kalao ternyata bulletnya belum dibikin sama sekali, ya skip
                if (bullets[index] === undefined) continue;
                // ketika bullet telah mati, maka tidak perlu dirender. maka di skip ke bullet selanjutnya
                // dan bullet yang mati di-remove dari list bullets
                if (bullets[index].alive == false) {
                    //bullets.splice(index, 1);
                    scene.remove(bullets[index]);
                    continue;
                }
            }
        }

        function bulletPlaneCheck() {

            for (var index = 0; index < bullets.length; index += 1) {

                if (bullets[index].position.y >= plane_limity + 6) {
                    //bullets.splice(index, 1);
                    bullets[index].alive = false;
                    continue;
                }
            }
        }