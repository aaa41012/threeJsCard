<script>
import Card from './../components/RotatingCard.vue'
import Logo from './../components/Logo.vue'
export default {
  components: {
    Card,
    Logo
  },
}
</script>
<template>
  <div class="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center py-20 relative">
    <logo class="left-3 top-3"></logo>
    <h1 class="text-4xl font-bold mb-2 drop-shadow-md">Lorem ipsum dolor sit amet consectetur, adipisicing !</h1>
    <p class="text-xl">Lorem ipsum, dolor sit amet consectetur</p>
    <Card></Card>
  </div>
</template>



