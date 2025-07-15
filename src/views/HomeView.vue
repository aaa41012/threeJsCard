<script setup lang="ts">
  import {
    ref,
    onMounted,
    onUnmounted
  } from 'vue';
  import Card from './../components/RotatingCard.vue';
  import FlipCards from '../components/FlipCards.vue';

  const logoRotation = ref(0);
  const handleScroll = () => {
    logoRotation.value = window.scrollY * 0.5;
  };
  const getProgress = (element: HTMLElement) => {
    var rect = element.getBoundingClientRect();
    let progress = -(rect.top / (element.clientHeight - window.innerHeight))
    if (progress <= 0) {
      progress = 0
    } else if (progress >= 1) {
      progress = 1
    }
    return progress
  };
  const updateScroll = () => {
    document.querySelectorAll('.section.-horizon').forEach((horizon) => {
      const horizonEle = horizon as HTMLElement;
      window.addEventListener('scroll', () => {
        horizonEle.children[0].scrollLeft = getProgress(horizonEle) * window.innerWidth * 4;
      })
    })
  }


  // Setup Intersection Observer when the component is mounted
  onMounted(() => {
    window.addEventListener('scroll', updateScroll);
    window.addEventListener('scroll', handleScroll);
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        } else {
          // Optional: remove the class when it goes out of view to re-trigger the animation
          // entry.target.classList.remove('in-view');
        }
      });
    }, {
      threshold: 0.1 // Trigger when 10% of the element is visible
    });

    // Observe all elements with the class .reveal-card
    const cards = document.querySelectorAll('.reveal-card');
    cards.forEach(card => observer.observe(card));
  });

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
    window.removeEventListener('scroll', updateScroll);
  });
</script>

<template>
  <main>
    <!-- Parallax Section with Curved Bottom -->
    <section class="parallax-section h-[110vh]">
      <div class="parallax-shape shape-1 w-[250px] h-[250px] top-[10%] left-[15%]"></div>
      <div class="parallax-shape shape-2 w-[100px] h-[100px] top-[60%] right-[20%]"></div>
      <div class="parallax-shape shape-3 w-[50px] h-[50px] top-[30%] right-[10%]"></div>
      <div class="parallax-shape shape-4 w-[500px] h-[500px] top-[80%] right-[80%]"></div>
      <div class="flex text-4xl text-white relative top-[-5%] drop-shadow-lg text-center">Creative Frontend Developer</div>
      <div class="logo-container">
        <div class="flex items-center justify-center relative">
          <p class="absolute text-white">Jin</p>
          <svg viewBox="0 0 200 200" width="200" height="200" :style="{ transform: `rotate(${logoRotation}deg)` }">
            <defs>
              <path id="circlePath" d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0" />
            </defs>
            <text font-size="18" font-family="sans-serif" fill="white">
              <textPath href="#circlePath" startOffset="0%">
                ✦ JIN LIN •✦• DESIGN •✦• CODE •• 3D •✦• WEB ✦
              </textPath>
            </text>
          </svg>
        </div>
      </div>
      <h1 class="text-3xl font-bold text-white drop-shadow-lg shape-4">👇</h1>
    </section>
     <FlipCards></FlipCards>
    <!-- horizontal -->
    <section class="section -a">
      <div class="section__text drop-shadow-lg">Portfolio</div>
    </section>
    <section class="section -b -horizon">
      <div class="section__horizon">
        <div class="section__horizon-block"><span>Vue3 👉</span></div>
        <div class="section__horizon-block"><span>React 👉</span></div>
        <div class="section__horizon-block"><span>D3.js 👉</span></div>
        <div class="section__horizon-block"><span>HORIZONTAL 👇</span></div>
        <div class="section__horizon-block">
          <div>🏄 OH YA BABY 🏄</div>
        </div>
      </div>
    </section>
    <section class="section -c">
      <div class="section__text text-3xl font-bold">
        Contact me<br>
        <a href="mailto:aaa41012@gmail.com">Made by Jin Design</a>
        <Card></Card>
      </div>
    </section>
  </main>
</template>

<style scoped>
  .parallax-section {
    /* Slightly more than 100vh to ensure curve is visible on scroll */
    /* 原本的紫色漸層 */
    background: linear-gradient(to right, #4f46e5, #a855f7);
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    flex-direction: column;
    color: white;
    @apply flex relative items-center justify-center;
    /* overflow: hidden; */
  }

  .logo-container {
    margin-bottom: 2rem;
    transition: transform 0.1s linear;
  }

  .content-section {
    background-color: white;
    position: relative;
    z-index: 1;
    padding: 100px 20px;
  }

  .card-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    max-width: 1200px;
    margin: 0 auto;
  }

  .reveal-card {
    background: linear-gradient(to top right, #f3f4f6, #e5e7eb);
    padding: 2rem;
    border-radius: 12px;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.05);
  }

  /* The state when the element is visible */
  .reveal-card.in-view {
    opacity: 1;
    transform: translateY(0);
  }

  @keyframes float {
    0% {
      transform: translateY(0);
    }

    50% {
      transform: translateY(-20px);
    }

    100% {
      transform: translateY(0);
    }
  }

  @keyframes wave {
    0% {
      transform: translateX(0);
    }

    100% {
      transform: translateX(-15%);
    }
  }

  .parallax-shape {
    position: absolute;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.1);
    will-change: transform;
    z-index: 0;
    /* Add the floating animation */
    animation-name: float;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
  }

  .animate-wave {
    animation: wave 10s linear infinite;
  }

  .shape-1 {
    animation-duration: 8s;
    /* Slower float */
  }

  .shape-2 {
    animation-duration: 5s;
    /* Faster float */
    animation-delay: 1s;
    /* Start after 1 second */
  }

  .shape-3 {
    animation-duration: 7s;
    /* Medium float */
    animation-delay: 1.5s;
    /* Start after 0.5 seconds */
  }

  .shape-4 {
    animation-duration: 3s;
    /* Medium float */
  }

  /* scroll */
  .section {
    width: 100vw;
  }

  .section.-a {
    font-size: 6vw;
    height: 100vh;
    background-color: #CCFF66;
  }

  .section.-b {
    color: #001514;
    height: 500vh;
    position: relative;
    background-color: #4E6E58;
  }

  .section.-c {
    font-size: 2vw;
    font-weight: 100;
    height: 100vh;
    color: #fff;
    background-color: #001514;
  }

  .section.-c a {
    font-size: 16px;
    opacity: 0.3;
    color: #fff;
    display: block;
  }

  .section__horizon {
    top: 0;
    position: sticky;
    width: 100%;
    height: 100vh;
    white-space: nowrap;
    overflow-x: auto;
    overflow-y: hidden;
    display: flex;
  }

  .section__horizon::-webkit-scrollbar {
    height: 10px;
  }

  .section__horizon::-webkit-scrollbar-track {
    background: #CCFF66;
  }

  .section__horizon::-webkit-scrollbar-thumb {
    background: #000;
  }

  .section__horizon-block {
    width: 100vw;
    flex: 0 0 auto;
    left: 0;
    position: sticky;
    display: flex;
    align-items: center;
  }

  .section__horizon-block>div {
    width: 100%;
    height: 100%;
    font-size: 6vw;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .section__horizon-block>span {
    font-size: 4vw;
    padding: 1vw;
  }

  .section__horizon-block:nth-child(2) {
    left: 10vw;
    background-color: #BCAA99;
  }

  .section__horizon-block:nth-child(3) {
    left: 21vw;
    background-color: #645986;
  }

  .section__horizon-block:nth-child(4) {
    left: 31vw;
    background-color: #BCAA99;
  }

  .section__horizon-block:nth-child(5) {
    background-color: #CCFF66;
  }

  .section__text {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 0.5rem;
  }
</style>