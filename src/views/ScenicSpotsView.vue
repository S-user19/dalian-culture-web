<script setup lang="ts">
import CultureCard from '../components/CultureCard.vue'

const scenicSpots = [
  {
    title: '星海广场',
    description: '亚洲最大的城市广场，总占地面积176万平方米。南临黄海，北依会展中心，广场上有华表、千人脚印、音乐喷泉，是大连城市地标。',
    image: 'https://aka.doubaocdn.com/l/MttzvIoel0',
    tag: '城市地标',
  },
  {
    title: '老虎滩海洋公园',
    description: '国家5A级旅游景区，占地118万平方米，拥有极地馆、海兽馆、珊瑚馆、鸟语林等场馆，是展示海洋文化的主题公园。',
    image: 'https://aka.doubaocdn.com/l/2MHvUhxdgX',
    tag: '5A景区',
  },
  {
    title: '金石滩风景区',
    description: '国家级旅游度假区，三面环海，冬暖夏凉。诞生于六亿年前的震旦纪岩石形成了壮丽的奇石景观，被称为"天然地质博物馆"。',
    image: 'https://aka.doubaocdn.com/l/m7cU6UVUPi',
    tag: '国家级度假区',
  },
  {
    title: '滨海路',
    description: '全长30多公里的海滨观光公路，沿途串联起星海湾、傅家庄、棒棰岛、北大桥等景点，是大连最美的自驾与徒步路线。',
    image: 'https://aka.doubaocdn.com/l/3WD2WXVWPg',
    tag: '最美海岸线',
  },
  {
    title: '棒棰岛',
    description: '位于滨海路东段，是一处以山、海、岛、滩为主要景观的风景胜地。三面环山，一面濒海，岛上碧波荡漾，风光旖旎。',
    image: 'https://aka.doubaocdn.com/l/WJ5U2VR7dT',
    tag: '避暑胜地',
  },
  {
    title: '旅顺口风景区',
    description: '国家级风景名胜区，历史悠久，著名的军港所在地。白玉山、东鸡冠山、日俄监狱旧址等见证了近代历史变迁。',
    image: 'https://aka.doubaocdn.com/l/uM5s7xYtk1',
    tag: '历史名城',
  },
]
</script>

<template>
  <div class="scenic-spots-page">
    <section class="page-hero">
      <h1>🏞️ 经典景区</h1>
      <p>山海相依，美景天成，走遍大连必打卡景点</p>
    </section>

    <section class="page-section">
      <div class="container">
        <h2 class="section-title">必游景点推荐</h2>
        <p class="section-subtitle">精选6大经典景区，领略大连滨海风光</p>
        <div class="grid-3">
          <CultureCard
            v-for="spot in scenicSpots"
            :key="spot.title"
            :title="spot.title"
            :description="spot.description"
            :image="spot.image"
            :tag="spot.tag"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
</style>
