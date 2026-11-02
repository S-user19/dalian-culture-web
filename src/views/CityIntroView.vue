<script setup lang="ts">
const historyTimeline = [
  { year: '先秦时期', event: '大连地区已有人类活动，属于东胡族系。' },
  { year: '秦汉时期', event: '属辽东郡，开始纳入中原王朝版图。' },
  { year: '近代沙俄', event: '1899年沙俄建市，称"达里尼"特别市。' },
  { year: '日本侵占', event: '1905年日俄战争后被日本统治近40年。' },
  { year: '1945年', event: '8月22日大连解放，回到祖国怀抱。' },
  { year: '改革开放', event: '1984年成为首批沿海开放城市，飞速发展。' },
]

const cityFacts = [
  { label: '面积', value: '12574 平方公里' },
  { label: '人口', value: '约 745 万' },
  { label: '地理位置', value: '辽东半岛最南端' },
  { label: '气候', value: '温带季风气候' },
  { label: '市树', value: '槐树' },
  { label: '市花', value: '月季' },
]
</script>

<template>
  <div class="city-intro-page">
    <section class="page-hero">
      <h1>🏙️ 城市介绍</h1>
      <p>了解大连的历史沿革与城市概貌</p>
    </section>

    <section class="page-section">
      <div class="container">
        <h2 class="section-title">城市概况</h2>
        <p class="section-subtitle">浪漫之都，中国大连</p>
        <div class="intro-content">
          <div class="intro-text">
            <p>
              大连，别称滨城，位于辽东半岛南端，地处黄渤海之滨，背依中国东北腹地，与山东半岛隔海相望。大连是中国东部沿海重要的经济、贸易、港口、工业、旅游城市。
            </p>
            <p>
              大连环境绝佳，气候冬无严寒，夏无酷暑，有"东北之窗""北方明珠""浪漫之都"之称，是中国东北对外开放的窗口和最大的港口城市。
            </p>
            <p>
              大连拥有丰富的旅游资源，星海广场、老虎滩、金石滩、滨海路等景点闻名遐迩，每年吸引数千万中外游客前来观光度假。
            </p>
          </div>
          <div class="intro-facts">
            <div v-for="fact in cityFacts" :key="fact.label" class="fact-item">
              <span class="fact-label">{{ fact.label }}</span>
              <span class="fact-value">{{ fact.value }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="page-section bg-light">
      <div class="container">
        <h2 class="section-title">历史沿革</h2>
        <p class="section-subtitle">穿越时空，读懂大连</p>
        <div class="timeline">
          <div v-for="(item, index) in historyTimeline" :key="index" class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="timeline-content">
              <h3>{{ item.year }}</h3>
              <p>{{ item.event }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.intro-content {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 40px;
  align-items: start;
}
.intro-text p {
  margin-bottom: 16px;
  color: var(--text-secondary);
  line-height: 1.9;
  text-indent: 2em;
}
.intro-facts {
  background: #fff;
  border-radius: 12px;
  padding: 24px;
  box-shadow: var(--shadow-sm);
}
.fact-item {
  display: flex;
  justify-content: space-between;
  padding: 12px 0;
  border-bottom: 1px solid var(--border-color);
}
.fact-item:last-child {
  border-bottom: none;
}
.fact-label {
  color: var(--text-secondary);
  font-size: 14px;
}
.fact-value {
  font-weight: 600;
  color: var(--text-primary);
  font-size: 14px;
}

.timeline {
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  padding-left: 30px;
}
.timeline::before {
  content: '';
  position: absolute;
  left: 8px;
  top: 0;
  bottom: 0;
  width: 2px;
  background: var(--primary-light);
}
.timeline-item {
  position: relative;
  padding-bottom: 28px;
}
.timeline-dot {
  position: absolute;
  left: -30px;
  top: 6px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: var(--primary-light);
  border: 3px solid #fff;
  box-shadow: 0 0 0 2px var(--primary-light);
}
.timeline-content h3 {
  margin: 0 0 6px;
  color: var(--primary-color);
  font-size: 18px;
}
.timeline-content p {
  margin: 0;
  color: var(--text-secondary);
  line-height: 1.7;
}

@media (max-width: 768px) {
  .intro-content {
    grid-template-columns: 1fr;
  }
}
</style>
