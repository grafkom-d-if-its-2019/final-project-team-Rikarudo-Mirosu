class Player {
    constructor() { //construksi dari instansi Player, object dibentuk disini
        //untuk tama, bentuk dari player diatur di geometri, dan material dibawah ini.
        var geometry = new THREE.BoxGeometry(1, 1, 1);
        var material = new THREE.MeshBasicMaterial({
            color: 0xffff
        });
        var player = new THREE.Mesh(geometry, material);
        player.position.x = 0;
        player.position.y = -6;
        player.position.z = 6;
        this._object = player; //ini khusus untuk javascript, atribut ini diangkap sebuah atribut object yang memiliki fungsi get / set
        this.life = 30; //inisiasi life sebesar 100, dengan anggap pakai sistem health point
        this.isHittable = true;
        scene.add(player);
        //perlu diingat this adalah instansi dengan kelas Player, bukan object, jadi untuk akses objectnya, pakai (kelas).object
    }

    get object() {
        return this._object; //untuk get object, cara ngaksesnya cukup (instansi).object
    }
    
    PlayerHealthNow(){
        return this.life;
    }
    
    PlayerHit() {

        if(this.isHittable == true){
            
            this.isHittable = false
            console.log("Player Life!", this.life, this.isHittable);
            // this.life -= 10;
            if (this.life <= 0) this.VibeCheck();
            scene.remove(this._object)
            
            angka -= 1000;
            if(angka < 0) angka = 0

            deathTime = time
            alive = false
        }
        // setTimeout(this.PlayerRespawn(), 5000)
    }

    PlayerRespawn(){
    
        if(time-3 >= deathTime && time-3 - deathTime<0.9)
        {
            
            
            this.life -= 10;
            this.isHittable = true
            this._object.position.x = 0;
            this._object.position.y = -6;
            this._object.position.z = 6;
            
            console.log("idup lagi")
            alive = true
            scene.add(this._object)
        }
    }

    VibeCheck() {
        console.log("Game Over");
        // stop();
    }
    
    // action() {
    //     if (LEFT) {
    //         xMovement = -0.2;
    //     }
    //     if (RIGHT) {
    //         xMovement = 0.2;
    //     }
    //     if (TOP) {
    //         yMovement = 0.2;
    //     }
    //     if (BOTTOM) {
    //         yMovement = -0.2;
    //     }
    //     if (SHOOT) {
    //         if (delayshoot > 3) {
    //             spawnshoot();
    //             delayshoot = 0;
    //         }
    //     }
    // }
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
    if (e.keyCode == 75 && alive) SHOOT = true;
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

