<script setup lang="ts">
import CultureCard from '../components/CultureCard.vue'

const quickLinks = [
  { 
    label: '经典景区', 
    desc: '星海广场、老虎滩', 
    path: '/scenic-spots',
    color: '#3b82f6',
    bgColor: '#eff6ff',
  },
  { 
    label: '特色美食', 
    desc: '海鲜大餐、大连樱桃', 
    path: '/food-guide',
    color: '#f97316',
    bgColor: '#fff7ed',
  },
  { 
    label: '文化活动', 
    desc: '赏槐会、服装节', 
    path: '/culture-events',
    color: '#8b5cf6',
    bgColor: '#f5f3ff',
  },
  { 
    label: '交通路线', 
    desc: '地铁、公交、有轨电车', 
    path: '/traffic',
    color: '#10b981',
    bgColor: '#ecfdf5',
  },
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
    image: 'https://aka.doubaocdn.com/l/3WD2WXVWPg',
    tag: '四季皆宜',
    link: '/culture-events',
  },
  {
    title: '旅顺樱花节',
    description: '四月龙王塘樱花园百花盛开，浪漫樱花海吸引万千游客。',
    image: 'https://p3-doubao-search-sign.byteimg.com/tos-cn-i-be4g95zd3a/934108666284867663~tplv-be4g95zd3a-image.jpeg?lk3s=feb11e32&x-expires=1809168790&x-signature=tcTZjACOPACTkj4VuumXhmDZels%3D',
    tag: '春季限定',
    link: '/culture-events',
  },
]
</script>

<template>
  <div class="home-page">
    <!-- Hero区：真实背景图 -->
    <section class="hero-banner">
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <h1>浪漫之都 时尚大连</h1>
        <p>依山傍海，风光秀丽，一座充满魅力的滨海城市</p>
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
            <div class="quick-icon-wrap" :style="{ background: item.bgColor }">
              <!-- 经典景区：山和海图标 -->
              <svg v-if="item.label === '经典景区'" class="quick-svg" viewBox="0 0 24 24" fill="none" :style="{ color: item.color }">
                <path d="M3 20l5-8 4 5 3-4 6 7H3z" fill="currentColor" opacity="0.9"/>
                <circle cx="17" cy="6" r="2.5" fill="currentColor" opacity="0.7"/>
              </svg>
              <!-- 特色美食：餐具图标 -->
              <svg v-else-if="item.label === '特色美食'" class="quick-svg" viewBox="0 0 24 24" fill="none" :style="{ color: item.color }">
                <path d="M7 2v20M7 2c-2 0-3 2-3 5s1 5 3 5M7 12c2 0 3-2 3-5s-1-5-3-5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                <path d="M17 2v10M17 12c0 3-2 5-4 5v5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
              </svg>
              <!-- 文化活动：面具图标 -->
              <svg v-else-if="item.label === '文化活动'" class="quick-svg" viewBox="0 0 24 24" fill="none" :style="{ color: item.color }">
                <path d="M12 2C7 2 3 6 3 11c0 6 4 11 9 11s9-5 9-11c0-5-4-9-9-9z" stroke="currentColor" stroke-width="2"/>
                <circle cx="9" cy="10" r="1.5" fill="currentColor"/>
                <circle cx="15" cy="10" r="1.5" fill="currentColor"/>
                <path d="M9 15c1 1 5 1 6 0" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
              </svg>
              <!-- 交通路线：地铁图标 -->
              <svg v-else class="quick-svg" viewBox="0 0 24 24" fill="none" :style="{ color: item.color }">
                <rect x="6" y="3" width="12" height="14" rx="3" stroke="currentColor" stroke-width="2"/>
                <circle cx="9" cy="10" r="1" fill="currentColor"/>
                <circle cx="15" cy="10" r="1" fill="currentColor"/>
                <path d="M9 21l-2-3M15 21l2-3" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
              </svg>
            </div>
            <div class="quick-text">
              <span class="quick-label">{{ item.label }}</span>
              <span class="quick-desc">{{ item.desc }}</span>
            </div>
          </router-link>
        </div>
      </div>
    </section>

    <!-- 精选景区 -->
    <section class="page-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">精选景区</h2>
          <p class="section-subtitle">感受大连的山海之美</p>
        </div>
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
        <div class="section-header">
          <h2 class="section-title">文化活动</h2>
          <p class="section-subtitle">参与大连精彩的文化盛宴</p>
        </div>
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
  position: relative;
  padding: 140px 20px 160px;
  text-align: center;
  color: #fff;
  background-image: url('https://aka.doubaocdn.com/l/Z1rJf0ImZh');
  background-size: cover;
  background-position: center;
  overflow: hidden;
}
.hero-banner::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 80px;
  background: linear-gradient(to top, #f0f9ff, transparent);
}
.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(180deg, rgba(2, 60, 110, 0.15) 0%, transparent 40%, rgba(2, 60, 110, 0.25) 100%);
}
.hero-content {
  position: relative;
  z-index: 1;
}
.hero-content h1 {
  font-size: 56px;
  margin-bottom: 16px;
  font-weight: 700;
  letter-spacing: 4px;
  text-shadow: 0 4px 24px rgba(0, 0, 0, 0.5);
}
.hero-content p {
  font-size: 20px;
  opacity: 0.95;
  margin-bottom: 40px;
  letter-spacing: 1px;
  text-shadow: 0 2px 12px rgba(0, 0, 0, 0.4);
}
.hero-buttons {
  display: flex;
  gap: 20px;
  justify-content: center;
}
.btn {
  padding: 14px 40px;
  border-radius: 30px;
  text-decoration: none;
  font-size: 16px;
  font-weight: 600;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.btn-primary {
  background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
  color: #78350f;
  box-shadow: 0 4px 16px rgba(251, 191, 36, 0.4);
}
.btn-primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 24px rgba(251, 191, 36, 0.5);
}
.btn-outline {
  border: 2px solid rgba(255, 255, 255, 0.8);
  color: #fff;
  backdrop-filter: blur(8px);
  background: rgba(255, 255, 255, 0.1);
}
.btn-outline:hover {
  background: rgba(255, 255, 255, 0.2);
  border-color: #fff;
  transform: translateY(-3px);
}

.quick-links-section {
  padding: 0;
  margin-top: -60px;
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
  border-radius: 16px;
  text-decoration: none;
  color: var(--text-primary);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  align-items: center;
  gap: 16px;
  border: 1px solid rgba(255, 255, 255, 0.8);
}
.quick-link-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 16px 40px rgba(14, 165, 233, 0.15);
}
.quick-icon-wrap {
  width: 60px;
  height: 60px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: transform 0.3s;
}
.quick-link-card:hover .quick-icon-wrap {
  transform: scale(1.1);
}
.quick-svg {
  width: 32px;
  height: 32px;
}
.quick-text {
  display: flex;
  flex-direction: column;
}
.quick-label {
  font-weight: 700;
  font-size: 16px;
  margin-bottom: 4px;
}
.quick-desc {
  font-size: 13px;
  color: var(--text-secondary);
}

.grid-3 {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}
.grid-2 {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
}

.city-stats {
  padding: 64px 0;
  background: linear-gradient(135deg, #0c4a6e 0%, #0369a1 50%, #0ea5e9 100%);
  color: #fff;
  position: relative;
  overflow: hidden;
}
.city-stats::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}
.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  text-align: center;
  position: relative;
  z-index: 1;
}
.stat-number {
  display: block;
  font-size: 48px;
  font-weight: 700;
  margin-bottom: 8px;
  background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.stat-label {
  font-size: 15px;
  opacity: 0.9;
}

@media (max-width: 768px) {
  .hero-banner {
    padding: 100px 20px 120px;
  }
  .hero-content h1 {
    font-size: 36px;
    letter-spacing: 2px;
  }
  .quick-links-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .grid-3, .grid-2 {
    grid-template-columns: 1fr;
  }
  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
