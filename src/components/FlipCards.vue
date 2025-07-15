<template>
  <section class="content-section px-4 py-12 bg-gray-50">
    <h2 class="text-4xl font-bold text-center mb-12">Discover My Features</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <div
        v-for="(card, index) in cards"
        :key="index"
        class="reveal-card relative h-48 cursor-pointer"
        @click="toggleCard(index)"
      >
        <!-- 卡片容器 -->
        <div 
          class="flip-card-inner w-full h-full transition-transform duration-700"
          :class="{ 'rotate-y-180': flippedCards[index] }"
        >
          <!-- 正面 -->
          <div class="flip-card-front absolute w-full h-full backface-hidden bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
            <h3 class="font-bold text-xl mb-2">{{ card.front.title }}</h3>
            <p class="text-gray-600">{{ card.front.content }}</p>
            <div class="absolute bottom-4 right-4 text-gray-400 text-sm">
              click
            </div>
          </div>
          
          <!-- 背面 -->
          <div class="flip-card-back absolute w-full h-full backface-hidden bg-gradient-to-br from-blue-500 to-purple-600 p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
            <h3 class="font-bold text-xl mb-2 text-white">{{ card.back.title }}</h3>
            <p class="text-white/90">{{ card.back.content }}</p>
            <div class="absolute bottom-4 right-4 text-white/70 text-sm">
              back
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive } from 'vue'

// 翻轉狀態管理
const flippedCards = reactive({})

// 卡片內容
const cards = ref([
  {
    front: {
      title: "Frontend Skill",
      content: "Vue / HTML5 / CSS3 / TypeScript"
    },
    back: {
      title: "前端技能詳情",
      content: "熟悉 Vue 3 Composition API、響應式設計、TypeScript 開發，具備豐富的前端框架使用經驗"
    }
  },
  {
    front: {
      title: "Library",
      content: "GSAP / Three.js / Parallax / Animation"
    },
    back: {
      title: "程式庫專長",
      content: "擅長使用 GSAP 創建流暢動畫、Three.js 3D 場景開發、視差滾動效果實現"
    }
  },
  {
    front: {
      title: "Responsive Web Design",
      content: "Tailwind / Media Queries"
    },
    back: {
      title: "響應式設計",
      content: "熟練運用 Scss / Sass 搭配Tailwind，熟悉各種螢幕尺寸的適配與各瀏覽器優化"
    }
  },
  {
    front: {
      title: "Performance Optimization",
      content: "requestAnimationFrame / Intersection Observer"
    },
    back: {
      title: "效能優化",
      content: "運用 Intersection Observer、懶加載、程式碼分割等現代技術，確保網站載入速度與使用者體驗"
    }
  }
])

// 切換卡片翻轉狀態
const toggleCard = (index) => {
  flippedCards[index] = !flippedCards[index]
}
</script>

<style scoped>
.flip-card-inner {
  transform-style: preserve-3d;
}

.backface-hidden {
  backface-visibility: hidden;
}

.rotate-y-180 {
  transform: rotateY(180deg);
}

.flip-card-back {
  transform: rotateY(180deg);
}

/* 確保 3D 效果在各瀏覽器中正常顯示 */
.flip-card-front,
.flip-card-back {
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}
</style>