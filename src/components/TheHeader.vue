<script setup lang="ts">
import { useAppStore } from '../stores/app'
import WeatherWidget from './WeatherWidget.vue'
import SearchBar from './SearchBar.vue'
import { ref } from 'vue'

const appStore = useAppStore()
const mobileMenuOpen = ref(false)
const a11yPanelOpen = ref(false)
const isReading = ref(false)

const navItems = [
  { path: '/', label: '首页' },
  { path: '/city-intro', label: '城市介绍' },
  { path: '/culture-events', label: '文化活动' },
  { path: '/city-services', label: '城市服务' },
  { path: '/scenic-spots', label: '经典景区' },
  { path: '/travel-guides', label: '游记攻略' },
  { path: '/food-guide', label: '特色美食' },
  { path: '/traffic', label: '交通路线' },
]

const setA11yFont = (size: 'normal' | 'large' | 'xlarge') => {
  appStore.setFontSize(size)
}

const readPage = () => {
  if (!('speechSynthesis' in window)) {
    alert('您的浏览器不支持语音朗读功能')
    return
  }
  if (isReading.value) {
    window.speechSynthesis.cancel()
    isReading.value = false
  } else {
    // 只朗读页面主要内容区，排除页眉、页脚、无障碍工具栏
    const mainContent = document.querySelector('.main-content')
    if (mainContent) {
      const text = mainContent.innerText.substring(0, 1000)
      window.speechSynthesis.cancel()
      const utterance = new SpeechSynthesisUtterance(text)
      utterance.lang = 'zh-CN'
      utterance.rate = 1.0
      utterance.onend = () => { isReading.value = false }
      window.speechSynthesis.speak(utterance)
      isReading.value = true
    }
  }
}
</script>

<template>
  <header class="site-header">
    <!-- 无障碍工具栏（点击按钮后展开） -->
    <div v-if="a11yPanelOpen" class="a11y-panel">
      <div class="a11y-inner">
        <button class="a11y-btn" @click="setA11yFont('normal')" :class="{ active: appStore.fontSize === 'normal' }" title="默认字体">A 默认</button>
        <button class="a11y-btn" @click="setA11yFont('large')" :class="{ active: appStore.fontSize === 'large' }" title="大字体">A+ 放大</button>
        <button class="a11y-btn" @click="setA11yFont('xlarge')" :class="{ active: appStore.fontSize === 'xlarge' }" title="超大字体">A++ 超大</button>
        <span class="a11y-divider"></span>
        <button class="a11y-btn" :class="{ active: appStore.highContrast }" @click="appStore.toggleHighContrast" title="高对比度">对比度</button>
        <button class="a11y-btn" :class="{ active: appStore.plainTextMode }" @click="appStore.togglePlainTextMode" title="纯文本模式">纯文本</button>
        <button class="a11y-btn" :class="{ active: appStore.largeSubtitle }" @click="appStore.toggleLargeSubtitle" title="大字幕">大字幕</button>
        <span class="a11y-divider"></span>
        <button class="a11y-btn" :class="{ active: appStore.largeCursor }" @click="appStore.toggleLargeCursor" title="放大鼠标">大鼠标</button>
        <button class="a11y-btn" :class="{ active: isReading }" title="页面朗读" @click="readPage">🔊 {{ isReading ? '停止' : '朗读' }}</button>
        <span class="a11y-close" @click="a11yPanelOpen = false">✕ 关闭</span>
      </div>
    </div>

    <!-- 顶部辅助功能区 -->
    <div class="header-top">
      <div class="header-top-inner">
        <WeatherWidget />
        <div class="header-right">
          <button class="a11y-entry" @click="a11yPanelOpen = !a11yPanelOpen">
            <span class="a11y-icon">♿</span>
            无障碍浏览
          </button>
        </div>
      </div>
    </div>

    <!-- 主导航区 -->
    <div class="header-main">
      <div class="header-main-inner">
        <!-- Logo -->
        <router-link to="/" class="logo">
          <span class="logo-icon">🌊</span>
          <span class="logo-text">大连文化宣传网</span>
        </router-link>

        <!-- 搜索栏 -->
        <SearchBar />

        <!-- 移动端菜单按钮 -->
        <button
          class="mobile-menu-btn"
          @click="mobileMenuOpen = !mobileMenuOpen; appStore.toggleSidebar()"
          aria-label="打开菜单"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </div>

    <!-- 导航菜单 -->
    <nav class="main-nav" :class="{ open: mobileMenuOpen }" aria-label="主导航">
      <div class="main-nav-inner">
        <router-link
          v-for="item in navItems"
          :key="item.path"
          :to="item.path"
          class="nav-link"
          active-class="active"
          exact-active-class="active"
        >
          {{ item.label }}
        </router-link>
      </div>
    </nav>
  </header>
</template>

<style scoped>
.site-header {
  background: #fff;
  color: #1e293b;
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.08);
}

/* 顶部辅助区 */
.header-top {
  background: #e0f2fe;
  font-size: 13px;
  border-bottom: 1px solid #bae6fd;
}
.header-top-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 6px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.header-right {
  display: flex;
  align-items: center;
  gap: 12px;
}
.a11y-entry {
  display: flex;
  align-items: center;
  gap: 6px;
  background: #fff;
  border: 1px solid #bae6fd;
  color: #1e293b;
  padding: 5px 14px;
  border-radius: 20px;
  cursor: pointer;
  font-size: 13px;
  transition: all 0.2s;
}
.a11y-entry:hover {
  background: #f0f9ff;
  border-color: #0284c7;
}
.a11y-icon {
  font-size: 14px;
}
.header-top-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 6px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.header-right {
  display: flex;
  align-items: center;
  gap: 12px;
}
.a11y-entry {
  display: flex;
  align-items: center;
  gap: 6px;
  background: #fff;
  border: 1px solid #bae6fd;
  color: #1e293b;
  padding: 5px 14px;
  border-radius: 20px;
  cursor: pointer;
  font-size: 13px;
  transition: all 0.2s;
}
.a11y-entry:hover {
  background: #f0f9ff;
}
.a11y-icon {
  font-size: 14px;
}

/* 无障碍展开面板 */
.a11y-panel {
  background: #1e293b;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}
.a11y-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 8px 20px;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  flex-wrap: wrap;
}
.a11y-btn {
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.15);
  color: #e2e8f0;
  padding: 5px 12px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 13px;
  transition: all 0.2s;
  white-space: nowrap;
}
.a11y-btn:hover,
.a11y-btn.active {
  background: rgba(14, 165, 233, 0.3);
  border-color: #0ea5e9;
  color: #fff;
}
.a11y-divider {
  width: 1px;
  height: 20px;
  background: rgba(255, 255, 255, 0.15);
  margin: 0 4px;
}
.a11y-close {
  margin-left: auto;
  background: rgba(239, 68, 68, 0.2);
  border: 1px solid rgba(239, 68, 68, 0.3);
  color: #fca5a5;
  padding: 5px 12px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 13px;
  transition: all 0.2s;
}
.a11y-close:hover {
  background: rgba(239, 68, 68, 0.3);
  color: #fff;
}
.a11y-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 13px;
}
.a11y-label {
  color: rgba(255, 255, 255, 0.9);
  font-weight: 500;
}
.a11y-btn {
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #fff;
  padding: 4px 12px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 13px;
  transition: all 0.2s;
}
.a11y-btn:hover,
.a11y-btn.active {
  background: rgba(255, 255, 255, 0.25);
}
.a11y-close {
  margin-left: auto;
  background: transparent;
  border: none;
  color: rgba(255, 255, 255, 0.7);
  cursor: pointer;
  font-size: 13px;
  text-decoration: underline;
}

/* 主导航区 */
.header-main {
  padding: 16px 0;
  background: #fff;
}
.header-main-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  align-items: center;
  gap: 24px;
}
.logo {
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  color: #0c4a6e;
  flex-shrink: 0;
}
.logo-icon {
  font-size: 28px;
}
.logo-text {
  font-size: 22px;
  font-weight: 700;
  letter-spacing: 1px;
}
.mobile-menu-btn {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 8px;
}
.mobile-menu-btn span {
  width: 24px;
  height: 2px;
  background: #0c4a6e;
  border-radius: 2px;
}

/* 导航菜单 */
.main-nav {
  background: linear-gradient(90deg, #075985 0%, #0369a1 50%, #075985 100%);
  box-shadow: 0 2px 8px rgba(7, 89, 133, 0.3);
}
.main-nav-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  overflow-x: auto;
}
.nav-link {
  padding: 14px 24px;
  color: rgba(255, 255, 255, 0.9);
  text-decoration: none;
  font-size: 15px;
  white-space: nowrap;
  border-bottom: 3px solid transparent;
  transition: all 0.2s;
}
.nav-link:hover {
  color: #fff;
  background: rgba(255, 255, 255, 0.1);
}
.nav-link.active {
  color: #fff;
  border-bottom-color: #fbbf24;
  font-weight: 600;
  background: rgba(255, 255, 255, 0.1);
}

/* 响应式 */
@media (max-width: 768px) {
  .header-main-inner {
    flex-wrap: wrap;
  }
  .search-bar,
  .search-bar :deep(.search-bar) {
    order: 3;
    max-width: 100%;
  }
  .mobile-menu-btn {
    display: flex;
    margin-left: auto;
  }
  .main-nav {
    display: none;
  }
  .main-nav.open {
    display: block;
  }
  .main-nav-inner {
    flex-direction: column;
  }
  .nav-link {
    padding: 14px 20px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }
}
</style>
