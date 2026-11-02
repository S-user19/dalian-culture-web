<script setup lang="ts">
const metroLines = [
  {
    line: '1号线',
    color: '#005bac',
    route: '姚家 — 河口',
    stations: '姚家、大连北站、华南广场、西安路、兴工街、星海广场、大医二院、黑石礁、学苑广场、海事大学、七贤岭、河口',
  },
  {
    line: '2号线',
    color: '#009a44',
    route: '辛寨子 — 海之韵公园',
    stations: '辛寨子、机场、交通大学、西安路、人民广场、青泥洼桥、中山广场、港湾广场、会议中心、海之韵公园',
  },
  {
    line: '3号线',
    color: '#f7941d',
    route: '大连站 — 金石滩 / 开发区',
    stations: '大连站、香炉礁、金家街、泉水、后盐、大连湾、金马路、开发区、金石滩',
  },
  {
    line: '5号线',
    color: '#9c27b0',
    route: '后关 — 虎滩新区',
    stations: '后关、甘北路、梭鱼湾、青泥洼桥、劳动公园、虎滩公园、虎滩新区',
  },
]

const trafficTips = [
  { icon: '🚋', title: '有轨电车201路', desc: '百年历史的有轨电车，复古车厢，是大连独特的城市景观，全程票价2元' },
  { icon: '✈️', title: '周水子国际机场', desc: '开通国内外航线100余条，机场大巴往返市区各主要酒店' },
  { icon: '🚢', title: '大连港客运码头', desc: '有前往烟台、威海、天津等港口的客轮，海上看大连别有风味' },
  { icon: '🚌', title: '快速公交BRT', desc: '从张前北路到兴工街，连接西北郊与市中心，快速便捷' },
]
</script>

<template>
  <div class="traffic-page">
    <section class="page-hero">
      <h1>🚇 交通路线</h1>
      <p>四通八达的交通网络，让您轻松游遍大连</p>
    </section>

    <section class="page-section">
      <div class="container">
        <h2 class="section-title">地铁线路图</h2>
        <p class="section-subtitle">大连地铁现有运营线路一览</p>
        <div class="metro-lines">
          <div v-for="line in metroLines" :key="line.line" class="metro-line-card">
            <div class="line-header">
              <span class="line-badge" :style="{ background: line.color }">{{ line.line }}</span>
              <h3>{{ line.route }}</h3>
            </div>
            <p class="line-stations">{{ line.stations }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="page-section bg-light">
      <div class="container">
        <h2 class="section-title">出行贴士</h2>
        <p class="section-subtitle">这些特色交通方式不要错过</p>
        <div class="tips-grid">
          <div v-for="tip in trafficTips" :key="tip.title" class="tip-card">
            <span class="tip-icon">{{ tip.icon }}</span>
            <h3>{{ tip.title }}</h3>
            <p>{{ tip.desc }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.metro-lines {
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 900px;
  margin: 0 auto;
}
.metro-line-card {
  background: #fff;
  padding: 20px 24px;
  border-radius: 12px;
  box-shadow: var(--shadow-sm);
  border-left: 4px solid var(--primary-light);
}
.line-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 8px;
}
.line-badge {
  padding: 4px 12px;
  color: #fff;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 600;
}
.line-header h3 {
  margin: 0;
  font-size: 16px;
  color: var(--text-primary);
}
.line-stations {
  margin: 0;
  font-size: 13px;
  color: var(--text-secondary);
  line-height: 1.8;
}

.tips-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}
.tip-card {
  background: #fff;
  padding: 24px 20px;
  border-radius: 12px;
  text-align: center;
  box-shadow: var(--shadow-sm);
}
.tip-icon {
  font-size: 36px;
  display: block;
  margin-bottom: 12px;
}
.tip-card h3 {
  margin: 0 0 8px;
  font-size: 16px;
  color: var(--text-primary);
}
.tip-card p {
  margin: 0;
  font-size: 13px;
  color: var(--text-secondary);
  line-height: 1.6;
}

@media (max-width: 768px) {
  .tips-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
