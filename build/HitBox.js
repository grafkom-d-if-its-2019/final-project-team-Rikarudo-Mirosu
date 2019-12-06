function Hitbox() {
    function isUserHitWithBullet() {

    }

    function isUserHitWithEnemyObject() {
        //fungsi apabila player menyentuh musuh, tiap isi dari list musuh akan dicek, apakah mengenai player atau tidak
        for (j = 0; j < enemy.length; j++)
            if (player1.object.position.y >= enemy[j].object.position.y) player1.PlayerHit();
    }

    function isEnemyHitWithBullet() {
        //fungsi apabila musuh menyentuh bulet, tiap isi dari list bullet akan dicek, apakah mengenai musuh atau tidak
        var i = j = 0;
        for (i = 0; i < bullets.length; i++) {
            for (j = 0; j < enemy.length; j++) {
                if (bullets[i].position.y >= enemy[j].object.position.y &&
                    bullets[i].position.x - enemy[j].object.position.x < 1 && bullets[i].position.x - enemy[j].object.position.x > -1) {
                    if (enemy[j].EnemyHit()) { //fungsi dari Enemy hit akan mereturn true, apabila musuh ter-VibeCheck, false apabila masih hidup
                        enemy.splice(j, 1);
                    }
                    bullets[i].alive = false; //ini akan menset nilai bullets jadi false, biar bullletnya hilang.
                }
            }
        }
    }
    isEnemyHitWithBullet(); //pemanggilan fungsi biar lebih..... rapi.
    isUserHitWithEnemyObject();
    isUserHitWithBullet();
};