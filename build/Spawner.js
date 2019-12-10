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
    constructor(health, attack, speed, delay) {
        this.health = health;
        this.attack = attack;
        this._object = null;
        this._speed = speed;
        this._delay = delay * 60;
        this._time = 0;
    }
    VibeCheck() {
        scene.remove(this.object);
        delete this;
    }
    get object() {
        return this._object;
    }
    isNotDelayed() {
        if (this._time == this._delay) return true
        this._time += 1
        return false
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

    set time(x) {
        this._time += x;
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
    get time() {
        return this._time
    }

    get delay() {
        return this._delay
    }
}


class Minions extends musuh {
    constructor(x, y, speed, delay) {
        super(6, 12, speed, delay);
    }
    shootPeebles() {

    }
}

class MinionsUptoDown extends Minions {
    constructor(x, y, speed, xboundary, yboundary, delay) {
        super(6, 12, speed, delay);
        this._object = Spawn(x, y);
        this.xboundary = xboundary
        this.yboundary = yboundary
        enemy.push(this);
        scene.add(this._object);
    }
    move() {
        if (this.object.position.y >= this.yboundary)
            this.object.translateY(-1 * this.speed);
        else {
            if (this.isNotDelayed()) {
                if (this.object.position.x >= 0)
                    this.object.translateX(this.speed)
                else
                    this.object.translateX(this.speed * -1)
            }
        }

    }
}
class MinionsRighttoLeft extends Minions {
    constructor(x, y, speed, xboundary, yboundary, delay) {
        super(6, 12, speed, delay);
        this._object = Spawn(x, y);
        this.xboundary = xboundary
        this.yboundary = yboundary
        enemy.push(this);
        scene.add(this._object);
    }
    move() {
        if (this.object.position.x >= this.xboundary) this.object.translateX(-1 * this.speed);
        else {
            if (this.isNotDelayed()) {
                this.object.translateX(-1 * this.speed);
            }
        }
    }
}

class MinionsLefttoRight extends Minions {
    constructor(x, y, speed, xboundary, yboundary, delay) {
        super(6, 12, speed, delay);
        this._object = Spawn(x, y);
        this.xboundary = xboundary
        this.yboundary = yboundary
        enemy.push(this);
        scene.add(this._object);
    }
    move() {
        if (this.object.position.x <= this.xboundary) this.object.translateX(1 * this.speed);
        else {
            if (this.isNotDelayed()) {
                this.object.translateX(1 * this.speed);
            }
        }
    }
}


class MinionsxPower extends Minions {
    constructor(x, speed, translation, range, xboundary, delay) {
        super(6, 12, speed, delay);
        this._object = Spawn(x, 24);
        this.translation = translation;
        this.range = range
        this.xboundary = xboundary
        enemy.push(this);
        scene.add(this._object);
    }
    move() {
        if (this.object.position.x <= this.xboundary) {
            var coordinate = this.object.position.x + this.speed
                //x = 10y^1/2
            this.object.position.x = coordinate;
            this.object.position.y = Math.pow(coordinate - this.translation, 2) / this.range
        } else {
            if (this.isNotDelayed()) {
                var coordinate = this.object.position.x + this.speed
                    //x = 10y^1/2
                this.object.position.x = coordinate;
                this.object.position.y = Math.pow(coordinate - this.translation, 2) / this.range
            }
        }

    }
}


class MinionsxLogLeft extends Minions {
    constructor(head, x, lebar, speed, translation, accelerate, xboundary, delay) {
        super(6, 12, speed, delay);
        this._object = Spawn(x, 12);

        this.xboundary = xboundary
        this.translation = translation;
        this.head = head
        this.lebar = lebar
        this._accelerate = accelerate;
        enemy.push(this);
        scene.add(this._object);
    }
    move() {
        if (this.object.position.x <= this.xboundary) {

            var coordinate = this.object.position.x + this.speed
                //y = head * log(x + translation)
            this.object.position.x = coordinate;
            this.object.position.y = -1 * this.head * Math.log2((this.lebar * coordinate) - this.translation) + 10
            this.accelerates()

        } else {
            if (this.isNotDelayed()) {

                var coordinate = this.object.position.x + this.speed
                    //y = head * log(x + translation)
                this.object.position.x = coordinate;
                this.object.position.y = -1 * this.head * Math.log2((this.lebar * coordinate) - this.translation) + 10
                this.accelerates()
            }

        }
    }
    accelerates() {
        this._speed += this._accelerate;
    }
}

class MinionsxLogRight extends Minions {
    constructor(head, x, lebar, speed, translation, accelerate, xboundary, delay) {
        super(6, 12, speed, delay);
        this._object = Spawn(x, 12);
        this.translation = translation;
        this.head = head
        this.lebar = lebar
        this.xboundary = xboundary
        this._accelerate = accelerate;
        enemy.push(this);
        scene.add(this._object);
    }
    move() {
        if (this.object.position.x >= this.xboundary) {
            var coordinate = this.object.position.x - this.speed
                //y = head * log(x + translation)
            this.object.position.x = coordinate;
            this.object.position.y = -1 * this.head * Math.log2(-1 * ((this.lebar * coordinate) - this.translation)) + 10
            this.accelerates()
        } else {
            if (this.isNotDelayed()) {
                var coordinate = this.object.position.x - this.speed
                    //y = head * log(x + translation)
                this.object.position.x = coordinate;
                this.object.position.y = -1 * this.head * Math.log2(-1 * ((this.lebar * coordinate) - this.translation)) + 10
                this.accelerates()
            }
        }
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
    var b = crypto.getRandomValues(new Uint32Array(1))
    if (b % 2 > 0) return a;
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
    if (time <= 1) {
        //new MinionsUptoDown(getRandom() % 10, 10, 0.03, 6, -2, 3) // x , y, speed , xboundary,y boundary,delay
        //new MinionsxPower(25, 10, 0.08, -10, 50, 0)
        //new MinionsxPower(-5, 0.08, 15, 50, 0, 2) //x coordinate,  speed, x translation, Lebar lingkaran, xboundary,delay
        // new MinionsxLogLeft(3, -6, 1, 0.01, -6, 0.0001, 3, 2) //head (-1 dari atas ke bawah),x,lebar,speed,translation,akselerasi,xboundary,delay
        // new MinionsxLogRight(3, 3, 1, 0.01, 3, 0.0001, -3, 2)
        //new MinionsUptoDown(getRandom() % 10, 10, 0.09, 6, 1, 1) // x , y, speed , x boundary, y boundary,delay
        new MinionsRighttoLeft(20, 1, 0.09, 6, 3, 1) // x , y, speed , x boundary, y boundary,delay
        new MinionsLefttoRight(-20, 1, 0.09, 2, 3, 1) // x , y, speed , x boundary, y boundary,delay
    }
}