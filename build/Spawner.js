//fungsi untuk membuat object minions
function Spawn(x, y) { //tulung diisikan Geomtery dan material untuk minions
    var geometry = new THREE.BoxGeometry(1, 1, 1);
    var material = new THREE.MeshBasicMaterial({
        color: 0xffff
    });
    var cubec = new THREE.Mesh(geometry, material);
    cubec.position.set(
        cubec.position.x = x,
        cubec.position.y = y,
        cubec.position.z = 6
    )
    return cubec;
};
//fungsi untuk membuat object minions
function SpawnBoss(x, y, z) { //tulung diisikan Geomtery dan material untuk minions
    var geometry = new THREE.BoxGeometry(1, 1, 1);
    var material = new THREE.MeshBasicMaterial({
        color: 0x0afff
    });
    var cubec = new THREE.Mesh(geometry, material);
    cubec.position.set(
        cubec.position.x = x,
        cubec.position.y = y,
        cubec.position.z = 6
    );
    return cubec;
};

class musuh {
    constructor(health, attack) {
        this.health = health;
        this.attack = attack;
        this._object = null;
    }
    VibeCheck() {
        scene.remove(this.object);
        delete this;
    }
    get object() {
        return this._object;
    }
    EnemyHit() {
        this.health -= 3;
        if (this.health < 0) {
            this.VibeCheck();
            return true;
        }
        return false;
    }
    set x(x) {
        this._x = x;
    }

    set y(y) {
        this._x = x;
    }

    set y(y) {
        this._y = y;
    }
    set z(z) {
        this._z = z;
    }
}

class Minions extends musuh {
    constructor(x, y) {
        super(1, 12);
        this._object = Spawn(x, y);
        enemy.push(this);
        scene.add(this._object);
    }
    shootPeebles() {

    }
    move() {
        this.object.translateX(0.1);
    }
}


class Boss extends musuh {
    constructor(x, y) {
        super(100, 120);
        this._object = SpawnBoss(x, y);
        enemy.push(this);
        scene.add(this._object);
    }
    shootPeebles() {

    }
    move() {

    }
}

function moveEnemy() {
    var k = 0;
    for (k = 0; k < enemy.length; k++) {
        enemy[k].move();
    }
}


function moveBullet() {

    var k = 0;
    for (k = 0; k < bulletEnemy.length; k++) {
        bulletEnemy[k].move();
    }
}

function enemySpawner() {
    if (time == 3) {
        new Minions(3, 3);
    };

    if (time == 4) {
        new Boss(0, 0);
    }
    if (time == 10) {
        new Minions(0, 0);
    };

    if (time == 15) {
        new Boss(0, 0);

    }
}