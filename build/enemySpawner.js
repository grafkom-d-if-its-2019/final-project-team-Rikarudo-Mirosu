function moveBulletEnemy() {
    // var k = 0;
    // for (k = 0; k < bulletEnemy.length; k++) {
    //     bulletEnemy[k].move()
    //         // console.log("move")
    // }
}

function getRandom() {
    var a = crypto.getRandomValues(new Uint32Array(1))
    var b = crypto.getRandomValues(new Uint32Array(1))
    if (b % 2 > 0) return a;
    else return -a;
}
var counter = 0

function enemySpawner() {

    if (time <= 1.0) {
        if (time <= 0.2 && time > 0.1) {
            new MinionsUptoDown(2, 14, 0.07, -1, 2, 1, 2).shootAble = true // x , y, speed , y boundary,delay,outOrientation,waitshot
            new MinionsUptoDown(4, 14, 0.07, -1, 2, 1, 2).shootAble = true // x , y, speed , y boundary,delay,outOrientation,waitshot
            new MinionsUptoDown(6, 14, 0.07, -1, 2, 1, 2).shootAble = true // x , y, speed , y boundary,delay,outOrientation,waitshot    
        } else if (time <= 0.6 && time > 0.5) {
            new MinionsUptoDown(-4, 14, 0.07, -1, 2, 1, 2).shootAble = true // x , y, speed , y boundary,delay,outOrientation,waitshot
            new MinionsUptoDown(-2, 14, 0.07, -1, 2, 1, 2).shootAble = true // x , y, speed , y boundary,delay,outOrientation,waitshot
            new MinionsUptoDown(0, 14, 0.07, -1, 2, 1, 2).shootAble = true // x , y, speed , y boundary,delay,outOrientation,waitshot

        } else if (time <= 0.7 && time > 0.6) {
            new MinionsUptoDown(8, 14, 0.07, -1, 2, 1) // x , y, speed , y boundary,delay,outOrientation,waitshot
            new MinionsUptoDown(-6, 14, 0.07, -1, 2, 1) // x , y, speed , y boundary,delay,outOrientation,waitshot

        }
    } else if (time > 10 && time <= 11) {
        if (time >= 10 && time < 10.1) {
            new MinionsxLogLeft(3, -5, 1, 0.01, 0, 0.0003, 6, 4, 0) //head (-1 dari atas ke bawah),x,lebar,speed,translation,akselerasi,xboundary,delay,outOrientation,waitshot
            new MinionsxLogLeft(3, -6, 1, 0.01, 0, 0.0003, 7, 4, 0) //head (-1 dari atas ke bawah),x,lebar,speed,translation,akselerasi,xboundary,delay,outOrientation,waitshot
            new MinionsxLogLeft(3, -3, 1, 0.01, 0, 0.0003, 4, 4, 0) //head (-1 dari atas ke bawah),x,lebar,speed,translation,akselerasi,xboundary,delay,outOrientation,waitshot
            new MinionsxLogLeft(3, -2, 1, 0.01, 0, 0.0003, 3, 4, 0) //head (-1 dari atas ke bawah),x,lebar,speed,translation,akselerasi,xboundary,delay,outOrientation,waitshot
            new MinionsxLogLeft(3, -4, 1, 0.01, 0, 0.0003, 5, 4, 0) //head (-1 dari atas ke bawah),x,lebar,speed,translation,akselerasi,xboundary,delay,outOrientation,waitshot

            new MinionsxLogRight(3, 3, 1, 0.01, 0, 0.0003, -3, 4, 2) //head (-1 dari atas ke bawah),x,lebar,speed,translation,akselerasi,xboundary,delay,outOrientation,waitshot
            new MinionsxLogRight(3, 4, 1, 0.01, 0, 0.0003, -4, 4, 2) //head (-1 dari atas ke bawah),x,lebar,speed,translation,akselerasi,xboundary,delay,outOrientation,waitshot
            new MinionsxLogRight(3, 5, 1, 0.01, 0, 0.0003, -5, 4, 2) //head (-1 dari atas ke bawah),x,lebar,speed,translation,akselerasi,xboundary,delay,outOrientation,waitshot
            new MinionsxLogRight(3, 6, 1, 0.01, 0, 0.0003, -6, 4, 2) //head (-1 dari atas ke bawah),x,lebar,speed,translation,akselerasi,xboundary,delay,outOrientation,waitshot
            new MinionsxLogRight(3, 7, 1, 0.01, 0, 0.0003, -7, 4, 2)
                //head (-1 dari atas ke bawah),x,lebar,speed,translation,akselerasi,xboundary,delay,outOrientation,waitshot
        }

    } else if (time >= 19 && time <= 20) {

        if (time <= 19.4 && time > 19.3) {
            new MinionsxLogLeft(3, -5, 1, 0.05, -5, 0.0003, 3, 4, 1) //head (-1 dari atas ke bawah),x,lebar,speed,translation,akselerasi,xboundary,delay,outOrientation,waitshot
            new MinionsxLogLeft(3, -6, 1, 0.05, -6, 0.0003, 4, 4, 1) //head (-1 dari atas ke bawah),x,lebar,speed,translation,akselerasi,xboundary,delay,outOrientation,waitshot
            new MinionsxLogLeft(3, -3, 1, 0.05, -3, 0.0003, 1, 4, 1) //head (-1 dari atas ke bawah),x,lebar,speed,translation,akselerasi,xboundary,delay,outOrientation,waitshot
            new MinionsxLogLeft(3, -2, 1, 0.05, -2, 0.0003, 0, 4, 1) //head (-1 dari atas ke bawah),x,lebar,speed,translation,akselerasi,xboundary,delay,outOrientation,waitshot
            new MinionsxLogLeft(3, -4, 1, 0.05, -4, 0.0003, 2, 4, 1) //head (-1 dari atas ke bawah),x,lebar,speed,translation,akselerasi,xboundary,delay,outOrientation,waitshot

            // new MinionsxLogRight(3, 3, 1, 0.1, 3, 0.0001, 0, 2, 2) //head (-1 dari atas ke bawah),x,lebar,speed,translation,akselerasi,xboundary,delay,outOrientation,waitshot
            // new MinionsxLogRight(3, 3, 1, 0.1, 3, 0.0001, 0, 2, 1) //head (-1 dari atas ke bawah),x,lebar,speed,translation,akselerasi,xboundary,delay,outOrientation,waitshot
            // new MinionsxLogRight(3, 3, 1, 0.1, 3, 0.0001, 0, 2, 0) //head (-1 dari atas ke bawah),x,lebar,speed,translation,akselerasi,xboundary,delay,outOrientation,waitshot
            // new MinionsxLogRight(3, 3, 1, 0.1, 3, 0.0001, 0, 2, 3) //head (-1 dari atas ke bawah),x,lebar,speed,translation,akselerasi,xboundary,delay,outOrientation,waitshot
            // new MinionsxLogRight(3, 3, 1, 0.1, 3, 0.0001, 0, 2, 4) //head (-1 dari atas ke bawah),x,lebar,speed,translation,akselerasi,xboundary,delay,outOrientation,waitshot

        }

        if (time <= 19.8 && time > 19.7) {
            new MinionsxLogRight(3, 3, 1, 0.05, 3, 0.0001, -3, 2, 1) //head (-1 dari atas ke bawah),x,lebar,speed,translation,akselerasi,xboundary,delay,outOrientation,waitshot
            new MinionsxLogRight(3, 0, 1, 0.05, 0, 0.0001, 0, 2, 1) //head (-1 dari atas ke bawah),x,lebar,speed,translation,akselerasi,xboundary,delay,outOrientation,waitshot
            new MinionsxLogRight(3, 1, 1, 0.05, 1, 0.0001, -1, 2, 1) //head (-1 dari atas ke bawah),x,lebar,speed,translation,akselerasi,xboundary,delay,outOrientation,waitshot
            new MinionsxLogRight(3, 2, 1, 0.05, 2, 0.0001, -2, 2, 1) //head (-1 dari atas ke bawah),x,lebar,speed,translation,akselerasi,xboundary,delay,outOrientation,waitshot
            new MinionsxLogRight(3, 4, 1, 0.05, 4, 0.0001, -4, 2, 1) //head (-1 dari atas ke bawah),x,lebar,speed,translation,akselerasi,xboundary,delay,outOrientation,waitshot

        }


        if (time <= 19.2 && time > 20.1) {
            new MinionsxLogRight(3, 3, 1, 0.05, 3, 0.0001, 0, 2, 1) //head (-1 dari atas ke bawah),x,lebar,speed,translation,akselerasi,xboundary,delay,outOrientation,waitshot
            new MinionsxLogRight(3, 3, 1, 0.05, 3, 0.0001, 0, 2, 1) //head (-1 dari atas ke bawah),x,lebar,speed,translation,akselerasi,xboundary,delay,outOrientation,waitshot
            new MinionsxLogRight(3, 3, 1, 0.05, 3, 0.0001, 0, 2, 1) //head (-1 dari atas ke bawah),x,lebar,speed,translation,akselerasi,xboundary,delay,outOrientation,waitshot
            new MinionsxLogRight(3, 3, 1, 0.05, 3, 0.0001, 0, 2, 1) //head (-1 dari atas ke bawah),x,lebar,speed,translation,akselerasi,xboundary,delay,outOrientation,waitshot
            new MinionsxLogRight(3, 3, 1, 0.05, 3, 0.0001, 0, 2, 1) //head (-1 dari atas ke bawah),x,lebar,speed,translation,akselerasi,xboundary,delay,outOrientation,waitshot
        }

    } else if (time >= 30 && time < 39) {

        if (time <= 31 && time > 30.9) {
            new MinionsLefttoRight(-42, 12, 0.09, 2, 3, 0, 2) // x , y, speed , x boundary, y boundary,delay,outOrientation,waitshotS
            new MinionsLefttoRight(-40, 10, 0.09, 2, 3, 0, 2) // x , y, speed , x boundary, y boundary,delay,outOrientation,waitshotS
            new MinionsLefttoRight(-38, 8, 0.09, 2, 3, 0, 2) // x , y, speed , x boundary, y boundary,delay,outOrientation,waitshot
            new MinionsLefttoRight(-38, 8, 0.09, 2, 3, 0, 2) // x , y, speed , x boundary, y boundary,delay,outOrientation,waitshotS
            new MinionsLefttoRight(-36, 6, 0.09, 2, 3, 0, 2) // x , y, speed , x boundary, y boundary,delay,outOrientation,waitshot
            new MinionsLefttoRight(-34, 4, 0.09, 2, 3, 0, 2) // x , y, speed , x boundary, y boundary,delay,outOrientation,waitshotS
            new MinionsLefttoRight(-32, 2, 0.09, 2, 3, 0, 2) // x , y, speed , x boundary, y boundary,delay,outOrientation,waitshot
            new MinionsLefttoRight(-30, 0, 0.09, 2, 3, 3, 2) // x , y, speed , x boundary, y boundary,delay,outOrientation,waitshot
            new MinionsLefttoRight(-28, -2, 0.09, 2, 3, 0, 2) // x , y, speed , x boundary, y boundary,delay,outOrientation,waitshot
            new MinionsLefttoRight(-26, -4, 0.09, 2, 3, 0, 2) // x , y, speed , x boundary, y boundary,delay,outOrientation,waitshotS
            new MinionsLefttoRight(-24, -6, 0.09, 2, 3, 0, 2) // x , y, speed , x boundary, y boundary,delay,outOrientation,waitshot
            new MinionsLefttoRight(-22, -8, 0.09, 2, 3, 0, 2) // x , y, speed , x boundary, y boundary,delay,outOrientation,waitshot
            new MinionsLefttoRight(-20, -10, 0.09, 2, 3, 0, 2) // x , y, speed , x boundary, y boundary,delay,outOrientation,waitshot

        }
        if (time <= 35 && time > 34.9) {

            new MinionsLefttoRight(42, 12, 0.09, 2, 3, 0, 2) // x , y, speed , x boundary, y boundary,delay,outOrientation,waitshotS
            new MinionsLefttoRight(40, 10, 0.09, 2, 3, 0, 2) // x , y, speed , x boundary, y boundary,delay,outOrientation,waitshotS
            new MinionsRighttoLeft(38, 8, 0.09, 2, 3, 0, 0) // x , y, speed , x boundary, y boundary,delay,outOrientation,waitshotS
            new MinionsRighttoLeft(36, 6, 0.09, 2, 3, 0, 0) // x , y, speed , x boundary, y boundary,delay,outOrientation,waitshot
            new MinionsRighttoLeft(34, 4, 0.09, 2, 3, 0, 0) // x , y, speed , x boundary, y boundary,delay,outOrientation,waitshotS
            new MinionsRighttoLeft(32, 2, 0.09, 2, 3, 0, 0) // x , y, speed , x boundary, y boundary,delay,outOrientation,waitshot
            new MinionsRighttoLeft(30, 0, 0.09, 2, 3, 0, 0) // x , y, speed , x boundary, y boundary,delay,outOrientation,waitshot
            new MinionsRighttoLeft(28, -2, 0.09, 2, 3, 0, 0) // x , y, speed , x boundary, y boundary,delay,outOrientation,waitshot
            new MinionsRighttoLeft(26, -4, 0.09, 2, -3, 0, 0) // x , y, speed , x boundary, y boundary,delay,outOrientation,waitshotS
            new MinionsRighttoLeft(24, -6, 0.09, 2, 3, 0, 0) // x , y, speed , x boundary, y boundary,delay,outOrientation,waitshot
            new MinionsRighttoLeft(22, -8, 0.09, 2, -3, 3, 0) // x , y, speed , x boundary, y boundary,delay,outOrientation,waitshot
            new MinionsRighttoLeft(20, -10, 0.09, 2, 3, 0, 0) // x , y, speed , x boundary, y boundary,delay,outOrientation,waitshot
        }

        if (time <= 39 && time > 38.9) {
            new MinionsLefttoRight(-38, 8, 0.5, 2, 3, 0, 2) // x , y, speed , x boundary, y boundary,delay,outOrientation,waitshotS
            new MinionsLefttoRight(-36, 6, 0.5, 2, 3, 0, 2) // x , y, speed , x boundary, y boundary,delay,outOrientation,waitshot
            new MinionsLefttoRight(-34, 4, 0.5, 2, 3, 0, 2) // x , y, speed , x boundary, y boundary,delay,outOrientation,waitshotS
            new MinionsLefttoRight(-32, 2, 0.5, 2, 3, 0, 2) // x , y, speed , x boundary, y boundary,delay,outOrientation,waitshot
            new MinionsLefttoRight(-30, 0, 0.5, 2, 3, 0, 2) // x , y, speed , x boundary, y boundary,delay,outOrientation,waitshot
                // new MinionsLefttoRight(-28, -2, 0.5, 2, 3, 0, 2) // x , y, speed , x boundary, y boundary,delay,outOrientation,waitshot
            new MinionsLefttoRight(-26, -4, 0.5, 2, 3, 0, 2) // x , y, speed , x boundary, y boundary,delay,outOrientation,waitshotS
            new MinionsLefttoRight(-24, -6, 0.5, 2, 3, 0, 2) // x , y, speed , x boundary, y boundary,delay,outOrientation,waitshot
            new MinionsLefttoRight(-22, -8, 0.5, 2, 3, 0, 2) // x , y, speed , x boundary, y boundary,delay,outOrientation,waitshot
            new MinionsLefttoRight(-20, -10, 0.5, 2, 3, 0, 2) // x , y, speed , x boundary, y boundary,delay,outOrientation,waitshot
            new MinionsRighttoLeft(38, 8, 0.5, 2, 3, 0, 0) // x , y, speed , x boundary, y boundary,delay,outOrientation,waitshotS
            new MinionsRighttoLeft(36, 6, 0.5, 2, 3, 0, 0) // x , y, speed , x boundary, y boundary,delay,outOrientation,waitshot
            new MinionsRighttoLeft(34, 4, 0.5, 2, 3, 0, 0) // x , y, speed , x boundary, y boundary,delay,outOrientation,waitshotS
            new MinionsRighttoLeft(32, 2, 0.5, 2, 3, 0, 0) // x , y, speed , x boundary, y boundary,delay,outOrientation,waitshot
            new MinionsRighttoLeft(30, 0, 0.5, 2, 3, 0, 0) // x , y, speed , x boundary, y boundary,delay,outOrientation,waitshot
                // new MinionsRighttoLeft(28, -2, 0.5, 2, 3, 0, 0) // x , y, speed , x boundary, y boundary,delay,outOrientation,waitshot
            new MinionsRighttoLeft(26, -4, 0.5, 2, -3, 0, 0) // x , y, speed , x boundary, y boundary,delay,outOrientation,waitshotS
            new MinionsRighttoLeft(24, -6, 0.5, 2, 3, 0, 0) // x , y, speed , x boundary, y boundary,delay,outOrientation,waitshot
            new MinionsRighttoLeft(22, -8, 0.5, 2, -3, 0, 0) // x , y, speed , x boundary, y boundary,delay,outOrientation,waitshot
            new MinionsRighttoLeft(20, -10, 0.5, 2, 3, 0, 0) // x , y, speed , x boundary, y boundary,delay,outOrientation,waitshot
        }
    } else if (time >= 40 && time < 51) {
        if (time >= 42.9 && time < 43) {
            new MinionsUptoDown(getRandom() % 10, -14, -0.2, 1, 0, 1) // x , y, speed , y boundary,delay,outOrientation,waitshot
            new MinionsUptoDown(getRandom() % 10, -14, -0.2, 1, 0, 1) // x , y, speed , y boundary,delay,outOrientation,waitshot
            new MinionsUptoDown(getRandom() % 10, -14, -0.2, 1, 0, 1) // x , y, speed , y boundary,delay,outOrientation,waitshot
            new MinionsUptoDown(getRandom() % 10, -14, -0.2, 1, 0, 1) // x , y, speed , y boundary,delay,outOrientation,waitshot
            new MinionsUptoDown(getRandom() % 10, -14, -0.2, 1, 0, 1) // x , y, speed , y boundary,delay,outOrientation,waitshot
            new MinionsUptoDown(getRandom() % 10, -14, -0.2, 1, 0, 1) // x , y, speed , y boundary,delay,outOrientation,waitshot
            new MinionsUptoDown(getRandom() % 10, -14, -0.2, 1, 0, 1) // x , y, speed , y boundary,delay,outOrientation,waitshot
            new MinionsUptoDown(getRandom() % 10, -14, -0.2, 1, 0, 1) // x , y, speed , y boundary,delay,outOrientation,waitshot
            new MinionsUptoDown(getRandom() % 10, -14, -0.2, 1, 0, 1) // x , y, speed , y boundary,delay,outOrientation,waitshot
            new MinionsUptoDown(getRandom() % 10, -14, -0.2, 1, 0, 1) // x , y, speed , y boundary,delay,outOrientation,waitshot
            new MinionsUptoDown(getRandom() % 10, -14, -0.2, 1, 0, 1) // x , y, speed , y boundary,delay,outOrientation,waitshot
            new MinionsUptoDown(getRandom() % 10, -14, -0.2, 1, 0, 1) // x , y, speed , y boundary,delay,outOrientation,waitshot
        }

        if (time >= 44.9 && time < 45) {
            new MinionsUptoDown(getRandom() % 10, -14, -0.2, 1, 0, 1) // x , y, speed , y boundary,delay,outOrientation,waitshot
            new MinionsUptoDown(getRandom() % 10, -14, -0.2, 1, 0, 1) // x , y, speed , y boundary,delay,outOrientation,waitshot
            new MinionsUptoDown(getRandom() % 10, -14, -0.2, 1, 0, 1) // x , y, speed , y boundary,delay,outOrientation,waitshot
            new MinionsUptoDown(getRandom() % 10, -14, -0.2, 1, 0, 1) // x , y, speed , y boundary,delay,outOrientation,waitshot
            new MinionsUptoDown(getRandom() % 10, -14, -0.2, 1, 0, 1) // x , y, speed , y boundary,delay,outOrientation,waitshot
            new MinionsUptoDown(getRandom() % 10, -14, -0.2, 1, 0, 1) // x , y, speed , y boundary,delay,outOrientation,waitshot
            new MinionsUptoDown(getRandom() % 10, -14, -0.2, 1, 0, 1) // x , y, speed , y boundary,delay,outOrientation,waitshot
            new MinionsUptoDown(getRandom() % 10, -14, -0.2, 1, 0, 1) // x , y, speed , y boundary,delay,outOrientation,waitshot
            new MinionsUptoDown(getRandom() % 10, -14, -0.2, 1, 0, 1) // x , y, speed , y boundary,delay,outOrientation,waitshot
            new MinionsUptoDown(getRandom() % 10, -14, -0.2, 1, 0, 1) // x , y, speed , y boundary,delay,outOrientation,waitshot
            new MinionsUptoDown(getRandom() % 10, -14, -0.2, 1, 0, 1) // x , y, speed , y boundary,delay,outOrientation,waitshot
            new MinionsUptoDown(getRandom() % 10, -14, -0.2, 1, 0, 1) // x , y, speed , y boundary,delay,outOrientation,waitshot
        }


        if (time >= 49.9 && time < 50) {
            new MinionsUptoDown(getRandom() % 10, -14, -0.3, 1, 0, 1) // x , y, speed , y boundary,delay,outOrientation,waitshot
            new MinionsUptoDown(getRandom() % 10, -14, -0.3, 1, 0, 1) // x , y, speed , y boundary,delay,outOrientation,waitshot
            new MinionsUptoDown(getRandom() % 10, -14, -0.3, 1, 0, 1) // x , y, speed , y boundary,delay,outOrientation,waitshot
            new MinionsUptoDown(getRandom() % 10, -14, -0.3, 1, 0, 1) // x , y, speed , y boundary,delay,outOrientation,waitshot
            new MinionsUptoDown(getRandom() % 10, -14, -0.3, 1, 0, 1) // x , y, speed , y boundary,delay,outOrientation,waitshot
            new MinionsUptoDown(getRandom() % 10, -14, -0.3, 1, 0, 1) // x , y, speed , y boundary,delay,outOrientation,waitshot
            new MinionsUptoDown(getRandom() % 10, -14, -0.3, 1, 0, 1) // x , y, speed , y boundary,delay,outOrientation,waitshot
            new MinionsUptoDown(getRandom() % 10, -14, -0.3, 1, 0, 1) // x , y, speed , y boundary,delay,outOrientation,waitshot
            new MinionsUptoDown(getRandom() % 10, -14, -0.3, 1, 0, 1) // x , y, speed , y boundary,delay,outOrientation,waitshot
            new MinionsUptoDown(getRandom() % 10, -14, -0.3, 1, 0, 1) // x , y, speed , y boundary,delay,outOrientation,waitshot
            new MinionsUptoDown(getRandom() % 10, -14, -0.3, 1, 0, 1) // x , y, speed , y boundary,delay,outOrientation,waitshot
            new MinionsUptoDown(getRandom() % 10, -14, -0.3, 1, 0, 1) // x , y, speed , y boundary,delay,outOrientation,waitshot
        }
    } else if (time >= 53 && time < 60) {
        new MinionsUptoDown(getRandom() % 10, -14, -0.11, 1, 0, 1) // x , y, speed , y boundary,delay,outOrientation,waitshot
    } else if (time >= 60 && time < 61) {
        new Boss(0, 0)
        console.log("summon")
            //seranga boss if (1) {
            // if (time <= 10.2 && time > 10.1) {
            //     new MinionsLefttoRight(-20, 1, 0.1, 2, 3, 0, 2) // x , y, speed , x boundary, y boundary,delay,outOrientationS
            //     new MinionsLefttoRight(-20, 1, 0.1, 2, 3, 0, 3) // x , y, speed , x boundary, y boundary,delay,outOrientation
            //     new MinionsLefttoRight(-20, 1, 0.1, 2, 3, 0, 1) // x , y, speed , x boundary, y boundary,delay,outOrientation
            //     new MinionsLefttoRight(-20, 1, 0.1, 2, 3, 0, 0) // x , y, speed , x boundary, y boundary,delay,outOrientation

        //     new MinionsRighttoLeft(20, 1, 0.1, -2, 3, 0, 2) // x , y, speed , x boundary, y boundary,delay,outOrientationS
        //     new MinionsRighttoLeft(20, 1, 0.1, -2, 3, 0, 3) // x , y, speed , x boundary, y boundary,delay,outOrientation
        //     new MinionsRighttoLeft(20, 1, 0.1, -2, 3, 0, 1) // x , y, speed , x boundary, y boundary,delay,outOrientation
        //     new MinionsRighttoLeft(20, 1, 0.1, -2, 3, 0, 0) // x , y, speed , x boundary, y boundary,delay,outOrientation

        // } else if (time <= 10.4 && time > 10.3) {
        //     new MinionsLefttoRight(-20, 1, 0.1, 2, 3, 0, 2) // x , y, speed , x boundary, y boundary,delay,outOrientationS
        //     new MinionsLefttoRight(-20, 1, 0.1, 2, 3, 0, 3) // x , y, speed , x boundary, y boundary,delay,outOrientation
        //     new MinionsLefttoRight(-20, 1, 0.1, 2, 3, 0, 1) // x , y, speed , x boundary, y boundary,delay,outOrientation
        //     new MinionsLefttoRight(-20, 1, 0.1, 2, 3, 0, 0) // x , y, speed , x boundary, y boundary,delay,outOrientation

        //     new MinionsRighttoLeft(20, 1, 0.1, -2, 3, 0, 2) // x , y, speed , x boundary, y boundary,delay,outOrientationS
        //     new MinionsRighttoLeft(20, 1, 0.1, -2, 3, 0, 3) // x , y, speed , x boundary, y boundary,delay,outOrientation
        //     new MinionsRighttoLeft(20, 1, 0.1, -2, 3, 0, 1) // x , y, speed , x boundary, y boundary,delay,outOrientation
        //     new MinionsRighttoLeft(20, 1, 0.1, -2, 3, 0, 0) // x , y, speed , x boundary, y boundary,delay,outOrientation

        // } else if (time <= 10.6 && time > 10.5) {
        //     new MinionsLefttoRight(-20, 1, 0.1, 2, 3, 0, 2) // x , y, speed , x boundary, y boundary,delay,outOrientationS
        //     new MinionsLefttoRight(-20, 1, 0.1, 2, 3, 0, 3) // x , y, speed , x boundary, y boundary,delay,outOrientation
        //     new MinionsLefttoRight(-20, 1, 0.1, 2, 3, 0, 1) // x , y, speed , x boundary, y boundary,delay,outOrientation
        //     new MinionsLefttoRight(-20, 1, 0.1, 2, 3, 0, 0) // x , y, speed , x boundary, y boundary,delay,outOrientation

        //     new MinionsRighttoLeft(20, 1, 0.1, -2, 3, 0, 2) // x , y, speed , x boundary, y boundary,delay,outOrientationS
        //     new MinionsRighttoLeft(20, 1, 0.1, -2, 3, 0, 3) // x , y, speed , x boundary, y boundary,delay,outOrientation
        //     new MinionsRighttoLeft(20, 1, 0.1, -2, 3, 0, 1) // x , y, speed , x boundary, y boundary,delay,outOrientation
        //     new MinionsRighttoLeft(20, 1, 0.1, -2, 3, 0, 0) // x , y, speed , x boundary, y boundary,delay,outOrientation    
        // } else if (time <= 10.8 && time > 10.7) {
        //     new MinionsLefttoRight(-20, 1, 0.1, 2, 3, 0, 2) // x , y, speed , x boundary, y boundary,delay,outOrientationS
        //     new MinionsLefttoRight(-20, 1, 0.1, 2, 3, 0, 3) // x , y, speed , x boundary, y boundary,delay,outOrientation
        //     new MinionsLefttoRight(-20, 1, 0.1, 2, 3, 0, 1) // x , y, speed , x boundary, y boundary,delay,outOrientation
        //     new MinionsLefttoRight(-20, 1, 0.1, 2, 3, 0, 0) // x , y, speed , x boundary, y boundary,delay,outOrientation

        //     new MinionsRighttoLeft(20, 1, 0.1, -2, 3, 0, 2) // x , y, speed , x boundary, y boundary,delay,outOrientationS
        //     new MinionsRighttoLeft(20, 1, 0.1, -2, 3, 0, 3) // x , y, speed , x boundary, y boundary,delay,outOrientation
        //     new MinionsRighttoLeft(20, 1, 0.1, -2, 3, 0, 1) // x , y, speed , x boundary, y boundary,delay,outOrientation
        //     new MinionsRighttoLeft(20, 1, 0.1, -2, 3, 0, 0) // x , y, speed , x boundary, y boundary,delay,outOrientation    
        // }
        // if (time <= 11.2 && time > 11.1) {
        //     new MinionsLefttoRight(-20, 1, 0.1, 2, 3, 0, 2) // x , y, speed , x boundary, y boundary,delay,outOrientationS
        //     new MinionsLefttoRight(-20, 1, 0.1, 2, 3, 0, 3) // x , y, speed , x boundary, y boundary,delay,outOrientation
        //     new MinionsLefttoRight(-20, 1, 0.1, 2, 3, 0, 1) // x , y, speed , x boundary, y boundary,delay,outOrientation
        //     new MinionsLefttoRight(-20, 1, 0.1, 2, 3, 0, 0) // x , y, speed , x boundary, y boundary,delay,outOrientation

        //     new MinionsRighttoLeft(20, 1, 0.1, -2, 3, 0, 2) // x , y, speed , x boundary, y boundary,delay,outOrientationS
        //     new MinionsRighttoLeft(20, 1, 0.1, -2, 3, 0, 3) // x , y, speed , x boundary, y boundary,delay,outOrientation
        //     new MinionsRighttoLeft(20, 1, 0.1, -2, 3, 0, 1) // x , y, speed , x boundary, y boundary,delay,outOrientation
        //     new MinionsRighttoLeft(20, 1, 0.1, -2, 3, 0, 0) // x , y, speed , x boundary, y boundary,delay,outOrientation

        // } else if (time <= 11.4 && time > 11.3) {
        //     new MinionsLefttoRight(-20, 1, 0.1, 2, 3, 0, 2) // x , y, speed , x boundary, y boundary,delay,outOrientationS
        //     new MinionsLefttoRight(-20, 1, 0.1, 2, 3, 0, 3) // x , y, speed , x boundary, y boundary,delay,outOrientation
        //     new MinionsLefttoRight(-20, 1, 0.1, 2, 3, 0, 1) // x , y, speed , x boundary, y boundary,delay,outOrientation
        //     new MinionsLefttoRight(-20, 1, 0.1, 2, 3, 0, 0) // x , y, speed , x boundary, y boundary,delay,outOrientation

        //     new MinionsRighttoLeft(20, 1, 0.1, -2, 3, 0, 2) // x , y, speed , x boundary, y boundary,delay,outOrientationS
        //     new MinionsRighttoLeft(20, 1, 0.1, -2, 3, 0, 3) // x , y, speed , x boundary, y boundary,delay,outOrientation
        //     new MinionsRighttoLeft(20, 1, 0.1, -2, 3, 0, 1) // x , y, speed , x boundary, y boundary,delay,outOrientation
        //     new MinionsRighttoLeft(20, 1, 0.1, -2, 3, 0, 0) // x , y, speed , x boundary, y boundary,delay,outOrientation

        // } else if (time <= 11.6 && time > 11.5) {
        //     new MinionsLefttoRight(-20, 1, 0.1, 2, 3, 0, 2) // x , y, speed , x boundary, y boundary,delay,outOrientationS
        //     new MinionsLefttoRight(-20, 1, 0.1, 2, 3, 0, 3) // x , y, speed , x boundary, y boundary,delay,outOrientation
        //     new MinionsLefttoRight(-20, 1, 0.1, 2, 3, 0, 1) // x , y, speed , x boundary, y boundary,delay,outOrientation
        //     new MinionsLefttoRight(-20, 1, 0.1, 2, 3, 0, 0) // x , y, speed , x boundary, y boundary,delay,outOrientation

        //     new MinionsRighttoLeft(20, 1, 0.1, -2, 3, 0, 2) // x , y, speed , x boundary, y boundary,delay,outOrientationS
        //     new MinionsRighttoLeft(20, 1, 0.1, -2, 3, 0, 3) // x , y, speed , x boundary, y boundary,delay,outOrientation
        //     new MinionsRighttoLeft(20, 1, 0.1, -2, 3, 0, 1) // x , y, speed , x boundary, y boundary,delay,outOrientation
        //     new MinionsRighttoLeft(20, 1, 0.1, -2, 3, 0, 0) // x , y, speed , x boundary, y boundary,delay,outOrientation    
        // } else if (time <= 11.8 && time > 11.7) {
        //     new MinionsLefttoRight(-20, 1, 0.1, 2, 3, 0, 2) // x , y, speed , x boundary, y boundary,delay,outOrientationS
        //     new MinionsLefttoRight(-20, 1, 0.1, 2, 3, 0, 3) // x , y, speed , x boundary, y boundary,delay,outOrientation
        //     new MinionsLefttoRight(-20, 1, 0.1, 2, 3, 0, 1) // x , y, speed , x boundary, y boundary,delay,outOrientation
        //     new MinionsLefttoRight(-20, 1, 0.1, 2, 3, 0, 0) // x , y, speed , x boundary, y boundary,delay,outOrientation

        //     new MinionsRighttoLeft(20, 1, 0.1, -2, 3, 0, 2) // x , y, speed , x boundary, y boundary,delay,outOrientationS
        //     new MinionsRighttoLeft(20, 1, 0.1, -2, 3, 0, 3) // x , y, speed , x boundary, y boundary,delay,outOrientation
        //     new MinionsRighttoLeft(20, 1, 0.1, -2, 3, 0, 1) // x , y, speed , x boundary, y boundary,delay,outOrientation
        //     new MinionsRighttoLeft(20, 1, 0.1, -2, 3, 0, 0) // x , y, speed , x boundary, y boundary,delay,outOrientation  
    }

    // if (time <= 1 && time > 0.9) {
    //     new MinionsxLogLeft(3, -5, 1, 0.01, 0, 0.0003, 6, 4, 0) //head (-1 dari atas ke bawah),x,lebar,speed,translation,akselerasi,xboundary,delay,outOrientation
    //     new MinionsxLogLeft(3, -6, 1, 0.01, 0, 0.0003, 7, 4, 0) //head (-1 dari atas ke bawah),x,lebar,speed,translation,akselerasi,xboundary,delay,outOrientation
    //     new MinionsxLogLeft(3, -3, 1, 0.01, 0, 0.0003, 4, 4, 0) //head (-1 dari atas ke bawah),x,lebar,speed,translation,akselerasi,xboundary,delay,outOrientation
    //     new MinionsxLogLeft(3, -2, 1, 0.01, 0, 0.0003, 3, 4, 0) //head (-1 dari atas ke bawah),x,lebar,speed,translation,akselerasi,xboundary,delay,outOrientation
    //     new MinionsxLogLeft(3, -4, 1, 0.01, 0, 0.0003, 5, 4, 0) //head (-1 dari atas ke bawah),x,lebar,speed,translation,akselerasi,xboundary,delay,outOrientation

    //     new MinionsxLogRight(3, 3, 1, 0.01, 0, 0.0003, -3, 4, 2) //head (-1 dari atas ke bawah),x,lebar,speed,translation,akselerasi,xboundary,delay,outOrientation
    //     new MinionsxLogRight(3, 4, 1, 0.01, 0, 0.0003, -4, 4, 2) //head (-1 dari atas ke bawah),x,lebar,speed,translation,akselerasi,xboundary,delay,outOrientation
    //     new MinionsxLogRight(3, 5, 1, 0.01, 0, 0.0003, -5, 4, 2) //head (-1 dari atas ke bawah),x,lebar,speed,translation,akselerasi,xboundary,delay,outOrientation
    //     new MinionsxLogRight(3, 6, 1, 0.01, 0, 0.0003, -6, 4, 2) //head (-1 dari atas ke bawah),x,lebar,speed,translation,akselerasi,xboundary,delay,outOrientation
    //     new MinionsxLogRight(3, 7, 1, 0.01, 0, 0.0003, -7, 4, 2)
    //         //head (-1 dari atas ke bawah),x,lebar,speed,translation,akselerasi,xboundary,delay,outOrientation

    // }

    // if (time <= 1.4 && time > 1.3) {
    //     new MinionsxLogLeft(3, -5, 1, 0.01, -5, 0.0003, 3, 4, 0) //head (-1 dari atas ke bawah),x,lebar,speed,translation,akselerasi,xboundary,delay,outOrientation
    //     new MinionsxLogLeft(3, -6, 1, 0.01, -6, 0.0003, 4, 4, 0) //head (-1 dari atas ke bawah),x,lebar,speed,translation,akselerasi,xboundary,delay,outOrientation
    //     new MinionsxLogLeft(3, -3, 1, 0.01, -3, 0.0003, 1, 4, 0) //head (-1 dari atas ke bawah),x,lebar,speed,translation,akselerasi,xboundary,delay,outOrientation
    //     new MinionsxLogLeft(3, -2, 1, 0.01, -2, 0.0003, 0, 4, 0) //head (-1 dari atas ke bawah),x,lebar,speed,translation,akselerasi,xboundary,delay,outOrientation
    //     new MinionsxLogLeft(3, -4, 1, 0.01, -4, 0.0003, 2, 4, 0) //head (-1 dari atas ke bawah),x,lebar,speed,translation,akselerasi,xboundary,delay,outOrientation

    //     // new MinionsxLogRight(3, 3, 1, 0.1, 3, 0.0001, 0, 2, 2) //head (-1 dari atas ke bawah),x,lebar,speed,translation,akselerasi,xboundary,delay,outOrientation
    //     // new MinionsxLogRight(3, 3, 1, 0.1, 3, 0.0001, 0, 2, 1) //head (-1 dari atas ke bawah),x,lebar,speed,translation,akselerasi,xboundary,delay,outOrientation
    //     // new MinionsxLogRight(3, 3, 1, 0.1, 3, 0.0001, 0, 2, 0) //head (-1 dari atas ke bawah),x,lebar,speed,translation,akselerasi,xboundary,delay,outOrientation
    //     // new MinionsxLogRight(3, 3, 1, 0.1, 3, 0.0001, 0, 2, 3) //head (-1 dari atas ke bawah),x,lebar,speed,translation,akselerasi,xboundary,delay,outOrientation
    //     // new MinionsxLogRight(3, 3, 1, 0.1, 3, 0.0001, 0, 2, 4) //head (-1 dari atas ke bawah),x,lebar,speed,translation,akselerasi,xboundary,delay,outOrientation

    // }

    // if (time <= 1.8 && time > 1.7) {
    //     new MinionsxLogLeft(3, -5, 1, 0.01, -5, 0.0003, 3.5, 4, 0) //head (-1 dari atas ke bawah),x,lebar,speed,translation,akselerasi,xboundary,delay,outOrientation
    //     new MinionsxLogLeft(3, -6, 1, 0.01, -6, 0.0003, 4.5, 4, 0) //head (-1 dari atas ke bawah),x,lebar,speed,translation,akselerasi,xboundary,delay,outOrientation
    //     new MinionsxLogLeft(3, -3, 1, 0.01, -3, 0.0003, 1.5, 4, 0) //head (-1 dari atas ke bawah),x,lebar,speed,translation,akselerasi,xboundary,delay,outOrientation
    //     new MinionsxLogLeft(3, -2, 1, 0.01, -2, 0.0003, 0.5, 4, 0) //head (-1 dari atas ke bawah),x,lebar,speed,translation,akselerasi,xboundary,delay,outOrientation
    //     new MinionsxLogLeft(3, -4, 1, 0.01, -4, 0.0003, 2.5, 4, 0) //head (-1 dari atas ke bawah),x,lebar,speed,translation,akselerasi,xboundary,delay,outOrientation

    //     // new MinionsxLogRight(3, 3, 1, 0.1, 3, 0.0001, 0, 2, 2) //head (-1 dari atas ke bawah),x,lebar,speed,translation,akselerasi,xboundary,delay,outOrientation
    //     // new MinionsxLogRight(3, 3, 1, 0.1, 3, 0.0001, 0, 2, 1) //head (-1 dari atas ke bawah),x,lebar,speed,translation,akselerasi,xboundary,delay,outOrientation
    //     // new MinionsxLogRight(3, 3, 1, 0.1, 3, 0.0001, 0, 2, 0) //head (-1 dari atas ke bawah),x,lebar,speed,translation,akselerasi,xboundary,delay,outOrientation
    //     // new MinionsxLogRight(3, 3, 1, 0.1, 3, 0.0001, 0, 2, 3) //head (-1 dari atas ke bawah),x,lebar,speed,translation,akselerasi,xboundary,delay,outOrientation
    //     // new MinionsxLogRight(3, 3, 1, 0.1, 3, 0.0001, 0, 2, 4) //head (-1 dari atas ke bawah),x,lebar,speed,translation,akselerasi,xboundary,delay,outOrientation

    // }


    // if (time <= 2.2 && time > 2.1) {
    //     new MinionsxLogLeft(3, -5, 1, 0.01, -5, 0.0003, 4, 4, 0) //head (-1 dari atas ke bawah),x,lebar,speed,translation,akselerasi,xboundary,delay,outOrientation
    //     new MinionsxLogLeft(3, -6, 1, 0.01, -6, 0.0003, 5, 4, 0) //head (-1 dari atas ke bawah),x,lebar,speed,translation,akselerasi,xboundary,delay,outOrientation
    //     new MinionsxLogLeft(3, -3, 1, 0.01, -3, 0.0003, 2, 4, 0) //head (-1 dari atas ke bawah),x,lebar,speed,translation,akselerasi,xboundary,delay,outOrientation
    //     new MinionsxLogLeft(3, -2, 1, 0.01, -2, 0.0003, 1, 4, 0) //head (-1 dari atas ke bawah),x,lebar,speed,translation,akselerasi,xboundary,delay,outOrientation
    //     new MinionsxLogLeft(3, -4, 1, 0.01, -4, 0.0003, 3, 4, 0) //head (-1 dari atas ke bawah),x,lebar,speed,translation,akselerasi,xboundary,delay,outOrientation

    //     // new MinionsxLogRight(3, 3, 1, 0.1, 3, 0.0001, 0, 2, 2) //head (-1 dari atas ke bawah),x,lebar,speed,translation,akselerasi,xboundary,delay,outOrientation
    //     // new MinionsxLogRight(3, 3, 1, 0.1, 3, 0.0001, 0, 2, 1) //head (-1 dari atas ke bawah),x,lebar,speed,translation,akselerasi,xboundary,delay,outOrientation
    //     // new MinionsxLogRight(3, 3, 1, 0.1, 3, 0.0001, 0, 2, 0) //head (-1 dari atas ke bawah),x,lebar,speed,translation,akselerasi,xboundary,delay,outOrientation
    //     // new MinionsxLogRight(3, 3, 1, 0.1, 3, 0.0001, 0, 2, 3) //head (-1 dari atas ke bawah),x,lebar,speed,translation,akselerasi,xboundary,delay,outOrientation
    //     // new MinionsxLogRight(3, 3, 1, 0.1, 3, 0.0001, 0, 2, 4) //head (-1 dari atas ke bawah),x,lebar,speed,translation,akselerasi,xboundary,delay,outOrientation
    // }
}

// // // var counter = 0
// function enemySpawner() { //test object
//     }
//         if(time<=5 && time>4.9)
//         {
//             new MinionsRighttoLeft(38, 8, 0.09, 2, 3, 0, 0) // x , y, speed , x boundary, y boundary,delay,outOrientationS
//             new MinionsRighttoLeft(36, 6, 0.09, 2, 3, 0, 0) // x , y, speed , x boundary, y boundary,delay,outOrientation
//             new MinionsRighttoLeft(34, 4, 0.09, 2, 3, 0, 0) // x , y, speed , x boundary, y boundary,delay,outOrientationS
//             new MinionsRighttoLeft(32, 2, 0.09, 2, 3, 0, 0) // x , y, speed , x boundary, y boundary,delay,outOrientation
//             new MinionsRighttoLeft(30, 0, 0.09, 2, 3, 0, 0) // x , y, speed , x boundary, y boundary,delay,outOrientation
//             new MinionsRighttoLeft(28, -2, 0.09, 2, 3, 0, 0) // x , y, speed , x boundary, y boundary,delay,outOrientation
//             new MinionsRighttoLeft(26, -4, 0.09, 2, -3, 0, 0) // x , y, speed , x boundary, y boundary,delay,outOrientationS
//             new MinionsRighttoLeft(24, -6, 0.09, 2, 3, 0, 0) // x , y, speed , x boundary, y boundary,delay,outOrientation
// //             new MinionsRighttoLeft(22, -8, 0.09, 2, -3, 3, 0) // x , y, speed , x boundary, y boundary,delay,outOrientation
// //             new MinionsRighttoLeft(20, -10, 0.09, 2, 3, 0, 0) // x , y, speed , x boundary, y boundary,delay,outOrientation
// //         }

//         if(time<=9 && time>8.9)
//         {
//             new MinionsLefttoRight(-38, 8, 0.5, 2, 3, 0, 2) // x , y, speed , x boundary, y boundary,delay,outOrientationS
//             new MinionsLefttoRight(-36, 6, 0.5, 2, 3, 0, 2) // x , y, speed , x boundary, y boundary,delay,outOrientation
//             new MinionsLefttoRight(-34, 4, 0.5, 2, 3, 0, 2) // x , y, speed , x boundary, y boundary,delay,outOrientationS
//             new MinionsLefttoRight(-32, 2, 0.5, 2, 3, 0, 2) // x , y, speed , x boundary, y boundary,delay,outOrientation
//             new MinionsLefttoRight(-30, 0, 0.5, 2, 3, 0, 2) // x , y, speed , x boundary, y boundary,delay,outOrientation
//             // new MinionsLefttoRight(-28, -2, 0.5, 2, 3, 0, 2) // x , y, speed , x boundary, y boundary,delay,outOrientation
//             new MinionsLefttoRight(-26, -4, 0.5, 2, 3, 0, 2) // x , y, speed , x boundary, y boundary,delay,outOrientationS
//             new MinionsLefttoRight(-24, -6, 0.5, 2, 3, 0, 2) // x , y, speed , x boundary, y boundary,delay,outOrientation
//             new MinionsLefttoRight(-22, -8, 0.5, 2, 3, 0, 2) // x , y, speed , x boundary, y boundary,delay,outOrientation
//             new MinionsLefttoRight(-20, -10, 0.5, 2, 3, 0, 2) // x , y, speed , x boundary, y boundary,delay,outOrientation
//             new MinionsRighttoLeft(38, 8, 0.5, 2, 3, 0, 0) // x , y, speed , x boundary, y boundary,delay,outOrientationS
//             new MinionsRighttoLeft(36, 6, 0.5, 2, 3, 0, 0) // x , y, speed , x boundary, y boundary,delay,outOrientation
//             new MinionsRighttoLeft(34, 4, 0.5, 2, 3, 0, 0) // x , y, speed , x boundary, y boundary,delay,outOrientationS
//             new MinionsRighttoLeft(32, 2, 0.5, 2, 3, 0, 0) // x , y, speed , x boundary, y boundary,delay,outOrientation
//             new MinionsRighttoLeft(30, 0, 0.5, 2, 3, 0, 0) // x , y, speed , x boundary, y boundary,delay,outOrientation
//             // new MinionsRighttoLeft(28, -2, 0.5, 2, 3, 0, 0) // x , y, speed , x boundary, y boundary,delay,outOrientation
//             new MinionsRighttoLeft(26, -4, 0.5, 2, -3, 0, 0) // x , y, speed , x boundary, y boundary,delay,outOrientationS
//             new MinionsRighttoLeft(24, -6, 0.5, 2, 3, 0, 0) // x , y, speed , x boundary, y boundary,delay,outOrientation
//             new MinionsRighttoLeft(22, -8, 0.5, 2, -3, 0, 0) // x , y, speed , x boundary, y boundary,delay,outOrientation
//             new MinionsRighttoLeft(20, -10, 0.5, 2, 3, 0, 0) // x , y, speed , x boundary, y boundary,delay,outOrientation
//         }

//     // if (time <= 0.2 && time > 0 ) {
//     //     new MinionsLefttoRight(-38, 8, 0.09, 2, 3, 0, 2) // x , y, speed , x boundary, y boundary,delay,outOrientationS
//     //     new MinionsLefttoRight(-36, 6, 0.09, 2, 3, 0, 2) // x , y, speed , x boundary, y boundary,delay,outOrientation
//     //     new MinionsLefttoRight(-34, 4, 0.09, 2, 3, 0, 2) // x , y, speed , x boundary, y boundary,delay,outOrientationS
//     //     new MinionsLefttoRight(-32, 2, 0.09, 2, 3, 0, 2) // x , y, speed , x boundary, y boundary,delay,outOrientation
//     //     new MinionsLefttoaRight(-30, 0, 0.09, 2, 3, 3, 2) // x , y, speed , x boundary, y boundary,delay,outOrientation
//     //     new MinionsLefttoRight(-28, -2, 0.09, 2, 3, 0, 2) // x , y, speed , x boundary, y boundary,delay,outOrientation
//     //     new MinionsLefttoRight(-26, -4, 0.09, 2, 3, 0, 2) // x , y, speed , x boundary, y boundary,delay,outOrientationS
//     //     new MinionsLefttoRight(-24, -6, 0.09, 2, 3, 0, 2) // x , y, speed , x boundary, y boundary,delay,outOrientation
//     //     new MinionsLefttoRight(-22, -8, 0.09, 2, 3, 0, 2) // x , y, speed , x boundary, y boundary,delay,outOrientation
//     //     new MinionsLefttoRight(-20, -10, 0.09, 2, 3, 0, 2) // x , y, speed , x boundary, y boundary,delay,outOrientation
//     // }
// }

// //phase 1
// // new MinionsUptoDown(-4+counter*2, 14, 0.09, 1, 2, 0) // x , y, speed , y boundary,delay,outOrientation
// // new MinionsUptoDown(0+counter*2, 14, 0.09, 1, 2, 1) // x , y, speed , y boundary,delay,outOrientation
// // new MinionsUptoDown(4+counter*2, 14, 0.09, 1, 2, 2) // x , y, speed , y boundary,delay,outOrientation
// // counter++
//         // new MinionsxLogLeft(3, -6, 1, 0.1, -6, 0.0001, 3, 2, 3) //head (-1 dari atas ke bawah),x,lebar,speed,translation,akselerasi,xboundary,delay,outOrientation
//         // new MinionsxLogLeft(3, -6, 1, 0.1, -6, 0.0001, 3, 2, 1) //head (-1 dari atas ke bawah),x,lebar,speed,translation,akselerasi,xboundary,delay,outOrientation
//         // new MinionsxLogLeft(3, -6, 1, 0.1, -6, 0.0001, 3, 2, 2) //head (-1 dari atas ke bawah),x,lebar,speed,translation,akselerasi,xboundary,delay,outOrientation
//         // new MinionsxLogLeft(3, -6, 1, 0.1, -6, 0.0001, 3, 2, 0) //head (-1 dari atas ke bawah),x,lebar,speed,translation,akselerasi,xboundary,delay,outOrientation
//         // new MinionsxLogLeft(3, -6, 1, 0.1, -6, 0.0001, 3, 2, 4) //head (-1 dari atas ke bawah),x,lebar,speed,translation,akselerasi,xboundary,delay,outOrientation

//         // new MinionsxLogRight(3, 3, 1, 0.1, 3, 0.0001, 0, 2, 2) //head (-1 dari atas ke bawah),x,lebar,speed,translation,akselerasi,xboundary,delay,outOrientation
//         // new MinionsxLogRight(3, 3, 1, 0.1, 3, 0.0001, 0, 2, 1) //head (-1 dari atas ke bawah),x,lebar,speed,translation,akselerasi,xboundary,delay,outOrientation
//         // new MinionsxLogRight(3, 3, 1, 0.1, 3, 0.0001, 0, 2, 0) //head (-1 dari atas ke bawah),x,lebar,speed,translation,akselerasi,xboundary,delay,outOrientation
//         // new MinionsxLogRight(3, 3, 1, 0.1, 3, 0.0001, 0, 2, 3) //head (-1 dari atas ke bawah),x,lebar,speed,translation,akselerasi,xboundary,delay,outOrientation
//         // new MinionsxLogRight(3, 3, 1, 0.1, 3, 0.0001, 0, 2, 4) //head (-1 dari atas ke bawah),x,lebar,speed,translation,akselerasi,xboundary,delay,outOrientation

//         // new MinionsLefttoRight(-30, 1, 0.09, 2, 3, 1, 2) // x , y, speed , x boundary, y boundary,delay,outOrientationS
//         // new MinionsLefttoRight(-30, 1, 0.09, 2, 3, 1, 3) // x , y, speed , x boundary, y boundary,delay,outOrientation
//         // new MinionsLefttoRight(-30, 1, 0.09, 2, 3, 1, 1) // x , y, speed , x boundary, y boundary,delay,outOrientation
//         // new MinionsLefttoRight(-30, 1, 0.09, 2, 3, 1, 0) // x , y, speed , x boundary, y boundary,delay,outOrientation
// //  phase 2
//  // new MinionsLefttoRight(-20, 1, 0.1, 2, 3, 0, 2) // x , y, speed , x boundary, y boundary,delay,outOrientationS
//         // new MinionsLefttoRight(-20, 1, 0.1, 2, 3, 0, 3) // x , y, speed , x boundary, y boundary,delay,outOrientation
//         // new MinionsLefttoRight(-20, 1, 0.1, 2, 3, 0, 1) // x , y, speed , x boundary, y boundary,delay,outOrientation
//         // new MinionsLefttoRight(-20, 1, 0.1, 2, 3, 0, 0) // x , y, speed , x boundary, y boundary,delay,outOrientation

//         // new MinionsRighttoLeft(20, 1, 0.1, -2, 3, 0, 2) // x , y, speed , x boundary, y boundary,delay,outOrientationS
//         // new MinionsRighttoLeft(20, 1, 0.1, -2, 3, 0, 3) // x , y, speed , x boundary, y boundary,delay,outOrientation
//         // new MinionsRighttoLeft(20, 1, 0.1, -2, 3, 0, 1) // x , y, speed , x boundary, y boundary,delay,outOrientation
//         // new MinionsRighttoLeft(20, 1, 0.1, -2, 3, 0, 0) // x , y, speed , x boundary, y boundary,delay,outOrientation
//         }
// }
// if (this.outOrientation == 0) this.object.translateX(-1 * this.speed); //kiri
// if (this.outOrientation == 1) this.object.translateY(-1 * this.speed); //bawah
// if (this.outOrientation == 2) this.object.translateX(1 * this.speed); //kanan
// if (this.outOrientation == 3) this.object.translateY(1 * this.speed); //atas
// if (this.outOrientation == 4) ikuti pola