<script setup lang="ts">
const serviceCategories = [
  {
    icon: '🎫',
    title: '旅游服务',
    services: [
      { name: '旅游年卡办理', desc: '大连旅游惠民年卡，一卡畅游多个景区' },
      { name: '景区票务预约', desc: '各大景区门票在线预约购买' },
      { name: '导游讲解服务', desc: '专业导游团队，深度了解大连文化' },
      { name: '旅游咨询热线', desc: '12301 全国旅游服务热线' },
    ],
  },
  {
    icon: '🚌',
    title: '交通出行',
    services: [
      { name: '地铁线路查询', desc: '大连地铁各线路站点与运营时间' },
      { name: '公交实时查询', desc: '手机扫码乘车，实时公交到站信息' },
      { name: '机场大巴时刻', desc: '周水子机场往返市区大巴时刻表' },
      { name: '出租车叫车', desc: '正规出租车预约与网约车服务' },
    ],
  },
  {
    icon: '🏥',
    title: '生活服务',
    services: [
      { name: '医院导航', desc: '主要医院位置、挂号信息查询' },
      { name: '酒店预订', desc: '各星级酒店、民宿在线预订' },
      { name: '美食地图', desc: '特色餐厅、小吃街精准定位' },
      { name: '公共厕所', desc: '沿线公共卫生间位置查询' },
    ],
  },
  {
    icon: '📱',
    title: '智慧服务',
    services: [
      { name: 'AI智能导览', desc: 'AR实景导航，走到哪讲到哪' },
      { name: '多语言服务', desc: '中英日韩多语言即时翻译' },
      { name: '应急求助', desc: '一键报警与紧急医疗救助呼叫' },
      { name: '投诉建议', desc: '旅游服务质量监督与投诉受理' },
    ],
  },
]
</script>

<template>
  <div class="city-services-page">
    <section class="page-hero">
      <h1>🛎️ 城市服务</h1>
      <p>一站式便民服务，让您的大连之行更加顺畅</p>
    </section>

    <section class="page-section">
      <div class="container">
        <h2 class="section-title">服务分类</h2>
        <p class="section-subtitle">全方位覆盖您的出行需求</p>
        <div class="services-grid">
          <div v-for="cat in serviceCategories" :key="cat.title" class="service-category">
            <h3 class="category-title">
              <span class="category-icon">{{ cat.icon }}</span>
              {{ cat.title }}
            </h3>
            <ul class="service-list">
              <li v-for="service in cat.services" :key="service.name" class="service-item">
                <h4>{{ service.name }}</h4>
                <p>{{ service.desc }}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.services-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
}
.service-category {
  background: #fff;
  border-radius: 12px;
  padding: 24px;
  box-shadow: var(--shadow-sm);
}
.category-title {
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 0 0 20px;
  font-size: 20px;
  color: var(--primary-color);
  padding-bottom: 12px;
  border-bottom: 2px solid #e0f2fe;
}
.category-icon {
  font-size: 24px;
}
.service-list {
  list-style: none;
  padding: 0;
  margin: 0;
}
.service-item {
  padding: 12px 0;
  border-bottom: 1px solid #f1f5f9;
}
.service-item:last-child {
  border-bottom: none;
}
.service-item h4 {
  margin: 0 0 4px;
  font-size: 15px;
  color: var(--text-primary);
}
.service-item p {
  margin: 0;
  font-size: 13px;
  color: var(--text-secondary);
}

@media (max-width: 768px) {
  .services-grid {
    grid-template-columns: 1fr;
  }
}
</style>
