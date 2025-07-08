<template>
    <div class="flex items-center justify-center absolute">
    <p class="absolute ">Jin</p>
    <svg viewBox="0 0 200 200" width="100" height="100" class="animate-spin-slow">
      <defs>
        <path
          id="circlePath"
          d="M 100, 100
             m -75, 0
             a 75,75 0 1,1 150,0
             a 75,75 0 1,1 -150,0"
        />
      </defs>
      <text font-size="18" font-family="sans-serif">
        <textPath href="#circlePath" startOffset="0%">
          ✦ JIN LIN •✦• DESIGN •✦• CODE •• 3D •✦• WEB ✦
        </textPath>
      </text>
    </svg>
  </div>
</template>
<style scoped>
@keyframes spin-slow {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.animate-spin-slow {
  animation: spin-slow 10s linear infinite;
  transform-origin: center;
}
</style>