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
:root {
  --primary: #0369a1;
  --primary-dark: #075985;
  --primary-light: #0ea5e9;
  --ocean-deep: #0c4a6e;
  --ocean-mid: #0369a1;
  --ocean-light: #38bdf8;
  --ocean-pale: #bae6fd;
  --accent: #f59e0b;
  --text-primary: #1e293b;
  --text-secondary: #64748b;
  --bg-light: #f0f9ff;
  --bg-white: #ffffff;
  --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.08);
  --shadow-md: 0 4px 16px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 8px 30px rgba(0, 0, 0, 0.12);
  --radius: 12px;
  --radius-lg: 16px;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC',
    'Hiragino Sans GB', 'Microsoft YaHei', sans-serif;
  color: var(--text-primary);
  background: linear-gradient(180deg, #e0f2fe 0%, #f0f9ff 300px);
  line-height: 1.6;
}

/* 无障碍功能 - 字体大小 */
html.font-normal { zoom: 1; }
html.font-large { zoom: 1.15; }
html.font-xlarge { zoom: 1.3; }

/* 无障碍功能 - 高对比度模式 */
html.high-contrast {
  filter: none;
}
html.high-contrast body {
  background: #000 !important;
  color: #fff !important;
}
html.high-contrast .page-hero,
html.high-contrast .header-nav,
html.high-contrast .site-footer {
  background: #000 !important;
  color: #fff !important;
}
html.high-contrast .page-hero h1,
html.high-contrast .page-hero p {
  color: #fff !important;
  text-shadow: none !important;
}
html.high-contrast .culture-card,
html.high-contrast .service-card,
html.high-contrast .data-card {
  background: #1a1a1a !important;
  border-color: #fff !important;
  color: #fff !important;
}
html.high-contrast .section-title {
  color: #ffff00 !important;
}
html.high-contrast a {
  color: #ffff00 !important;
}

/* 无障碍功能 - 纯文本模式 */
html.plain-text-mode img,
html.plain-text-mode .page-hero,
html.plain-text-mode .culture-card-image,
html.plain-text-mode .hero-bg {
  display: none !important;
}
html.plain-text-mode .page-hero {
  background: #f0f9ff !important;
  color: #1e293b !important;
  padding: 40px 24px;
}
html.plain-text-mode .page-hero h1,
html.plain-text-mode .page-hero p {
  color: #1e293b !important;
  text-shadow: none !important;
}

/* 无障碍功能 - 大字幕 */
html.large-subtitle .page-hero p,
html.large-subtitle .section-subtitle,
html.large-subtitle .page-hero-subtitle {
  font-size: 22px !important;
  line-height: 1.6 !important;
}

/* 无障碍功能 - 大鼠标 */
html.large-cursor * {
  cursor: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='56' height='56'><path d='M6 3 L6 40 L14 31 L20 42 L25 40 L19 29 L30 29 Z' fill='white' stroke='black' stroke-width='2.5'/></svg>") 7 7, auto !important;
}

.app-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
.main-content {
  flex: 1;
}
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}
.page-section {
  padding: 60px 0;
}
.bg-light {
  background: linear-gradient(180deg, #e0f2fe 0%, #bae6fd 100%);
}
.section-header {
  text-align: center;
  margin-bottom: 40px;
}
.section-title {
  font-size: 32px;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 8px;
  background: linear-gradient(135deg, #0284c7, #0369a1);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.section-subtitle {
  font-size: 16px;
  color: var(--text-secondary);
}
.page-hero {
  background: linear-gradient(135deg, #0c4a6e 0%, #075985 50%, #0ea5e9 100%);
  color: white;
  padding: 80px 24px;
  text-align: center;
  position: relative;
  overflow: hidden;
}
.page-hero::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 5px;
  background: linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.4) 50%, transparent 100%);
}
.page-hero h1 {
  font-size: 40px;
  font-weight: 700;
  margin-bottom: 12px;
  position: relative;
  z-index: 1;
  text-shadow: 0 2px 20px rgba(0, 0, 0, 0.4);
  display: inline-flex;
  align-items: center;
  gap: 14px;
}
.page-hero p {
  font-size: 18px;
  opacity: 0.95;
  position: relative;
  z-index: 1;
  margin-top: 8px;
  letter-spacing: 0.8px;
  text-shadow: 0 1px 10px rgba(0, 0, 0, 0.3);
}
</style>
