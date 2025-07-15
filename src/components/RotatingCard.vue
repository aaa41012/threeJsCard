
<!-- // Vite + TS + ESM 組合時，three/examples/... 必須加 .js 副檔名，否則會在 build 時找不到模組。
// dev 可以跑，是因為開發環境使用的是 Node ESM 模式與 Vite 的模組解析器，但 build 是 rollup，要求路徑更嚴謹。 -->
<template>
  <!-- Container for the 3D scene -->
  <div class="flex justify-center items-center relative w-full min-h-[300px] sm:min-h-[400px] md:min-h-[500px]" ref="container">
    <!-- Canvas element for rendering -->
    <canvas 
      ref="canvas" 
      class="cursor-pointer block relative max-w-full max-h-full"
      :style="{ width: canvasWidth + 'px', height: canvasHeight + 'px' }"
    ></canvas>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';
import * as THREE from 'three';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';

// Reference to the container and canvas elements
const container = ref<HTMLDivElement | null>(null);
const canvas = ref<HTMLCanvasElement | null>(null);

// Canvas dimensions
const canvasWidth = ref(400);
const canvasHeight = ref(300);

/**
 * Calculate responsive canvas size based on screen dimensions
 */
function calculateCanvasSize() {
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;
  
  // Mobile (< 640px)
  if (screenWidth < 640) {
    canvasWidth.value = Math.min(screenWidth - 32, 350); // 32px for padding
    canvasHeight.value = Math.min(screenHeight * 0.4, 280);
  }
  // Tablet (640px - 1024px)
  else if (screenWidth < 1024) {
    canvasWidth.value = Math.min(screenWidth * 0.8, 500);
    canvasHeight.value = Math.min(screenHeight * 0.5, 400);
  }
  // Desktop (>= 1024px)
  else {
    canvasWidth.value = Math.min(screenWidth * 0.6, 600);
    canvasHeight.value = Math.min(screenHeight * 0.6, 500);
  }
}

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
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // Limit pixel ratio for performance
  renderer.setSize(canvasWidth.value, canvasHeight.value);
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

  // Calculate initial canvas size
  calculateCanvasSize();

  const scene = createScene();
  const camera = new THREE.PerspectiveCamera(45, canvasWidth.value / canvasHeight.value, 0.1, 1000);
  
  // Adjust camera position based on screen size
  const isMobile = window.innerWidth < 640;
  camera.position.set(0, 0, isMobile ? 8 : 7);

  const renderer = createRenderer(canvasEl);

  addLights(scene);
  createGround(scene);
  
  const cardGroup = new THREE.Group();
  const textureLoader = new THREE.TextureLoader();
  cardGroup.position.y = -0.5;
  scene.add(cardGroup);

  // Adjust card size based on screen size
  const cardScale = isMobile ? 0.8 : 1;
  const cardWidth = 4 * cardScale;
  const cardHeight = 2.2 * cardScale;
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

  const imageSize = 1.6 * cardScale;
  const imageGeometry = new THREE.PlaneGeometry(imageSize, imageSize);
  
  const texture = textureLoader.load('/logo.jpg');
  const imageMaterial = new THREE.MeshStandardMaterial({ map: texture, roughness: 0.5, metalness: 0.2 });
  const imageMesh = new THREE.Mesh(imageGeometry, imageMaterial);
  imageMesh.position.set(cardWidth / 4, 0, 0.03);
  cardGroup.add(imageMesh);

  const fontLoader = new FontLoader();
  fontLoader.load('/fonts/helvetiker_regular.json', (font) => {
    const textSize = isMobile ? 0.2 : 0.25;
    const textGeometry = new TextGeometry('Jin', {
      font: font,
      size: textSize,
      depth: 0.01,
    });
    textGeometry.center();
    const textMaterial = new THREE.MeshStandardMaterial({ color: '#111111', roughness: 0.1, metalness: 0.4 });
    const textMesh = new THREE.Mesh(textGeometry, textMaterial);
    textMesh.position.set(-cardWidth / 4, 0, 0.03);
    cardGroup.add(textMesh);

    // Back of the card
    const emailSize = isMobile ? 0.12 : 0.15;
    const emailGeometry = new TextGeometry('Email: aaa41012@gmail.com', {
      font: font,
      size: emailSize,
      depth: 0.01,
    });
    emailGeometry.center();
    const emailMaterial = new THREE.MeshStandardMaterial({ color: '#111111', roughness: 0.1, metalness: 0.4 });
    const emailMesh = new THREE.Mesh(emailGeometry, emailMaterial);
    emailMesh.position.set(0, 0.5, -0.03);
    emailMesh.rotation.y = Math.PI; // Rotate to face the back
    cardGroup.add(emailMesh);
    
    const websiteGeometry = new TextGeometry('Website: threejscard.netlify.app', {
      font: font,
      size: emailSize,
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

  // 滑鼠移動事件 (支援觸控)
  const onMouseMove = (event: MouseEvent | TouchEvent) => {
    const rect = containerEl.getBoundingClientRect();
    let x, y;
    
    if ('touches' in event) {
      // Touch event
      x = event.touches[0].clientX - rect.left;
      y = event.touches[0].clientY - rect.top;
    } else {
      // Mouse event
      x = event.clientX - rect.left;
      y = event.clientY - rect.top;
    }

    mouse.x = (x / rect.width) * 2 - 1;
    mouse.y = -(y / rect.height) * 2 + 1;

    lastMouseMoveTime = Date.now();
    autoRotate = false;

    if (!isFlipped) {
      const sensitivity = isMobile ? 0.15 : 0.25; // Reduce sensitivity on mobile
      targetRotation.x = mouse.y * sensitivity;
      targetRotation.y = mouse.x * (isMobile ? 0.3 : 0.5);
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

  // Add both mouse and touch events
  containerEl.addEventListener('mousemove', onMouseMove);
  containerEl.addEventListener('touchmove', onMouseMove);
  containerEl.addEventListener('click', onClick);
  containerEl.addEventListener('touchend', onClick);

  let baseRotationY = 0;
  let lastMouseMoveTime = Date.now();
  let autoRotate = true;

  const animate = () => {
    requestAnimationFrame(animate);

    const now = Date.now();
    const timeSinceLastMove = now - lastMouseMoveTime;

    // 如果超過 3 秒沒滑動就恢復自動旋轉
    if (timeSinceLastMove > 2000 && !isFlipped) {
      autoRotate = true;
    }

    // 更新 baseRotationY（只有在自動模式下才會轉動）
    if (autoRotate) {
      baseRotationY += isMobile ? 0.015 : 0.02; // Slower on mobile
    }

    // 最終目標角度：自動旋轉 + 滑鼠控制 + 翻轉角度
    const targetY = baseRotationY + targetRotation.y + targetFlip;

    cardGroup.rotation.x += (targetRotation.x - cardGroup.rotation.x) * 0.1;
    cardGroup.rotation.y += (targetY - cardGroup.rotation.y) * 0.1;

    renderer.render(scene, camera);
  };

  animate();

  const handleResize = () => {
    calculateCanvasSize();
    camera.aspect = canvasWidth.value / canvasHeight.value;
    camera.updateProjectionMatrix();
    renderer.setSize(canvasWidth.value, canvasHeight.value);
  };

  // Use both resize observer and window resize for better compatibility
  const resizeObserver = new ResizeObserver(handleResize);
  resizeObserver.observe(containerEl);
  window.addEventListener('resize', handleResize);

  onUnmounted(() => {
    containerEl.removeEventListener('mousemove', onMouseMove);
    containerEl.removeEventListener('touchmove', onMouseMove);
    containerEl.removeEventListener('click', onClick);
    containerEl.removeEventListener('touchend', onClick);
    window.removeEventListener('resize', handleResize);
    resizeObserver.disconnect();
  });
});
</script>