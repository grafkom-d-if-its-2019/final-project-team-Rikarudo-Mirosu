//fungsi untuk membuat object minions
function Spawn(x, y) { //tulung diisikan Geomtery dan material untuk minions
    var geometry = new THREE.BoxGeometry(1, 1, 1);
    var material = new THREE.MeshBasicMaterial({
        color: 'red'
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
        color: 'black'
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
    constructor(health, attack, speed, delay, waitshot) {
        this.health = health;
        this.attack = attack;
        this._object = null;
        this._speed = speed;
        this._delay = delay * 60;
        this._time = 0;
        this._shotTime = 0;
        this._DeleteBasedOnY = true
        this._shootAble = false;
        this.waitshot = waitshot
        this._lifeTime = 0
    }
    VibeCheck() {
        scene.remove(this.object);
        console.log("kok terhapus")
        delete this;
    }
    get shootAble() {
        return this._shootAble
    }
    set shootAble(x) {
        this._shootAble = x
    }
    get object() {
        return this._object;
    }
    get shotTime() {
        return this._shotTime
    }
    set shotTime(x) {
        this._shotTime = x
    }
    get lifeTime() {
        return this._lifeTime
    }
    set lifeTime(x) {
        this._lifeTime = x
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
        if (this.object.position.x >= 50 || this.object.position.x <= -50) {
            return false;
        }
        if (this.object.position.y >= 50 || this.object.position.y <= -50 && this._DeleteBasedOnY) {
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

    shootPeebles() {
        if (this._shootAble && this.waitshot <= this._lifeTime / 60 && this._shotTime % 30 == 0) {
            spawnshootEnemy(this.object.position.x, this.object.position.y)
            this._shotTime = 0;
        }
        this._shotTime++;
    }
}


class Minions extends musuh {
    constructor(x, y, speed, delay, outOrientation, waitshot) {
        super(21, 12, speed, delay, waitshot);
        this._back = true
        this.outOrientation = outOrientation
    }
    set back(x) {
        this._back = x
    }
    get back() {
        return this._back
    }
}

class MinionsUptoDown extends Minions {
    constructor(x, y, speed, yboundary, delay, outOrientation, waitshot) {
        super(6, 12, speed, delay, outOrientation, waitshot);
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
    constructor(x, y, speed, xboundary, yboundary, delay, outOrientation, waitshot) {
        super(6, 12, speed, delay, outOrientation, waitshot);
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
    constructor(x, y, speed, xboundary, yboundary, delay, outOrientation, waitshot) {
        super(6, 12, speed, delay, outOrientation, waitshot);
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
    constructor(head, x, lebar, speed, translation, accelerate, xboundary, delay, outOrientation, waitshot) {
        super(6, 12, speed, delay, outOrientation, waitshot);
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
    constructor(head, x, lebar, speed, translation, accelerate, xboundary, delay, outOrientation, waitshot) {
        super(6, 12, speed, delay, outOrientation, waitshot);
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
        super(1500, 120, speed, 0, 0, 0);
        this._object = SpawnBoss(x, y);
        enemy.push(this);
        scene.add(this._object);
    }
    move() {
        bossBesar.object.position.x = player1.object.position.x
    }
}

function moveEnemy() {
    var k = 0;
    for (k = 0; k < enemy.length; k++) {
        enemy[k].move();
        enemy[k].lifeTime += 1
        enemy[k].shootPeebles();
        if (!enemy[k].checkOutOfBound()) {
            enemy[k].VibeCheck();
            enemy.splice(k, 1);

        }
    }
}