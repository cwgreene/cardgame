"use strict";
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const positions = [[0,0,-10], /*[-10,0,0],*/ [0,0,10], [10,10,0]];
for (const position of positions) {
  const light = new THREE.DirectionalLight( 0xffffff );
  const [x, y, z] = position;
  light.position.set(x, y, z).normalize();
  scene.add(light);
}

//Materials
const back = new THREE.MeshPhongMaterial({map:THREE.ImageUtils.loadTexture('imgs/Corp_back.png')})
const face = new THREE.MeshPhongMaterial({shininess:0,map:THREE.ImageUtils.loadTexture('imgs/01111.png')})
const material2 = new THREE.MeshPhongMaterial({color: 0x555555});
const materials = [material2,material2,material2,material2,face,back];
const meshFaceMaterial = new THREE.MeshFaceMaterial(materials);
//const geometry = new THREE.BoxGeometry( 2.5, 3.5, .0115 );
const geometry = new THREE.BoxGeometry( 2.5, 3.5, .0115 );
const material = new THREE.MeshPhongMaterial( { color: 0x555555,
  specular: 0x555555, shininess: 0 } );
const cube = new THREE.Mesh( geometry, meshFaceMaterial );
scene.add( cube );

camera.position.z = 6;

function render() {
	requestAnimationFrame( render );
  cube.rotation.y += 0.01;
	renderer.render( scene, camera );
}
render();
