var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);

if (window.WebGLRenderingContext) {
    var renderer = new THREE.WebGLRenderer();
} else {
    renderer = new THREE.CanvasRenderer();
}

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
var geometry = new THREE.TorusKnotBufferGeometry(10, 3, 64, 8, 2, 3);
var material = new THREE.MeshLambertMaterial({ color: 0x53868B });
var torus = new THREE.Mesh(geometry, material);
scene.add(torus);
camera.position.z = 80;

const pointLight = new THREE.PointLight(0xFFFFFF);

// set its position
pointLight.position.x = 10;
pointLight.position.y = 50;
pointLight.position.z = 130;
scene.add(pointLight);

//render function
var render = function() {
    requestAnimationFrame(render);
    torus.rotation.x += 0.01;
    torus.rotation.y += 0.01;
    renderer.render(scene, camera);
};
render();
