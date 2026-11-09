<script setup lang="ts">
import { ref } from 'vue'
import { useAppStore } from '../stores/app'
import DetailModal from './DetailModal.vue'

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
      { label: '网站简介', isModal: true, type: 'about' },
      { label: '联系方式', isModal: true, type: 'contact' },
      { label: '版权声明', isModal: true, type: 'copyright' },
    ],
  },
]

const modalContent: Record<string, { title: string; content: string; tag: string }> = {
  about: {
    title: '网站简介',
    tag: '关于我们',
    content: '大连文化宣传网是一个以推广大连城市文化与旅游资源为主题的综合性网站。\n\n【网站定位】\n本网站是Web智能化课程的小组作业项目，旨在通过现代Web技术展示大连的城市魅力。\n\n【网站内容】\n• 城市介绍：了解大连的历史沿革与城市概况\n• 文化活动：赏槐会、啤酒节、服装节等节庆活动\n• 经典景区：星海广场、老虎滩、金石滩等景点介绍\n• 特色美食：海鲜、烧烤、大连老菜等美食推荐\n• 游记攻略：实用的旅游路线与游玩建议\n• 交通路线：地铁、公交、机场等交通指南\n\n【技术栈】\nVue 3 + Vite + TypeScript + Pinia + Vue Router\n\n我们希望通过这个网站，让更多人了解大连、爱上大连！'
  },
  contact: {
    title: '联系方式',
    tag: '关于我们',
    content: '【联系我们】\n\n📧 邮箱：contact@dalian-culture.edu.cn\n📱 电话：0411-88888888\n📍 地址：辽宁省大连市甘井子区\n\n【反馈建议】\n如果您对网站有任何建议或意见，欢迎通过以上方式联系我们。\n\n【合作交流】\n我们欢迎各类文化旅游机构、媒体平台进行合作交流。\n\n【备注】\n本网站为课程作业项目，联系方式仅作演示用途。'
  },
  copyright: {
    title: '版权声明',
    tag: '关于我们',
    content: '【版权声明】\n\n© 2026 大连文化宣传网\n\n1. 本网站为Web智能化课程小组作业项目，仅供学习交流使用，不得用于商业用途。\n\n2. 网站中使用的图片素材来源于网络，版权归原作者所有。如有侵权请联系我们删除。\n\n3. 网站内容（文字介绍、页面设计等）为课程作业成果，未经许可不得转载或抄袭。\n\n4. 本网站展示的信息仅供参考，具体旅游、服务信息请以官方发布为准。\n\n5. 访问本网站即表示您同意遵守以上声明。\n\n感谢您的理解与支持！'
  }
}

const selectedModal = ref<{ title: string; content: string; tag: string } | null>(null)

const openModal = (type: string) => {
  const item = modalContent[type]
  if (item) {
    selectedModal.value = item
  }
}
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
              <router-link v-if="!link.isModal" :to="link.path">{{ link.label }}</router-link>
              <a v-else class="footer-modal-link" @click="openModal(link.type!)">{{ link.label }}</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="footer-bottom">
        <p>© {{ appStore.currentYear }} 大连文化宣传网 · Web智能化课程小组作业 · 仅供学习使用</p>
      </div>
    </div>

    <DetailModal
      :visible="!!selectedModal"
      :title="selectedModal?.title || ''"
      :image="''"
      :content="selectedModal?.content || ''"
      :tag="selectedModal?.tag || ''"
      @close="selectedModal = null"
    />
  </footer>
</template>

<style scoped>
.site-footer {
  background: linear-gradient(135deg, #075985 0%, #0369a1 100%);
  color: rgba(255, 255, 255, 0.9);
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
  color: #38bdf8;
}
.footer-modal-link {
  color: rgba(255, 255, 255, 0.75);
  text-decoration: none;
  font-size: 14px;
  transition: color 0.2s;
  cursor: pointer;
}
.footer-modal-link:hover {
  color: #38bdf8;
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
