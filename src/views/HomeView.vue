<!-- <script setup lang="ts">
import { onMounted, ref } from 'vue';
import * as THREE from 'three';

const canvasRef = ref<HTMLDivElement | null>(null);

onMounted(() => {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75 /* 視野角度*/, window.innerWidth / window.innerHeight /*寬高比*/, 0.1 /*最近能看到的距離*/, 1000 /*最遠能看到的距離*/);
  const renderer = new THREE.WebGLRenderer();
  // renderer.setSize(300, 300);
  renderer.setSize( window.innerWidth, window.innerHeight );
  canvasRef.value?.appendChild(renderer.domElement);

  const geometry = new THREE.BoxGeometry();
  const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
  const cube = new THREE.Mesh(geometry, material);
  scene.add(cube);
  camera.position.z = 5;

  function animate() {
    requestAnimationFrame(animate);
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
  }

  animate();
});
</script> -->
<script>
import Card from './../components/RotatingCard.vue'

export default {
  components: {
    Card,
  },
}
</script>
<template>
  <Card></Card>
</template>
