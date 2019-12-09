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
}

class MinionsUptoDown extends musuh {
    constructor(x, y, speed) {
        super(6, 12, speed);
        this._object = Spawn(x, y);
        enemy.push(this);
        scene.add(this._object);
    }
    move() {
        if (this.object.position.y >= 2)
            this.object.translateY(-1 * this.speed);
    }
}


class MinionsxPower extends musuh {
    constructor(x, y, speed, translation, range) {
        super(6, 12, speed);
        this._object = Spawn(x, y);
        this.translation = translation;
        this.range = range
        enemy.push(this);
        scene.add(this._object);
    }
    move() {
        var coordinate = this.object.position.x - this.speed
            //x = 10y^1/2
        this.object.position.x = coordinate;
        this.object.position.y = Math.pow(coordinate - this.translation, 2) / this.range
    }
}


class MinionsxLogLeft extends musuh {
    constructor(head, x, lebar, speed, translation, accelerate) {
        super(6, 12, speed);
        this._object = Spawn(x, 10);
        this.translation = translation;
        this.head = head
        this.lebar = lebar
        this._accelerate = accelerate;
        enemy.push(this);
        scene.add(this._object);
    }
    move() {
        var coordinate = this.object.position.x + this.speed
            //y = head * log(x + translation)
        this.object.position.x = coordinate;
        this.object.position.y = this.head * Math.log2((this.lebar * coordinate) - this.translation) + 10
        this.accelerates()
    }
    accelerates() {
        this._speed += this._accelerate;
    }
}
class MinionsxLogRight extends musuh {
    constructor(head, x, lebar, speed, translation, accelerate) {
        super(6, 12, speed);
        this._object = Spawn(x, 10);
        this.translation = translation;
        this.head = head
        this.lebar = lebar
        this._accelerate = accelerate;
        enemy.push(this);
        scene.add(this._object);
    }
    move() {
        var coordinate = this.object.position.x + this.speed
            //y = head * log(x + translation)
        this.object.position.x = coordinate;
        this.object.position.y = this.head * Math.log2((this.lebar * coordinate) - this.translation) + 10
        this.accelerates()
    }
    accelerates() {
        this._speed += this._accelerate;
    }
}

//new MinionsxLog(-11, 0, 10, 0.0005, -3, 0.0001) //head (-1 dari atas ke bawah),x,y,speed,translation,akselerasi
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


function enemySpawner() { //test object
    if (time <= 3) {
        // new MinionsUptoDown(getRandom() % 10, 10, 0.03) // x , y, speed
        // new MinionsxPower(25, 10, 0.08, -10, 50)
        // new MinionsxPower(-25, 10, -0.08, 15, 50) //x coordinate, y coordinate, speed, x translation, Lebar lingkaran
        new MinionsxLogLeft(-3, -6, 1, 0.05, -6, 0.0005)
            //head (-1 dari atas ke bawah),x,lebar,speed,translation,akselerasi
    }
}