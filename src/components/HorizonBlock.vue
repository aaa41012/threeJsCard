<template>
  <div class="section__horizon-block">
    <div class="nav slot-title text-white">
      <slot name="nav"></slot>
    </div>
    <div class="slot-content lg:justify-start lg:p-[10rem]">
      <div
        class="slot-photo w-3xs cursor-pointer transform transition duration-300 hover:-translate-y-2 hover:shadow-lg"
        :class="[
          imageClass
        ]">
        <slot name="photo"></slot>
      </div>
      <div class="text-white">
        <h2 class="slot-title">
          <slot name="title"></slot>
        </h2>
        <p class="slot-description">
          <slot name="description"></slot>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  imageClass: {
    type: String,
    default: 'w-3xs'
  }
})
</script>

<style scoped>
  .nav {
    writing-mode: vertical-lr;
  }

  .section__horizon-block {
    width: 100vw;
    flex: 0 0 auto;
    left: 0;
    position: sticky;
    display: flex;
    align-items: center;
  }

  .slot-content {
    align-items: center;
    /* justify-content: center; */
    gap: 2rem;
    padding: 2rem;
    width: 100%;
    height: 100%;
  }

  .slot-photo {
    flex-shrink: 0;
    /* Prevent photo from shrinking */
  }

  .slot-photo :slotted(img) {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 12px;
  }

  .slot-title {
    font-size: 3rem;
    font-weight: bold;
  }

  .slot-description {
    font-size: 1.5rem;
  }
</style>