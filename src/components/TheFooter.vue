<script setup lang="ts">
import { useAppStore } from '../stores/app'

const appStore = useAppStore()

const footerLinks = [
  {
    title: '快速导航',
    links: [
      { label: '城市介绍', path: '/city-intro' },
      { label: '文化活动', path: '/culture-events' },
      { label: '经典景区', path: '/scenic-spots' },
      { label: '特色美食', path: '/food-guide' },
    ],
  },
  {
    title: '便民服务',
    links: [
      { label: '城市服务', path: '/city-services' },
      { label: '交通路线', path: '/traffic' },
      { label: '游记攻略', path: '/travel-guides' },
    ],
  },
  {
    title: '关于我们',
    links: [
      { label: '网站简介', path: '/' },
      { label: '联系方式', path: '/' },
      { label: '版权声明', path: '/' },
    ],
  },
]
</script>

<template>
  <footer class="site-footer">
    <div class="footer-inner">
      <div class="footer-grid">
        <div class="footer-col footer-brand">
          <div class="footer-logo">
            <span class="footer-logo-icon">🌊</span>
            <span class="footer-logo-text">大连文化宣传网</span>
          </div>
          <p class="footer-desc">
            浪漫之都，时尚大连。带您领略滨海城市的独特魅力与文化底蕴。
          </p>
        </div>

        <div v-for="col in footerLinks" :key="col.title" class="footer-col">
          <h4 class="footer-col-title">{{ col.title }}</h4>
          <ul class="footer-links">
            <li v-for="link in col.links" :key="link.label">
              <router-link :to="link.path">{{ link.label }}</router-link>
            </li>
          </ul>
        </div>
      </div>

      <div class="footer-bottom">
        <p>© {{ appStore.currentYear }} 大连文化宣传网 · Web智能化课程小组作业 · 仅供学习使用</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.site-footer {
  background: #0c4a6e;
  color: rgba(255, 255, 255, 0.8);
  margin-top: 60px;
}
.footer-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 48px 20px 24px;
}
.footer-grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 40px;
  margin-bottom: 32px;
}
.footer-logo {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 16px;
}
.footer-logo-icon {
  font-size: 28px;
}
.footer-logo-text {
  font-size: 20px;
  font-weight: 700;
  color: #fff;
}
.footer-desc {
  font-size: 14px;
  line-height: 1.8;
  max-width: 300px;
}
.footer-col-title {
  color: #fff;
  font-size: 16px;
  margin-bottom: 16px;
  font-weight: 600;
}
.footer-links {
  list-style: none;
  padding: 0;
  margin: 0;
}
.footer-links li {
  margin-bottom: 10px;
}
.footer-links a {
  color: rgba(255, 255, 255, 0.75);
  text-decoration: none;
  font-size: 14px;
  transition: color 0.2s;
}
.footer-links a:hover {
  color: #fbbf24;
}
.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 20px;
  text-align: center;
  font-size: 13px;
  opacity: 0.7;
}

@media (max-width: 768px) {
  .footer-grid {
    grid-template-columns: 1fr 1fr;
    gap: 24px;
  }
  .footer-brand {
    grid-column: 1 / -1;
  }
}
</style>
