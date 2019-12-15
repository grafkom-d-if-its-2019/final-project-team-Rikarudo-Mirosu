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
        this._DeleteBasedOnY = true
    }
    VibeCheck() {
        scene.remove(this.object);
        console.log("terhapus")
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
    checkOutOfBound() {
        if (this.object.position.x >= 30 || this.object.position.x <= -30) {
            return false;
        }
        if (this.object.position.y >= 15 && this._DeleteBasedOnY) {
            return false;
        }
        return true;
    }
    set x(x) {
        this._x = x;
    }
    set DeleteBasedOnY(x) {
        this._DeleteBasedOnY = x
    }
    get DeleteBasedOnY() {
        return this._DeleteBasedOnY
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
    constructor(x, y, speed, delay, outOrientation) {
        super(6, 12, speed, delay);
        this._back = true
        this.outOrientation = outOrientation
    }
    shootPeebles() {

    }
    set back(x) {
        this._back = x
    }
    get back() {
        return this._back
    }
}

class MinionsUptoDown extends Minions {
    constructor(x, y, speed, yboundary, delay, outOrientation) {
        super(6, 12, speed, delay, outOrientation);
        this._object = Spawn(x, y);
        this.yboundary = yboundary
        enemy.push(this);
        scene.add(this._object);
    }
    move() {
        if (this.object.position.y >= this.yboundary && this._back)
            this.object.translateY(-1 * this.speed);
        else {
            if (this.isNotDelayed()) {
                this._back = false
                if (this.outOrientation == 0) this.object.translateX(-1 * this.speed); //kiri
                if (this.outOrientation == 1) this.object.translateY(-1 * this.speed); //bawah
                if (this.outOrientation == 2) this.object.translateX(1 * this.speed); //kanan
                if (this.outOrientation == 3) this.object.translateY(1 * this.speed); //atas
            }
        }

    }
}
class MinionsRighttoLeft extends Minions {
    constructor(x, y, speed, xboundary, yboundary, delay, outOrientation) {
        super(6, 12, speed, delay, outOrientation);
        this._object = Spawn(x, y);
        this.xboundary = xboundary
        this.yboundary = yboundary
        enemy.push(this);
        scene.add(this._object);
    }
    move() {
        if (this.object.position.x >= this.xboundary && this._back) this.object.translateX(-1 * this.speed);
        else {
            if (this.isNotDelayed()) {
                this._back = false
                if (this.outOrientation == 0) this.object.translateX(-1 * this.speed); //kanan
                if (this.outOrientation == 1) this.object.translateY(-1 * this.speed); //kiri
                if (this.outOrientation == 2) this.object.translateX(1 * this.speed); //kanan
                if (this.outOrientation == 3) this.object.translateY(1 * this.speed); //atas
            }
        }
    }
}



class MinionsLefttoRight extends Minions {
    constructor(x, y, speed, xboundary, yboundary, delay, outOrientation) {
        super(6, 12, speed, delay, outOrientation);
        this._object = Spawn(x, y);
        this.xboundary = xboundary
        this.yboundary = yboundary
        enemy.push(this);
        scene.add(this._object);
    }
    move() {
        if (this.object.position.x <= this.xboundary && this._back) this.object.translateX(1 * this.speed);
        else {
            if (this.isNotDelayed()) {
                this._back = false
                if (this.outOrientation == 0) this.object.translateX(-1 * this.speed); //kiri
                if (this.outOrientation == 1) this.object.translateY(-1 * this.speed); //bawah
                if (this.outOrientation == 2) this.object.translateX(1 * this.speed); //kanan
                if (this.outOrientation == 3) this.object.translateY(1 * this.speed); //atas
            }
        }
    }
}




class MinionsxLogLeft extends Minions {
    constructor(head, x, lebar, speed, translation, accelerate, xboundary, delay, outOrientation) {
        super(6, 12, speed, delay, outOrientation);
        this._object = Spawn(x, 12);
        this._DeleteBasedOnY = false
        this.xboundary = xboundary
        this.translation = translation;
        this.head = head
        this.lebar = lebar
        this._accelerate = accelerate;
        enemy.push(this);
        scene.add(this._object);
    }
    move() {
        if (this.object.position.x <= this.xboundary && this._back) {
            var coordinate = this.object.position.x + this.speed
                //y = head * log(x + translation)
            this.object.position.x = coordinate;
            this.object.position.y = -1 * this.head * Math.log2((this.lebar * coordinate) - this.translation) + 10
            this.accelerates()

        } else {
            if (this.isNotDelayed()) {
                this._back = false

                this._DeleteBasedOnY = true
                if (this.outOrientation == 0) this.object.translateX(-1 * this.speed); //kiri
                else if (this.outOrientation == 1) this.object.translateY(-1 * this.speed); //bawah
                else if (this.outOrientation == 2) this.object.translateX(1 * this.speed); //kanan
                else if (this.outOrientation == 3) this.object.translateY(1 * this.speed); //atas
                else if (this.outOrientation == 4) {
                    var coordinate = this.object.position.x + this.speed
                        //y = head * log(x + translation)
                    this.object.position.x = coordinate;
                    this.object.position.y = -1 * this.head * Math.log2((this.lebar * coordinate) - this.translation) + 10
                    this.accelerates()
                }
            }

        }
    }
    accelerates() {
        this._speed += this._accelerate;
    }
}

class MinionsxLogRight extends Minions {
    constructor(head, x, lebar, speed, translation, accelerate, xboundary, delay, outOrientation) {
        super(6, 12, speed, delay, outOrientation);
        this._object = Spawn(x, 12);

        this._DeleteBasedOnY = false
        this.translation = translation;
        this.head = head
        this.lebar = lebar
        this.xboundary = xboundary
        this._accelerate = accelerate;
        enemy.push(this);
        scene.add(this._object);
    }
    move() {
        if (this.object.position.x >= this.xboundary && this._back) {
            var coordinate = this.object.position.x - this.speed
                //y = head * log(x + translation)
            this.object.position.x = coordinate;
            this.object.position.y = -1 * this.head * Math.log2(-1 * ((this.lebar * coordinate) - this.translation)) + 10
            this.accelerates()
        } else {
            if (this.isNotDelayed()) {
                this._back = false


                this._DeleteBasedOnY = true
                if (this.outOrientation == 0) this.object.translateX(-1 * this.speed); //kiri
                else if (this.outOrientation == 1) this.object.translateY(-1 * this.speed); //bawah
                else if (this.outOrientation == 2) this.object.translateX(1 * this.speed); //kanan
                else if (this.outOrientation == 3) this.object.translateY(1 * this.speed); //atas
                else {
                    var coordinate = this.object.position.x - this.speed
                        //y = head * log(x + translation)
                    this.object.position.x = coordinate;
                    this.object.position.y = -1 * this.head * Math.log2(-1 * ((this.lebar * coordinate) - this.translation)) + 10
                    this.accelerates()
                }

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
        if (!enemy[k].checkOutOfBound()) {
            enemy[k].VibeCheck();
            enemy.splice(k, 1);

        }
    }
}
