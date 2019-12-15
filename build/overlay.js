function Overlay(){
    function textOverlay(){

        var loader = new THREE.FontLoader();
        

        var font2 = loader.parse('fonts/helvetiker_regular.typeface.json')
        var font = loader.load( 'fonts/helvetiker_regular.typeface.json', function ( font ) {

        var geometry = new THREE.TextGeometry( 'BOTTOM TEXT', {
            font: font,
            size: 200,
            height: 5,
            curveSegments: 12,
            bevelEnabled: false,
            bevelThickness: 10,
            bevelSize: 8,
            bevelOffset: 0,
            bevelSegments: 5

            } );

            var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 });
            var text = new THREE.Mesh( font, material );

        } );

        var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 });
        var text = new THREE.Mesh( font, material );

        text.position.z = 10;
        text.position.y = 0;
        text.position.x = 0;

        scene.add(text);
        console.log('sukses')
        

    // }
        };

        
    textOverlay();
};