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
function SpawnBoss(x, y) { //tulung diisikan Geomtery dan material untuk minions
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
    constructor(health, attack, speed) {
        this.health = health;
        this.attack = attack;
        this._object = null;
        this._speed = speed;
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
    set speed(speed) {
        this._speed = speed;
    }
    get speed() {
        return this._speed;
    }
}

class Minions extends musuh {
    constructor(x, y, speed) {
        super(6, 12, speed);
        this._object = Spawn(x, y);
        enemy.push(this);
        scene.add(this._object);
    }
    shootPeebles() {

    }
    move() {
        if (this.object.position.y >= 2)
            this.object.translateY(-1 * this.speed);
    }
}


class Minions5xPower extends musuh {
    constructor(x, y, speed) {
        super(1, 12, speed);
        this._object = Spawn(x, y);
        enemy.push(this);
        scene.add(this._object);
    }
    move() {
        var coordinate = this.object.position.x - this.speed
            //x = 10y^1/2
        this.object.position.x = coordinate;
        this.object.position.y = Math.pow(coordinate, 2) / 10
    }
}

class Boss extends musuh {
    constructor(x, y, speed) {
        super(100, 120, speed);
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

function getRandom() {
    var a = crypto.getRandomValues(new Uint32Array(1))
    if (a % 2 > 0) return a;
    else return -a;
}

// function enemySpawner() {

//     if (time <= 10) {
//         // new Minions(getRandom() % 10, 10);

//         // new Minions(getRandom() % 10, 10);

//         // new Minions(getRandom() % 10, 10);
//         new Minions(getRandom() % 10, 10, 0.3)
//         new Minions5xPower(10, 10, 0.08)
//     }
// }


function enemySpawner() {
    if (time <= 3) {
        new Minions(getRandom() % 10, 10, 0.03)
        new Minions5xPower(10, 10, 0.08)
    }
}