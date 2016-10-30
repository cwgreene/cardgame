"use strict";
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const positions = [[0,0,-10],[-10,0,0],[0,0,10],[10,10,0]]
for (const position of positions) {
  const light = new THREE.DirectionalLight( 0xffffff );
  light.position.set( ...position ).normalize();
  scene.add(light);
}

const geometry = new THREE.BoxGeometry( 2.5, 3.5, .0115 );
const material = new THREE.MeshPhongMaterial( {
  ambient: 0x050505, color: 0x555555,
  specular: 0x555555, shininess: 1 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5;

function render() {
	requestAnimationFrame( render );
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
	renderer.render( scene, camera );
}
render();
