//fungsi untuk membuat object minions
function Spawn() { //tulung diisikan Geomtery dan material untuk minions
    var geometry = new THREE.BoxGeometry(1, 1, 1);
    var material = new THREE.MeshBasicMaterial({
        color: 0xffff
    });
    var cubec = new THREE.Mesh(geometry, material);
    cubec.position.set(
        cubec.position.x = 3,
        cubec.position.y = 0,
        cubec.position.z = 6
    )
    return cubec;
};
//fungsi untuk membuat object minions
function SpawnBoss() { //tulung diisikan Geomtery dan material untuk minions
    var geometry = new THREE.BoxGeometry(1, 1, 1);
    var material = new THREE.MeshBasicMaterial({
        color: 0x0afff
    });
    var cubec = new THREE.Mesh(geometry, material);
    cubec.position.set(
        cubec.position.x = 0,
        cubec.position.y = -2,
        cubec.position.z = 6
    )
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
}

class Minions extends musuh {
    constructor() {
        super(1, 12);
        this._object = Spawn();
        enemy.push(this);
    }
    shootPeebles() {

    }
}


class Boss extends musuh {
    constructor() {
        super(100, 120);
        this._object = SpawnBoss();
        enemy.push(this);
    }
    shootPeebles() {

    }
}