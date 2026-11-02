<script setup lang="ts">
import CultureCard from '../components/CultureCard.vue'

const heroSlides = [
  {
    title: '浪漫之都 时尚大连',
    subtitle: '依山傍海，风光秀丽，一座充满魅力的滨海城市',
    bg: 'linear-gradient(135deg, #0c4a6e 0%, #0369a1 50%, #0ea5e9 100%)',
  },
]

const quickLinks = [
  { icon: '🏞️', label: '经典景区', desc: '星海广场、老虎滩', path: '/scenic-spots' },
  { icon: '🦀', label: '特色美食', desc: '海鲜大餐、大连樱桃', path: '/food-guide' },
  { icon: '🎭', label: '文化活动', desc: '赏槐会、服装节', path: '/culture-events' },
  { icon: '🚇', label: '交通路线', desc: '地铁、公交、有轨电车', path: '/traffic' },
]

const featuredSpots = [
  {
    title: '星海广场',
    description: '亚洲最大的城市广场，面朝黄海，是大连的城市名片。',
    image: 'https://aka.doubaocdn.com/l/MttzvIoel0',
    tag: '必游打卡',
    link: '/scenic-spots',
  },
  {
    title: '老虎滩海洋公园',
    description: '国家5A级景区，近距离接触海洋生物，精彩表演不容错过。',
    image: 'https://aka.doubaocdn.com/l/2MHvUhxdgX',
    tag: '5A景区',
    link: '/scenic-spots',
  },
  {
    title: '金石滩',
    description: '国家级旅游度假区，海岸地质奇观，被称为"天然地质博物馆"。',
    image: 'https://aka.doubaocdn.com/l/m7cU6UVUPi',
    tag: '度假胜地',
    link: '/scenic-spots',
  },
]

const newsEvents = [
  {
    title: '大连滨海路徒步季',
    description: '每年春秋季，滨海路沿线风景如画，是徒步爱好者的天堂。',
    image: 'https://aka.doubaocdn.com/l/DKPD2Ucmrt',
    tag: '四季皆宜',
    link: '/culture-events',
  },
  {
    title: '旅顺樱花节',
    description: '四月龙王塘樱花园百花盛开，浪漫樱花海吸引万千游客。',
    image: 'https://aka.doubaocdn.com/l/lUoeg9pSfv',
    tag: '春季限定',
    link: '/culture-events',
  },
]
</script>

<template>
  <div class="home-page">
    <!-- 轮播Hero区 -->
    <section class="hero-banner" :style="{ background: heroSlides[0].bg }">
      <div class="hero-content">
        <h1>{{ heroSlides[0].title }}</h1>
        <p>{{ heroSlides[0].subtitle }}</p>
        <div class="hero-buttons">
          <router-link to="/scenic-spots" class="btn btn-primary">探索景区</router-link>
          <router-link to="/travel-guides" class="btn btn-outline">旅游攻略</router-link>
        </div>
      </div>
    </section>

    <!-- 快捷入口 -->
    <section class="quick-links-section">
      <div class="container">
        <div class="quick-links-grid">
          <router-link
            v-for="item in quickLinks"
            :key="item.label"
            :to="item.path"
            class="quick-link-card"
          >
            <span class="quick-icon">{{ item.icon }}</span>
            <span class="quick-label">{{ item.label }}</span>
            <span class="quick-desc">{{ item.desc }}</span>
          </router-link>
        </div>
      </div>
    </section>

    <!-- 精选景区 -->
    <section class="page-section">
      <div class="container">
        <h2 class="section-title">🏞️ 精选景区</h2>
        <p class="section-subtitle">感受大连的山海之美</p>
        <div class="grid-3">
          <CultureCard
            v-for="spot in featuredSpots"
            :key="spot.title"
            :title="spot.title"
            :description="spot.description"
            :image="spot.image"
            :tag="spot.tag"
            :link="spot.link"
          />
        </div>
      </div>
    </section>

    <!-- 文化活动 -->
    <section class="page-section bg-light">
      <div class="container">
        <h2 class="section-title">🎭 近期文化活动</h2>
        <p class="section-subtitle">参与大连精彩的文化盛宴</p>
        <div class="grid-2">
          <CultureCard
            v-for="event in newsEvents"
            :key="event.title"
            :title="event.title"
            :description="event.description"
            :image="event.image"
            :tag="event.tag"
            :link="event.link"
          />
        </div>
      </div>
    </section>

    <!-- 城市数据 -->
    <section class="city-stats">
      <div class="container">
        <div class="stats-grid">
          <div class="stat-item">
            <span class="stat-number">600+</span>
            <span class="stat-label">公里海岸线</span>
          </div>
          <div class="stat-item">
            <span class="stat-number">200+</span>
            <span class="stat-label">处旅游景点</span>
          </div>
          <div class="stat-item">
            <span class="stat-number">100</span>
            <span class="stat-label">年有轨电车历史</span>
          </div>
          <div class="stat-item">
            <span class="stat-number">10℃</span>
            <span class="stat-label">年平均气温</span>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.hero-banner {
  padding: 100px 20px;
  text-align: center;
  color: #fff;
}
.hero-content h1 {
  font-size: 48px;
  margin-bottom: 16px;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}
.hero-content p {
  font-size: 18px;
  opacity: 0.95;
  margin-bottom: 32px;
}
.hero-buttons {
  display: flex;
  gap: 16px;
  justify-content: center;
}
.btn {
  padding: 12px 32px;
  border-radius: 24px;
  text-decoration: none;
  font-size: 15px;
  font-weight: 500;
  transition: all 0.2s;
}
.btn-primary {
  background: #fbbf24;
  color: #78350f;
}
.btn-primary:hover {
  background: #f59e0b;
  transform: translateY(-2px);
}
.btn-outline {
  border: 2px solid #fff;
  color: #fff;
}
.btn-outline:hover {
  background: rgba(255, 255, 255, 0.15);
}

.quick-links-section {
  padding: 40px 0;
  margin-top: -40px;
  position: relative;
  z-index: 2;
}
.quick-links-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}
.quick-link-card {
  background: #fff;
  padding: 24px;
  border-radius: 12px;
  text-align: center;
  text-decoration: none;
  color: var(--text-primary);
  box-shadow: var(--shadow-md);
  transition: transform 0.2s;
}
.quick-link-card:hover {
  transform: translateY(-4px);
}
.quick-icon {
  font-size: 36px;
  display: block;
  margin-bottom: 8px;
}
.quick-label {
  display: block;
  font-weight: 600;
  font-size: 16px;
  margin-bottom: 4px;
}
.quick-desc {
  font-size: 13px;
  color: var(--text-secondary);
}

.bg-light {
  background: #f1f5f9;
}

.city-stats {
  padding: 48px 0;
  background: linear-gradient(135deg, #0c4a6e 0%, #0369a1 100%);
  color: #fff;
}
.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  text-align: center;
}
.stat-number {
  display: block;
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 4px;
  color: #fbbf24;
}
.stat-label {
  font-size: 14px;
  opacity: 0.9;
}

@media (max-width: 768px) {
  .hero-banner {
    padding: 60px 20px;
  }
  .hero-content h1 {
    font-size: 30px;
  }
  .quick-links-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
