

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

var counter = 0
function enemySpawner() {
    if (time <= 1.0 ) {
        if(time <=0.2 && time>0.1)
        {
            new MinionsUptoDown(2, 14, 0.07, -1, 1, 1) // x , y, speed , y boundary,delay,outOrientation
            new MinionsUptoDown(4, 14, 0.07, -1, 1, 1) // x , y, speed , y boundary,delay,outOrientation
            new MinionsUptoDown(6, 14, 0.07, -1, 1, 1) // x , y, speed , y boundary,delay,outOrientation    
        }
        
        else if(time <= 0.6 && time>0.5)
        {
            new MinionsUptoDown(-4, 14, 0.07, -1, 1, 1) // x , y, speed , y boundary,delay,outOrientation
            new MinionsUptoDown(-2, 14, 0.07, -1, 1, 1) // x , y, speed , y boundary,delay,outOrientation
            new MinionsUptoDown(0, 14, 0.07, -1, 1, 1) // x , y, speed , y boundary,delay,outOrientation
    
        }
        else if(time <= 0.7 && time>0.6)
        {
            new MinionsUptoDown(8, 14, 0.07, -1, 1, 1) // x , y, speed , y boundary,delay,outOrientation
            new MinionsUptoDown(-6, 14, 0.07, -1, 1, 1) // x , y, speed , y boundary,delay,outOrientation
            
        }
    }
    else if (time>10 && time <= 12 ) {
        
        if(time <=10.2 && time>10.1)
        {
            new MinionsLefttoRight(-20, 1, 0.1, 2, 3, 0, 2) // x , y, speed , x boundary, y boundary,delay,outOrientationS
            new MinionsLefttoRight(-20, 1, 0.1, 2, 3, 0, 3) // x , y, speed , x boundary, y boundary,delay,outOrientation
            new MinionsLefttoRight(-20, 1, 0.1, 2, 3, 0, 1) // x , y, speed , x boundary, y boundary,delay,outOrientation
            new MinionsLefttoRight(-20, 1, 0.1, 2, 3, 0, 0) // x , y, speed , x boundary, y boundary,delay,outOrientation
    
            new MinionsRighttoLeft(20, 1, 0.1, -2, 3, 0, 2) // x , y, speed , x boundary, y boundary,delay,outOrientationS
            new MinionsRighttoLeft(20, 1, 0.1, -2, 3, 0, 3) // x , y, speed , x boundary, y boundary,delay,outOrientation
            new MinionsRighttoLeft(20, 1, 0.1, -2, 3, 0, 1) // x , y, speed , x boundary, y boundary,delay,outOrientation
            new MinionsRighttoLeft(20, 1, 0.1, -2, 3, 0, 0) // x , y, speed , x boundary, y boundary,delay,outOrientation
           
        }
        
        else if(time <= 10.4 && time>10.3)
        {        
            new MinionsLefttoRight(-20, 1, 0.1, 2, 3, 0, 2) // x , y, speed , x boundary, y boundary,delay,outOrientationS
            new MinionsLefttoRight(-20, 1, 0.1, 2, 3, 0, 3) // x , y, speed , x boundary, y boundary,delay,outOrientation
            new MinionsLefttoRight(-20, 1, 0.1, 2, 3, 0, 1) // x , y, speed , x boundary, y boundary,delay,outOrientation
            new MinionsLefttoRight(-20, 1, 0.1, 2, 3, 0, 0) // x , y, speed , x boundary, y boundary,delay,outOrientation
    
            new MinionsRighttoLeft(20, 1, 0.1, -2, 3, 0, 2) // x , y, speed , x boundary, y boundary,delay,outOrientationS
            new MinionsRighttoLeft(20, 1, 0.1, -2, 3, 0, 3) // x , y, speed , x boundary, y boundary,delay,outOrientation
            new MinionsRighttoLeft(20, 1, 0.1, -2, 3, 0, 1) // x , y, speed , x boundary, y boundary,delay,outOrientation
            new MinionsRighttoLeft(20, 1, 0.1, -2, 3, 0, 0) // x , y, speed , x boundary, y boundary,delay,outOrientation
        
        }
        else if(time <= 10.6 && time>10.5)
        {
            new MinionsLefttoRight(-20, 1, 0.1, 2, 3, 0, 2) // x , y, speed , x boundary, y boundary,delay,outOrientationS
            new MinionsLefttoRight(-20, 1, 0.1, 2, 3, 0, 3) // x , y, speed , x boundary, y boundary,delay,outOrientation
            new MinionsLefttoRight(-20, 1, 0.1, 2, 3, 0, 1) // x , y, speed , x boundary, y boundary,delay,outOrientation
            new MinionsLefttoRight(-20, 1, 0.1, 2, 3, 0, 0) // x , y, speed , x boundary, y boundary,delay,outOrientation
    
            new MinionsRighttoLeft(20, 1, 0.1, -2, 3, 0, 2) // x , y, speed , x boundary, y boundary,delay,outOrientationS
            new MinionsRighttoLeft(20, 1, 0.1, -2, 3, 0, 3) // x , y, speed , x boundary, y boundary,delay,outOrientation
            new MinionsRighttoLeft(20, 1, 0.1, -2, 3, 0, 1) // x , y, speed , x boundary, y boundary,delay,outOrientation
            new MinionsRighttoLeft(20, 1, 0.1, -2, 3, 0, 0) // x , y, speed , x boundary, y boundary,delay,outOrientation    
        }
        
        else if(time <= 10.8 && time>10.7)
        {
            new MinionsLefttoRight(-20, 1, 0.1, 2, 3, 0, 2) // x , y, speed , x boundary, y boundary,delay,outOrientationS
            new MinionsLefttoRight(-20, 1, 0.1, 2, 3, 0, 3) // x , y, speed , x boundary, y boundary,delay,outOrientation
            new MinionsLefttoRight(-20, 1, 0.1, 2, 3, 0, 1) // x , y, speed , x boundary, y boundary,delay,outOrientation
            new MinionsLefttoRight(-20, 1, 0.1, 2, 3, 0, 0) // x , y, speed , x boundary, y boundary,delay,outOrientation
    
            new MinionsRighttoLeft(20, 1, 0.1, -2, 3, 0, 2) // x , y, speed , x boundary, y boundary,delay,outOrientationS
            new MinionsRighttoLeft(20, 1, 0.1, -2, 3, 0, 3) // x , y, speed , x boundary, y boundary,delay,outOrientation
            new MinionsRighttoLeft(20, 1, 0.1, -2, 3, 0, 1) // x , y, speed , x boundary, y boundary,delay,outOrientation
            new MinionsRighttoLeft(20, 1, 0.1, -2, 3, 0, 0) // x , y, speed , x boundary, y boundary,delay,outOrientation    
        }
        if(time <=11.2 && time>11.1)
        {
            new MinionsLefttoRight(-20, 1, 0.1, 2, 3, 0, 2) // x , y, speed , x boundary, y boundary,delay,outOrientationS
            new MinionsLefttoRight(-20, 1, 0.1, 2, 3, 0, 3) // x , y, speed , x boundary, y boundary,delay,outOrientation
            new MinionsLefttoRight(-20, 1, 0.1, 2, 3, 0, 1) // x , y, speed , x boundary, y boundary,delay,outOrientation
            new MinionsLefttoRight(-20, 1, 0.1, 2, 3, 0, 0) // x , y, speed , x boundary, y boundary,delay,outOrientation
    
            new MinionsRighttoLeft(20, 1, 0.1, -2, 3, 0, 2) // x , y, speed , x boundary, y boundary,delay,outOrientationS
            new MinionsRighttoLeft(20, 1, 0.1, -2, 3, 0, 3) // x , y, speed , x boundary, y boundary,delay,outOrientation
            new MinionsRighttoLeft(20, 1, 0.1, -2, 3, 0, 1) // x , y, speed , x boundary, y boundary,delay,outOrientation
            new MinionsRighttoLeft(20, 1, 0.1, -2, 3, 0, 0) // x , y, speed , x boundary, y boundary,delay,outOrientation
           
        }
        
        else if(time <= 11.4 && time>11.3)
        {        
            new MinionsLefttoRight(-20, 1, 0.1, 2, 3, 0, 2) // x , y, speed , x boundary, y boundary,delay,outOrientationS
            new MinionsLefttoRight(-20, 1, 0.1, 2, 3, 0, 3) // x , y, speed , x boundary, y boundary,delay,outOrientation
            new MinionsLefttoRight(-20, 1, 0.1, 2, 3, 0, 1) // x , y, speed , x boundary, y boundary,delay,outOrientation
            new MinionsLefttoRight(-20, 1, 0.1, 2, 3, 0, 0) // x , y, speed , x boundary, y boundary,delay,outOrientation
    
            new MinionsRighttoLeft(20, 1, 0.1, -2, 3, 0, 2) // x , y, speed , x boundary, y boundary,delay,outOrientationS
            new MinionsRighttoLeft(20, 1, 0.1, -2, 3, 0, 3) // x , y, speed , x boundary, y boundary,delay,outOrientation
            new MinionsRighttoLeft(20, 1, 0.1, -2, 3, 0, 1) // x , y, speed , x boundary, y boundary,delay,outOrientation
            new MinionsRighttoLeft(20, 1, 0.1, -2, 3, 0, 0) // x , y, speed , x boundary, y boundary,delay,outOrientation
        
        }
        else if(time <= 11.6 && time>11.5)
        {
            new MinionsLefttoRight(-20, 1, 0.1, 2, 3, 0, 2) // x , y, speed , x boundary, y boundary,delay,outOrientationS
            new MinionsLefttoRight(-20, 1, 0.1, 2, 3, 0, 3) // x , y, speed , x boundary, y boundary,delay,outOrientation
            new MinionsLefttoRight(-20, 1, 0.1, 2, 3, 0, 1) // x , y, speed , x boundary, y boundary,delay,outOrientation
            new MinionsLefttoRight(-20, 1, 0.1, 2, 3, 0, 0) // x , y, speed , x boundary, y boundary,delay,outOrientation
    
            new MinionsRighttoLeft(20, 1, 0.1, -2, 3, 0, 2) // x , y, speed , x boundary, y boundary,delay,outOrientationS
            new MinionsRighttoLeft(20, 1, 0.1, -2, 3, 0, 3) // x , y, speed , x boundary, y boundary,delay,outOrientation
            new MinionsRighttoLeft(20, 1, 0.1, -2, 3, 0, 1) // x , y, speed , x boundary, y boundary,delay,outOrientation
            new MinionsRighttoLeft(20, 1, 0.1, -2, 3, 0, 0) // x , y, speed , x boundary, y boundary,delay,outOrientation    
        }
        
        else if(time <= 11.8 && time>11.7)
        {
            new MinionsLefttoRight(-20, 1, 0.1, 2, 3, 0, 2) // x , y, speed , x boundary, y boundary,delay,outOrientationS
            new MinionsLefttoRight(-20, 1, 0.1, 2, 3, 0, 3) // x , y, speed , x boundary, y boundary,delay,outOrientation
            new MinionsLefttoRight(-20, 1, 0.1, 2, 3, 0, 1) // x , y, speed , x boundary, y boundary,delay,outOrientation
            new MinionsLefttoRight(-20, 1, 0.1, 2, 3, 0, 0) // x , y, speed , x boundary, y boundary,delay,outOrientation
    
            new MinionsRighttoLeft(20, 1, 0.1, -2, 3, 0, 2) // x , y, speed , x boundary, y boundary,delay,outOrientationS
            new MinionsRighttoLeft(20, 1, 0.1, -2, 3, 0, 3) // x , y, speed , x boundary, y boundary,delay,outOrientation
            new MinionsRighttoLeft(20, 1, 0.1, -2, 3, 0, 1) // x , y, speed , x boundary, y boundary,delay,outOrientation
            new MinionsRighttoLeft(20, 1, 0.1, -2, 3, 0, 0) // x , y, speed , x boundary, y boundary,delay,outOrientation    
        }
    }
    else if (time == 20) {
        
        new MinionsUptoDown(getRandom() % 10, 14, 0.09, 1, 1, 0) // x , y, speed , y boundary,delay,outOrientation
        new MinionsUptoDown(getRandom() % 10, 14, 0.09, 1, 1, 1) // x , y, speed , y boundary,delay,outOrientation
        new MinionsUptoDown(getRandom() % 10, 14, 0.09, 1, 1, 2) // x , y, speed , y boundary,delay,outOrientation
        new MinionsUptoDown(getRandom() % 10, 14, 0.09, 1, 1, 3) // x , y, speed , y boundary,delay,outOrientation

    }

    
    else if (time == 30) {
        
        new MinionsUptoDown(getRandom() % 10, 14, 0.09, 1, 1, 0) // x , y, speed , y boundary,delay,outOrientation
        new MinionsUptoDown(getRandom() % 10, 14, 0.09, 1, 1, 1) // x , y, speed , y boundary,delay,outOrientation
        new MinionsUptoDown(getRandom() % 10, 14, 0.09, 1, 1, 2) // x , y, speed , y boundary,delay,outOrientation
        new MinionsUptoDown(getRandom() % 10, 14, 0.09, 1, 1, 3) // x , y, speed , y boundary,delay,outOrientation

    }
    
    else if (time == 40) {
        
        new MinionsUptoDown(getRandom() % 10, 14, 0.09, 1, 1, 0) // x , y, speed , y boundary,delay,outOrientation
        new MinionsUptoDown(getRandom() % 10, 14, 0.09, 1, 1, 1) // x , y, speed , y boundary,delay,outOrientation
        new MinionsUptoDown(getRandom() % 10, 14, 0.09, 1, 1, 2) // x , y, speed , y boundary,delay,outOrientation
        new MinionsUptoDown(getRandom() % 10, 14, 0.09, 1, 1, 3) // x , y, speed , y boundary,delay,outOrientation

    }
    
    else if (time == 50) {
        
        new MinionsUptoDown(getRandom() % 10, 14, 0.09, 1, 1, 0) // x , y, speed , y boundary,delay,outOrientation
        new MinionsUptoDown(getRandom() % 10, 14, 0.09, 1, 1, 1) // x , y, speed , y boundary,delay,outOrientation
        new MinionsUptoDown(getRandom() % 10, 14, 0.09, 1, 1, 2) // x , y, speed , y boundary,delay,outOrientation
        new MinionsUptoDown(getRandom() % 10, 14, 0.09, 1, 1, 3) // x , y, speed , y boundary,delay,outOrientation

    }
    
    else if (time == 60) {
        
        new MinionsUptoDown(getRandom() % 10, 14, 0.09, 1, 1, 0) // x , y, speed , y boundary,delay,outOrientation
        new MinionsUptoDown(getRandom() % 10, 14, 0.09, 1, 1, 1) // x , y, speed , y boundary,delay,outOrientation
        new MinionsUptoDown(getRandom() % 10, 14, 0.09, 1, 1, 2) // x , y, speed , y boundary,delay,outOrientation
        new MinionsUptoDown(getRandom() % 10, 14, 0.09, 1, 1, 3) // x , y, speed , y boundary,delay,outOrientation

    }
}

// // var counter = 0
// function enemySpawner() { //test object
//     if (time <= 2 ) {
        
//     }
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