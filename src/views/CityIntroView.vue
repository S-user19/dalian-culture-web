<script setup lang="ts">
import { ref } from 'vue'
import DetailModal from '../components/DetailModal.vue'

const selectedModal = ref<{
  title: string
  content: string
  image: string
  tag: string
  lat?: number
  lng?: number
  address?: string
} | null>(null)

const openEraDetail = (era: any) => {
  selectedModal.value = {
    title: era.year,
    content: era.detail,
    image: '',
    tag: '历史时期',
  }
}

const openFactDetail = (fact: any) => {
  selectedModal.value = {
    title: fact.label,
    content: fact.detail,
    image: fact.image || '',
    tag: '城市数据',
    lat: fact.lat,
    lng: fact.lng,
    address: fact.address,
  }
}

const openHighlightDetail = (item: any) => {
  selectedModal.value = {
    title: item.title,
    content: item.detail,
    image: item.image || '',
    tag: '城市名片',
  }
}

const cityFacts = [
  { label: '面积', value: '12574 平方公里', icon: '📍', detail: '大连全市总面积12574平方公里，其中市区面积2415平方公里。下辖7个区、1个县、代管2个县级市。\n\n【行政区划】\n• 中山区：大连政治、经济、文化中心\n• 西岗区：行政办公集中区\n• 沙河口区：科教文卫集中区\n• 甘井子区：工业和居住区\n• 旅顺口区：历史文化名城\n• 金州区：经济技术开发区\n• 普兰店区：新城区\n• 长海县：海岛县\n• 瓦房店市、庄河市：两个县级市\n\n大连地域辽阔，从南到北横跨辽东半岛，海岸线长达2211公里，占辽宁省海岸线总长的73%，是中国海岸线最长的城市之一。' },
  { label: '人口', value: '约 745 万', icon: '👥', detail: '大连全市常住人口约745万人，其中城镇人口占比超过80%。\n\n【人口特点】\n• 人口素质较高，大学以上学历人口比例居全国前列\n• 大连是著名的"移民城市"，人口来自全国各地\n• 平均预期寿命超过80岁，是中国长寿城市之一\n• 外籍人口较多，日、韩等国侨民聚居\n\n【人口流动】\n每年夏季旅游旺季，外来游客和流动人口可达数百万，城市人口激增。大连也是东北亚重要的人才聚集地，吸引了大量高素质人才前来创业发展。' },
  { label: '地理位置', value: '辽东半岛最南端', icon: '🗺️', lat: 38.9140, lng: 121.6147, address: '辽宁省大连市', detail: '大连位于辽东半岛最南端，地处黄渤海之滨，背依中国东北腹地，与山东半岛隔海相望。\n\n【地理坐标】\n• 北纬38°43′-40°10′\n• 东经120°58′-123°31′\n\n【区位优势】\n• 东濒黄海，西临渤海\n• 南与山东半岛隔海相望，相距仅100多公里\n• 北依东北三省和内蒙古东部广大腹地\n• 是东北亚国际航运中心、物流中心\n\n大连地处环渤海经济圈的首要位置，是东北亚经济圈的重要节点城市，地理位置十分优越。' },
  { label: '气候', value: '温带季风气候', icon: '🌤️', detail: '大连属于温带季风气候，兼具海洋性气候特点，冬无严寒，夏无酷暑，四季分明。\n\n【气候特点】\n• 年平均气温：10℃左右\n• 夏季平均气温：24℃，凉爽宜人\n• 冬季平均气温：-5℃，比同纬度地区温暖\n• 年降水量：550-950毫米\n• 无霜期：约180天\n\n【最佳旅游时间】\n• 5月-10月是大连的旅游旺季\n• 夏季是避暑胜地，平均气温比内陆低5-8℃\n• 秋季天高气爽，是赏秋的好时节\n• 冬季可以滑雪、泡温泉\n\n大连气候宜人，是中国著名的"宜居城市"和"避暑胜地"。' },
  { label: '市树', value: '槐树', icon: '🌳', image: 'https://aka.doubaocdn.com/l/cQGm2Az1iy', detail: '槐树是大连的市树，学名刺槐，又称洋槐。\n\n【槐树与大连】\n• 1985年，槐树被正式确定为大连市市树\n• 大连街头巷尾到处都能看到槐树的身影\n• 每年五月，槐花盛开，满城飘香\n• 大连国际槐花节就是以槐花为主题的节庆活动\n\n【槐花大道】\n大连西岗区有著名的"槐花大道"，正仁街两侧种植了300多株槐树，每年五月花期，整条街道被洁白的槐花覆盖，花瓣随风飘落，槐香弥漫，是大连赏槐的标志性地标。\n\n槐树生命力顽强，适应大连的气候和土壤，是大连城市绿化的主要树种之一。' },
  { label: '市花', value: '月季', icon: '🌹', image: 'https://aka.doubaocdn.com/l/N0zDfyiAFS', detail: '月季是大连的市花，被称为"花中皇后"。\n\n【月季与大连】\n• 1985年，月季被正式确定为大连市市花\n• 月季花大色艳，花期长，从5月到11月持续开放\n• 大连的公园、街道、小区到处都种植着月季\n• 每年夏天，大连变成了花的海洋\n\n【月季花径】\n大连中山路等主干道两侧有美丽的月季花径，粉色、红色、白色的月季沿着围墙盛开，形成花的长廊。每年夏天，走在大连的街道上，两旁都是盛开的月季，是城市里最美的风景线。\n\n月季花象征着大连这座城市的活力与美丽，是大连城市形象的重要标志。' },
]

const historyTimeline = [
  { 
    year: '先秦时期', 
    event: '大连地区已有人类活动，属于东胡族系，是东北亚文明的重要发源地。',
    icon: '🏺',
    image: 'https://aka.doubaocdn.com/l/uM5s7xYtk1',
    detail: '早在新石器时代，大连地区就已有人类活动。这里是东胡族系的居住地，也是东北亚文明的重要发源地之一。大连地区出土了大量新石器时代的石器、陶器，证明了早在数千年前，先民们就在这片土地上繁衍生息，创造了灿烂的史前文化。'
  },
  { 
    year: '秦汉时期', 
    event: '属辽东郡，开始纳入中原王朝版图，是汉朝经营东北的重要据点。',
    icon: '🏯',
    image: 'https://aka.doubaocdn.com/l/uM5s7xYtk1',
    detail: '秦汉时期，大连地区属辽东郡，正式纳入中原王朝版图。汉武帝时期，大连成为汉朝经营东北的重要军事据点和海上交通枢纽。这一时期，大连地区的经济文化得到了快速发展，与山东半岛的海上贸易往来频繁。'
  },
  { 
    year: '近代沙俄', 
    event: '1899年沙俄建市，称"达里尼"特别市，开始了近代城市规划与建设。',
    icon: '⛴️',
    image: 'https://aka.doubaocdn.com/l/uM5s7xYtk1',
    detail: '1899年，沙俄强租旅顺、大连，正式建市，将大连命名为"达里尼"特别市。沙俄按照欧洲城市规划理念，对大连进行了近代城市规划与建设，修建了港口、铁路、城市道路等基础设施，大连开始从一个小渔村向近代城市转型。'
  },
  { 
    year: '日本侵占', 
    event: '1905年日俄战争后被日本统治近40年，留下了大量近代建筑遗存。',
    icon: '🏛️',
    image: 'https://aka.doubaocdn.com/l/uM5s7xYtk1',
    detail: '1905年日俄战争结束后，大连被日本侵占，统治长达近40年。这一时期，日本在大连修建了大量近代建筑，中山广场周围的近代建筑群就是这一时期的产物。大连成为日本侵略中国东北的桥头堡，同时也留下了丰富的近代建筑遗存。'
  },
  { 
    year: '1945年', 
    event: '8月22日大连解放，回到祖国怀抱，成为新中国重要的工业基地。',
    icon: '🎉',
    image: 'https://aka.doubaocdn.com/uM5s7xYtk1',
    detail: '1945年8月22日，大连解放，回到祖国怀抱。新中国成立后，大连成为重要的工业基地，为国家的工业化建设做出了重要贡献。大连造船、大连机车等大型企业闻名全国，大连成为了新中国工业的摇篮之一。'
  },
  { 
    year: '改革开放', 
    event: '1984年成为首批沿海开放城市，飞速发展，成为东北亚国际航运中心。',
    icon: '🚀',
    image: 'https://aka.doubaocdn.com/l/uM5s7xYtk1',
    detail: '1984年，大连成为中国首批沿海开放城市，迎来了飞速发展的新时期。大连经济快速发展，城市建设日新月异，旅游业蓬勃兴起。如今，大连已经成为东北亚重要的国际航运中心、物流中心和旅游目的地，被誉为"北方明珠"。'
  },
]

const cityHighlights = [
  {
    title: '北方明珠',
    desc: '大连依山傍海，气候宜人，是中国著名的避暑度假和旅游热点城市。',
    icon: '💎',
    image: 'https://aka.doubaocdn.com/l/zm6gdcHEN7',
    detail: '大连被誉为"北方明珠"，是中国北方最具魅力的滨海城市。\n\n【为什么叫北方明珠】\n• 大连依山傍海，风景秀丽，如同镶嵌在黄渤海之滨的一颗明珠\n• 气候宜人，冬无严寒夏无酷暑，是著名的避暑胜地\n• 城市环境优美，绿化覆盖率高，是国家环保模范城市\n• 经济发达，是东北亚重要的经济中心\n\n【荣誉称号】\n• 中国最佳旅游城市\n• 国家环保模范城市\n• 国家卫生城市\n• 全国文明城市\n• 中国最具幸福感城市\n\n江泽民同志曾题词"百年风雨，百年辉煌，北方明珠，更加璀璨"，大连"北方明珠"的美誉由此传遍全国。'
  },
  {
    title: '足球之城',
    desc: '大连是中国著名的"足球城"，培养了大批优秀足球运动员，足球氛围浓厚。',
    icon: '⚽',
    image: 'https://aka.doubaocdn.com/l/wODobqBP1U',
    detail: '大连是中国著名的"足球城"，足球文化底蕴深厚。\n\n【足球城的由来】\n• 大连足球历史悠久，从上世纪初就有足球运动\n• 大连万达队曾创造中国职业足球联赛55场不败的神话\n• 大连实德队多次夺得联赛冠军，是中国足坛的王者之师\n• 大连培养了马林、徐弘、张恩华、孙继海等一大批国脚\n\n【足球氛围】\n• 大连人酷爱足球，每逢比赛日，体育场座无虚席\n• 大连有完善的青少年足球培养体系\n• 大连拥有多支职业足球队和大量业余球队\n• 大连国际足球夏令营吸引全国青少年前来\n\n足球是大连的城市名片之一，大连人对足球的热爱刻在了骨子里。'
  },
  {
    title: '浪漫之都',
    desc: '大连是中国最佳旅游城市，拥有丰富的滨海旅游资源和城市浪漫风情。',
    icon: '💕',
    image: 'https://aka.doubaocdn.com/l/bzOMYEjojC',
    detail: '大连被称为"浪漫之都"，是中国最浪漫的城市之一。\n\n【浪漫之都的由来】\n• 大连拥有漫长的海岸线，滨海路风景如画\n• 城市建筑风格多元，有俄式、日式、欧式建筑\n• 大连国际服装节是享誉世界的时尚盛会\n• 大连的广场文化、喷泉文化、草坪文化充满浪漫气息\n\n【浪漫景点】\n• 滨海路：一边是山一边是海，被誉为"东方大道"\n• 星海广场：亚洲最大的城市广场，音乐喷泉夜景迷人\n• 棒棰岛：国宾馆所在地，风景如画\n• 渔人码头：欧式风情小镇，拍照打卡圣地\n\n大连是中国最佳旅游城市，每年吸引数千万游客前来感受浪漫气息。'
  },
  {
    title: '港口城市',
    desc: '大连港是东北亚重要的国际航运中心，是中国东北对外开放的海上门户。',
    icon: '⚓',
    image: 'https://aka.doubaocdn.com/l/43p6sU7183',
    detail: '大连是重要的港口城市，大连港是东北亚国际航运中心。\n\n【大连港概况】\n• 大连港始建于1899年，是百年老港\n• 港阔水深，不淤不冻，是天然良港\n• 与世界160多个国家和地区的300多个港口通航\n• 是东北亚重要的国际航运中心和物流中心\n\n【港口功能】\n• 集装箱运输：年吞吐量超过1000万TEU\n• 原油运输：东北亚重要的原油中转港\n• 汽车运输：中国重要的汽车进出口港\n• 客运：有前往烟台、威海、天津、韩国等客轮航线\n\n大连港是中国东北对外开放的海上门户，是东北亚经济圈的重要枢纽。'
  },
]
</script>

<template>
  <div class="city-intro-page">
    <!-- Hero区 -->
    <section class="page-hero" style="background: linear-gradient(135deg, rgba(12, 74, 110, 0.85) 0%, rgba(3, 105, 161, 0.75) 50%, rgba(14, 165, 233, 0.7) 100%), url('https://aka.doubaocdn.com/l/zm6gdcHEN7') center/cover no-repeat;">
      <h1>城市介绍</h1>
      <p>了解大连的历史沿革与城市概貌</p>
    </section>

    <!-- 城市概况 -->
    <section class="page-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">城市概况</h2>
          <p class="section-subtitle">浪漫之都，中国大连</p>
        </div>
        
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
          <div class="intro-image">
            <img src="https://aka.doubaocdn.com/l/3WD2WXVWPg" alt="大连滨海路" />
          </div>
        </div>

        <!-- 城市数据卡片 -->
        <div class="facts-grid">
          <div v-for="fact in cityFacts" :key="fact.label" class="fact-card" @click="openFactDetail(fact)">
            <span class="fact-icon">{{ fact.icon }}</span>
            <div class="fact-info">
              <span class="fact-label">{{ fact.label }}</span>
              <span class="fact-value">{{ fact.value }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 城市名片 -->
    <section class="page-section bg-light">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">城市名片</h2>
          <p class="section-subtitle">四张名片，认识大连</p>
        </div>
        <div class="highlights-grid">
          <div v-for="item in cityHighlights" :key="item.title" class="highlight-card" @click="openHighlightDetail(item)">
            <span class="highlight-icon">{{ item.icon }}</span>
            <h3>{{ item.title }}</h3>
            <p>{{ item.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 历史沿革 -->
    <section class="page-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">历史沿革</h2>
          <p class="section-subtitle">穿越时空，读懂大连</p>
        </div>
        <div class="timeline-horizontal">
          <div 
            v-for="(item, index) in historyTimeline" 
            :key="index" 
            class="timeline-h-item"
            @click="openEraDetail(item)"
          >
            <div class="timeline-h-dot"></div>
            <div class="timeline-h-card">
              <div class="timeline-h-icon">{{ item.icon }}</div>
              <h3>{{ item.year }}</h3>
              <p>{{ item.event }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <DetailModal
      :visible="!!selectedModal"
      :title="selectedModal?.title || ''"
      :image="selectedModal?.image || ''"
      :content="selectedModal?.content || ''"
      :tag="selectedModal?.tag"
      :lat="selectedModal?.lat"
      :lng="selectedModal?.lng"
      :address="selectedModal?.address"
      @close="selectedModal = null"
    />
  </div>
</template>

<style scoped>
.section-header {
  text-align: center;
  margin-bottom: 36px;
}
.section-title {
  font-size: 28px;
  margin-bottom: 8px;
  color: var(--text-primary);
}
.section-subtitle {
  font-size: 15px;
  color: var(--text-secondary);
}

.intro-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  align-items: center;
  margin-bottom: 48px;
}
.intro-text p {
  margin-bottom: 16px;
  color: var(--text-secondary);
  line-height: 1.9;
  text-indent: 2em;
}
.intro-image {
  border-radius: 16px;
  overflow: hidden;
  box-shadow: var(--shadow-lg);
}
.intro-image img {
  width: 100%;
  height: 300px;
  object-fit: cover;
}

.facts-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}
.fact-card {
  background: #fff;
  padding: 20px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  gap: 16px;
  box-shadow: var(--shadow-sm);
  transition: transform 0.2s, box-shadow 0.2s;
  cursor: pointer;
}
.fact-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-md);
}
.fact-icon {
  font-size: 32px;
}
.fact-info {
  display: flex;
  flex-direction: column;
}
.fact-label {
  font-size: 13px;
  color: var(--text-secondary);
  margin-bottom: 2px;
}
.fact-value {
  font-weight: 600;
  color: var(--text-primary);
  font-size: 15px;
}

.bg-light {
  background: #f8fafc;
}

.highlights-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}
.highlight-card {
  background: #fff;
  padding: 28px 20px;
  border-radius: 16px;
  text-align: center;
  box-shadow: var(--shadow-sm);
  transition: all 0.3s;
  cursor: pointer;
}
.highlight-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-md);
}
.highlight-icon {
  font-size: 40px;
  display: block;
  margin-bottom: 12px;
}
.highlight-card h3 {
  margin: 0 0 8px;
  font-size: 18px;
  color: var(--primary-color);
}
.highlight-card p {
  margin: 0;
  font-size: 13px;
  color: var(--text-secondary);
  line-height: 1.6;
}

.timeline-horizontal {
  position: relative;
  display: flex;
  justify-content: space-between;
  gap: 16px;
  padding: 40px 0;
}
.timeline-horizontal::before {
  content: '';
  position: absolute;
  top: 56px;
  left: 40px;
  right: 40px;
  height: 3px;
  background: linear-gradient(to right, var(--primary-light), var(--primary-color));
}
.timeline-h-item {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 1;
}
.timeline-h-dot {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: #fff;
  border: 4px solid var(--primary-color);
  margin-bottom: 20px;
  box-shadow: 0 0 0 4px rgba(14, 165, 233, 0.2);
}
.timeline-h-card {
  background: #fff;
  padding: 20px 16px;
  border-radius: 12px;
  box-shadow: var(--shadow-sm);
  text-align: center;
  transition: all 0.2s;
  height: 100%;
  cursor: pointer;
}
.timeline-h-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-md);
}
.timeline-h-icon {
  font-size: 32px;
  margin-bottom: 10px;
}
.timeline-h-card h3 {
  margin: 0 0 8px;
  color: var(--primary-color);
  font-size: 16px;
}
.timeline-h-card p {
  margin: 0;
  color: var(--text-secondary);
  line-height: 1.6;
  font-size: 13px;
}

@media (max-width: 768px) {
  .intro-content {
    grid-template-columns: 1fr;
  }
  .facts-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .highlights-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .timeline-horizontal {
    flex-direction: column;
    gap: 24px;
  }
  .timeline-horizontal::before {
    top: 0;
    bottom: 0;
    left: 20px;
    right: auto;
    width: 3px;
    height: auto;
  }
  .timeline-h-item {
    flex-direction: row;
    align-items: flex-start;
    gap: 20px;
  }
  .timeline-h-dot {
    flex-shrink: 0;
    margin-bottom: 0;
    margin-top: 20px;
  }
}
</style>
