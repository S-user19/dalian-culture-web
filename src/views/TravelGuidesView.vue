<script setup lang="ts">
import { ref } from 'vue'
import DetailModal from '../components/DetailModal.vue'

const selectedGuide = ref<{
  title: string
  image: string
  tag: string
  content: string
} | null>(null)

const openDetail = (guide: any) => {
  selectedGuide.value = {
    title: guide.title,
    image: guide.image,
    tag: guide.tag,
    content: guide.detail,
  }
}

const guides = [
  {
    title: '大连滨海路徒步全攻略',
    author: '旅行家小王',
    date: '2026-05-20',
    readCount: '2.3万',
    excerpt: '滨海路全长30公里，分东段、西段、北段。推荐从棒棰岛出发，一路向北，沿途海景绝美...',
    image: 'https://aka.doubaocdn.com/l/3WD2WXVWPg',
    tag: '徒步路线',
    detail: '滨海路全长30.9公里，是大连最美的海滨观光路线，也被称为"中国最美的海岸公路"。\n\n【推荐徒步路线】\n• 全程徒步：棒棰岛 → 迎宾路 → 石槽 → 渔人码头 → 北大桥 → 燕窝岭 → 付家庄 → 森林动物园 → 金沙滩 → 星海广场，全程约30公里，需8-10小时，适合专业徒步爱好者\n• 精华段：北大桥 → 燕窝岭 → 付家庄，约5公里，2-3小时，风景最集中，适合普通游客\n• 西段：星海广场 → 金沙滩 → 森林动物园南门，约4公里，轻松休闲\n\n【实用Tips】\n• 最佳季节：4-5月（春暖花开）或9-10月（秋高气爽），夏季海边紫外线强注意防晒\n• 交通：起点棒棰岛可乘公交703路到达，终点星海广场地铁1号线直达\n• 装备：穿舒适的运动鞋，带2-3瓶水、少量零食，沿途便利店较少\n• 拍照点：北大桥、燕窝岭观景台、付家庄海滨、星海湾大桥观景台\n\n每年5月和10月的大连国际徒步大会都会走滨海路线，每年有数十万国内外徒步爱好者参与，是大连徒步爱好者的盛宴。',
  },
  {
    title: '三天两夜玩转大连经典路线',
    author: '爱旅行的Lily',
    date: '2026-04-15',
    readCount: '5.1万',
    excerpt: 'Day1：星海广场→滨海路→黑石礁；Day2：老虎滩→棒棰岛→东港音乐喷泉；Day3：金石滩一日游...',
    image: 'https://aka.doubaocdn.com/l/MttzvIoel0',
    tag: '经典路线',
    detail: '【Day 1：市区经典线】\n• 上午：星海广场 → 喂海鸥（冬季）、看百年城雕、逛星海湾海边\n• 中午：星海广场附近吃海鲜午餐，推荐选明码标价的餐厅\n• 下午：走一段滨海路（北大桥→付家庄段），沿途欣赏海景\n• 傍晚：黑石礁公园看日落，奇特的礁石+夕阳非常出片\n• 晚上：西安路商圈或天津街夜市吃小吃\n\n【Day 2：海滨风情线】\n• 上午：老虎滩海洋公园（玩3-4小时，极地馆+欢乐剧场必看）\n• 中午：老虎滩附近吃海鲜\n• 下午：棒棰岛景区，海滩散步、看国宾别墅\n• 傍晚：东港威尼斯水城，欧式建筑拍照打卡\n• 晚上：东港音乐喷泉（夏季每晚8点）+ 跨海大桥夜景\n\n【Day 3：金石滩一日游】\n• 全天：金石滩国家旅游度假区 → 滨海地质公园看奇石 → 黄金海岸踏浪 → 发现王国（年轻人必去）\n\n【住宿推荐】中山区（火车站/天津街附近，交通方便）或沙河口区（星海广场附近，看海方便）。',
  },
  {
    title: '大连美食探店：本地人私藏清单',
    author: '吃货小明',
    date: '2026-06-01',
    readCount: '3.8万',
    excerpt: '天天渔港、品海楼、68-86老菜坊...本地人常去的海鲜餐厅，不踩雷攻略大公开...',
    image: 'https://aka.doubaocdn.com/l/eSle5jVV6N',
    tag: '美食攻略',
    detail: '【本地人常去的海鲜餐厅推荐】\n\n1. 天天渔港（人民路店）\n• 特点：大连老牌海鲜酒楼，开业二十多年，食材新鲜，菜品正宗\n• 必点：葱烧海参、鲅鱼饺子、清蒸鲍鱼、蒜蓉粉丝蒸扇贝\n• 人均：150-200元\n• 适合：家庭聚餐、商务宴请\n\n2. 品海楼（鲁迅路店）\n• 特点：环境好，性价比高，海鲜做的地道，本地人也常去\n• 必点：海胆蒸蛋、香辣蟹、干锅鱿鱼、捞拌海蜇\n• 人均：100-150元\n• 适合：朋友聚会、情侣约会\n\n3. 68-86老菜坊\n• 特点：专注大连传统老菜，店面装修有老大连怀旧风格\n• 必点：溜肝尖、糖醋黄花鱼、炸蛎黄、锅包肉\n• 人均：80-120元\n• 适合：想品尝地道大连传统味道的游客\n\n4. 天津街夜市\n• 特点：大连老牌夜市，各种小吃摊汇聚\n• 必吃：烤鱿鱼、炒焖子、海鲜烧烤、炸串\n• 人均：50-80元\n• 适合：边逛边吃，感受市井烟火气\n\n【避坑提醒】旅游景区门口的海鲜店价格偏贵，点菜前一定要问清楚价格；想吃实惠又地道的，去居民区附近的馆子准没错。',
  },
  {
    title: '冬季大连：温泉滑雪两不误',
    author: '冰雪爱好者',
    date: '2026-01-10',
    readCount: '1.9万',
    excerpt: '安波温泉+滑雪一日游攻略，旅顺温泉推荐，冬季来大连也能玩得很精彩...',
    image: 'https://aka.doubaocdn.com/l/SWHh9IqlMl',
    tag: '冬季玩法',
    detail: '冬季大连虽然气温在-5℃左右，但因为靠海，并没有想象中那么冷，而且玩的特别多！\n\n【温泉推荐】\n1. 安波温泉\n• 位置：普兰店区安波街道，距市区约1.5小时车程\n• 特点：天然碳酸氢钠泉，水温高达70℃，有"东北第一温泉"之称\n• 玩法：泡温泉+滑雪+吃农家菜，建议住一晚\n• 推荐：安波温泉滑雪场，白天滑雪，晚上泡温泉\n\n2. 老铁山温泉\n• 位置：旅顺口区，距市区约1小时车程\n• 特点：环境清幽，依山傍海，人少安静\n• 适合：想离市区近一点、喜欢安静的游客\n\n【滑雪推荐】\n1. 林海滑雪场：距市区最近，约40分钟车程，适合初学者\n2. 安波滑雪场：规模大，雪道多，适合不同水平\n3. 欢乐雪世界：市区内的小型滑雪场，适合带小孩玩\n\n【冬季玩法总结】白天滑雪体验速度与激情，晚上泡温泉放松身心，再来一顿热乎乎的酸菜白肉锅，体验"冰火两重天"的独特乐趣。记得多穿点，海边风大！',
  },
  {
    title: '拍照圣地：大连出片机位大全',
    author: '摄影博主',
    date: '2026-05-10',
    readCount: '4.2万',
    excerpt: '黑石礁日落、东港威尼斯水城、渔人码头、跨海大桥...10个绝美拍照机位分享...',
    image: 'https://aka.doubaocdn.com/l/WJ5U2VR7dT',
    tag: '拍照打卡',
    detail: '大连是一座非常出片的城市，山海相间，随手一拍都是壁纸级大片！\n\n【Top 10 拍照机位】\n1. 黑石礁日落：傍晚时分，奇特的礁石+翻涌的海浪+金色夕阳，氛围感拉满\n2. 东港威尼斯水城：欧式建筑群+贡多拉小船，仿佛置身意大利，建议穿浅色衣服\n3. 渔人码头：彩色欧式小屋+停泊的渔船，文艺范十足，下午光线最好\n4. 星海湾大桥：傍晚蓝调时刻（日落后20分钟）拍大桥夜景，绝美\n5. 棒棰岛：清澈的海水+灰色礁石，小清新风格，适合拍人像\n6. 203樱花园：春天樱花大道，漫天粉白花瓣，浪漫到极致\n7. 北大桥：悬索桥+山海背景，公路电影感大片\n8. 金石滩地质公园：六亿年奇石+大海，震撼的地质大片\n9. 莲花山观景台：俯瞰星海湾全景，俯瞰整个大连海岸线\n10. 旅顺太阳沟：秋天的落叶+老建筑，日式怀旧风\n\n【拍摄技巧】最佳时间是清晨（人少光线柔）和傍晚（黄金小时）；海边拍照建议穿白色、蓝色裙子，和海景更搭；带个反光板，人像更通透。',
  },
  {
    title: '带娃游大连：亲子游必去清单',
    author: '宝妈日记',
    date: '2026-07-08',
    readCount: '2.7万',
    excerpt: '老虎滩海洋公园、森林动物园、发现王国主题乐园...亲子友好景点与住宿推荐...',
    image: 'https://aka.doubaocdn.com/l/2MHvUhxdgX',
    tag: '亲子游',
    detail: '带娃来大连，保证孩子玩得开心！以下是亲子游必去景点：\n\n【亲子必去景点】\n1. 老虎滩海洋公园（5A）\n• 必看：极地馆（企鹅、北极熊、白鲸）、欢乐剧场（海狮海象表演）、鸟语林\n• 游玩时间：4-5小时\n• 亮点：白鲸水下表演非常震撼，孩子特别喜欢\n\n2. 大连森林动物园\n• 必看：大熊猫馆（有明星熊猫金虎）、散养区、热带雨林馆\n• 游玩时间：半天\n• 亮点：散养区可以近距离喂小动物，互动性强\n\n3. 发现王国主题乐园（金石滩）\n• 适合年龄：6岁以上\n• 必玩：疯狂眼镜蛇过山车、激流勇进、花车巡游、夜场烟火\n• 游玩时间：一整天\n• 亮点：东北最好的主题乐园，项目丰富\n\n4. 圣亚海洋世界\n• 必看：118米海底隧道、海豚表演、极地世界\n• 游玩时间：3小时\n• 亮点：室内场馆，夏天避暑好去处\n\n【亲子住宿推荐】\n首选星海广场附近：吃饭方便、出门就是海边、晚上还能看夜景，连锁酒店选择多。\n\n【带娃Tips】海边防晒要做好；带一套换的衣服，孩子容易玩湿；海鲜不要吃太多，避免肠胃不适。',
  },
]
</script>

<template>
  <div class="travel-guides-page">
    <section class="page-hero" style="background: linear-gradient(135deg, rgba(12, 74, 110, 0.85) 0%, rgba(3, 105, 161, 0.75) 50%, rgba(14, 165, 233, 0.7) 100%), url('https://aka.doubaocdn.com/l/Z1rJf0ImZh') center/cover no-repeat;">
      <h1>📝 游记攻略</h1>
      <p>前人的经验，让您的大连之旅少走弯路</p>
    </section>

    <section class="page-section">
      <div class="container">
        <h2 class="section-title">热门攻略</h2>
        <p class="section-subtitle">真实游客分享的实用攻略，点击查看详情</p>
        <div class="guides-list">
          <article
            v-for="guide in guides"
            :key="guide.title"
            class="guide-card"
            @click="openDetail(guide)"
          >
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
                <span class="meta-detail">点击查看全文 →</span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>

    <DetailModal
      :visible="!!selectedGuide"
      :title="selectedGuide?.title || ''"
      :image="selectedGuide?.image || ''"
      :content="selectedGuide?.content || ''"
      :tag="selectedGuide?.tag"
      @close="selectedGuide = null"
    />
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
  cursor: pointer;
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
  align-items: center;
}
.meta-detail {
  margin-left: auto;
  color: #0ea5e9;
  font-weight: 500;
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
