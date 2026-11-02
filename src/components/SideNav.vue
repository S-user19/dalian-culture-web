<script setup lang="ts">
import { useAppStore } from '../stores/app'

const appStore = useAppStore()

const sideNavItems = [
  { path: '/', label: '首页', icon: '🏠' },
  { path: '/city-intro', label: '城市介绍', icon: '🏙️' },
  { path: '/culture-events', label: '文化活动', icon: '🎭' },
  { path: '/city-services', label: '城市服务', icon: '🛎️' },
  { path: '/scenic-spots', label: '经典景区', icon: '🏞️' },
  { path: '/travel-guides', label: '游记攻略', icon: '📝' },
  { path: '/food-guide', label: '特色美食', icon: '🦀' },
  { path: '/traffic', label: '交通路线', icon: '🚇' },
]
</script>

<template>
  <aside class="side-nav" :class="{ open: appStore.sidebarVisible }" aria-label="侧边导航">
    <div class="side-nav-header">
      <h3>导航菜单</h3>
      <button class="close-btn" @click="appStore.closeSidebar()" aria-label="关闭菜单">×</button>
    </div>
    <ul class="side-nav-list">
      <li v-for="item in sideNavItems" :key="item.path">
        <router-link
          :to="item.path"
          class="side-nav-link"
          active-class="active"
          exact-active-class="active"
          @click="appStore.closeSidebar()"
        >
          <span class="nav-icon">{{ item.icon }}</span>
          <span>{{ item.label }}</span>
        </router-link>
      </li>
    </ul>
  </aside>
  <div
    v-if="appStore.sidebarVisible"
    class="sidebar-mask"
    @click="appStore.closeSidebar()"
  ></div>
</template>

<style scoped>
.side-nav {
  position: fixed;
  top: 0;
  left: -280px;
  width: 280px;
  height: 100vh;
  background: #fff;
  z-index: 1001;
  transition: left 0.3s ease;
  box-shadow: 2px 0 12px rgba(0, 0, 0, 0.1);
  overflow-y: auto;
}
.side-nav.open {
  left: 0;
}
.side-nav-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid #eee;
}
.side-nav-header h3 {
  margin: 0;
  font-size: 18px;
  color: #333;
}
.close-btn {
  width: 32px;
  height: 32px;
  border: none;
  background: #f5f5f5;
  border-radius: 50%;
  font-size: 20px;
  cursor: pointer;
  color: #666;
}
.side-nav-list {
  list-style: none;
  padding: 12px 0;
  margin: 0;
}
.side-nav-link {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 20px;
  color: #555;
  text-decoration: none;
  transition: all 0.2s;
}
.side-nav-link:hover {
  background: #f0f7ff;
  color: #0369a1;
}
.side-nav-link.active {
  background: #e0f2fe;
  color: #0369a1;
  font-weight: 600;
  border-right: 3px solid #0369a1;
}
.nav-icon {
  font-size: 20px;
}
.sidebar-mask {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 1000;
}
</style>
