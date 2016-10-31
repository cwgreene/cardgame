"use strict";
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
var positions = [[0, 0, -10], [0, 0, 10], [10, 10, 0]];
for (var _i = 0, positions_1 = positions; _i < positions_1.length; _i++) {
    var position = positions_1[_i];
    var light = new THREE.DirectionalLight(0xffffff);
    var x = position[0], y = position[1], z = position[2];
    light.position.set(x, y, z).normalize();
    scene.add(light);
}
var back = new THREE.MeshPhongMaterial({ map: THREE.ImageUtils.loadTexture('imgs/Corp_back.png') });
var face = new THREE.MeshPhongMaterial({ shininess: 0, map: THREE.ImageUtils.loadTexture('imgs/01111.png') });
var material2 = new THREE.MeshPhongMaterial({ color: 0x555555 });
var materials = [material2, material2, material2, material2, face, back];
var meshFaceMaterial = new THREE.MeshFaceMaterial(materials);
var geometry = new THREE.BoxGeometry(2.5, 3.5, .0115);
var material = new THREE.MeshPhongMaterial({ color: 0x555555,
    specular: 0x555555, shininess: 0 });
var cube = new THREE.Mesh(geometry, meshFaceMaterial);
scene.add(cube);
camera.position.z = 6;
function render() {
    requestAnimationFrame(render);
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
}
document.onkeydown = function (event) {
    if (event.key == 'w') {
        camera.position.z -= .1;
    }
    if (event.key == 's') {
        camera.position.z += .1;
    }
};
render();
