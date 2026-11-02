<script setup lang="ts">
import CultureCard from '../components/CultureCard.vue'

const events = [
  {
    title: '大连赏槐会',
    description: '每年5月下旬举办，以槐花为媒介，融合旅游、文化、经贸活动，是大连重要的国际旅游节庆。',
    image: 'https://aka.doubaocdn.com/l/MttzvIoel0',
    tag: '每年5月',
  },
  {
    title: '中国国际啤酒节',
    description: '每年夏季在星海广场举办，是中国最大的啤酒节，汇聚国内外知名啤酒品牌，狂欢盛宴。',
    image: 'https://aka.doubaocdn.com/l/r38SgMEtWA',
    tag: '每年7月',
  },
  {
    title: '大连国际服装节',
    description: '创办于1988年，是集经贸、文化、旅游为一体的国际性服饰文化盛会，享誉海内外。',
    image: 'https://aka.doubaocdn.com/l/3WD2WXVWPg',
    tag: '每年9月',
  },
  {
    title: '旅顺樱花节',
    description: '四月龙王塘樱花园樱花盛开，数千株樱花竞相绽放，浪漫花海吸引无数游客打卡。',
    image: 'https://p3-doubao-search-sign.byteimg.com/tos-cn-i-be4g95zd3a/934108666284867663~tplv-be4g95zd3a-image.jpeg?lk3s=feb11e32&x-expires=1809168790&x-signature=tcTZjACOPACTkj4VuumXhmDZels%3D',
    tag: '每年4月',
  },
  {
    title: '大连国际沙滩文化节',
    description: '夏季金石滩沙滩盛会，沙滩运动、音乐演出、美食嘉年华，尽享海滨夏日激情。',
    image: 'https://aka.doubaocdn.com/l/m7cU6UVUPi',
    tag: '每年6-8月',
  },
  {
    title: '冬季温泉滑雪节',
    description: '冬季限定，旅顺温泉、安波温泉滑雪，体验大连冬日的别样温暖与激情。',
    image: 'https://aka.doubaocdn.com/l/SWHh9IqlMl',
    tag: '每年12-2月',
  },
]
</script>

<template>
  <div class="culture-events-page">
    <section class="page-hero">
      <h1>🎭 文化活动</h1>
      <p>四季有节，季季有会，感受大连的文化脉搏</p>
    </section>

    <section class="page-section">
      <div class="container">
        <h2 class="section-title">品牌节庆活动</h2>
        <p class="section-subtitle">大连四季文旅节庆一览</p>
        <div class="grid-3">
          <CultureCard
            v-for="event in events"
            :key="event.title"
            :title="event.title"
            :description="event.description"
            :image="event.image"
            :tag="event.tag"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
</style>
