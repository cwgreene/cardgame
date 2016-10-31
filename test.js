"use strict";
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
var positions = [[0, 0, -10], [-10, 0, 0], [0, 0, 10], [10, 10, 0]];
for (var _i = 0, positions_1 = positions; _i < positions_1.length; _i++) {
    var position = positions_1[_i];
    var light = new THREE.DirectionalLight(0xffffff);
    light.position.set(position[0], position[1], position[2]).normalize();
    scene.add(light);
}
var geometry = new THREE.BoxGeometry(2.5, 3.5, .0115);
var material = new THREE.MeshPhongMaterial({ color: 0x555555,
    specular: 0x555555, shininess: 1 });
var cube = new THREE.Mesh(geometry, material);
scene.add(cube);
camera.position.z = 5;
function render() {
    requestAnimationFrame(render);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
}
render();
