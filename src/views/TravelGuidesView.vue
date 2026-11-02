<script setup lang="ts">
const guides = [
  {
    title: '大连滨海路徒步全攻略',
    author: '旅行家小王',
    date: '2026-05-20',
    readCount: '2.3万',
    excerpt: '滨海路全长30公里，分东段、西段、北段。推荐从棒棰岛出发，一路向北，沿途海景绝美...',
    image: 'https://aka.doubaocdn.com/l/3WD2WXVWPg',
    tag: '徒步路线',
  },
  {
    title: '三天两夜玩转大连经典路线',
    author: '爱旅行的Lily',
    date: '2026-04-15',
    readCount: '5.1万',
    excerpt: 'Day1：星海广场→滨海路→黑石礁；Day2：老虎滩→棒棰岛→东港音乐喷泉；Day3：金石滩一日游...',
    image: 'https://aka.doubaocdn.com/l/MttzvIoel0',
    tag: '经典路线',
  },
  {
    title: '大连美食探店：本地人私藏清单',
    author: '吃货小明',
    date: '2026-06-01',
    readCount: '3.8万',
    excerpt: '天天渔港、品海楼、68-86老菜坊...本地人常去的海鲜餐厅，不踩雷攻略大公开...',
    image: 'https://aka.doubaocdn.com/l/eSle5jVV6N',
    tag: '美食攻略',
  },
  {
    title: '冬季大连：温泉滑雪两不误',
    author: '冰雪爱好者',
    date: '2026-01-10',
    readCount: '1.9万',
    excerpt: '安波温泉+滑雪一日游攻略，旅顺温泉推荐，冬季来大连也能玩得很精彩...',
    image: 'https://aka.doubaocdn.com/l/SWHh9IqlMl',
    tag: '冬季玩法',
  },
  {
    title: '拍照圣地：大连出片机位大全',
    author: '摄影博主',
    date: '2026-05-10',
    readCount: '4.2万',
    excerpt: '黑石礁日落、东港威尼斯水城、渔人码头、跨海大桥...10个绝美拍照机位分享...',
    image: 'https://aka.doubaocdn.com/l/WJ5U2VR7dT',
    tag: '拍照打卡',
  },
  {
    title: '带娃游大连：亲子游必去清单',
    author: '宝妈日记',
    date: '2026-07-08',
    readCount: '2.7万',
    excerpt: '老虎滩海洋公园、森林动物园、发现王国主题乐园...亲子友好景点与住宿推荐...',
    image: 'https://aka.doubaocdn.com/l/2MHvUhxdgX',
    tag: '亲子游',
  },
]
</script>

<template>
  <div class="travel-guides-page">
    <section class="page-hero">
      <h1>📝 游记攻略</h1>
      <p>前人的经验，让您的大连之旅少走弯路</p>
    </section>

    <section class="page-section">
      <div class="container">
        <h2 class="section-title">热门攻略</h2>
        <p class="section-subtitle">真实游客分享的实用攻略</p>
        <div class="guides-list">
          <article v-for="guide in guides" :key="guide.title" class="guide-card">
            <div class="guide-image">
              <img :src="guide.image" :alt="guide.title" loading="lazy" />
              <span class="guide-tag">{{ guide.tag }}</span>
            </div>
            <div class="guide-content">
              <h3>{{ guide.title }}</h3>
              <p class="guide-excerpt">{{ guide.excerpt }}</p>
              <div class="guide-meta">
                <span class="meta-author">✍️ {{ guide.author }}</span>
                <span class="meta-date">{{ guide.date }}</span>
                <span class="meta-read">👁 {{ guide.readCount }}</span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.guides-list {
  display: flex;
  flex-direction: column;
  gap: 24px;
}
.guide-card {
  display: grid;
  grid-template-columns: 280px 1fr;
  background: #fff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: var(--shadow-sm);
  transition: transform 0.2s, box-shadow 0.2s;
}
.guide-card:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}
.guide-image {
  position: relative;
  height: 100%;
  min-height: 180px;
}
.guide-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.guide-tag {
  position: absolute;
  top: 12px;
  left: 12px;
  padding: 3px 10px;
  background: rgba(251, 191, 36, 0.95);
  color: #78350f;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 600;
}
.guide-content {
  padding: 20px;
  display: flex;
  flex-direction: column;
}
.guide-content h3 {
  margin: 0 0 8px;
  font-size: 18px;
  color: var(--text-primary);
}
.guide-excerpt {
  margin: 0 0 16px;
  color: var(--text-secondary);
  font-size: 14px;
  line-height: 1.7;
  flex: 1;
}
.guide-meta {
  display: flex;
  gap: 16px;
  font-size: 13px;
  color: #94a3b8;
}

@media (max-width: 768px) {
  .guide-card {
    grid-template-columns: 1fr;
  }
  .guide-image {
    height: 180px;
  }
}
</style>
