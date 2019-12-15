function Hitbox() {
    function isUserHitWithBullet() {
        for (i = 0; i < bulletEnemy.length; i++){
            if(AbsoluteDistance(player1.object.position.y, bulletEnemy[j].object.position.y) < 1 &&
               AbsoluteDistance(player1.object.position.x, bulletEnemy[j].object.position.x) < 1) {
                player1.PlayerHit();
               }
        }
    }

    //fungsi ini buat mengehitung jarak absolut dari dua objek. sengaja dipisahkan biar
    //impelementasi ke fungsi lainnya lebih mudah
    function AbsoluteDistance(a,b){
        var c = Math.abs(a-b);
        return c
    }

    function isUserHitWithEnemyObject() {
        //fungsi apabila player menyentuh musuh, tiap isi dari list musuh akan dicek, apakah mengenai player atau tidak
        for (j = 0; j < enemy.length; j++)
            if (AbsoluteDistance(player1.object.position.y, enemy[j].object.position.y) < 1 && 
            //if (player1.object.position.y == enemy[j].object.position.y && 
            AbsoluteDistance(player1.object.position.x, enemy[j].object.position.x) < 1)
            //player1.object.position.x == enemy[j].object.position.x) 
                player1.PlayerHit();
    }

    //AbsoluteDistance(bullets[i].position.y, enemy[j].object.position.y)

    function isEnemyHitWithBullet() {
        //fungsi apabila musuh menyentuh bulet, tiap isi dari list bullet akan dicek, apakah mengenai musuh atau tidak
        var i = j = 0;
        for (i = 0; i < bullets.length; i++) {
            for (j = 0; j < enemy.length; j++) {
                if (AbsoluteDistance(bullets[i].position.y, enemy[j].object.position.y) < 1 &&
                    AbsoluteDistance(bullets[i].position.x, enemy[j].object.position.x) < 1) {
                    if (enemy[j].EnemyHit()) { //fungsi dari Enemy hit akan mereturn true, apabila musuh ter-VibeCheck, false apabila masih hidup
                        enemy.splice(j, 1);
                        angka += 200;
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