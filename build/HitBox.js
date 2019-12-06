function Hitbox() {
    function isUserHitWithBullet() {

    }

    function isUserHitWithEnemyObject() {
        for (j = 0; j < enemy.length; j++)
            if (player1.object.position.y >= enemy[j].object.position.y) player1.PlayerHit();
    }

    function isEnemyHitWithBullet() {
        var i = j = 0;
        for (i = 0; i < bullets.length; i++) {
            for (j = 0; j < enemy.length; j++) {
                if (bullets[i].position.y >= enemy[j].object.position.y &&
                    bullets[i].position.x - enemy[j].object.position.x < 1 && bullets[i].position.x - enemy[j].object.position.x > -1) {
                    if (enemy[j].EnemyHit()) {
                        enemy.splice(j, 1);
                        console.log(bullets.length);
                        console.log("Banyak Musuh ", enemy.length);
                    }
                    bullets[i].alive = false;
                }
            }
        }
    }
    isEnemyHitWithBullet();
    isUserHitWithEnemyObject();
    isUserHitWithBullet();
};