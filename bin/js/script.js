var date = new Date();
console.log('%c'+document.getElementById('stargate').innerHTML, 'color: #666');
console.log(`%c

    Everything on this site is made entirely by me. 
    Minus jQuery, THREE.js, and a Perlin noise library, that is.

    As you can probably tell, I sort of like creating pretty canvas experiments and playing around with Javascript & WebGL.

    Anyways, by the way, I like to build racing drones & fly them in my spare time.
    Just thought that might be a nice thing to learn from a console.


        © 2012-${date.getFullYear()} Darryl Huffman 


`, 'color: #1a66ff');


$(document).ready(function(){
    webscroll.updateRatio();
    webscroll.resize();
    webscroll.moveSections();
});