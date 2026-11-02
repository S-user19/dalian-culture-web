<script setup lang="ts">
import TheHeader from './components/TheHeader.vue'
import TheFooter from './components/TheFooter.vue'
import SideNav from './components/SideNav.vue'
import IntelligentChat from './components/IntelligentChat.vue'
</script>

<template>
  <div class="app-container">
    <TheHeader />
    <SideNav />
    <main class="main-content">
      <router-view />
    </main>
    <TheFooter />
    <IntelligentChat />
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC',
    'Hiragino Sans GB', 'Microsoft YaHei', sans-serif;
  color: #1e293b;
  background: #f8fafc;
  line-height: 1.6;
}
.app-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
.main-content {
  flex: 1;
}
</style>
