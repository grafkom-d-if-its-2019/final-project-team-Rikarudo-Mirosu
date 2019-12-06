function Hitbox() {
    function isUserHitWithBullet() {

    }

    function isUserHitWithEnemyObject() {

    }

    function isEnemyHitWithBullet() {
        var i = j = 0;
        for (i = 0; i < bullets.length; i++) {
            for (j = 0; j < enemy.length; j++) {
                if (bullets[i].position.y >= enemy[j].object.position.y &&
                    bullets[i].position.x - enemy[j].object.position.x < 1 && bullets[i].position.x - enemy[j].object.position.x > -1) {
                    enemy[j].EnemyHit();
                    bullets[i].alive = false;
                }
            }
        }
    }
    isUserHitWithBullet();
    isUserHitWithEnemyObject();
    isEnemyHitWithBullet();
}