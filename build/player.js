class Player {
    constructor() {
        var geometry = new THREE.BoxGeometry(1, 1, 1);
        var material = new THREE.MeshBasicMaterial({
            color: 0xffff
        });
        var player = new THREE.Mesh(geometry, material);
        player.position.x = 0;
        player.position.y = -3;
        player.position.z = 6;
        scene.add(player);
        this._object = player;
        this.yMovement = 0;
        this.xMovement = 0;
        this.delayshoot = 0;
        this.life = 100;

    }

    get object() {
        return this._object;
    }
    PlayerHit() {
        console.log("Player Life!", this.life);
        this.life -= 10;
    }
}
// kalau di action, shoot diaktifin dan addEventListener, shoot dinonaktifin, tembakannya
// bakal berjeda. ga full auto. vice versa

function action() {
    if (LEFT) {
        xMovement = -0.2;
    }
    if (RIGHT) {
        xMovement = 0.2;
    }
    if (TOP) {
        yMovement = 0.2;
    }
    if (BOTTOM) {
        yMovement = -0.2;
    }
    if (SHOOT) {
        if (delayshoot > 3) {
            spawnshoot();
            delayshoot = 0;
        }
    }
}

document.onkeydown = function(e) {
    if (e.keyCode == 65) LEFT = true;
    if (e.keyCode == 68) RIGHT = true;
    if (e.keyCode == 87) TOP = true;
    if (e.keyCode == 83) BOTTOM = true;
    if (e.keyCode == 75) SHOOT = true;
}

document.onkeyup = function(e) {
    if (e.keyCode == 65) LEFT = false;
    if (e.keyCode == 68) RIGHT = false;
    if (e.keyCode == 87) TOP = false;
    if (e.keyCode == 83) BOTTOM = false;
    if (e.keyCode == 75) SHOOT = false;
}

document.addEventListener("keydown", onDocumentKeyDown, false);

document.body.addEventListener('keyup', function(e) {
    yMovement = 0;
    xMovement = 0;
});

function onDocumentKeyDown(event) {}

document.body.addEventListener('keydown', function(e) {

    var keyCode = event.which;

    // bagian ini untuk spawn bullet
    // bagian ini di handle diluar fungsi ini
    // if (keyCode == 75) { // K
    //     spawnshoot();
    // }
    // bagian pergerakan ini dinonaktifkan karena udah ditangani diluar bagian

    // // up
    // if (keyCode == 87) {
    //     yMovement = 0.2;
    //     // down
    // }if (keyCode == 83) {
    //     yMovement = -0.2;
    //     // left
    // }if (keyCode == 65) {
    //     xMovement = -0.2;
    //     // right
    // }if (keyCode == 68) {
    //     xMovement = 0.2;
    //     // space
    // }if (keyCode == 32) {
    //     cube1.position.x = 0.0;
    //     cube1.position.y = 0.0;
    // }

});