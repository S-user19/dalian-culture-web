<script setup lang="ts">
import CultureCard from '../components/CultureCard.vue'

const foods = [
  {
    title: '大连海参',
    description: '大连刺参是国家地理标志产品，海参中的极品，肉质肥厚，营养丰富，是大连海鲜的代表。',
    image: 'https://aka.doubaocdn.com/l/eSle5jVV6N',
    tag: '海产珍品',
  },
  {
    title: '鲅鱼饺子',
    description: '大连特色传统美食，新鲜鲅鱼肉剁馅，口感鲜嫩多汁，是大连人餐桌上的常客。',
    image: 'https://aka.doubaocdn.com/l/bXoBhhuDEl',
    tag: '特色主食',
  },
  {
    title: '烤鱿鱼',
    description: '大连街头必吃小吃，新鲜大鱿鱼炭火烤制，配以秘制酱料，鲜香Q弹，回味无穷。',
    image: 'https://aka.doubaocdn.com/l/bXoBhhuDEl',
    tag: '街头小吃',
  },
  {
    title: '大连樱桃',
    description: '国家地理标志产品，旅顺大樱桃色泽鲜艳、果肉饱满、酸甜可口，每年6月成熟上市。',
    image: 'https://aka.doubaocdn.com/l/eSle5jVV6N',
    tag: '时令水果',
  },
  {
    title: '海胆蒸蛋',
    description: '新鲜海胆搭配嫩滑蒸蛋，鲜美融合，口感细腻，是不可错过的海鲜美味。',
    image: 'https://p11-doubao-search-sign.byteimg.com/tos-cn-i-be4g95zd3a/1346554401452720133~tplv-be4g95zd3a-image.jpeg?lk3s=feb11e32&x-expires=1809168788&x-signature=iqUknuB6pTX%2FGzddldASoUd5IWE%3D',
    tag: '海鲜料理',
  },
  {
    title: '海鲜大咖',
    description: '大连特色海鲜拼盘，龙虾、螃蟹、扇贝、生蚝汇聚一盘，视觉与味觉的双重享受。',
    image: 'https://aka.doubaocdn.com/l/bXoBhhuDEl',
    tag: '传统小吃',
  },
]

const recommendRestaurants = [
  { name: '天天渔港', desc: '老字号海鲜酒楼，食材新鲜，菜品正宗' },
  { name: '品海楼', desc: '大连海鲜名店，环境优雅，性价比高' },
  { name: '68-86老菜坊', desc: '大连老菜传承，经典味道' },
  { name: '天津街小吃街', desc: '汇聚各种大连特色小吃' },
]
</script>

<template>
  <div class="food-guide-page">
    <section class="page-hero">
      <h1>🦀 特色美食</h1>
      <p>靠海吃海，品味大连的海鲜盛宴</p>
    </section>

    <section class="page-section">
      <div class="container">
        <h2 class="section-title">必尝美味</h2>
        <p class="section-subtitle">从海鲜大餐到街头小吃，总有一款适合你</p>
        <div class="grid-3">
          <CultureCard
            v-for="food in foods"
            :key="food.title"
            :title="food.title"
            :description="food.description"
            :image="food.image"
            :tag="food.tag"
          />
        </div>
      </div>
    </section>

    <section class="page-section bg-light">
      <div class="container">
        <h2 class="section-title">推荐餐厅</h2>
        <p class="section-subtitle">本地人气餐厅，不踩雷指南</p>
        <div class="restaurants-grid">
          <div v-for="r in recommendRestaurants" :key="r.name" class="restaurant-card">
            <h3>{{ r.name }}</h3>
            <p>{{ r.desc }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.restaurants-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}
.restaurant-card {
  background: #fff;
  padding: 20px;
  border-radius: 12px;
  text-align: center;
  box-shadow: var(--shadow-sm);
}
.restaurant-card h3 {
  margin: 0 0 8px;
  font-size: 16px;
  color: var(--primary-color);
}
.restaurant-card p {
  margin: 0;
  font-size: 13px;
  color: var(--text-secondary);
}

@media (max-width: 768px) {
  .restaurants-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
