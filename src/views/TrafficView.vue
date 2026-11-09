<script setup lang="ts">
import { ref } from 'vue'
import DetailModal from '../components/DetailModal.vue'

const selectedItem = ref<{
  title: string
  content: string
  image?: string
} | null>(null)

const openDetail = (title: string, content: string, image?: string) => {
  selectedItem.value = { title, content, image }
}

const metroLines = [
  {
    line: '1号线',
    color: '#005bac',
    route: '姚家 — 河口',
    stations: '姚家、大连北站、华南广场、西安路、兴工街、星海广场、大医二院、黑石礁、学苑广场、海事大学、七贤岭、河口',
    detail: '地铁1号线是大连南北向主干线，北起姚家，南至河口，贯穿大连南北方向，全长约28公里。\n\n【重要站点及周边】\n• 大连北站：高铁站，连接东北各地高铁线路\n• 华南广场：北部商圈，安盛、沃特购物中心\n• 西安路：换乘站，可换乘2号线；西安路商圈，罗斯福、锦辉购物中心，美食云集\n• 星海广场：大连城市地标，看海、喂海鸥、夏季啤酒节\n• 黑石礁：大连海洋大学、东北财经大学，学生美食圈\n• 河口：南端终点，可换乘有轨电车去旅顺方向\n\n【运营信息】\n• 首末车时间：约6:00-22:30\n• 高峰间隔：约5分钟一班\n• 平峰间隔：约7-8分钟\n• 票价：2元起步，按里程计价，最高7元\n• 乘车方式：支付宝/微信扫码、大连地铁APP、公交卡'
  },
  {
    line: '2号线',
    color: '#009a44',
    route: '辛寨子 — 海之韵公园',
    stations: '辛寨子、机场、交通大学、西安路、人民广场、青泥洼桥、中山广场、港湾广场、会议中心、海之韵公园',
    detail: '地铁2号线是大连东西向主干线，西起辛寨子，东至海之韵公园，全长约39公里，是机场直达市区的重要线路。\n\n【重要站点及周边】\n• 机场：周水子国际机场，下飞机直接坐地铁进市区\n• 交通大学：大连交通大学、西南路商圈\n• 西安路：换乘站，可换乘1号线\n• 人民广场：市政府、大连博物馆、希望广场\n• 青泥洼桥：市中心商圈，大商步行街、百年城、火车站\n• 中山广场：近代建筑群，老大连历史风貌区\n• 会议中心：东港威尼斯水城、音乐喷泉、达沃斯会场\n• 海之韵公园：东端终点，滨海路东段起点\n\n【运营信息】\n• 首末车时间：约6:00-22:30\n• 从机场到市中心约30分钟，比打车还快\n• 票价：2元起步，按里程计价'
  },
  {
    line: '3号线',
    color: '#f7941d',
    route: '大连站 — 金石滩 / 开发区',
    stations: '大连站、香炉礁、金家街、泉水、后盐、大连湾、金马路、开发区、金石滩',
    detail: '地铁3号线是连接市区和金州新区的市郊快速线路，也是去金石滩旅游的首选交通方式。\n\n【重要站点及周边】\n• 大连站：起点站，火车站旁边，连接普铁和高铁\n• 香炉礁：宜家家居、麦德龙、山姆会员店，购物好去处\n• 开发区：金州新区核心商圈，五彩城、开发区商场\n• 金石滩：终点站，金石滩国家旅游度假区、发现王国主题乐园、黄金海岸\n\n【运营信息】\n• 首末车时间：约6:30-21:30\n• 发车间隔：约10分钟一班\n• 全程时间：大连站到金石滩约50分钟\n• 票价：按里程计价，到金石滩约8元\n• 注意：3号线分大小交路，到金石滩的车要注意听广播，别坐错了'
  },
  {
    line: '5号线',
    color: '#9c27b0',
    route: '后关 — 虎滩新区',
    stations: '后关、甘北路、梭鱼湾、青泥洼桥、劳动公园、虎滩公园、虎滩新区',
    detail: '地铁5号线是大连最新开通的线路（2023年通车），北起后关，南至虎滩新区，是连接市中心和老虎滩景区的重要线路。\n\n【重要站点及周边】\n• 青泥洼桥：换乘站，可换乘2号线，市中心商圈\n• 劳动公园：市中心最大的公园，春季赏槐、秋季赏菊\n• 虎滩公园：老虎滩海洋公园，5A景区，亲子游必去\n• 虎滩新区：南端终点，渔人码头、滨海路东段\n\n【运营信息】\n• 首末车时间：约6:00-22:30\n• 去老虎滩海洋公园坐5号线是最方便的，下车就是景区门口\n• 票价：2元起步，按里程计价'
  },
]

const trafficTips = [
  { 
    icon: '🚋', 
    title: '有轨电车201路', 
    desc: '百年历史的有轨电车，复古车厢，是大连独特的城市景观，全程票价2元', 
    image: 'https://aka.doubaocdn.com/l/lUoeg9pSfv', 
    detail: '大连有轨电车201路是中国唯一连续运营百年的有轨电车线路，堪称"城市活化石"，1909年通车至今从未中断。\n\n【线路信息】\n• 起止站：兴工街 ↔ 海之韵公园\n• 全程票价：2元，上车投币或扫码\n• 车型：部分车辆是复古木质车厢，橙红色车身，车窗可以打开，坐在上面叮叮当当，仿佛穿越回老大连\n\n【沿途看点】\n• 北京街站：途经大连老城区，很多日式老建筑\n• 民主广场站：近代建筑群集中区域\n• 三八广场站：老大连商区\n\n【游玩建议】\n来大连一定要坐一次201路有轨电车，买一张票，慢慢晃悠在老城区街道上，感受百年大连的味道。最佳体验是下午阳光好的时候，阳光透过车窗洒在木质座椅上，特别有感觉。' 
  },
  { 
    icon: '✈️', 
    title: '周水子国际机场', 
    desc: '开通国内外航线100余条，机场大巴往返市区各主要酒店', 
    image: 'https://aka.doubaocdn.com/l/MttzvIoel0', 
    detail: '大连周水子国际机场是国内主要的国际机场之一，位于甘井子区，距市区约10公里。\n\n【航线情况】\n• 国内航线：覆盖全国所有省会和主要城市，北京、上海、广州、深圳等每天多班\n• 国际航线：日本东京、大阪、福冈，韩国首尔、釜山，俄罗斯海参崴等\n\n【到市区交通】\n• 地铁2号线：机场站直达市中心，约30分钟，票价5元，最方便\n• 机场大巴：多条线路，票价20元，直达火车站、中山广场、东港\n• 打车：到市区约50-80元，车程30分钟左右\n\n【新机场】\n大连金州湾国际机场正在建设中，是中国首个海上机场，建成后将成为东北亚重要的国际航空枢纽。' 
  },
  { 
    icon: '🚢', 
    title: '大连港客运码头', 
    desc: '有前往烟台、威海、天津等港口的客轮，海上看大连别有风味', 
    detail: '大连港是东北亚重要的港口客运枢纽，有多条国内和国际客运航线。\n\n【主要客运航线】\n• 大连 ↔ 烟台：每晚多班，约6-7小时，夕发朝至\n• 大连 ↔ 威海：约7小时\n• 大连 ↔ 天津：一晚可达\n• 大连 ↔ 韩国仁川：国际邮轮航线\n\n【坐船旅游的独特体验】\n• 从海上看大连，能看到星海湾大桥、棒棰岛、旅顺军港等海景，视角独特\n• 客轮条件很好，有座椅、四人间、卧铺等不同舱位\n• 晚上坐船第二天早上到山东，还能省一晚住宿费，非常划算\n\n【码头位置】\n大连港客运站位于中山区港湾广场，坐地铁2号线港湾广场站下车步行即到。' 
  },
  { 
    icon: '🚌', 
    title: '快速公交BRT', 
    desc: '从张前北路到兴工街，连接西北郊与市中心，快速便捷', 
    detail: '大连BRT快速公交是大连第一条快速公交系统，连接西北郊区与市中心。\n\n【线路信息】\n• 起止站：张前北路 ↔ 兴工街\n• 专用道行驶：有独立公交专用道，不堵车，速度快\n• 票价：1元，上车投币或扫码\n• 运营时间：约5:00-22:00\n• 发车间隔：高峰3-5分钟，平峰8-10分钟\n\n【连接区域】\n• 西北部：泡崖小区、辛寨子、张前路等大型居住区\n• 市中心：兴工街，换乘地铁1号线\n\nBRT是大连西北部居民出行的重要交通工具，比普通公交快很多，因为有专用道不堵车。来旅游一般坐不到，但如果去西北方向可以体验一下。' 
  },
]
</script>

<template>
  <div class="traffic-page">
    <section class="page-hero" style="background: linear-gradient(135deg, rgba(12, 74, 110, 0.85) 0%, rgba(3, 105, 161, 0.75) 50%, rgba(14, 165, 233, 0.7) 100%), url('https://aka.doubaocdn.com/l/nqSLuPwNKe') center/cover no-repeat;">
      <h1>🚇 交通路线</h1>
      <p>四通八达的交通网络，让您轻松游遍大连</p>
    </section>

    <section class="page-section">
      <div class="container">
        <h2 class="section-title">地铁线路图</h2>
        <p class="section-subtitle">大连地铁现有运营线路一览，点击查看详情</p>
        <div class="metro-lines">
          <div
            v-for="line in metroLines"
            :key="line.line"
            class="metro-line-card"
            @click="openDetail(line.line, line.detail)"
          >
            <div class="line-header">
              <span class="line-badge" :style="{ background: line.color }">{{ line.line }}</span>
              <h3>{{ line.route }}</h3>
            </div>
            <p class="line-stations">{{ line.stations }}</p>
            <span class="click-hint">点击查看线路详情 →</span>
          </div>
        </div>
      </div>
    </section>

    <section class="page-section bg-light">
      <div class="container">
        <h2 class="section-title">出行贴士</h2>
        <p class="section-subtitle">这些特色交通方式不要错过，点击查看详情</p>
        <div class="tips-grid">
          <div
            v-for="tip in trafficTips"
            :key="tip.title"
            class="tip-card"
            @click="openDetail(tip.title, tip.detail, tip.image)"
          >
            <span class="tip-icon">{{ tip.icon }}</span>
            <h3>{{ tip.title }}</h3>
            <p>{{ tip.desc }}</p>
            <span class="click-hint">点击查看详情 →</span>
          </div>
        </div>
      </div>
    </section>

    <DetailModal
      :visible="!!selectedItem"
      :title="selectedItem?.title || ''"
      :image="''"
      :content="selectedItem?.content || ''"
      tag="交通指南"
      @close="selectedItem = null"
    />
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
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
}
.metro-line-card:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
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
  margin: 0 0 8px;
  font-size: 13px;
  color: var(--text-secondary);
  line-height: 1.8;
}
.click-hint {
  font-size: 12px;
  color: #0ea5e9;
  font-weight: 500;
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
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
}
.tip-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-md);
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
  margin: 0 0 12px;
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
