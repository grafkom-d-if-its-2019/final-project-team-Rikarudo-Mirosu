function Spawn() {
    var geometry = new THREE.BoxGeometry(1, 1, 1);
    var material = new THREE.MeshBasicMaterial({
        color: 0xffff
    });
    var cubec = new THREE.Mesh(geometry, material);
    cubec.position.set(
        cubec.position.x = 0,
        cubec.position.y = 0,
        cubec.position.z = 6
    )
    return cubec;
};

function SpawnBoss() {
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
    }
    VibeCheck() {
        delete this;
    }
}

class cina extends musuh {
    constructor() {
        super(1, 12);
        this._object = Spawn();
    }
    shootPeebles() {

    }
    get object() {
        return this._object;
    }
}


class Batak extends musuh {
    constructor() {
        super(1000, 120);
        this._object = SpawnBoss();
    }
    shootPeebles() {

    }
    get object() {
        return this._object;
    }
}