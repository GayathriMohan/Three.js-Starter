var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);

if (window.WebGLRenderingContext) {
    var renderer = new THREE.WebGLRenderer();
} else {
    renderer = new THREE.CanvasRenderer();
}

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
var geometry = new THREE.BoxGeometry(1, 1, 1);
var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
var cube = new THREE.Mesh(geometry, material);
scene.add(cube);
camera.position.z = 4;

const pointLight = new THREE.PointLight(0xFFFFFF);

// set its position
pointLight.position.x = 10;
pointLight.position.y = 50;
pointLight.position.z = 130;
scene.add(pointLight);

var render = function() {
    requestAnimationFrame(render);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
};

render();
