<script setup lang="ts">
import { useAppStore } from '../stores/app'
import WeatherWidget from './WeatherWidget.vue'
import SearchBar from './SearchBar.vue'
import { ref } from 'vue'

const appStore = useAppStore()
const mobileMenuOpen = ref(false)

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
</script>

<template>
  <header class="site-header">
    <!-- 顶部辅助功能区 -->
    <div class="header-top">
      <div class="header-top-inner">
        <WeatherWidget />
        <div class="accessibility-tools">
          <button
            class="tool-btn"
            :class="{ active: appStore.highContrast }"
            @click="appStore.toggleHighContrast"
            aria-label="切换高对比度模式"
            title="高对比度"
          >
            <span>A</span>
          </button>
          <button
            class="tool-btn"
            @click="appStore.setFontSize('large')"
            aria-label="放大字体"
            title="放大字体"
          >
            <span>A+</span>
          </button>
          <button
            class="tool-btn"
            @click="appStore.setFontSize('normal')"
            aria-label="恢复默认字体"
            title="默认字体"
          >
            <span>A</span>
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
  background: linear-gradient(135deg, #0c4a6e 0%, #0369a1 100%);
  color: #fff;
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
}

/* 顶部辅助区 */
.header-top {
  background: rgba(0, 0, 0, 0.15);
  font-size: 13px;
}
.header-top-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 6px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.accessibility-tools {
  display: flex;
  gap: 8px;
}
.tool-btn {
  width: 28px;
  height: 28px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  background: transparent;
  color: #fff;
  border-radius: 50%;
  cursor: pointer;
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
}
.tool-btn:hover,
.tool-btn.active {
  background: rgba(255, 255, 255, 0.2);
}

/* 主导航区 */
.header-main {
  padding: 16px 0;
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
  color: #fff;
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
  background: #fff;
  border-radius: 2px;
}

/* 导航菜单 */
.main-nav {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}
.main-nav-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  overflow-x: auto;
}
.nav-link {
  padding: 12px 20px;
  color: rgba(255, 255, 255, 0.85);
  text-decoration: none;
  font-size: 15px;
  white-space: nowrap;
  border-bottom: 3px solid transparent;
  transition: all 0.2s;
}
.nav-link:hover {
  color: #fff;
  background: rgba(255, 255, 255, 0.08);
}
.nav-link.active {
  color: #fff;
  border-bottom-color: #fbbf24;
  font-weight: 600;
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
