<template>
  <!-- Container for the 3D scene -->
  <div class="flex justify-center items-center relative w-3xl" ref="container">
    <!-- Canvas element for rendering -->
    <canvas ref="canvas" class="cursor-pointer block relative"></canvas>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';
import * as THREE from 'three';
// Vite + TS + ESM 組合時，three/examples/... 必須加 .js 副檔名，否則會在 build 時找不到模組。
// dev 可以跑，是因為開發環境使用的是 Node ESM 模式與 Vite 的模組解析器，但 build 是 rollup，要求路徑更嚴謹。
// import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader.js';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';

// Reference to the container and canvas elements
const container = ref<HTMLDivElement | null>(null);
const canvas = ref<HTMLCanvasElement | null>(null);

/**
 * Creates the Three.js scene.
 * @returns {THREE.Scene} The created scene.
 */
function createScene(): THREE.Scene {
  const scene = new THREE.Scene();
  return scene;
}

/**
 * Creates the Three.js renderer.
 * @param {HTMLCanvasElement} canvas The canvas element to render on.
 * @returns {THREE.WebGLRenderer} The created renderer.
 */
function createRenderer(canvas: HTMLCanvasElement): THREE.WebGLRenderer {
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(canvas.clientWidth, canvas.clientHeight);
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1;
  return renderer;
}

/**
 * Adds lights to the scene.
 * @param {THREE.Scene} scene The scene to add lights to.
 */
function addLights(scene: THREE.Scene) {
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
  scene.add(ambientLight);

  const directionalLight = new THREE.DirectionalLight(0xffffff, 1.2);
  directionalLight.position.set(10, 15, 10);
  directionalLight.castShadow = true;
  directionalLight.shadow.mapSize.width = 1024;
  directionalLight.shadow.mapSize.height = 1024;
  directionalLight.shadow.camera.near = 0.5;
  directionalLight.shadow.camera.far = 50;
  scene.add(directionalLight);
}

/**
 * Creates a ground plane for receiving shadows.
 * @param {THREE.Scene} scene The scene to add the ground to.
 */
function createGround(scene: THREE.Scene) {
  const groundGeometry = new THREE.PlaneGeometry(20, 20);
  const groundMaterial = new THREE.ShadowMaterial({ opacity: 0.3 });
  const groundMesh = new THREE.Mesh(groundGeometry, groundMaterial);
  groundMesh.rotation.x = -Math.PI / 2;
  groundMesh.position.y = -2;
  groundMesh.receiveShadow = true;
  scene.add(groundMesh);
}

// Run this code when the component is mounted
onMounted(() => {
  const containerEl = container.value;
  const canvasEl = canvas.value;
  if (!containerEl || !canvasEl) return;

  const width = canvasEl.clientWidth;
  const height = canvasEl.clientHeight;

  const scene = createScene();
  const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
  camera.position.set(0, 0, 7);

  const renderer = createRenderer(canvasEl);

  addLights(scene);
  createGround(scene);

  // new RGBELoader().setPath('/').load('studio.hdr', (texture) => {
  //   texture.mapping = THREE.EquirectangularReflectionMapping;
  //   scene.background = texture;
  //   scene.environment = texture;
  // });

  const cardGroup = new THREE.Group();
  const textureLoader = new THREE.TextureLoader();
  cardGroup.position.y = -0.5;
  scene.add(cardGroup);

  const cardWidth = 4;
  const cardHeight = 2.2;
  const cardGeometry = new THREE.BoxGeometry(cardWidth, cardHeight, 0.05);
  // 卡片材質
  const woodTexture = textureLoader.load('/plywood.jpg');
  woodTexture.wrapS = THREE.RepeatWrapping;
  woodTexture.wrapT = THREE.RepeatWrapping;
  woodTexture.repeat.set(1, 1);

  const cardMaterial = new THREE.MeshStandardMaterial({
    map: woodTexture,
    color: 0xffffff,
    roughness: 0.2,
    metalness: 0.2,
  });
  const cardMesh = new THREE.Mesh(cardGeometry, cardMaterial);
  cardMesh.castShadow = true;
  cardGroup.add(cardMesh);

  const imageSize = 1.6;
  const imageGeometry = new THREE.PlaneGeometry(imageSize, imageSize);
  
  const texture = textureLoader.load('/logo.jpg');
  const imageMaterial = new THREE.MeshStandardMaterial({ map: texture, roughness: 0.5, metalness: 0.2 });
  const imageMesh = new THREE.Mesh(imageGeometry, imageMaterial);
  imageMesh.position.set(cardWidth / 4, 0, 0.03);
  cardGroup.add(imageMesh);

  const fontLoader = new FontLoader();
  fontLoader.load('/fonts/helvetiker_regular.json', (font) => {
    const textGeometry = new TextGeometry('Jin', {
      font: font,
      size: 0.25,
      depth: 0.01,
    });
    textGeometry.center();
    const textMaterial = new THREE.MeshStandardMaterial({ color: '#111111', roughness: 0.1, metalness: 0.4 });
    const textMesh = new THREE.Mesh(textGeometry, textMaterial);
    textMesh.position.set(-cardWidth / 4, 0, 0.03);
    cardGroup.add(textMesh);

    // Back of the card
    const emailGeometry = new TextGeometry('Email: aaa41012@gmail.com', {
      font: font,
      size: 0.15,
      depth: 0.01,
    });
    emailGeometry.center();
    const emailMaterial = new THREE.MeshStandardMaterial({ color: '#111111', roughness: 0.1, metalness: 0.4 });
    const emailMesh = new THREE.Mesh(emailGeometry, emailMaterial);
    emailMesh.position.set(0, 0.5, -0.03);
    emailMesh.rotation.y = Math.PI; // Rotate to face the back
    cardGroup.add(emailMesh);
    // https://threejscard.netlify.app/
    const websiteGeometry = new TextGeometry('Website: threejscard.netlify.app', {
      font: font,
      size: 0.15,
      depth: 0.01,
    });
    websiteGeometry.center();
    const websiteMaterial = new THREE.MeshStandardMaterial({ color: '#333', roughness: 0.1, metalness: 0.4 });
    const websiteMesh = new THREE.Mesh(websiteGeometry, websiteMaterial);
    websiteMesh.position.set(0, -0.5, -0.03);
    websiteMesh.rotation.y = Math.PI; // Rotate to face the back
    cardGroup.add(websiteMesh);
  });

  const mouse = new THREE.Vector2();
  const targetRotation = new THREE.Vector2();
  let isFlipped = false;
  let targetFlip = 0;

// 滑鼠移動事件
const onMouseMove = (event: MouseEvent) => {
  const rect = containerEl.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;

  mouse.x = (x / rect.width) * 2 - 1;
  mouse.y = -(y / rect.height) * 2 + 1;

  lastMouseMoveTime = Date.now();
  autoRotate = false;

  if (!isFlipped) {
    targetRotation.x = mouse.y * 0.25;
    targetRotation.y = mouse.x * 0.5;
  }
};

  const raycaster = new THREE.Raycaster();
// 點擊事件（翻轉）
const onClick = () => {
  raycaster.setFromCamera(mouse, camera);
  const intersects = raycaster.intersectObjects(cardGroup.children);
  if (intersects.length > 0) {
    isFlipped = !isFlipped;
    targetFlip = isFlipped ? Math.PI : 0;
    autoRotate = false;
    lastMouseMoveTime = Date.now();
  }
};

  containerEl.addEventListener('mousemove', onMouseMove);
  containerEl.addEventListener('click', onClick);

let baseRotationY = 0;
let lastMouseMoveTime = Date.now();
let autoRotate = true;

const animate = () => {
  requestAnimationFrame(animate);

  const now = Date.now();
  const timeSinceLastMove = now - lastMouseMoveTime;

  // 如果超過 3 秒沒滑動就恢復自動旋轉
  if (timeSinceLastMove > 3000 && !isFlipped) {
    autoRotate = true;
  }

  // 更新 baseRotationY（只有在自動模式下才會轉動）
  if (autoRotate) {
    baseRotationY += 0.005;
  }

  // 最終目標角度：自動旋轉 + 滑鼠控制 + 翻轉角度
  const targetY = baseRotationY + targetRotation.y + targetFlip;

  cardGroup.rotation.x += (targetRotation.x - cardGroup.rotation.x) * 0.1;
  cardGroup.rotation.y += (targetY - cardGroup.rotation.y) * 0.1;

  renderer.render(scene, camera);
};


  animate();

  const handleResize = () => {
    const newWidth = canvasEl.clientWidth;
    const newHeight = canvasEl.clientHeight;
    camera.aspect = newWidth / newHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(newWidth, newHeight);
  };

  const resizeObserver = new ResizeObserver(handleResize);
  resizeObserver.observe(canvasEl);

  onUnmounted(() => {
    containerEl.removeEventListener('mousemove', onMouseMove);
    containerEl.removeEventListener('click', onClick);
    resizeObserver.disconnect();
  });
});
</script>