<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import CultureCard from '../components/CultureCard.vue'
import DetailModal from '../components/DetailModal.vue'

const route = useRoute()

const selectedSpot = ref<{
  title: string
  image: string
  tag: string
  content: string
  address: string
  lat: number
  lng: number
} | null>(null)

const openDetail = (spot: any) => {
  selectedSpot.value = {
    title: spot.title,
    image: spot.image,
    tag: spot.tag,
    content: spot.detail,
    address: spot.address,
    lat: spot.lat,
    lng: spot.lng,
  }
}

const scenicSpots = [
  {
    title: '星海广场',
    description: '亚洲最大的城市广场，总占地面积176万平方米。南临黄海，北依会展中心，广场上有华表、千人脚印、音乐喷泉，是大连城市地标。',
    image: 'https://aka.doubaocdn.com/l/MttzvIoel0',
    tag: '城市地标',
    address: '辽宁省大连市沙河口区星海广场',
    lat: 38.8855,
    lng: 121.5750,
    detail: '星海广场位于大连市沙河口区，是亚洲最大的城市广场，总占地面积176万平方米。广场始建于1993年7月16日，2006年为纪念香港回归祖国九周年而正式落成开放。\n\n广场设计独具匠心：\n• 中央景观：全国最大的汉白玉华表，高19.97米，直径1.997米，寓意1997年香港回归\n• 千人脚印：广场上环绕着1000双不同年龄、不同身份的脚印雕塑，象征着大连人民从百年沧桑走向辉煌的奋斗历程\n• 音乐喷泉：大型音乐喷泉随灯光和音乐舞动，夜晚尤为壮观\n• 百年城雕：翻开的书页造型，象征大连百年历史翻开新的一页\n\n广场南侧是美丽的星海湾，隔海可见星海跨海大桥。傍晚时分，夕阳西下，海风习习，是市民和游客休闲散步、放风筝、喂海鸥的好去处。每年夏季，大连国际啤酒节、马拉松起点等重大活动都在这里举办，是大连当之无愧的城市客厅。',
  },
  {
    title: '老虎滩海洋公园',
    description: '国家5A级旅游景区，占地118万平方米，拥有极地馆、海兽馆、珊瑚馆、鸟语林等场馆，是展示海洋文化的主题公园。',
    image: 'https://aka.doubaocdn.com/l/2MHvUhxdgX',
    tag: '5A景区',
    address: '辽宁省大连市中山区滨海中路9号',
    lat: 38.8689,
    lng: 121.6220,
    detail: '老虎滩海洋公园坐落于大连南部海滨中部，是国家5A级旅游景区，占地面积118万平方米，海岸线长4000余米。公园依山傍海，景色秀丽，是展示海洋文化、突出滨城特色的现代海洋主题公园。\n\n公园内五大核心场馆：\n• 极地馆：世界最大的极地海洋动物馆之一，展示南极企鹅、北极熊、白鲸、海象等极地动物，还有精彩的白鲸水下表演\n• 海兽馆：外观造型独特，展示海狮、海豹、海狗等海洋哺乳动物，游客可以近距离观察它们的生活状态\n• 珊瑚馆：亚洲最大的珊瑚礁生物馆，展示数百种珊瑚和热带鱼类，犹如置身海底世界\n• 鸟语林：大型半自然生态鸟园，占地2万平方米，有鸟类百余种、数千只\n• 欢乐剧场：海狮海象幽默表演，深受游客喜爱\n\n这里是大连最受亲子家庭欢迎的景点之一，每年接待游客数百万。建议游玩时间：4-5小时。',
  },
  {
    title: '金石滩风景区',
    description: '国家级旅游度假区，三面环海，冬暖夏凉。诞生于六亿年前的震旦纪岩石形成了壮丽的奇石景观，被称为"天然地质博物馆"。',
    image: 'https://aka.doubaocdn.com/l/m7cU6UVUPi',
    tag: '国家级度假区',
    address: '辽宁省大连市金州区金石滩国家旅游度假区',
    lat: 39.0860,
    lng: 121.9260,
    detail: '金石滩国家旅游度假区位于大连市金州区东南部，三面环海，冬无严寒，夏无酷暑，气候宜人，有"东方夏威夷"的美誉。1988年被确定为国家级风景名胜区，2001年被评为国家4A级旅游景区。\n\n核心景点：\n• 滨海国家地质公园：诞生于六亿年前震旦纪的岩石，经过长期海蚀作用，形成了"恐龙探海"、"贝多芬头像"、"蟹将出洞"、"将军石"等奇特景观，是天然的地质博物馆\n• 黄金海岸：绵延4.5公里的金色沙滩，沙质细腻，海水清澈，是北方最好的海水浴场之一\n• 发现王国主题乐园：大型主题游乐园，有疯狂小镇、神秘沙漠、金属工厂等七大主题区，适合年轻人和亲子家庭\n• 蜡像馆、生命奥秘博物馆、球幕影院等文化场馆\n\n景区内还有高尔夫球场、温泉度假村、游艇俱乐部等高端度假设施，是度假休闲的理想去处。建议游玩时间：1-2天。',
  },
  {
    title: '滨海路',
    description: '全长30多公里的海滨观光公路，沿途串联起星海湾、傅家庄、棒棰岛、北大桥等景点，是大连最美的自驾与徒步路线。',
    image: 'https://aka.doubaocdn.com/l/3WD2WXVWPg',
    tag: '最美海岸线',
    address: '辽宁省大连市滨海路（东起棒棰岛，西至星海广场）',
    lat: 38.8700,
    lng: 121.6000,
    detail: '滨海路全长30.9公里，贯穿大连南部海滨风景区，于1988年竣工通车。公路一边是郁郁葱葱的山峦，一边是烟波浩渺的大海，沿途山海相连，风景如画，被称为大连"最美海岸线"。\n\n沿途十大景区自西向东依次为：\n星海湾景区 → 银沙滩景区 → 傅家庄景区 → 燕窝岭景区 → 北大桥景区 → 老虎滩景区 → 棒棰岛景区 → 海之韵公园\n\n滨海路是徒步爱好者的天堂：\n• 大连国际徒步大会每年5月举办，滨海路是核心路线，每年有数十万国内外徒步爱好者参与\n• 全程徒步约需6-8小时，也可以选择自驾、骑行或乘坐旅游观光巴士\n• 最佳游览季节：春秋两季，春天繁花似锦，秋天层林尽染\n\n北大桥是滨海路的标志性建筑，这座悬索桥横跨山谷，桥下是波涛汹涌的大海，是拍摄海景大片的最佳位置。',
  },
  {
    title: '棒棰岛',
    description: '位于滨海路东段，是一处以山、海、岛、滩为主要景观的风景胜地。三面环山，一面濒海，岛上碧波荡漾，风光旖旎。',
    image: 'https://aka.doubaocdn.com/l/WJ5U2VR7dT',
    tag: '避暑胜地',
    address: '辽宁省大连市中山区滨海东路棒棰岛',
    lat: 38.8770,
    lng: 121.6730,
    detail: '棒棰岛位于大连市滨海路东段，因海面上的一座小岛形状酷似一根棒棰（满族对人参的俗称）而得名。这里三面环山，一面濒海，海岸线长达5000米，是一处以山、海、岛、滩为主要景观的风景胜地。\n\n景区特色：\n• 海水浴场：海水清澈见底，沙滩细腻柔软，是大连市区最好的海水浴场之一，能见度可达5-6米\n• 国宾别墅：棒棰岛宾馆曾是国宾接待场所，毛泽东、周恩来、邓小平、江泽民等党和国家领导人都曾在此下榻，也接待过许多外国元首\n• 园林风光：景区内有风格各异的别墅群，掩映在绿树丛中，环境清幽，空气清新\n• 棒棰岛游船：可以乘船登上小岛，近距离观赏海蚀地貌\n\n棒棰岛景区远离城市喧嚣，安静祥和，是避暑度假、休闲放松的好去处。夏季平均气温比市区低2-3℃，是大连著名的避暑胜地。',
  },
  {
    title: '旅顺口风景区',
    description: '国家级风景名胜区，历史悠久，著名的军港所在地。白玉山、东鸡冠山、日俄监狱旧址等见证了近代历史变迁。',
    image: 'https://aka.doubaocdn.com/l/uM5s7xYtk1',
    tag: '历史名城',
    address: '辽宁省大连市旅顺口区旅顺军港公园',
    lat: 38.8000,
    lng: 121.2500,
    detail: '旅顺口位于辽东半岛最南端，东临黄海，西濒渤海，自古就是军事要塞。这里地势险要，军港天成，港口群山环抱，只有一条狭窄水道与外海相通，堪称"一夫当关，万夫莫开"，历来是兵家必争之地。\n\n主要历史景点：\n• 白玉山：海拔130米，山顶有白玉山塔（原日本修建的"表忠塔"），登顶可俯瞰旅顺军港全景和市区全貌\n• 东鸡冠山北堡垒：日俄战争的重要战场遗址，保存完好的堡垒工事见证了那场惨烈的战争\n• 日俄监狱旧址：保存完整的近代监狱遗址，记录了近代中国的屈辱历史，是全国重点文物保护单位\n• 旅顺军港公园：可以近距离观看军港内停泊的军舰\n• 203樱花园：春季赏樱胜地，有5000多株樱花\n\n旅顺口既是风光秀丽的海滨城市，也是中国近代历史的露天博物馆。在这里，你可以一边欣赏美丽的山海风光，一边回顾那段沉重的历史，感受今昔对比的震撼。建议游玩时间：1天。',
  },
]

onMounted(() => {
  const openTitle = route.query.open as string
  if (openTitle) {
    const spot = scenicSpots.find(s => s.title === openTitle)
    if (spot) {
      openDetail(spot)
    }
  }
})
</script>

<template>
  <div class="scenic-spots-page">
    <section class="page-hero" style="background: linear-gradient(135deg, rgba(12, 74, 110, 0.85) 0%, rgba(3, 105, 161, 0.75) 50%, rgba(14, 165, 233, 0.7) 100%), url('https://aka.doubaocdn.com/l/m7cU6UVUPi') center/cover no-repeat;">
      <h1>🏞️ 经典景区</h1>
      <p>山海相依，美景天成，走遍大连必打卡景点</p>
    </section>

    <section class="page-section">
      <div class="container">
        <h2 class="section-title">必游景点推荐</h2>
        <p class="section-subtitle">精选6大经典景区，领略大连滨海风光，点击卡片查看详情</p>
        <div class="grid-3">
          <div v-for="spot in scenicSpots" :key="spot.title" @click="openDetail(spot)">
            <CultureCard
              :title="spot.title"
              :description="spot.description"
              :image="spot.image"
              :tag="spot.tag"
            />
          </div>
        </div>
      </div>
    </section>

    <DetailModal
      :visible="!!selectedSpot"
      :title="selectedSpot?.title || ''"
      :image="selectedSpot?.image || ''"
      :content="selectedSpot?.content || ''"
      :tag="selectedSpot?.tag"
      :address="selectedSpot?.address"
      :lat="selectedSpot?.lat"
      :lng="selectedSpot?.lng"
      @close="selectedSpot = null"
    />
  </div>
</template>

<style scoped>
.grid-3 > div {
  cursor: pointer;
  transition: transform 0.2s;
}
.grid-3 > div:hover {
  transform: translateY(-4px);
}
</style>
