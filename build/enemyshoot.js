function spawnshootEnemy(x, y) {

    var bulletsEnemy = new THREE.Mesh(
        new THREE.SphereGeometry(0.1, 0.1),
        new THREE.MeshBasicMaterial({
            color: 0xffffff
        })
    );
    bulletsEnemy.velocity = new THREE.Vector3(0, -0.2, 0);

    // bulletEnemy yang dispawn akan berada dalam pesawat
    bulletsEnemy.position.set(
            x, y - 0.5, // posisi 
            6
        )
        // bulletEnemy yang dispawn akan memiliki lifetime selama 1 detik.
        // untuk mengubah lifetime, ubah 1000 yang ada pada fungsi setTimeout()
    bulletsEnemy.alive = true;
    // setTimeout(function() {
    //     bulletEnemy.alive = false;
    //     scene.remove(bulletEnemy);
    // }, 700);

    //if(bulletEnemy.position.y >= 1 || bulletEnemy.position.y <= -7){
    //      bulletEnemy.alive = false;
    // }

    bulletEnemy.push(bulletsEnemy);
    scene.add(bulletsEnemy);
}

function shootEnemy() {
    // loop untuk bergerakan bulletEnemy yang telah dispawn
    for (var index = 0; index < bulletEnemy.length; index += 1) {
        // kalao ternyata bulletEnemynya belum dibikin sama sekali, ya skip
        if (bulletEnemy[index] === undefined) continue;
        // ketika bulletEnemy telah mati, maka tidak perlu dirender. maka di skip ke bulletEnemy selanjutnya
        // dan bulletEnemy yang mati di-remove dari list bulletEnemy
        if (bulletEnemy[index].alive == false) {
            bulletEnemy.splice(index, 1);
            continue;
        }
        bulletEnemy[index].position.add(bulletEnemy[index].velocity);
    }
}

function bulletEnemyAliveCheck() {

    for (var index = 0; index < bulletEnemy.length; index += 1) {
        // kalao ternyata bulletEnemynya belum dibikin sama sekali, ya skip
        if (bulletEnemy[index] === undefined) continue;
        // ketika bulletEnemy telah mati, maka tidak perlu dirender. maka di skip ke bulletEnemy selanjutnya
        // dan bulletEnemy yang mati di-remove dari list bulletEnemy
        if (bulletEnemy[index].alive == false) {
            //bulletEnemy.splice(index, 1);
            scene.remove(bulletEnemy[index]);
            continue;
        }
    }
}

function bulletEnemyPlaneCheck() {

    for (var index = 0; index < bulletEnemy.length; index += 1) {

        if (bulletEnemy[index].position.y <= plane_limity - 6) {
            //bulletEnemy.splice(index, 1);
            bulletEnemy[index].alive = false;
            continue;
        }
    }
}