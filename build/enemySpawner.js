

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

        new MinionsUptoDown(getRandom() % 10, 15, 0.09, 6, 1, 1, 0) // x , y, speed , x boundary, y boundary,delay,outOrientation
        new MinionsUptoDown(getRandom() % 10, 15, 0.09, 6, 1, 1, 1) // x , y, speed , x boundary, y boundary,delay,outOrientation
        new MinionsUptoDown(getRandom() % 10, 15, 0.09, 6, 1, 1, 2) // x , y, speed , x boundary, y boundary,delay,outOrientation
        new MinionsUptoDown(getRandom() % 10, 15, 0.09, 6, 1, 1, 3) // x , y, speed , x boundary, y boundary,delay,outOrientation

        new MinionsxLogLeft(3, -6, 1, 0.1, -6, 0.0001, 3, 2, 3) //head (-1 dari atas ke bawah),x,lebar,speed,translation,akselerasi,xboundary,delay,outOrientation
        new MinionsxLogLeft(3, -6, 1, 0.1, -6, 0.0001, 3, 2, 1) //head (-1 dari atas ke bawah),x,lebar,speed,translation,akselerasi,xboundary,delay,outOrientation
        new MinionsxLogLeft(3, -6, 1, 0.1, -6, 0.0001, 3, 2, 2) //head (-1 dari atas ke bawah),x,lebar,speed,translation,akselerasi,xboundary,delay,outOrientation
        new MinionsxLogLeft(3, -6, 1, 0.1, -6, 0.0001, 3, 2, 0) //head (-1 dari atas ke bawah),x,lebar,speed,translation,akselerasi,xboundary,delay,outOrientation
        new MinionsxLogLeft(3, -6, 1, 0.1, -6, 0.0001, 3, 2, 4) //head (-1 dari atas ke bawah),x,lebar,speed,translation,akselerasi,xboundary,delay,outOrientation

        new MinionsxLogRight(3, 3, 1, 0.1, 3, 0.0001, 0, 2, 2) //head (-1 dari atas ke bawah),x,lebar,speed,translation,akselerasi,xboundary,delay,outOrientation
        new MinionsxLogRight(3, 3, 1, 0.1, 3, 0.0001, 0, 2, 1) //head (-1 dari atas ke bawah),x,lebar,speed,translation,akselerasi,xboundary,delay,outOrientation
        new MinionsxLogRight(3, 3, 1, 0.1, 3, 0.0001, 0, 2, 0) //head (-1 dari atas ke bawah),x,lebar,speed,translation,akselerasi,xboundary,delay,outOrientation
        new MinionsxLogRight(3, 3, 1, 0.1, 3, 0.0001, 0, 2, 3) //head (-1 dari atas ke bawah),x,lebar,speed,translation,akselerasi,xboundary,delay,outOrientation
        new MinionsxLogRight(3, 3, 1, 0.1, 3, 0.0001, 0, 2, 4) //head (-1 dari atas ke bawah),x,lebar,speed,translation,akselerasi,xboundary,delay,outOrientation

        new MinionsLefttoRight(-30, 1, 0.09, 2, 3, 1, 2) // x , y, speed , x boundary, y boundary,delay,outOrientationS
        new MinionsLefttoRight(-30, 1, 0.09, 2, 3, 1, 3) // x , y, speed , x boundary, y boundary,delay,outOrientation
        new MinionsLefttoRight(-30, 1, 0.09, 2, 3, 1, 1) // x , y, speed , x boundary, y boundary,delay,outOrientation
        new MinionsLefttoRight(-30, 1, 0.09, 2, 3, 1, 0) // x , y, speed , x boundary, y boundary,delay,outOrientation

        new MinionsRighttoLeft(30, 1, 0.09, 2, 3, 1, 2) // x , y, speed , x boundary, y boundary,delay,outOrientationS
        new MinionsRighttoLeft(30, 1, 0.09, 2, 3, 1, 3) // x , y, speed , x boundary, y boundary,delay,outOrientation
        new MinionsRighttoLeft(30, 1, 0.09, 2, 3, 1, 1) // x , y, speed , x boundary, y boundary,delay,outOrientation
        new MinionsRighttoLeft(30, 1, 0.09, 2, 3, 1, 0) // x , y, speed , x boundary, y boundary,delay,outOrientation
    }
}

// if (this.outOrientation == 0) this.object.translateX(-1 * this.speed); //kiri
// if (this.outOrientation == 1) this.object.translateY(-1 * this.speed); //bawah
// if (this.outOrientation == 2) this.object.translateX(1 * this.speed); //kanan
// if (this.outOrientation == 3) this.object.translateY(1 * this.speed); //atas
// if (this.outOrientation == 4) ikuti pola